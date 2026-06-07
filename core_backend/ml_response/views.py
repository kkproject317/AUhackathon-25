from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import MLResponseCreateSerializer

@api_view(['POST'])
def create_ml_response(request):
    serializer = MLResponseCreateSerializer(data=request.data)

    if serializer.is_valid():
        response_record = serializer.save()
        return Response(
            {
                "message": "response recorded successfully",
                "asset_id": response_record.response_record_id
            },
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


