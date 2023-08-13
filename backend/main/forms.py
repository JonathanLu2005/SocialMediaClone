from django import forms
from .models import User


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["fullName", "username", "email", "password"]

        # model = means its connected to the table
        # fields r the fields user is gonna input which shall save to the model which is user which is our table

class UserLoginForm(forms.ModelForm):
    class Alpha:
        model = User
        fields = ["username", "email", "password"]

# form r the django inbuilt form, so like with ur frontend pages withm <form> </form>, it does this stuff i think
