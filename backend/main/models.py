from django.db import models

# Create your models here.

class User(models.Model):
    userId = models.BigAutoField(primary_key=True)
    fullName = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)

# this is the equivelant of like creating a table in SQL basically