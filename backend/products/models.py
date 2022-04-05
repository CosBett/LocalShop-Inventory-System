from django.db import models
from auth.models import *

class Product(models.Model):
    PAYMENT_CHOICE = (
        ('paid', 'Paid'),
        ('Unpaid', 'Unpaid'),
       
    )
    product_id = models.IntegerField(primary_key=True,increment=True)
    name = models.CharField(max_length=100)
    created_date = models.DateField(auto_now_add=True)
    received_quantity = models.IntegerField(default=0)
    payment = models.CharField(max_length=10, choices=PAYMENT_CHOICE)
    current_quantity = models.IntegerField(default=0)
    spoilt_quantity = models.IntegerField(default=0)
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
        return cls.objects.filter(title__icontains= 'name').all()

    @classmethod
    def all_product(cls):
        return cls.objects.all()