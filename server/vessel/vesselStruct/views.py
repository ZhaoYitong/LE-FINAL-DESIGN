from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
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
        return render(request, 'vessel.view.html')


@csrf_exempt
def test_connect_to_db(request):
    if request.method == 'GET':
        return HttpResponse("JJJ")
    elif request.method == 'POST':
        temp = request.POST
        temp_json = json.loads(request.body.decode('utf-8'))
        print(temp)
        print("*****")
        print(temp_json)
        return HttpResponse("KKK")
    else:
        return
