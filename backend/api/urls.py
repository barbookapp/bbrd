from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import BottlesViewSet
from django.conf.urls import url


router = DefaultRouter()
# router.register(r'^api/bottle/', include(BottlesViewSet))

router.register(r'bottle', BottlesViewSet, basename='bottles')

urlpatterns = [
	url(r'api/', include(router.urls)),
]