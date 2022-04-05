from contextvars import Token
from rest_framework import generics
from rest_framework.response import Response
from .serializers import UserSerializer, AdminSignupSerializer, ClerkSignupSerializer
from rest_framework.authtoken.views import ObtainAuthToken


class AdminSignupView(generics.GenericAPIView):
    serializer_class = AdminSignupSerializer
    
    def post(self, request,*args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": user.auth_token.key,
            'Message': 'Account created successfully'
        })
class ClerkSignupView(generics.GenericAPIView):
    serializer_class = ClerkSignupSerializer
    
    def post(self, request,*args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": user.auth_token.key,
            'Message': 'Account created successfully'
        })        

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                          context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'is_admin': user.is_admin,
            'email': user.email
        })
        