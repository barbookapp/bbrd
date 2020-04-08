from django.db import models

# Create your models here.
class Bottle(models.Model):
	# id = models.AutoField(primary_key=True)
	name = models.TextField(blank=True, null=True)
	spirit = models.TextField(blank=True, null=True)
	category = models.TextField(blank=True, null=True)
	subcat = models.TextField(blank=True, null=True)
	age = models.TextField(blank=True, null=True, max_length=20)
	country = models.TextField(blank=True, null=True)
	abv = models.TextField(blank=True, null=True, max_length=20)
	# abv = models.DecimalField(decimal_places=2, max_digits= 1000)
	primary = models.TextField(blank=True, null=True)
	secondary = models.TextField(blank=True, null=True)
	tasting = models.TextField(blank=True, null=True)
	description = models.TextField(blank=True, null=True)
	inBottle = models.TextField(blank=True, null=True)
	brandParent = models.TextField(blank=True, null=True)
	distillery = models.TextField(blank=True, null=True)
	maturationType = models.TextField(blank=True, null=True)
	mash = models.TextField(blank=True, null=True)
	yeast = models.TextField(blank=True, null=True)
	still = models.TextField(blank=True, null=True)
	char = models.TextField(blank=True, null=True)
	condenser = models.TextField(blank=True, null=True)
	grainStrand = models.TextField(blank=True, null=True)




	# @classmethod
 #    def create(cls, **kwargs):
 #    	bottle = cls.objects.create(
 #            name=kwargs['name'],
 #            age=kwargs['age'],
 #            abv=kwargs['abv'],
 #            country=kwargs['country'],
 #            cat=kwargs['cat'],
 #            primary=kwargs['primary'],
 #            secondary=kwargs['secondary'],
 #            subcategory=kwargs['subcategory']
 #        )
 #        return bottle