from django.db import models

class Farm(models.Model):
    farm_id = models.CharField(
        max_length=20,
        primary_key=True,
        editable=False
    ) 

    owner_user_id = models.CharField(max_length=20)

    farm_name = models.CharField(max_length=150)

    location_lat = models.FloatField()
    location_long = models.FloatField()

    area_in_acres = models.FloatField()

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.farm_id:
            last_farm = Farm.objects.order_by("-created_at").first()
            if last_farm:
                last_num = int(last_farm.farm_id.split("_")[1])
                new_num = last_num + 1
            else:
                new_num = 1

            self.farm_id = f"FARM_{str(new_num).zfill(3)}"

        super().save(*args, **kwargs)
