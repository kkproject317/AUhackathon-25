# assets/urls.py
from django.urls import path
from .views import create_asset, get_assets_by_user_and_farm, get_assets_by_user

urlpatterns = [
    path("assets/create/", create_asset, name="create-asset"),
    path("assets/by-user-farm/", get_assets_by_user_and_farm),
    path("assets/by-user/",get_assets_by_user)
]
