from .serializers import ProductSerializer, StockSerializer, OrderPostSerializer, OrderRequestSerializer, StoreSerializer
from rest_framework import viewsets, permissions
from .models import Product, Stock, Store, Order_post, Order_request



class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    permission_classes = [permissions.IsAuthenticated]

class StockViewSet(viewsets.ModelViewSet):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
    
    permission_classes = [permissions.IsAuthenticated]  
    
class OrderPostViewSet(viewsets.ModelViewSet):
    queryset = Order_post.objects.all()
    serializer_class = OrderPostSerializer
    
    permission_classes = [permissions.IsAuthenticated]    

class OrderRequestViewSet(viewsets.ModelViewSet):
    queryset = Order_request.objects.all()
    serializer_class = OrderRequestSerializer
    
    permission_classes = [permissions.IsAuthenticated]    
    
class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    
    permission_classes = [permissions.IsAuthenticated]    
    