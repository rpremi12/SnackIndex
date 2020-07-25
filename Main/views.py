from django.shortcuts import render
from django.http import HttpResponse

from .models import *

# Create your views here.
def index(request):
	return render(request, 'accounts/main.html')

def snacks(request):
	snacks = Snack.objects.all()
	return render(request, 'accounts/snacks.html', {'snacks': snacks})