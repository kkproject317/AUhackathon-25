import os
import joblib
import xgboost as xgb
from django.conf import settings

BASE = os.path.join(settings.BASE_DIR, "ml_api", "artifacts")

# load preprocessor
preprocessor = joblib.load(
    os.path.join(BASE, "cropguard_preprocessor.pkl")
)

# load xgboost model
xgb_model = xgb.XGBClassifier()
xgb_model.load_model(
    os.path.join(BASE, "cropguard_xgb.json")
)

# optional isolation forest
iso = None
iso_path = os.path.join(BASE, "isolation_forest.pkl")
if os.path.exists(iso_path):
    iso = joblib.load(iso_path)
