from statistics import mode
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  name =models.CharField(max_length=255, blank=True)
  email= models.EmailField(unique=True)
  password = models.CharField(max_length=255)
  username = models.CharField(max_length=255, blank=True)

  REQUIRED_FIELDS=[]