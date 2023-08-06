from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('testEndPoint/', views.testendpoint, name="testendpoint"),

    path('', views.renderApp, name="renderApp"),
    path('api/getUsers', views.getUserList)
    # if the web page is like https://www.awrwahahwa/ , with nothing, goes directrly to signup page
]

urlpatterns += staticfiles_urlpatterns()
