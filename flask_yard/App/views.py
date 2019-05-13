from flask import Blueprint, render_template, request, jsonify, redirect, url_for
from sqlalchemy import and_
import json
from App.ext import db
from App.models import Yard


blue = Blueprint("first_blue",__name__)


def init_blue(app):
    app.register_blueprint(blueprint=blue)


@blue.route('/')
def home():
    return render_template('home.html')


@blue.route('/yard_layout/',methods=["GET","POST"])
def yard_layout():
    if request.method=="GET":
        return render_template('yard_layout.html')
    else:
        Box_Bay = request.get_json()
        Box = Box_Bay["Box"]
        Bay = Box_Bay["Bay"]
        print(Box+Bay)
        yard_list = Yard.query.filter_by(Box=Box).filter_by(Bay=Bay).all()
        print(len(yard_list))

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

            ####根据集装箱的种类更改color#######
            # if str(yard_list[i].Status) == "1":
            #     yard_color[name] = "red"
            # else:
            #     yard_color[name] = "wheat"

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
        return jsonify(yard_database)


# 实现集装箱信息的录入包括15个字段
# 其中位置字段的选取使用点击堆场的格子实现


@blue.route('/container_info_input/',methods=["POST","GET"])
def container_info_input():
    if request.method == "GET":
        return render_template('container_info_input.html')
    else:
        YardCel = request.form.get("YardCel")
        Status = "1"
        CtnNo = request.form.get("CtnNo")
        StrLoaUnlSig = request.form.get("StrLoaUnlSig")
        CtnTyp = request.form.get("selectCtnTyp")
        CtnWegt = request.form.get("selectCtnWegt")
        UnloadPort = request.form.get("UnloadPort")
        Size = request.form.get("selectSize")
        Owner = request.form.get("Owner")
        LoaVesTim = request.form.get("LoaVesTim")

        Box_Bay_Col_Lay_list = get_Box_Bay_Col_Lay(YardCel)
        Box =Box_Bay_Col_Lay_list[0]
        Bay =Box_Bay_Col_Lay_list[1]
        Col =Box_Bay_Col_Lay_list[2]
        Lay =Box_Bay_Col_Lay_list[3]
        Color ="red"

        container = Yard.query.filter(Yard.YardCel==YardCel).first()

        container.Status = Status
        container.CtnNo	= CtnNo
        container.StrLoaUnlSig = StrLoaUnlSig
        container.CtnTyp = CtnTyp
        container.CtnWegt = CtnWegt
        container.UnloadPort = UnloadPort
        container.Size	= Size
        container.Owner	= Owner
        container.LoaVesTim	= LoaVesTim
        container.Box = Box
        container.Bay = Bay
        container.Col = Col
        container.Lay = Lay
        container.Color = Color

        db.session.commit()
        print("SUCCESSSFUL!")

        return render_template('container_info_input.html')


def get_Box_Bay_Col_Lay(add_str):
    Box = add_str[0]
    add_str = add_str.strip(Box)
    Lay = add_str[-1]
    add_str = add_str.strip(Lay)
    Col = add_str[-1]
    add_str = add_str.strip(Col)
    Bay = add_str
    Box_Bay_Col_Lay_list=[Box, Bay, Col, Lay]
    return Box_Bay_Col_Lay_list






@blue.route('/yard_layout_input/',methods=["GET","POST"])
def yard_layout_input():
    if request.method=="GET":
        return render_template('yard_layout_input.html')
    else:
        Box_Bay = request.get_json()
        Box = Box_Bay["Box"]
        Bay = Box_Bay["Bay"]
        print(Box+Bay)
        yard_list = Yard.query.filter_by(Box=Box).filter_by(Bay=Bay).all()
        print(len(yard_list))
        print("yard_layout_input接到任务")

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
            yard_color[name] = str(yard_list[i].Color)

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


        return jsonify(yard_database)














@blue.route('/boat_pre_weight/')
def boat_pre_weight():
    return  "船舶预配信息"

@blue.route('/boat_load/')
def boat_load():
    return "船舶装货信息"

@blue.route('/boat_load_strategy/')
def boat_load_strategy():
    return "船舶配载策略"

@blue.route('/container_dispatch_strategy/')
def container_dispatch_strategy():
    return "集装箱调度策略"


