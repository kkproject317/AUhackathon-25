# assets/urls.py
from django.urls import path
from .views import create_asset

urlpatterns = [
    path("assets/create/", create_asset, name="create-asset"),
]
