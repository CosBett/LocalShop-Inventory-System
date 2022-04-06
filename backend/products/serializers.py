from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Stock, Store, Order_post, Order_request




class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'name', 'price',
                  'created_date', 'cost', 'store']


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['id', 'product', 'quantity', 'created_date',
                  'updated_date', 'received_quantity', 'payment', 'spoilt_quantity']


class OrderPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_post
        fields = ['id', 'product', 'quantity',
                  'created_date', 'updated_date']


class OrderRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_request
        fields = ['id', 'product', 'quantity',
                  'created_date', 'updated_date']
        
class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ['id', 'name', 'admin', 'clerk']
