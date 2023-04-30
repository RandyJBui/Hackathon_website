from django.contrib import admin
from . models import Data
from . models import Product
from . models import Blog
# Register your models here.

admin.site.register(Data)
admin.site.register(Product)
admin.site.register(Blog)