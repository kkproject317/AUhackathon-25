from django.urls import path
from .views import create_farm

urlpatterns = [
    path("farms/create/", create_farm, name="create-farm"),
]
