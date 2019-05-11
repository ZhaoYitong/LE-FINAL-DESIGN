from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import vesselVoyInfo, vesStruct, vesBayStruct, vesBayLayStruct


def index(request):
    if request.method == 'GET':
        return render(request, 'index.html')


def page_not_found(request):
    if request.method == 'GET':
        return render(request, '404.html')


def ves_basic(request):
    if request.method == 'GET':
        print('vessel_basic')
        return render(request, 'vessel.view.html')
