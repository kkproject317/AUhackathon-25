from django.db import models

class Asset(models.Model):
    asset_id = models.CharField(
        max_length=20,
        primary_key=True,
        editable=False
    )

    farm_id = models.CharField(max_length=20)
    owner_user_id = models.CharField(max_length=20)

    asset_type = models.CharField(
        max_length=50,
        choices=[
            ("soil_sensor", "Soil Sensor"),
            ("irrigation_controller", "Irrigation Controller"),
            ("gateway", "Farm Gateway"),
            ("weather_station", "Weather Station"),
        ]
    )

    asset_name = models.CharField(max_length=100)
    asset_os = models.CharField(max_length=50, blank=True, null=True)

    baseline_lat = models.FloatField()
    baseline_long = models.FloatField()

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.asset_id:
            last_asset = Asset.objects.order_by("-created_at").first()
            if last_asset:
                last_num = int(last_asset.asset_id.split("_")[1])
                new_num = last_num + 1
            else:
                new_num = 1

            self.asset_id = f"ASSET_{str(new_num).zfill(5)}"

        super().save(*args, **kwargs)
