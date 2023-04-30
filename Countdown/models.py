from django.db import models

# Create your models here.
class Data(models.Model):
    # first_name = models.CharField(max_length=100)
    # last_name = models.CharField(max_length=100, default='')
    #comments = models.ForeignKey(Post,on_delete=models.Cas)
    def __str__(self) -> str:
        return self.first_name
   
class Product(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    imageLink = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    prodLink = models.CharField(max_length=200, default='')
    def __str__(self) -> str:
        return self.title
class Blog(models.Model):
    title = models.CharField(max_length=30)
    imageLink= models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    btnLink = models.CharField(max_length=100)
    def __str__(self) -> str:
        return self.title
    



