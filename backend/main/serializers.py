from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'  # Use this to include all fields from the model


class ImageUploadSerializer(serializers.Serializer):
    image = serializers.ImageField()
    width = serializers.IntegerField()
    height = serializers.IntegerField()
