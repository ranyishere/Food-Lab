from django.contrib.auth.models import AbstractBaseUser
from django.db import models

class RestaurantListing(AbstractBaseUser):
    name = models.TextField(max_length=256, blank=True)
    location = models.CharField(max_length=256, blank=True)
    description = models.TextField(max_length=512, blank=True)
    hours = models.TimeField(auto_now=False, auto_now_add,False)

class FoodItem(models.Model):
    name = models.TextField(max_length=128, blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField(max_length=512, blank=True)
