import pandas as pd
import numpy as np
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import AnomalyInputSerializer
from .model_loader import preprocessor, xgb_model, iso
from .reasons import assign_reason

@api_view(["POST"])
def detect_anomaly(request):
    serializer = AnomalyInputSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    data = serializer.validated_data
    df = pd.DataFrame([data])

    # preprocess input
    X_pre = preprocessor.transform(df)

    # if isolation forest exists, use it
    if iso is not None:
        iso_score = -iso.score_samples(X_pre).reshape(-1, 1)
        X_model = iso_score
    else:
        # fallback: zero anomaly signal
        X_model = [[0.0]]

    # predict
    proba = xgb_model.predict_proba(X_model)[0, 1]
    risk_score = round(proba * 100, 2)

    # # preprocess
    # X = preprocessor.transform(df)

    # # optional isolation score
    # if iso is not None:
    #     iso_score = -iso.score_samples(X).reshape(-1, 1)
    #     X = np.hstack([X, iso_score])

    # # predict
    # proba = xgb_model.predict_proba(X)[0, 1]
    # risk_score = round(proba * 100, 2)

    return Response({
        "risk_score": risk_score,
        "anomaly_probability": round(proba, 4),
        "reason": assign_reason(data),
        "is_anomalous": risk_score >= 60
    })
