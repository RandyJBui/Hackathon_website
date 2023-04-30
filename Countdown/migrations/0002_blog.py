# Generated by Django 4.2 on 2023-04-29 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Countdown', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('imageLink', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=200)),
                ('btnLink', models.CharField(max_length=100)),
            ],
        ),
    ]
