from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect 
from django.template import loader

from .models import User
from .forms import SigningIn
# Create your views here.

def testendpoint(response):
    return HttpResponse("This is the new path!")

def signup(response):
    # want to somehow reutrn a JS page here??? alongside get the JS page data here, verify it, store it into database etc

    if request.method == "POST":
        # if post get the form data from the frontend, i think u gotta use some special django html thing
        form = SigningIn(response.POST)

        if form.is_valid():
            form.save()
            # i think this is the inbuilt saving?

        return redirect("/")
        # once done send to account page but obv we dont have one
    
    else:
        form = SigningIn()
        # idk what this does it was just there

    return render(response, "JS page??", {"form": form})
    # need to somehow return JS page???


# agenda
# i will learn more about models and convert from SQL to models
# then we gotta somehow connect it with react rather than using HTML pages
# i will also learn more about inbuilt stuff like the save or whatever, twt didnt went into full detail so i'll do a course on it
# hopefully once im able to fully grasp how the django database thing work here + the inbuilt forms stuff + react, we're solid