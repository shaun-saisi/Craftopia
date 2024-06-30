from django.db import models
from django.contrib.auth.models import User

# Seller models

class Vendor(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    address=models.TextField(null=True)

#Category
class ProductCategory(models.Model):
    title=models.CharField(max_length=200)
    detail=models.TextField(null=True)
    
    def __str__(self):
        return self.title
    
#Product
class Product(models.Model):
    title=models.CharField(max_length=200)
    detail=models.TextField(null=True)
    price=models.FloatField
    
    def __str__(self):
        return self.title