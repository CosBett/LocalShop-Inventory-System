from rest_framework import serializers
from .models import Admin, Clerk, User

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
     
    def save(self, *args, **kwargs):
        user = User(
            username = self.validated_data['username'],
            email = self.validated_data['email']
        )  
        password = self.validated_data['password'],
        password2 = self.validated_data['password1'] 
        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match'})
        user.set_password(password)
        user.is_admin = True
        user.save()
        Admin.objects.create(user=user)
        return user
        
    
class ClerkSignupSerializer(serializers.ModelSerializer):
    password2 =serializers.CharField(style={ 'input_type':'password'}, write_only=True)
   
    class Meta:
     fields = ['username', 'email', 'password', 'password2']
     
     def save(self, *args, **kwargs):
        user = User(
            username = self.validated_data['username'],
            email = self.validated_data['email']
        )  
        password = self.validated_data['password'],
        password2 = self.validated_data['password1'] 
        if password != password2:
            raise serializers.ValidationError({'password': 'Passwords must match'})
        user.set_password(password)
        user.is_staff = True
        user.save()
        Clerk.objects.create(user=user)
        return user
         
    