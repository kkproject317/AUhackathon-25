from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import SecurityEventCreateSerializer

@api_view(['POST'])
def create_security_event(request):
    serializer = SecurityEventCreateSerializer(data=request.data)

    if serializer.is_valid():
        event = serializer.save()
        return Response(
            {
                "message": "Security event created successfully",
                "event_id": event.event_id
            },
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
