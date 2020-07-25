# Author: Ryan Premi
from django.db import models

class User(models.Model):
	username = models.CharField(max_length=200, null= True)
	name = models.CharField(max_length=200, null = True)
	email = models.CharField(max_length=200, null = True)
	password = models.CharField(max_length=48, null = True)

	def __str__(self):
		return self.username

class Snack(models.Model):
	qrcode = models.BigIntegerField(null = True)
	description = models.CharField(max_length=600, null = True)
	name = models.CharField(max_length=64, null = True)
	origName = models.CharField(max_length=64, null = True)
	origCountry = models.CharField(max_length=64, null = True)
	whereToBuy = models.CharField(max_length=800, null = True)
	calories = models.IntegerField(null = True)

	def __str__(self):
		return self.name

class Collection(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	name = models.CharField(max_length=64)

class CollectionEntry(models.Model):
	collect = models.ForeignKey(Collection, on_delete=models.CASCADE)
	item = models.ForeignKey(Snack, on_delete=models.CASCADE)

class Review(models.Model):
	ofitem = models.ForeignKey(Snack, on_delete=models.CASCADE)
	ratedby = models.ForeignKey(User, on_delete=models.CASCADE)
	review = models.CharField(max_length=500)
	when = models.DateTimeField(auto_now_add=True)

class Rating(models.Model):
	ofitem = models.ForeignKey(Snack, on_delete=models.CASCADE)
	ratedby = models.ForeignKey(User, on_delete=models.CASCADE)
	rating= models.IntegerField()
	when = models.DateTimeField(auto_now_add=True)

class View(models.Model):
	ofitem = models.ForeignKey(Snack, on_delete=models.CASCADE)
	viewBy = models.ForeignKey(User, on_delete=models.CASCADE)
	when = models.DateTimeField(auto_now_add=True)

class Category(models.Model):
	name = models.CharField(max_length=60)

class Allergen(models.Model):
	name = models.CharField(max_length=60)

class AllergyProperty(models.Model):
	allergen = models.ForeignKey(Allergen, on_delete=models.CASCADE)
	snack = models.ForeignKey(Snack, on_delete=models.CASCADE)
	hasit = models.BooleanField()
	confirmed = models.BooleanField()

class SnackCategory(models.Model):
	snack = models.ForeignKey(Snack, on_delete=models.CASCADE)
	ctg = models.ForeignKey(Category, on_delete=models.CASCADE)

