from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
path('testEndPoint/', views.testendpoint, name="testendpoint"),
]

urlpatterns += staticfiles_urlpatterns()