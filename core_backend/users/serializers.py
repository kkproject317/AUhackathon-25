from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "user_id",
            "name",
            "email",
            "password",
            "role",
            "is_active",
        ]
        read_only_fields = ["user_id"]
