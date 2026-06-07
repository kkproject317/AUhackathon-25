from django.db import models

class SecurityEvent(models.Model):
    event_id = models.CharField(
        max_length = 50,
        primary_key=True,
        editable=False
    ) #**

    # --- Time ---
    timestamp = models.DateTimeField() #**

    # --- Asset (What is being protected) ---

    asset_id = models.CharField(
        max_length=20
    ) #**
    asset_type = models.CharField(
        max_length=50,
        choices=[
            ("soil_sensor", "Soil Sensor"),
            ("irrigation_controller", "Irrigation Controller"),
            ("gateway", "Gateway"),
            ("weather_station", "Weather Station"),
        ]
    ) #**

    # --- Origin Device (From where action happened) ---
    device_id = models.CharField(max_length=20)
    device_type = models.CharField(
        max_length=50
    )  # dashboard, mobile_app, gateway, api

    device_os = models.CharField(max_length=50)

    # --- User Context ---
    owner_user_id = models.CharField(max_length=20, null=True)
    user_role = models.CharField(max_length=30, blank=True, null=True)

    # --- Action Context ---
    action_type = models.CharField(
        max_length=30,
        choices=[
            ("login", "Login"),
            ("read", "Read"),
            ("transmit", "Transmit"),
            ("update", "Update"),
            ("config_change", "Config Change"),
        ]
    )

    resource_type = models.CharField(
        max_length=50
    )  # sensor_config, irrigation_schedule, firmware, dashboard_data

    # --- Auth ---
    auth_status = models.CharField(
        max_length=20,
        choices=[
            ("success", "Success"),
            ("failure", "Failure"),
        ]
    )

    failed_auth_attempts_5min = models.IntegerField(default=0)

    # --- Network ---
    ip_address = models.GenericIPAddressField()

    geo_lat = models.FloatField()
    geo_long = models.FloatField()

    geo_distance_from_baseline_km = models.FloatField()

    # --- Farm Location (Asset baseline) ---
    farm_id = models.CharField(max_length=20, null=True)
    farm_lat = models.FloatField()
    farm_long = models.FloatField()

    # --- Agri Telemetry (Optional per event) ---
    soil_moisture_percent = models.FloatField(null=True, blank=True)
    soil_temperature = models.FloatField(null=True, blank=True)
    soil_humidity = models.FloatField(null=True, blank=True)

    irrigation_water_volume_ltrs = models.FloatField(null=True, blank=True)
    water_consistency_score = models.FloatField(null=True, blank=True)

    sensor_reading_variance = models.FloatField(null=True, blank=True)
    sensor_signal_strength = models.FloatField(null=True, blank=True)

    # --- Config & ML ---
    config_change_flag = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.event_id:
            last_event = SecurityEvent.objects.order_by("-created_at").first()

            if last_event and last_event.event_id.startswith("EVT_"):
                last_num = int(last_event.event_id.split("_")[1])
                next_num = last_num + 1
            else:
                next_num = 1

            self.event_id = f"EVT_{str(next_num).zfill(5)}"

        super().save(*args, **kwargs)