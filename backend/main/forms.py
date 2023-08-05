from django import forms

class SigningIn(forms.Form):
    fullName = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)

# form r the django inbuilt form, so like with ur frontend pages withm <form> </form>, it does this stuff i think