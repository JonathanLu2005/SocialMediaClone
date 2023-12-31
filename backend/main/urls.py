from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('testEndPoint/', views.testendpoint, name="testendpoint"),
    path('', views.signup, name="signup"),
    path('renderApp/', views.renderApp, name="renderApp"),
    path('api/resize/', views.resize, name='resize_image'),
    path('login/', views.login, name="login"),

    # path('api/getUsers', views.getUserList)
    # if the web page is like https://www.awrwahahwa/ , with nothing, goes directrly to signup page
]

urlpatterns += staticfiles_urlpatterns()
