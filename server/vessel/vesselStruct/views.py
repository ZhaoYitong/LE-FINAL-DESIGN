from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from .models import vessel_voy_info, ves_struct, ves_bay_struct, ves_bay_lay_struct, con_pend_info, qc_info, qc_dis_plan_out
from django.db.models import Count,Min,Max,Sum

confirm_of_bay_edit = 'RESPONSE_AFTER_CONFIRM_COMBINATION'


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
def edit_bay(request):
    if request.method == 'GET':
        ves_name = request.GET['name']
        bay_num = ves_struct.objects.get(Vessel=ves_name).TweBayNum
        bay_dir = vessel_voy_info.objects.get(Vessel=ves_name).BerThgDir
        print(bay_num)
        print(request.GET['name'])
        data = {'number': bay_num,
                'bayDirection': bay_dir,
                }
        return JsonResponse(data)
    elif request.method == 'POST':
        content = json.loads(request.body.decode('utf-8'))
        ves_name = content['vessel_name']
        bay_inch40 = content['bayInch40s']
        fot_bay_num = len(bay_inch40)
        temp_fot_bay_com = ''
        for i in bay_inch40:
            temp_fot_bay_com += (i + ',')
        fot_bay_com = temp_fot_bay_com[:-1]
        # Update DB
        obj_ves_struct = ves_struct.objects.get(Vessel=ves_name)
        obj_ves_struct.FotBayCom = fot_bay_com
        obj_ves_struct.FotBayNum = fot_bay_num
        obj_ves_struct.save()
        # Get Updated bayCombined Info
        # global confirm_of_bay_edit
        obj_bay_inch20 = ves_bay_struct.objects.filter(Vessel=ves_name)
        print(obj_bay_inch20)
        data_bay = {
            'dataType': confirm_of_bay_edit,
            'vessel_IMO': "001",
            'vessel_name': ves_name,
            'data': [
                {
                    'id': 1,
                    'type': "single",
                    'bayInch20': [
                        {
                            'index': '01',
                        }
                    ],
                },
                {
                    'id': 2,
                    'type': "combine",
                    'bayInch20s': [
                        {
                            'index': '03',
                        },
                        {
                            'index': '05',
                        },
                    ],
                    'bayInch40': [
                        {
                            'index': '04',
                        },
                    ],
                },
            ]
        }
        return JsonResponse(data_bay)


@csrf_exempt
def test_connect_to_db(request):
    if request.method == 'GET':
        # return HttpResponse("JJJ")
        return JsonResponse({'response': 'hhh'})
    elif request.method == 'POST':
        temp = request.POST
        temp_json = json.loads(request.body.decode('utf-8'))
        print(temp)
        print("*****")
        print(temp_json)
        testV = {'hhh': 'connected'}
        return JsonResponse(testV)


# display value in choices
## https://my.oschina.net/esdn/blog/832982