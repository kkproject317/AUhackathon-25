from django.urls import path
from .views import create_farm, get_farms_by_user

urlpatterns = [
    path("farms/create/", create_farm, name="create-farm"),
    path("farms/by-user/", get_farms_by_user, name="by_user")
]
