from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	return render(request, 'accounts/main.html')

def snacks(request):
	return HttpResponse("This is the snacks page.")