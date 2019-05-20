from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import random
from django.http import JsonResponse
from .models import vessel_voy_info, ves_struct, ves_bay_struct, \
    ves_bay_lay_struct, con_pend_info, qc_info, qc_dis_plan_out
from django.db.models import Count,Min,Max,Sum
from .methods import index_to_num, combined_bay_list, create_engine_index, \
    create_index_list, num_to_index, bay_num_to_index_list

# TODO:
# display value in choices
#  https://my.oschina.net/esdn/blog/832982

# const
confirm_of_bay_edit = 'RESPONSE_AFTER_CONFIRM_COMBINATION'
ves_side_view = 'VESSEL_SIDE_VIEWING'
con_pending_info = 'VESSEL_CONTAINER_PENDING_INFO'


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
def ves_struct_input(request):
    if request.method == 'GET':
        all_vessel = [item.Vessel for item in vessel_voy_info.objects.all()]
        return render(request, 'VESSEL/vessel.input.basicInfo.html', {'all_vessel': all_vessel})
    elif request.method == 'POST':
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

        if obj_temp_inch40.FotBayCom:
            bay_inch40_list = sorted(index_to_num(obj_temp_inch40.FotBayCom.split(",")))
        else:
            bay_inch40_list = []
        data_bay_list = combined_bay_list(bay_inch20_list, bay_inch40_list)
        bay_dir = vessel_voy_info.objects.get(Vessel=ves_name).BerThgDir

        data_bay = {
            'dataType': confirm_of_bay_edit,
            'vessel_IMO': "001",
            'vessel_name': ves_name,
            'data': data_bay_list,
            'bayDirection': bay_dir,
        }
        ####################################
        # TODO: add random value after bay combination
        # generate random container pending info
        for i in obj_bay_inch20:
            obj = con_pend_info.objects.get(Vessel=ves_name, BayNo=i.BayNo)
            obj.DeckLodNum = random.randrange(0, 50, 1)
            obj.DeckUloNum = random.randrange(0, 50, 1)
            obj.CabLoaNum = random.randrange(0, 50, 1)
            obj.CabUloNum = random.randrange(0, 50, 1)
            obj.save()
        for j in bay_inch40:
            obj = con_pend_info.objects.get(Vessel=ves_name, BayNo=j)
            obj.DeckLodNum = random.randrange(0, 50, 1)
            obj.DeckUloNum = random.randrange(0, 50, 1)
            obj.CabLoaNum = random.randrange(0, 50, 1)
            obj.CabUloNum = random.randrange(0, 50, 1)
            obj.save()
        ####################################
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
        # TODO: vessel_info !
        data_content = {
            'dataType': ves_side_view,
            'bayDirection': ves_bay_dir,
            'vessel_name': ves_name,
            'vessel_width': ves_width,
            'vessel_frontLength': ves_front_length,
            'vessel_length': ves_length,
            'bay_inch20_num': ves_bay_inch20_num,
            'bay_inch40_num': ves_bay_inch40_num,
            'max_layer_above_number': ves_deck_lay_num_max,
            'max_layer_below_number': ves_cab_lay_num_max,
            'engine_room_index': eng_body_list,
            'mid_bay_deal': ves_mid_bay_deal_wit,
            'load_weight': ves_load_weight,
            'deck_capacity': ves_deck_cap_weight,
            'cabin_capacity': ves_cab_cap,
            'max_col_above_number': ves_deck_col_num_max,
            'max_col_below_number': ves_cab_col_num_max,
            'vessel': [

            ],
        }
        print('\n'.join('{}: {}'.format(*k) for k in enumerate(data_content)))
        return JsonResponse(data_content)
    elif request.method == 'POST':
        return JsonResponse({'ves_struct': 'bbb'})


@csrf_exempt
def test_connect_to_db(request):
    if request.method == 'GET':
        return JsonResponse({'response': 'hhh'})
    elif request.method == 'POST':
        testV = {'hhh': 'connected'}
        return JsonResponse(testV)


@csrf_exempt
def get_con_pend_info(request):
    # TODO: update DB, CLEAR table: con_pend_info
    if request.method == 'GET':
        ves_name = request.GET['name']
        # Get From DB
        obj_bay_inch20 = ves_bay_struct.objects.filter(Vessel=ves_name, BaySiz='20')
        obj_temp_inch40 = ves_struct.objects.get(Vessel=ves_name)
        bay_inch20_list = sorted(index_to_num([item.BayNo for item in obj_bay_inch20]))
        if obj_temp_inch40.FotBayCom:
            bay_inch40_list = sorted(index_to_num(obj_temp_inch40.FotBayCom.split(",")))
        else:
            bay_inch40_list = []
        data_bay_list = combined_bay_list(bay_inch20_list, bay_inch40_list)
        bay_dir = vessel_voy_info.objects.get(Vessel=ves_name).BerThgDir
        # con_pending_data
        bay_inch20_pend_list = []
        bay_inch40_pend_list = []
        for bay_20_index in bay_inch20_list:
            index_bay = num_to_index(bay_20_index)
            obj = con_pend_info.objects.get(Vessel=ves_name, BayNo=index_bay)
            above_load = obj.DeckLodNum
            above_unload = obj.DeckUloNum
            below_load = obj.CabLoaNum
            below_unload = obj.CabUloNum
            bay_inch20_pend_list.append({
                'type': 'inch20',
                'index': index_bay,
                'data': {
                    'above_load': above_load,
                    'above_unload': above_unload,
                    'below_load': below_load,
                    'below_unload': below_unload,
                }
            })
        for bay_40_index in bay_inch40_list:
            index_bay = num_to_index(bay_40_index)
            obj = con_pend_info.objects.get(Vessel=ves_name, BayNo=index_bay)
            above_load = obj.DeckLodNum
            above_unload = obj.DeckUloNum
            below_load = obj.CabLoaNum
            below_unload = obj.CabUloNum
            bay_inch40_pend_list.append({
                'type': 'inch40',
                'index': index_bay,
                'data': {
                    'above_load': above_load,
                    'above_unload': above_unload,
                    'below_load': below_load,
                    'below_unload': below_unload,
                }
            })
        # engine_list
        obj = ves_struct.objects.get(Vessel=ves_name)
        engine_pos = obj.EngRomPos
        engine_width = obj.EngRomWid
        eng_body_list = create_engine_index(engine_pos, engine_width)
        data_content = {
            'dataType': con_pending_info,
            'vessel_IMO': "001",
            'vessel_name': ves_name,
            'bay_list': data_bay_list,
            'bayDirection': bay_dir,
            'data_list': {
                'inch20': bay_inch20_pend_list,
                'inch40': bay_inch40_pend_list,
            },
            'engineRoomIndex': eng_body_list,
        }
        return JsonResponse(data_content)


