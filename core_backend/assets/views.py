from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import AssetCreateSerializer

@api_view(['POST'])
def create_asset(request):
    serializer = AssetCreateSerializer(data=request.data)

    if serializer.is_valid():
        asset = serializer.save()
        return Response(
            {
                "message": "Asset created successfully",
                "asset_id": asset.asset_id,
                "farm_id": asset.farm_id
            },
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
