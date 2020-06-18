# Author: Ryan Premi
from django.db import models

class User(models.Model):
	username = models.CharField(max_length=64)
	fname = models.CharField(max_length=64)
	lname = models.CharField(max_length=64)
	email = models.CharField(max_length=100)
	password = models.CharField(max_length=48)

class Snack(models.Model):
	qrcode = models.IntegerField()
	description = models.CharField(max_length=600)
	name = models.CharField(max_length=64)
	jpnName = models.CharField(max_length=64)

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
	when = models.DateTimeField()

class Rating(models.Model):
	ofitem = models.ForeignKey(Snack, on_delete=models.CASCADE)
	ratedby = models.ForeignKey(User, on_delete=models.CASCADE)
	rating= models.IntegerField()
	when = models.DateTimeField()

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

