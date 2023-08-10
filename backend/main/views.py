from .serializers import UserSerializer
from .models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .forms import UserForm

from django.views.decorators.csrf import ensure_csrf_cookie
# Create your views here.


def testendpoint(response):
    return HttpResponse("This is the new path!")


def renderApp(resp):
    return render(resp, 'index.html')

@ensure_csrf_cookie
def signup(resp):
    # if our response is POST, then form variable is UserForm from forms.py, which has all the data from the frontend
    # this goes through inbuilt valid checking and saves to database (because in forms.py, we made model=User, so its connected to the table)
    if resp.method == "POST":
        form = UserForm(resp.POST or None)

        if form.is_valid():
            form.save()

        return redirect("testendpoint")

    else:
        return render(resp, "index.html", {})
