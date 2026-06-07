from django.urls import path
from .views import create_ml_response

urlpatterns = [
    path("ml/response/", create_ml_response, name="create-ml-response"),
]
