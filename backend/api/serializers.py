from rest_framework import serializers
from .models import Bottle

class BottleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Bottle
		fields = ('id','name', 'spirit', 'abv', 'country', 'category', 'primary', 'secondary', 'subcat', 'tasting', 'description', 'inBottle', 'brandParent', 'distillery', 'maturationType', 'mash', 'yeast', 'still', 'char', 'condenser', 'grainStrand')