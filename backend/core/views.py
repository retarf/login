
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework.status import HTTP_200_OK



class Index(APIView):

    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return Response(data={"data": "you are logged in!"}, status=HTTP_200_OK)