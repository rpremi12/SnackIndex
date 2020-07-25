# Author: Ryan Premi
from django.test import TestCase
import datetime

from django.utils import timezone
from .models import *

class UserTests(TestCase):
	def setUp(self):
		User.objects.create(username="rpremi", name ="Ryan Premi",
							email="rpremi@hotmail.com", password="test1")

	#Insertion and Creation Test
	def test_user_1(self):
		test_user = User.objects.get(username="rpremi")
		self.assertEqual(test_user.name, "Ryan Premi")

class SnackTests(TestCase):
	def setUp(self):
		Snack.objects.create(qrcode=978067972020, description="chocolate candy",
							 name ="chocolate bar", origName="check", origCountry="USA", 
							 whereToBuy="testsite.com", calories=100)

	#Insertion and Creation Test
	def test_snack_1(self):
		test_snack = Snack.objects.get(name="chocolate bar")
		self.assertEqual(test_snack.origCountry, "USA")


#COLLECTION TABLES


class CollectionTests(TestCase):
	def setUp(self):
		User.objects.create(username="rpremi", name ="Ryan Premi",
							email="rpremi@hotmail.com", password="test1")
		Collection.objects.create(name="Favorite", user= User.objects.get(username="rpremi"))

	#insertion and creation test
	def test_collection_1(self):
		test_collect = Collection.objects.get(name="Favorite")
		self.assertEqual(test_collect.name, "Favorite")
	#deletion test
	def test_collection_2(self):
		User.objects.get(name="Ryan Premi").delete()
		self.assertEqual(len(Collection.objects.all()),0)


class CollectionEntryTests(TestCase):
	def setUp(self):
		User.objects.create(username="rpremi", name="Ryan Premi",
							email="rpremi@hotmail.com", password="test1")
		Collection.objects.create(name="Favorite", user= User.objects.get(username="rpremi"))
		Snack.objects.create(qrcode=978067972020, description="chocolate candy",
							 name ="check", origName="check", origCountry="USA", 
							 whereToBuy="testsite.com", calories=100)
		CollectionEntry.objects.create(collect = Collection.objects.get(name="Favorite"),
								item = Snack.objects.get(name="check"))
	#insertion and creation test
	def test_collect_entr_1(self):
		test_collect = CollectionEntry.objects.get(collect= Collection.objects.get(name="Favorite"))
		self.assertEqual(test_collect.collect.name, "Favorite")
	#deletion test
	def test_collect_entr_2(self):
		User.objects.get(name="Ryan Premi").delete()
		self.assertEqual(len(CollectionEntry.objects.all()),0)




# METRICS FOR SNACKS
# VIEWS RATINGS REVIEWS



class ReviewTests(TestCase):
	def setUp(self):
		usr = User.objects.create(username="rpremi", name="Ryan Premi",
							email="rpremi@hotmail.com", password="test1")
		snk = Snack.objects.create(qrcode=978067972020, description="chocolate candy",
							 name ="check", origName="check", origCountry="USA", 
							 whereToBuy="testsite.com", calories=100)
		Review.objects.create(ofitem=snk, ratedby=usr, review="Kinda meh tbh", 
							  when=timezone.now())	
	def test_review_1(self):
		test_rev = Review.objects.get(review="Kinda meh tbh")
		self.assertEqual(test_rev.review, "Kinda meh tbh")

class RatingTests(TestCase):
	def setUp(self):
		usr = User.objects.create(username="rpremi", name="Ryan Premi",
							email="rpremi@hotmail.com", password="test1")
		snk = Snack.objects.create(qrcode=978067972020, description="chocolate candy",
							 name ="check", origName="check", origCountry="USA", 
							 whereToBuy="testsite.com", calories=100)
		Rating.objects.create(ofitem=snk, ratedby=usr, rating=9, 
							  when=timezone.now())	
	def test_rating_1(self):
		test_rate = Rating.objects.get(rating=9)
		self.assertEqual(test_rate.rating, 9)

class ViewTests(TestCase):
	def setUp(self):
		usr = User.objects.create(username="rpremi", name="Ryan Premi",
							email="rpremi@hotmail.com", password="test1")
		snk = Snack.objects.create(qrcode=978067972020, description="chocolate candy",
							 name ="check", origName="check", origCountry="USA", 
							 whereToBuy="testsite.com", calories=100)
		View.objects.create(ofitem=snk, viewBy=usr, when=timezone.now())	
	def test_rating_1(self):
		test_view = View.objects.get(viewBy= User.objects.get(username="rpremi"))
		self.assertEqual(test_view.viewBy.name, "Ryan Premi")


#SNACK CATEGORY


class CategoryTests(TestCase):
	def setUp(self):
		Category.objects.create(name="Hard Candy")
	def test_category_1(self):
		test_cat = Category.objects.get(name="Hard Candy")
		self.assertEqual(test_cat.name, "Hard Candy")

class SnackCategoryTests(TestCase):
	def setUp(self):
		snk = Snack.objects.create(qrcode=978067972020, description="chocolate candy",
							 name ="check", origName="check", origCountry="USA", 
							 whereToBuy="testsite.com", calories=100)
		cat = Category.objects.create(name="Hard Candy")
		SnackCategory.objects.create(snack = snk, ctg = cat)
	def test_snack_category_1(self):
		test_scategory=SnackCategory.objects.get(ctg=Category.objects.get(name="Hard Candy"))
		self.assertEqual(test_scategory.ctg.name, "Hard Candy")


#ALLERGY TABLE


class AllergenTests(TestCase):
	def setUp(self):
		Allergen.objects.create(name="Gluten")
	def test_allergy_1(self):
		test_allergy = Allergen.objects.get(name="Gluten")
		self.assertEqual(test_allergy.name, "Gluten")

class AllergyPropertyTests(TestCase):
	def setUp(self):
		snk = Snack.objects.create(qrcode=978067972020, description="chocolate candy",
							 name ="check", origName="check", origCountry="USA", 
							 whereToBuy="testsite.com", calories=100)
		alg = Allergen.objects.create(name="Gluten")
		AllergyProperty.objects.create(hasit = False, confirmed = True, 
									   snack =snk, allergen=alg)
	def test_allergy_property_1(self):
		test_aprop = AllergyProperty.objects.get(hasit=False)
		self.assertEqual(test_aprop.confirmed, True)
