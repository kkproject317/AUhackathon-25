from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import FarmCreateSerializer

@api_view(['POST'])
def create_farm(request):
    serializer = FarmCreateSerializer(data=request.data)

    if serializer.is_valid():
        farm = serializer.save()
        return Response(
            {
                "message": "Farm created successfully",
                "farm_id": farm.farm_id,
                "owner_user_id": farm.owner_user_id
            },
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
