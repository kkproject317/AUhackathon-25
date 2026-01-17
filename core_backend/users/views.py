from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserCreateSerializer
from .models import User

@api_view(['POST'])
def create_user(request):
    serializer = UserCreateSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()
        return Response(
            {
                "message": "User created successfully",
                "user_id": str(user.user_id)
            },
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def login_validate(request):
    """
    Simple login validation
    Input: user_id, password
    Output: auth_status
    """

    user_id = request.data.get("user_id")
    password = request.data.get("password")

    if not user_id or not password:
        return Response(
            {
                "auth_status": "failure",
                "message": "user_id and password required"
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        user = User.objects.get(user_id=user_id, is_active=True)
    except User.DoesNotExist:
        return Response(
            {
                "auth_status": "failure"
            },
            status=status.HTTP_401_UNAUTHORIZED
        )

    if (password == user.password):
        return Response(
            {
                "auth_status": "success"
            },
            status=status.HTTP_200_OK
        )

    return Response(
        {
            "auth_status": "failure"
        },
        status=status.HTTP_401_UNAUTHORIZED
    )

