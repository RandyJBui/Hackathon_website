from django.urls import path 
from . import views

urlpatterns = [
    path('landing-Page', views.landing),
    path('searchProducts', views.searchEngine),
   
]