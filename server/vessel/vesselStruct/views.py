from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from .models import vessel_voy_info, ves_struct, ves_bay_struct, ves_bay_lay_struct, con_pend_info, qc_info, qc_dis_plan_out


def index(request):
    if request.method == 'GET':
        return render(request, 'index.html')


def page_not_found(request):
    if request.method == 'GET':
        return render(request, '404.html')


def ves_basic(request):
    if request.method == 'GET':
        all_vessel = [item.Vessel for item in vessel_voy_info.objects.all()]
        return render(request, 'VESSEL/vessel.view.html', {'all_vessel': all_vessel})


@csrf_exempt
def ves_info_input(request):
    if request.method == 'GET':
        return render(request, 'VESSEL/vessel.input.basicInfo.html')
    elif request.method == 'POST':
        print("ves_info_input_post"+json.loads(request.body.decode('utf-8')))

        return render(request, 'VESSEL/vessel.input.basicInfo.html')


@csrf_exempt
def temp_get_bay_inch20(request):
    if request.method == 'GET':
        ves_name = request.GET['name']
        bay_num = ves_struct.objects.get(Vessel=ves_name).TweBayNum
        bay_dir = vessel_voy_info.objects.get(Vessel=ves_name).BerThgDir
        print(bay_num)
        print(request.GET['name'])
        data = {'number': bay_num,
                'bayDirection': bay_dir,
                }
        # return JsonResponse({'number': bay_num})
        return JsonResponse(data)


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