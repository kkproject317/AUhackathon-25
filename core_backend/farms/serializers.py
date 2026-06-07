from rest_framework import serializers
from .models import Farm

class FarmCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farm
        fields = [
            "farm_id",
            "owner_user_id",
            "farm_name",
            "location_lat",
            "location_long",
            "area_in_acres",
            "is_active",
        ]
        read_only_fields = ["farm_id"]
