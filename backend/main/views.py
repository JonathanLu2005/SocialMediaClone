from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect 
from django.template import loader
# Create your views here.

def testendpoint(response):
    return HttpResponse("This is the new path!")