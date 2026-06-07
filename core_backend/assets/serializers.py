from rest_framework import serializers
from .models import Asset

class AssetCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = [
            "asset_id",
            "farm_id",
            "owner_user_id",
            "asset_type",
            "asset_name",
            "asset_os",
            "baseline_lat",
            "baseline_long",
            "is_active",
        ]
        read_only_fields = ["asset_id"]