@csrf_exempt
def test_creat_pend_info(request):
    if request.method == 'GET':
        name = request.GET['name']
        obj_bay_inch20 = ves_bay_struct.objects.filter(Vessel=name,BaySiz='20')
        obj_temp_inch40 = ves_struct.objects.get(Vessel=name)
        bay_inch20_list = sorted(index_to_num([item.BayNo for item in obj_bay_inch20]))

        if obj_temp_inch40.FotBayCom:
            bay_inch40_list = sorted(index_to_num(obj_temp_inch40.FotBayCom.split(",")))
        else:
            bay_inch40_list = []
        data_bay_list = combined_bay_list(bay_inch20_list,bay_inch40_list)
        bay_dir = vessel_voy_info.objects.get(Vessel=name).BerThgDir

        context = {
            'dataType': 'EDIT_CONTAINER_PENDING_INFO',
            'vessel_IMO': "001",
            'vessel_name': name,
            'data': data_bay_list,
            'bayDirection': bay_dir,
        }
        return JsonResponse(context)

    elif request.method == 'POST':
        temp_lists = json.loads(request.body.decode('utf-8'))
        vessel_name = temp_lists['vessel_name']
        print(temp_lists)
        test = {'hhh': 'test_creat_pend_info'}
        unload_40_list = temp_lists['unload_40_list']
        unload_20_list = temp_lists['unload_20_list']
        load_40_list = temp_lists['load_40_list']
        load_20_list = temp_lists['load_20_list']
        for item in unload_40_list:
            index = item['index']
            num = item['num']
            obj = con_pend_info.objects.get(Vessel=vessel_name, BayNo=index)
        return JsonResponse(test)


@csrf_exempt
def add_vessel(request):
    if request.method == 'POST':
        content = json.loads(request.body.decode('utf-8'))
        ves_name = content['ves_name']
        ves_length = float(content['ves_len'])
        ves_width = float(content['ves_wid'])
        ves_front_length = float(content['ves_fr_len'])
        ves_bay_20_num = int(content['bay_20_num'])
        ves_eng_pos = int(content['eng_pos'])
        ves_eng_wid = int(content['eng_wid'])
        ves_deck_max_lay = int(content['deck_max_lay'])
        ves_cab_max_lay = int(content['cab_max_lay'])
        ves_deck_max_col = int(content['deck_max_col'])
        ves_cab_max_col = int(content['cab_max_col'])
        ves_imp_voy = content['ves_imp_voy']
        ves_exp_voy = content['ves_exp_voy']
        plan_ber_pos = content['plan_ber_pos']
        real_ber_pos = float(content['real_ber_pos'])
        ves_ber_dir = content['ves_ber_dir']

        # check if vessel_name exists
        try:
            obj = ves_struct.objects.get(Vessel=ves_name)
        except ves_struct.DoesNotExist:
            obj = None

        if obj is None:
            print("vessel is ok ")
            bay_index_list = bay_num_to_index_list(ves_bay_20_num)
            # add to DB
            ves_struct.objects.create(Vessel=ves_name,
                                      VesLeng=ves_length,
                                      VesWidth=ves_width,
                                      VesFrLeng=ves_front_length,
                                      TweBayNum=ves_bay_20_num,
                                      EngRomPos=ves_eng_pos,
                                      EngRomWid=ves_eng_wid,
                                      DeckLayNumMax=ves_deck_max_lay,
                                      CabLayNumMax=ves_cab_max_lay,
                                      DeckColNumMax=ves_deck_max_col,
                                      CabColNumMax=ves_cab_max_col)
            vessel_voy_info.objects.create(Vessel=ves_name,
                                           ImpVoy=ves_imp_voy,
                                           ExpVoy=ves_exp_voy,
                                           PlaBerThgPos=plan_ber_pos,
                                           ActBerPos=real_ber_pos,
                                           BerThgDir=ves_ber_dir)
            for i in bay_index_list:
                con_pend_info.objects.create(Vessel=ves_name, BayNo=i['index'])
                ves_bay_struct.objects.create(Vessel=ves_name, BayNo=i['index'], BaySiz=i['size'])
            return JsonResponse({'CREATE VESSEL': 'DONE!'})
        else:
            return JsonResponse({'WARNING': 'vessel_name is already exist'})
