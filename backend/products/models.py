from django.db import models
from auth.models import User, Clerk, Admin


class Product(models.Model):
    product_id = models.IntegerField(primary_key=True, increment=True)
    name = models.CharField(max_length=100)
    created_date = models.DateField(auto_now_add=True)
    cost = models.IntegerField(default=0)
    price = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    def save_product(self):
        self.save()

    def delete_product(self):
        self.delete()

    @classmethod
    def search_payment(cls, title):
        return cls.objects.filter(title__icontains='name').all()

    @classmethod
    def all_product(cls):
        return cls.objects.all()
    
class Stock(models.Model):
    PAYMENT_CHOICE = (
        ('paid', 'Paid'),
        ('Unpaid', 'Unpaid'),

    )
    stock_id = models.IntegerField(primary_key=True, increment=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    created_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now=True)
    received_quantity = models.IntegerField(default=0)
    payment = models.CharField(max_length=10, choices=PAYMENT_CHOICE)
    spoilt_quantity = models.IntegerField(default=0)

    def __str__(self):
        return self.product.name

    def save_stock(self):
        self.save()

    def delete_stock(self):
        self.delete()

    @classmethod
    def all_stock(cls):
        return cls.objects.all()


class Order_request(models.Model):
    order_id = models.IntegerField(primary_key=True, increment=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    created_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now=True)

    def __str__(self):
        return self.product.name

    def save_request(self):
        self.save()

    def delete_request(self):
        self.order()

    @classmethod
    def all_request(cls):
        return cls.objects.all()

class Order_post(models.Model):
    order_id = models.IntegerField(primary_key=True, increment=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    created_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now=True)
    spoilt_quantity = models.IntegerField(default=0)

    def __str__(self):
        return self.product.name

    def save_order(self):
        self.save()

    def delete_stock(self):
        self.order()

    @classmethod
    def all_orders(cls):
        return cls.objects.all()
        

class Store(models.Model):  
    store_id = models.IntegerField(primary_key=True, increment=True)
    name = models.CharField(max_length=100)
    admin = models.ForeignKey(Admin, on_delete=models.CASCADE)
    clerk = models.ForeignKey(Clerk, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
       
