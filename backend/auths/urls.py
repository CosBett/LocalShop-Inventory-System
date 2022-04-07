from django.urls import path
from .views import *

urlpatterns = [
   path('register/admin/', AdminSignupView.as_view(), name='admin-signup'),
   path('register/clerk/', ClerkSignupView.as_view(), name='clerk-signup'),
   path('login/', CustomAuthToken.as_view(), name='custom-token'),
   path('logout/', LogoutView.as_view(), name='logout'),
   path('admin/dashboard/', AdminOnlyView.as_view(), name='admin-only'),
   path('clerk/dashboard/', ClerkOnlyView.as_view(), name='clerk-only'),
   path('send_email/', SendEmailView.as_view(), name='send_email')

]