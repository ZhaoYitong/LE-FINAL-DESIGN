from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Yard


@csrf_exempt
def yard_layout(request):
    if request.method == "GET":
        return render(request, 'yard.view.layout.html')
    else:
        Box_Bay = json.loads(request.body.decode('utf-8'))
        print(Box_Bay)
        Box = Box_Bay["Box"]
        Bay = Box_Bay["Bay"]
        print("Box: \n" + Box)
        print("Bay: \n" + Bay)
        # TODO: Update query and write value to table Yard!!!
        yard_list = Yard.query.filter_by(Box=Box).filter_by(Bay=Bay).all()
        yard_database = dict()
        yard_yardcel = dict()
        yard_status = dict()
        yard_ctnno = dict()
        yard_strloaunlsig = dict()
        yard_ctntyp = dict()
        yard_ctnwegt = dict()
        yard_unloadport = dict()
        yard_size = dict()
        yard_owner = dict()
        yard_loaVesTim = dict()
        yard_color =dict()

        for i in range(50):
            name = str(yard_list[i].Col+yard_list[i].Lay)
            yard_yardcel[name] = str(yard_list[i].YardCel)
            yard_status[name] =  str(yard_list[i].Status)
            yard_ctnno[name] = str(yard_list[i].CtnNo)
            yard_strloaunlsig[name] = str(yard_list[i].StrLoaUnlSig)
            yard_ctntyp[name] = str(yard_list[i].CtnTyp)
            yard_ctnwegt[name] = str(yard_list[i].CtnWegt)
            yard_unloadport[name] = str(yard_list[i].UnloadPort)
            yard_size[name] = str(yard_list[i].Size)
            yard_owner[name] = str(yard_list[i].Owner)
            yard_loaVesTim[name] = str(yard_list[i].LoaVesTim)
            yard_color[name] = yard_list[i].Color

        yard_database["yard_yardcel"]= yard_yardcel
        yard_database["yard_status"] = yard_status
        yard_database["yard_ctnno"] = yard_ctnno
        yard_database["yard_strloaunlsig"] = yard_strloaunlsig
        yard_database["yard_ctntyp"] = yard_ctntyp
        yard_database["yard_ctnwegt"] = yard_ctnwegt
        yard_database["yard_unloadport"] = yard_unloadport
        yard_database["yard_size"] = yard_size
        yard_database["yard_owner"] = yard_owner
        yard_database["yard_loaVesTim"] = yard_loaVesTim
        yard_database["yard_color"] = yard_color

        print("yard_database: \n" + yard_database)
        return JsonResponse(yard_database)
