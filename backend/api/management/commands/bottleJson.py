import json
import csv
from django.core.management.base import BaseCommand
from api.models import Bottle

# class Command(BaseCommand):

#     def add_arguments(self, parser):
#         parser.add_argument('json_file', type=str)

#     def handle(self, *args, **options):
#         with open(options['json_file']) as f:
#             data_list = json.load(f)

#         for data in data_list:
#             data['pk'] = data.pop('name')
#             Bottle.objects.get_or_create(pk=data['pk'], defaults=data)

import csv


class Command(BaseCommand):
	def handle(self, *args, **options):
		with open('/Users/Josh/Dev/bottleDjango1.csv') as csvfile:
			reader = csv.DictReader(csvfile)
			for row in reader:
			# The header row values become your keys
				# id = row['id']
				name = row['Name']
				spirit = row['Spirit']
				category = row['Category']
				subcat = row['Sub-Category']
				age = row['Age']
				country = row['Country']
				abv = row['abv']
				primary = row['Primary Barrel']
				secondary = row['Secondary Barrel(s)']
				tasting = row['Tasting Notes']
				description = row['Description']
				inBottle = row["What's in the Bottle"]
				brandParent = row['Brand/Parent']
				distillery = row['Distillery?']
				maturationType = row['Maturation (concurrent/Continuous)']
				mash = row['Mash']
				yeast = row['Yeast']
				still = row['Still']
				char = row['Char']
				condenser = row['Condenser(later)']
				grainStrand = row['Grain Strand']
				# etc....

				new_bottle = Bottle(name=name, spirit=spirit, category=category, subcat=subcat, age=age, country=country,
					abv=abv, primary=primary, secondary=secondary, tasting=tasting, description=description, maturationType=maturationType,
					mash=mash, yeast=yeast, still=still, char=char, condenser=condenser, grainStrand=grainStrand)
				new_bottle.save()
