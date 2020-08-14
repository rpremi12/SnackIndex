from rest_framework import serializers
from .models import *

class SnackSerializer(serializers.ModelSerializer):
	class Meta:
		model = Snack
		fields = ('qrcode', 'description', 'name',  'origName', 'origCountry','whereToBuy', 'calories')