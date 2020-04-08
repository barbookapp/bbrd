from django.shortcuts import render
from .models import Bottle
from .serializers import BottleSerializer
# from rest_framework import generics

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# from rest_framework.mixins import RetrieveModelMixin, ListModelMixin
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework import viewsets
from django.shortcuts import get_object_or_404

from .models import Bottle
from .serializers import BottleSerializer

# Create your views here.

# class BottleListCreate(generics.ListCreateAPIView):
# 	queryset = Bottle.objects.all()
# 	serializer_class = BottleSerializer

class BottlesViewSet(GenericViewSet):
	queryset = Bottle.objects.all()
	serializer_class = BottleSerializer

	def get_queryset(self):
		return Bottle.objects.all()

	def list(self, request, *args, **kwargs):
		queryset = self.filter_queryset(self.get_queryset())

		page = self.paginate_queryset(queryset)
		if page is not None:
			serializer = self.get_serializer(page, many=True)
			return self.get_paginated_response(serializer.data)

		serializer = self.get_serializer(queryset, many=True)
		return Response(serializer.data)

	def retrieve(self, request, *args, **kwargs):
		instance = self.get_object()
		serializer = self.get_serializer(instance)
		return Response(serializer.data)