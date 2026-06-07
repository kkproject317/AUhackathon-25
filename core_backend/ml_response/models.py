from django.db import models

class MLResponse(models.Model):
    response_record_id = models.CharField(
        max_length=50,
        primary_key=True,
        db_index=True,
        editable=False
    )

    event_id = models.CharField(max_length=50, null=True)

    anomaly_score = models.FloatField()

    prediction = models.CharField(
        max_length=20,
        choices=[("normal", "Normal"), ("anomaly", "Anomaly")]
    )

    response_action = models.CharField(max_length=100, null=True, blank=True)
    reasons = models.JSONField()

    processed_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.response_record_id:
            last = MLResponse.objects.order_by("-processed_at").first()

            if last and last.response_record_id.startswith("MLR_"):
                last_num = int(last.response_record_id.split("_")[1])
                next_num = last_num + 1
            else:
                next_num = 1

            self.response_record_id = f"MLR_{str(next_num).zfill(5)}"

        super().save(*args, **kwargs)
