from rest_framework import serializers
from .models import SecurityEvent

class SecurityEventCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecurityEvent
        fields = "__all__"
