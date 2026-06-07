from django.db import models

class User(models.Model):
    user_id = models.CharField(
        max_length=20,
        primary_key=True,
        editable=False
    )

    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    password = models.CharField(max_length=128, null=True)

    role = models.CharField(
        max_length=50,
        choices=[
            ("admin", "Admin"),
            ("farmer", "Farmer"),
            ("operator", "Operator"),
        ]
    )

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.user_id:
            prefix = self.role.upper()
            last_user = (
                User.objects
                .filter(role=self.role)
                .order_by("-created_at")
                .first()
            )

            if last_user:
                last_number = int(last_user.user_id.split("_")[1])
                new_number = last_number + 1
            else:
                new_number = 1

            self.user_id = f"{prefix}_{str(new_number).zfill(3)}"

        super().save(*args, **kwargs)
