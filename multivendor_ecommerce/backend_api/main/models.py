from django.db import models
from django.contrib.auth.models import User

# Seller models

class Vendor(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    address=models.TextField(null=True)