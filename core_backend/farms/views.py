from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import FarmCreateSerializer
from .models import Farm

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


@api_view(['GET'])
def get_farms_by_user(request):
    user_id = request.query_params.get("user_id")

    if not user_id:
        return Response(
            {
                "error": "Bad Request",
                "message": "user_id query parameter is required"
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    farms = Farm.objects.filter(
        owner_user_id=user_id,
        is_active=True
    )

    serializer = FarmCreateSerializer(farms, many=True)

    return Response(
        {
            "count": farms.count(),
            "farms": serializer.data
        },
        status=status.HTTP_200_OK
    )
