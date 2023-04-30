from django.shortcuts import render
from django.http import HttpRequest
from . models import Product
from . models import Blog
# Create your views here.
# def blogPage(request):
#     blogContents = Blog.objects.all()
#     context = {
#         'contents' : blogContents,
      
#     }
#     return render(request, 'blog.html', context)

def searchEngine(request):
    prodSearch = Product.objects.all()
    if 'query' in request.GET :
        search = request.GET['query']
        search = search.lower()
        prodSearch = Product.objects.filter(category__icontains=search)
    else:
        prodSearch = Product.objects.all()
    context = {
        'productCard': prodSearch
    }
    return render(request, 'search.html', context)

def landing(request):
    blogContents = Blog.objects.all()

    context = {
    'contents' : blogContents,
    }
    return render(request, 'index.html', context)
