from django.urls import path
from .views import create_ml_response,get_security_event_dashboard

urlpatterns = [
    path("ml/response/", create_ml_response, name="create-ml-response"),
     path("dashboard/security-event/", get_security_event_dashboard, name="dashboard-security-event")
]
