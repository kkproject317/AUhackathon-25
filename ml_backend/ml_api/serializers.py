from rest_framework import serializers


class AnomalyInputSerializer(serializers.Serializer):
    event_id = serializers.CharField()
    timestamp = serializers.CharField()

    asset_type = serializers.CharField()
    user_id = serializers.CharField()

    action_type = serializers.CharField()
    resource_type = serializers.CharField()

    auth_status = serializers.CharField()
    failed_auth_attempts_past_10min = serializers.IntegerField()

    ip_address = serializers.IPAddressField()

    geo_lat = serializers.FloatField()
    geo_long = serializers.FloatField()
    geo_dist_from_baseline_km = serializers.FloatField()

    farm_lat = serializers.FloatField()
    farm_long = serializers.FloatField()

    device_type = serializers.CharField()
    device_os = serializers.CharField()

    soil_moisture_percent = serializers.FloatField()
    soil_temp_c = serializers.FloatField()
    humidity_percent = serializers.FloatField()

    weather_consistency_score = serializers.FloatField()
    irrigation_water_volume_liters = serializers.FloatField()

    sensor_reading_variance = serializers.FloatField()
    config_change_flag = serializers.IntegerField()
    sensor_signal_strength = serializers.FloatField()
