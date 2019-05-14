from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
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
        return render(request, 'VESSEL/vessel.view.html')


@csrf_exempt
def ves_info_input(request):
    if request.method == 'GET':
        return render(request, 'VESSEL/vessel.input.basicInfo.html')
    elif request.method == 'POST':
        print("ves_info_input_post"+json.loads(request.body.decode('utf-8')))

        return render(request, 'VESSEL/vessel.input.basicInfo.html')


@csrf_exempt
def test_connect_to_db(request):
    if request.method == 'GET':
        # return HttpResponse("JJJ")
        return JsonResponse({'response': 'hhh'})
    elif request.method == 'POST':
        # temp = request.POST
        # temp_json = json.loads(request.body.decode('utf-8'))
        # print(temp)
        # print("*****")
        # print(temp_js  on)
        return JsonResponse({'list': 'abc'})
    else:
        return


# display value in choices
## https://my.oschina.net/esdn/blog/832982