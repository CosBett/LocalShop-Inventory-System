
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ProductSerializer, StockSerializer, OrderPostSerializer, OrderRequestSerializer, StoreSerializer
from rest_framework import viewsets, permissions
from .models import Product, Stock, Store, Order_post, Order_request
from rest_framework.authtoken.models import Token
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view




@api_view(['GET'])
def Get_stocks(request):
    stocks = Stock.objects.all()
    serializer = StockSerializer(stocks, many=True)
    return Response(serializer.data)




class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    permission_classes =(IsAuthenticated,)
    authentication_classes = [permissions.IsAuthenticated]


# class StockViewSet(viewsets.ModelViewSet):
#     queryset = Stock.objects.all()
#     serializer_class = StockSerializer

#     permission_classes =(IsAuthenticated,)
#     authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]

    
 
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
