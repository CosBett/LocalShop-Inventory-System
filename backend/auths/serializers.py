from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
  
    class Meta:
      model = User
      fields =[ 'id', 'name', 'email', 'password']
      
      extra_kwargs = {
        'password': {'write_only': True}
      }

class AdminSignupSerializer(serializers.ModelSerializer):
    password2 =serializers.CharField(style={ 'input_type':'password'}, write_only=True)
   
    class Meta:
     fields = ['username', 'email', 'password', 'password2']
    
class ClerkSignupSerializer(serializers.ModelSerializer):
    password2 =serializers.CharField(style={ 'input_type':'password'}, write_only=True)
   
    class Meta:
     fields = ['username', 'email', 'password', 'password2']
    
    