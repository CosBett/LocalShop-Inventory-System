
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer, AdminSignupSerializer, ClerkSignupSerializer
from rest_framework.authtoken.views import ObtainAuthToken, APIView
from .permissions import IsAdminUser, IsClerkUser
from django.core.mail import send_mail
from decouple import config
from django.conf import settings
from django.http import HttpResponse


class AdminSignupView(generics.GenericAPIView):
    serializer_class = AdminSignupSerializer

    def post(self, request, *args, **kwargs):
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

    def post(self, request, *args, **kwargs):
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


class LogoutView(APIView):
    def post(self, request, format=None):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


class AdminOnlyView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated and IsAdminUser]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class ClerkOnlyView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated and IsClerkUser]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class SendEmailView(APIView):
    def post(self, request, format=None):
        data = request.data
        email = data.get('email')
        name = data.get('name')
        subject = ''
        message = ' it  means a world to us '
        res = send_mail(subject, message, settings.EMAIL_HOST_USER, [email],)

        return HttpResponse(res)
