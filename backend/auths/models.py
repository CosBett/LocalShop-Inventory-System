from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  is_admin = models.BooleanField(default=False)
  is_staff = models.BooleanField(default=False)
  
  def __str__(self):
    return self.username
  
class Admin(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='admin')
  phone = models.CharField(max_length=20, blank=True, null=True)
  role = models.CharField(max_length=20, blank=True, null=True)
  
  def __str__(self):
    return self.user.username
  
class Clerk(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='clerk')
  phone = models.CharField(max_length=20, blank=True, null=True)
  role = models.CharField(max_length=20, blank=True, null=True)
  
  def __str__(self):
    return self.user.username