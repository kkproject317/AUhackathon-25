from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import MLResponseCreateSerializer
from .models import MLResponse
from django.db import connection

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


@api_view(["GET"])
def get_security_event_dashboard(request):
    user_id = request.query_params.get("user_id")

    if not user_id:
        return Response(
            {"error": "user_id query param is required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    query = """
        SELECT
            event_payload_securityevent.event_id              AS event_id,
            event_payload_securityevent.device_id             AS device,
            ml_response_mlresponse.prediction               AS prediction,
            event_payload_securityevent.asset_type            AS asset_type,
            event_payload_securityevent.action_type           AS action_type,
            event_payload_securityevent.resource_type         AS resource_type,
            event_payload_securityevent.auth_status           AS authorization_status,
            ml_response_mlresponse.anomaly_score            AS anomaly_score,
            ml_response_mlresponse.response_action          AS response_action,
            ml_response_mlresponse.reasons                  AS reason,
            event_payload_securityevent.timestamp             AS timestamp
        FROM event_payload_securityevent
        LEFT JOIN ml_response_mlresponse
            ON event_payload_securityevent.event_id = ml_response_mlresponse.event_id
        WHERE event_payload_securityevent.owner_user_id = %s
        ORDER BY event_payload_securityevent.timestamp DESC
    """

    with connection.cursor() as cursor:
        cursor.execute(query, [user_id])
        columns = [col[0] for col in cursor.description]
        rows = cursor.fetchall()

    results = [dict(zip(columns, row)) for row in rows]

    return Response(
        {
            "count": len(results),
            "results": results
        },
        status=status.HTTP_200_OK
    )

