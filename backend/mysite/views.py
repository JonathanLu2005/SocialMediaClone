from django.http import HttpResponse

def testendpoint(request):
    return HttpResponse("This is the new path!")
