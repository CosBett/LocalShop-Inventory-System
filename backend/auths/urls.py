from django.urls import path
from .views import *

urlpatterns = [
   path('register/admin/', AdminSignupView.as_view(), name='admin-signup'),
   path('register/clerk/', ClerkSignupView.as_view(), name='clerk-signup'),
   path('login/', CustomAuthToken.as_view(), name='custom-token'),

]