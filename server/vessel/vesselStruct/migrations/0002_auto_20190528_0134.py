# Generated by Django 2.2 on 2019-05-27 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vesselStruct', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='con_stowage_export',
            name='BayNo',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='贝号'),
        ),
        migrations.AddField(
            model_name='con_stowage_export',
            name='TireNo',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='层号'),
        ),
    ]
