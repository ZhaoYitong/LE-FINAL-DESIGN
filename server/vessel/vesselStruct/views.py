from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import vesselVoyInfo, vesStruct, vesBayStruct, vesBayLayStruct


def index(request):
    if request.method == 'GET':
        data = vesselVoyInfo.VesType
        print(data)
        return HttpResponse("Hello, world")


def vesInfo(request):
    if request.method == 'GET':
        return HttpResponse("HHH")
    elif request.method == 'POST':
        return HttpResponse("done")
