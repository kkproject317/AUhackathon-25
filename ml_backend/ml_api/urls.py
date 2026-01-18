from django.urls import path
from .views import detect_anomaly

urlpatterns = [
    path("ml/detect/", detect_anomaly, name="detect-anomaly"),
]