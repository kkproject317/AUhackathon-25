from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import AssetCreateSerializer
from .models import Asset

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



@api_view(['GET'])
def get_assets_by_user_and_farm(request):

    owner_user_id = request.query_params.get("user_id")
    farm_id = request.query_params.get("farm_id")

    if not owner_user_id or not farm_id:
        return Response(
            {
                "error": "Bad Request",
                "message": "user_id and farm_id are required"
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    assets = Asset.objects.filter(
        owner_user_id=owner_user_id,
        farm_id=farm_id
    )

    serializer = AssetCreateSerializer(assets, many=True)

    return Response(
        {
            "count": assets.count(),
            "assets": serializer.data
        },
        status=status.HTTP_200_OK
    )




@api_view(['GET'])
def get_assets_by_user(request):

    owner_user_id = request.query_params.get("user_id")

    if not owner_user_id:
        return Response(
            {
                "error": "Bad Request",
                "message": "user_id is required"
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    assets = Asset.objects.filter(
        owner_user_id=owner_user_id
    )

    serializer = AssetCreateSerializer(assets, many=True)

    return Response(
        {
            "count": assets.count(),
            "assets": serializer.data
        },
        status=status.HTTP_200_OK
    )
