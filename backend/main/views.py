from rest_framework import status
from django.http import JsonResponse
import base64
from io import BytesIO
from PIL import Image
from .serializers import ImageUploadSerializer
from .models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .forms import UserForm, UserLoginForm
from django.views.decorators.csrf import csrf_exempt, csrf_protect  # Add this
import binascii
from django.contrib import messages

from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def testendpoint(response):
    return HttpResponse("This is the new path!")


@csrf_exempt
def renderApp(resp):
    return render(resp, 'index.html')

# use this to bypass CSRF for anything relate dto do with posts


@csrf_exempt
def login(resp):
    if resp.method == "POST":
        form = UserLoginForm(resp.POST or None)

        if form.is_valid():
            Logindata = form.cleaned_data
            usernameLogin = Logindata["username"]
            emailLogin = Logindata["email"]
            passwordLogin = Logindata["password"]

            userData = User.objects()

            userData = User.objects.raw("""
SELECT username, password
FROM User
WHERE email = %s""",
                                        [emailLogin])

            try:
                userUsername = userData[0]
                userPassword = userData[1]
            except:
                # user just doesnt exist
                return redirect("testendpoint")

            if userUsername == usernameLogin:
                if userPassword == passwordLogin:
                    print("successful login")
                    return redirect("testendpoint")

                else:
                    # want to be able to somehow send this error message to frontend?? django use messages but i tried that and it doesnt work
                    messages.success(resp, ("Incorrect password."))

            else:
                # want to be able to somehow send this error message to frontend?? django use messages but i tried that and it doesnt work
                messages.success(resp, ("Incorrect username."))

        else:
            # want to be able to somehow send this error message to frontend?? django use messages but i tried that and it doesnt work
            messages.success(resp, ("Form is not valid."))

    else:
        return render(resp, "index.html", {})


# sign up and create account
@csrf_exempt
def signup(resp):
    # if our response is POST, then form variable is UserForm from forms.py, which has all the data from the frontend
    # this goes through inbuilt valid checking and saves to database (because in forms.py, we made model=User, so its connected to the table)
    if resp.method == "POST":
        form = UserForm(resp.POST or None)

        # if form.is_valid():
        #     form.save()
        # return redirect('testEndPoint')
        # # need to get email out and compare and see if person exist or not, need to get username out and see if its already taken

        if form.is_valid():
            SignUpdata = form.cleaned_data
            usernameEntered = SignUpdata["username"]
            emailEntered = SignUpdata["email"]
            # i get hte data from form, then get the username and email the user sent

            # if this is a new og username, then the try will fail, so in except, save the form because the username is original!
            # if not then within try, and it doesnt causes an issue, means the username already exist, ppl cant have same usernames!!!
            try:
                usernameModel = User.objects.get(username=usernameEntered)
                # want to be able to somehow send this error message to frontend?? django use messages but i tried that and it doesnt work
                messages.success(
                    resp, ("This username has already been taken."))

            except:
                form.save()
                return redirect("testendpoint")

            try:
                emailModel = User.objects.get(email=emailEntered)
                # want to be able to somehow send this error message to frontend?? django use messages but i tried that and it doesnt work
                messages.success(resp, ("This email has already been taken."))

            except:
                form.save()
                return redirect("testendpoint")

        else:
            # want to be able to somehow send this error message to frontend?? django use messages but i tried that and it doesnt work
            messages.success(resp, ("Form is not valid."))

    else:
        return render(resp, "index.html", {})


@csrf_exempt  # This skips csrf validation. Use csrf_protect to have validation, it shuts django up, but may need to change this as it is designed to stop xss
def resize_image(request):
    print(request.POST)
    if request.method == 'POST':
        image_data = request.POST['image']
        width = int(request.POST['width'])
        height = int(request.POST['height'])
        # print(dir(image_data))
        # print(image_data.keys())
        print(image_data)
        decoded_image_data = base64.b64decode(image_data)
        image_io = BytesIO(decoded_image_data)
        pilImg = Image.open(image_io)


def resize_image(image, width, height):
    img = Image.open(image)
    resized_img = img.resize((width, height), Image.ANTIALIAS)

    output_stream = BytesIO()
    # You can choose the format you need
    resized_img.save(output_stream, format='JPEG')
    # output_stream.seek(0)

    return output_stream


# @api_view(['POST'])
# def resize(request, format=None):
#     print(request.data.keys())

#     serializer = ImageUploadSerializer(data=request.data['image'])
#     if serializer.is_valid():
#         print('its valid')
#         uploaded_image = serializer.validated_data['image']
#         resized_image = resize_image(
#             uploaded_image, 300, 300)
#     else:
#         print('invalid')
#     return Response(resized_image, content_type='image/jpeg')

    # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def resize(request, format=None):
    serializer = ImageUploadSerializer(data=request.data)
    if serializer.is_valid():
        uploaded_image = serializer.validated_data['image']
        desired_width = serializer.validated_data['width']
        desired_height = serializer.validated_data['height']

        resized_image = resize_image(
            uploaded_image, desired_width, desired_height)
        return Response(resized_image.read(), content_type='image/jpeg')
    else:
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @csrf_exempt
# def resize(request, format=None):
#     return resizeWrapper(request)
#        return render(resp, "index.html", {})
