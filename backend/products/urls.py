from django import views
from django.urls import path,include
from . import views,view
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views as authtoken_views   # for token


router = DefaultRouter()
router.register('products', views.ProductViewSet)
# router.register('stocks', views.StockViewSet)
router.register('stores', views.StoreViewSet)
router.register('order_posts', views.OrderPostViewSet)
router.register('order_requests', views.OrderRequestViewSet)



urlpatterns = [
    path('', include(router.urls)),
    path('', include('rest_framework.urls', namespace='rest_framework')),
    path( 'get_stock/', view.getStock, name='get_stock'),
    path( 'getstock/', view.getStock, name='get_stock'),

    


]