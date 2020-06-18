from django.test import TestCase
import datetime

from django.utils import timezone
from .models import *

# Create your tests here.
class UserTests(TestCase):
	def setUp(self):
		User.objects.create(username="rpremi", fname="Ryan", lname="Premi", email="rpremi@hotmail.com", password="test1")
	def test_user_1(self):
		test_user = User.objects.get(username="rpremi")
		self.assertEqual(test_user.fname, "Ryan")
	pass

