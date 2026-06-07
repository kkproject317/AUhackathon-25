from rest_framework import serializers
from .models import MLResponse


class MLResponseCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MLResponse
        fields = [
            "event_id",
            "anomaly_score",
            "prediction",
            "response_action",
            "reasons"
        ]
