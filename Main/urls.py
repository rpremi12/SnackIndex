from django.urls import path, include
from django.contrib import admin
from django.conf.urls import url

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('admin/', admin.site.urls),
    path('snacks/', views.snacks, name='snacks'),
    path('accounts/', include('django.contrib.auth.urls')),
    url(r'^register/$', views.user_register, name='user_register')
]