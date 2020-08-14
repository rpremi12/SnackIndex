from django.shortcuts import render
from django.http import HttpResponse
from .forms import RegisterForm
from django.http import HttpResponseRedirect

from .models import Snack
from django.contrib.auth.models import User

from .serializers import SnackSerializer
from rest_framework import generics

#class example
class SnackListCreate(generics.ListCreateAPIView):
	queryset = Snack.objects.all()
	serializer_class = SnackSerializer
	

# Create your views here.
def index(request):
	return render(request, 'accounts/main.html')

def snacks(request):
	snacks = Snack.objects.all()
	return render(request, 'accounts/snacks.html', {'snacks': snacks})

def user_register(request):
    # if this is a POST request we need to process the form data
    template = 'registration/register.html'
   
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = RegisterForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            if User.objects.filter(username=form.cleaned_data['username']).exists():
                return render(request, template, {
                    'form': form,
                    'error_message': 'Username already exists.'
                })
            elif User.objects.filter(email=form.cleaned_data['email']).exists():
                return render(request, template, {
                    'form': form,
                    'error_message': 'Email already exists.'
                })
            elif form.cleaned_data['password'] != form.cleaned_data['password_repeat']:
                return render(request, template, {
                    'form': form,
                    'error_message': 'Passwords do not match.'
                })
            else:
                # Create the user:
                user = User.objects.create_user(
                    form.cleaned_data['username'],
                    form.cleaned_data['email'],
                    form.cleaned_data['password']
                )
                user.first_name = form.cleaned_data['first_name']
                user.last_name = form.cleaned_data['last_name']
                user.phone_number = form.cleaned_data['phone_number']
                user.save()
               
                # Login the user
                #login(request, user)
               
                # redirect to accounts page:
                return HttpResponseRedirect('/accounts/login')

   # No post data availabe, let's just show the page.
    else:
        form = RegisterForm()

    return render(request, template, {'form': form})