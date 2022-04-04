from rest_framework import generics
from rest_framework.response import Response
from .serializers import UserSerializer, AdminSignupSerializer, ClerkSignupSerializer


class AdminSignupView(generics.GenericAPIView):
    serializer_class = AdminSignupSerializer
    
    def post(self, request,*args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": user.auth_token.key
        })