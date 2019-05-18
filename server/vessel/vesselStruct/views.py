from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from .models import vessel_voy_info, ves_struct, ves_bay_struct, ves_bay_lay_struct, con_pend_info, qc_info, qc_dis_plan_out
from django.db.models import Count,Min,Max,Sum
from .methods import index_to_num, combined_bay_list, create_engine_index, create_index_list

# const
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
        obj = ves_struct.objects.get(Vessel=ves_name)
        bay_num = obj.TweBayNum
        engine_pos = obj.EngRomPos
        engine_width = obj.EngRomWid
        eng_body_list = create_engine_index(engine_pos, engine_width)
        bay_dir = vessel_voy_info.objects.get(Vessel=ves_name).BerThgDir

        data = {'number': bay_num,
                'bayDirection': bay_dir,
                'engineRoomIndex': eng_body_list,
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
        # Get From DB
        obj_bay_inch20 = ves_bay_struct.objects.filter(Vessel=ves_name, BaySiz='20')
        obj_temp_inch40 = ves_struct.objects.get(Vessel=ves_name)
        bay_inch20_list = sorted(index_to_num([item.BayNo for item in obj_bay_inch20]))
        bay_inch40_list = sorted(index_to_num(obj_temp_inch40.FotBayCom.split(",")))
        data_bay_list = combined_bay_list(bay_inch20_list, bay_inch40_list)
        data_bay = {
            'dataType': confirm_of_bay_edit,
            'vessel_IMO': "001",
            'vessel_name': ves_name,
            'data': data_bay_list
        }
        return JsonResponse(data_bay)
    elif request.method == 'DELETE':
        return JsonResponse({'delete': 'done'})


@csrf_exempt
def create_ves_struct(request):
    if request.method == 'GET':
        name = request.GET['name']
        obj = ves_struct.objects.get(Vessel=name)
        ves_name = obj.Vessel
        ves_length = obj.VesLeng
        ves_width = obj.VesWidth
        ves_front_length = obj.VesFrLeng
        ves_bay_inch20_num = obj.TweBayNum
        ves_bay_inch40_num = obj.FotBayNum
        ves_eng_pos = obj.EngRomPos
        ves_eng_wid = obj.EngRomWid
        ves_mid_bay_deal_wit = obj.MidBayDeaWit
        ves_load_weight = obj.LoadWeigth
        ves_deck_cap_weight = obj.DeckCapWegt
        ves_cab_cap = obj.CabCap
        ves_deck_lay_num_max = obj.DeckLayNumMax
        ves_cab_lay_num_max = obj.CabLayNumMax
        ves_deck_col_num_max = obj.DeckColNumMax
        ves_cab_col_num_max = obj.CabColNumMax
        ves_bay_dir = vessel_voy_info.objects.get(Vessel=name).BerThgDir
        eng_body_list = create_engine_index(ves_eng_pos, ves_eng_wid)#?

        # min to max (down to up)
        ves_deck_lay_list = create_index_list(ves_deck_lay_num_max)
        ves_cab_lay_list = create_index_list(ves_cab_col_num_max)
        data_content = {
            'bayDirection': ves_bay_dir,
            'vessel_name': ves_name,
            'vessel_width': ves_width,
            'vessel_frontLength': ves_front_length,
            'vessel_length': ves_length,
            'bay_inch20_num': ves_bay_inch20_num,
            'bay_inch40_num': ves_bay_inch40_num,
            'max_layer_above_number': ves_deck_lay_num_max,
            'max_layer_below_number': ves_cab_lay_num_max,
            'engineRoomIndex': eng_body_list,
            'mid_bay_deal': ves_mid_bay_deal_wit,
            'load_weight': ves_load_weight,
            'deck_capacity': ves_deck_cap_weight,
            'cabin_capacity': ves_cab_cap,
            'max_col_above_number': ves_deck_col_num_max,
            'max_col_below_number': ves_cab_col_num_max,
            'vessel': [

            ],
        }
        return JsonResponse(data_content)
    elif request.method == 'POST':
        return JsonResponse({'ves_struct': 'bbb'})


@csrf_exempt
def test_connect_to_db(request):
    if request.method == 'GET':
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