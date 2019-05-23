let container_object;
let container_list_object;
let bay_object;
let box_object;
let yard_yardcel;
let yard_status;
let yard_ctnno;
let yard_strloaunlsig;
let yard_ctntyp;
let yard_ctnwegt;
let yard_unloadport;
let yard_size;
let yard_owner;
let yard_loaVesTim;
let yard_color;
let color_old;
// table
function fun_infor(obj) {
    color_old = obj.style.backgroundColor;
    obj.style.backgroundColor = "yellow";
    document.getElementById("add1").innerText = yard_yardcel[obj.id];
    document.getElementById("add2").innerText = yard_status[obj.id];
    document.getElementById("add3").innerText = yard_ctnno[obj.id];
    document.getElementById("add4").innerText = yard_strloaunlsig[obj.id];
    document.getElementById("add5").innerText = yard_ctntyp[obj.id];
    document.getElementById("add6").innerText = yard_ctnwegt[obj.id];
    document.getElementById("add7").innerText = yard_unloadport[obj.id];
    document.getElementById("add8").innerText = yard_size[obj.id];
    document.getElementById("add9").innerText = yard_owner[obj.id];
    document.getElementById("add10").innerText = yard_loaVesTim[obj.id];
}

function re_fun_infor(obj) {
    obj.style.backgroundColor = yard_color[obj.id];
}

//这里是写出贝位
for (let i = 0; i < 90; i++) {
    let bay = 2 * i + 1;
    $(`.bay_Y`).append(`<div class="bay_Y_num">${bay}</div>`);
}
// 增加列号
let box_title_list = ["A", "B", "C", "D", "E", "F"];
let col_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
for(let i=0; i<box_title_list.length; i++){
    let index = box_title_list[i];
    let box_sub_title = "box_" + index + "_title";
    let box_sub_name = index + "箱区";
    $(`.box_title`).append(`<div class=${box_sub_title}>`+
        `<div class="box_name">${box_sub_name}</div></div>`);
    for(let i = 0; i < col_list.length; i++){
        $(`div[class=${box_sub_title}]`).append(`<div class="box_col">${col_list[i]}</div>`);
    }
}
//这里是画箱子   箱区  贝位 列
for(let i=0; i<box_title_list.length; i++){
    let box_area_sub = "box_" + box_title_list[i];
    let yard_add = box_title_list[i];
    $(`.box_area`).append(`<div class=${box_area_sub}></div>`);
    for(let j=0; j<900; j++){
        let bay_str = String(parseInt(j / 10) * 2 + 1);
        let col_str = col_list[j % 10];
        $(`div[class=${box_area_sub}]`).append(`<div class="container-all" yard=${yard_add} bay=${bay_str} col=${col_str} onclick="container_add(this,event)"></div>`);
    }
}

function container_add(container_this, e) {
    let data = {
        "Box": container_this.getAttribute("yard"),
        "Bay": container_this.getAttribute("bay")
    };
    $.ajax({
        url: "",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(data),
        dataType: "text",
        success: function (yard_database) {
            yard_database = JSON.parse(yard_database);

            yard_yardcel = yard_database["yard_yardcel"];
            yard_status = yard_database["yard_status"];
            yard_ctnno = yard_database["yard_ctnno"];
            yard_strloaunlsig = yard_database["yard_strloaunlsig"];
            yard_ctntyp = yard_database["yard_ctntyp"];
            yard_ctnwegt = yard_database["yard_ctnwegt"];
            yard_unloadport = yard_database["yard_unloadport"];
            yard_size = yard_database["yard_size"];
            yard_owner = yard_database["yard_owner"];
            yard_loaVesTim = yard_database["yard_loaVesTim"];
            yard_color = yard_database["yard_color"];

            //console.log(yard_database);


            let col_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
            let lay_list = ["1", "2", "3", "4", "5"];
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 10; j++) {
                    let find_str = col_list[j] + lay_list[i];
                    document.getElementById(find_str).style.backgroundColor = yard_color[find_str];
                }
            }
            con_tab.hidden = false;
        },
        error: function (msg) {
            //alert("发送失败");
        }
    });

    //判断空值还原颜色
    if (container_object) {
        container_object.style.backgroundColor = "darksalmon";
        for (let i = 0; i < 10; i++) {
            container_list_object[i].style.backgroundColor = "darksalmon";
        }
        let con_tab = document.getElementById("container_information");
        con_tab.style.left = "383px";
        con_tab.style.top = "100px";
    }
    if (bay_object) {
        bay_object.style.backgroundColor = "skyblue";
    }
    if (box_object) {
        box_object.style.backgroundColor = "skyblue";
    }

    //////////////////操作table
    let yard = container_this.getAttribute("yard");
    let bay = container_this.getAttribute("bay");
    let con_tab = document.getElementById("container_information");
    let pos_str = yard + "箱区" + "*" + bay + "贝位" + "*" + "详细信息";
    document.getElementById("container_information_title").innerText = pos_str;


    /////////////更改每个箱位的颜色

    //更改表格属性颜色  yard_list
    //在点击后获取到箱区 贝位相同的集装箱箱位
    //在确定了层和列后设置颜色
    //改变集装箱颜色 贝位颜色 箱区颜色
    container_this.style.backgroundColor = "red";

    //改变整个贝位的颜色

    let bay_list = document.getElementsByClassName("container");

    let bay_obj_list = [];
    for (let i = 0; i < bay_list.length; i++) {
        let yard_list_str = bay_list[i].getAttribute("yard");
        let bay_list_str = bay_list[i].getAttribute("bay");
        if (yard_list_str === yard && bay_list_str === bay) {
            bay_obj_list.push(bay_list[i]);
        }
    }
    for (let i = 0; i < 10; i++) {
        bay_obj_list[i].style.backgroundColor = "red";
    }

    //传递整个贝位
    container_list_object = bay_obj_list;

    let bay_list_1 = document.getElementsByClassName("bay_Y_num");
    for (let i = 0; i < 90; i++) {
        let bay_obj = bay_list_1[i];
        if (bay_obj.innerHTML === bay) {
            bay_obj.style.backgroundColor = "red";
            bay_object = bay_obj;
            break;
        }
    }

    let box_list = document.getElementsByClassName("box_name");
    for (let i = 0; i < 6; i++) {
        let box_obj = box_list[i];
        if (box_obj.innerHTML === (yard + "箱区")) {
            box_obj.style.backgroundColor = "red";
            box_object = box_obj;
            break;
        }
    }
    //传递集装箱
    container_object = container_this;
}

function des() {
    let con_tab = document.getElementById("container_information");
    con_tab.hidden = true;
    // 还原 颜色 坐标
    container_object.style.backgroundColor = "darksalmon";
    for (let i = 0; i < 10; i++) {
        container_list_object[i].style.backgroundColor = "darksalmon";
    }

    bay_object.style.backgroundColor = "skyblue";
    box_object.style.backgroundColor = "skyblue";
    con_tab.style.left = "383px";
    con_tab.style.top = "100px";

    let col_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let lay_list = ["1", "2", "3", "4", "5"];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            let find_str = col_list[j] + lay_list[i];
            document.getElementById(find_str).style.backgroundColor = "wheat";
        }
    }
}
/***
 *
 *  zoom in and out
 */
function setZoom(zoom,el) {
    let transformOrigin = [0,0];
    // el = el || el.getContainerNode();
    let p = ["webkit", "moz", "ms", "o"],
        s = "scale(" + zoom + ")",
        oString = (transformOrigin[0] * 100) + "% " + (transformOrigin[1] * 100) + "%";
    for (let i = 0; i < p.length; i++) {
        el.style[p[i] + "Transform"] = s;
        el.style[p[i] + "TransformOrigin"] = oString;
    }
    el.style["transform"] = s;
    el.style["transformOrigin"] = oString;
}
function showVal(a){
    let zoomScale = Number(a)/10;
    setZoom(zoomScale,document.getElementById('terminal-all'));
}
/**
 * ***************vessel area*****************
 */
/**
 *  const
 */
const VESSEL_IMO = "船舶航次：";
const BAY_INDEX_TIP = "贝位号: ";
/**
 *  variable initialize
 */
let selected_vessel = $(`#vesselSelect option:selected`).val();
/**
 * @classname
 */
/*
    pos_x : bayIndex
    pos_y : rowIndex
    pos_z : layerIndex
 */
/**
 *  data
 */
/**
 * custom function
 */
// id number to string
function numToIdString(num) {
    return num < 10 ? "0" + num.toString() : num.toString();
}
// is exist in array (str)
function isExist(array,value){
    for(let i=0;i<array.length;i++){
        if(array[i] === value){
            return true;
        }
    }
    return false;
}
function toAbsent(value) {
    return value>0?value:-value;
}
function directionDealer(num, dir, func, isInverse) {
    // set isInverse as args to control
    // TODO: uniform isInverse
    if (isInverse) {
        if (dir === 'L') {
        for (let a=0; a<num; a++) {
            func(a,dir);
        }
        }
        else {
            for (let b=num-1; b>=0; b--) {
                func(b,dir);
            }
        }
    }
    else {
        if (dir === 'L') {
        for (let d=num-1; d>=0; d--) {
            func(d,dir);
        }
        }
        else {
            for (let c=0; c<num; c++) {
                func(c,dir);
            }
        }
    }
}
/**
 *  initialize bay area
 */
function BayNumToRealIndexList(bayNum) {
    let bay = {};
    bay.inch20 = [];
    for (let i=0;i<bayNum;i++){
        bay.inch20[i] = {
            "id":i+1,
            "bayRealIndex":numToIdString(i*2+1)
        };
    }
    return bay;
}
// layer above
// layer below
function layerNumToRealIndexList(layerNumAbove,layerNumBelow) {
    let layer = {};
    layer.above = [];
    layer.below = [];
    for (let i=0; i<layerNumAbove; i++){
        layer.above[i] = {
            id: i+1,
            layerRealIndex: numToIdString((i+41)*2),
        }
    }
    for (let j=0; j<layerNumBelow; j++){
        layer.below[j] = {
            id: j+1,
            layerRealIndex: numToIdString((j+1)*2),
        }
    }
    return layer;
}
function createBayCombinationInfo(newList) {
    let newBay_num = newList.data.length;
    let dataList = newList.data;
    let dir = newList.bayDirection;
    // TODO: func to createLoadOrUnloadInfo
    let drawNewBay = function (index, bay_dir) {
        let itemId = dataList[index].id;
        if (dataList[index].type === "single") {
            let bayIndex = dataList[index].bayInch20[0].index;
            $(`.newBayArea`).append(`<div id= ${itemId} bay_index=${bayIndex} class="newBay20 bay-20">` +
                `<span class="newBay20Index">${dataList[index].bayInch20[0].index}</span>` +
                `</div>`);
        } else {
            if (bay_dir === 'R'){
                let bay40_index = dataList[index].bayInch40[0].index;
                let bay20_left = dataList[index].bayInch20s[1].index;
                let bay20_right = dataList[index].bayInch20s[0].index;
                $(`.newBayArea`).append(`<div id= ${itemId} class="comBay20_40">` +
                    `<div class="newBay40InCom bay-40">` +
                    `<span class="newBay40IndexInCom">${bay40_index}</span>` +
                    `</div>` +
                    `<div class="newBay20InComParent">` +
                    `<div class="newBay20InComLeft bay-20">`+
                    `<span class="newBay20IndexInCom">${bay20_left}</span></div>` +
                    `<div class="newBay20InComRight bay-20">`+
                    `<span class="newBay20IndexInCom">${bay20_right}</span></div>` +
                    `</div>` +
                    `</div>`);
            }
            else {
                // bay_dir === 'L'
                let bay40_index = dataList[index].bayInch40[0].index;
                let bay20_left = dataList[index].bayInch20s[0].index;
                let bay20_right = dataList[index].bayInch20s[1].index;
                $(`.newBayArea`).append(`<div id= ${itemId} class="comBay20_40">` +
                    `<div class="newBay40InCom bay-40">` +
                    `<span class="newBay40IndexInCom">${bay40_index}</span>` +
                    `</div>` +
                    `<div class="newBay20InComParent">` +
                    `<div class="newBay20InComLeft bay-20">`+
                    `<span class="newBay20IndexInCom">${bay20_left}</span></div>` +
                    `<div class="newBay20InComRight bay-20">`+
                    `<span class="newBay20IndexInCom">${bay20_right}</span></div></div>` +
                    `</div>`);
            }
        }
    };
    let isInverse = true;
    directionDealer(newBay_num, dir, drawNewBay, isInverse);

    // TODO: as bayArea is created dynamically, use on click
    // TODO: disable this func before bayCombined!
    $(`.bay-20`).on('click', function () {
        let index = this.childNodes[0].innerText;
        let ves_selected = $(`#vesselSelect option:selected`).val();
        $.ajax({
            url: '/vesselStruct/define_bay/',
            type: 'GET',
            data: {
                name: ves_selected,
                index: index,
            },
            dataType: "json",
            success: function (res) {
                console.log(res);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
            },
        });
    });
    $(`[class="newBay20"][id="6"]`).addClass("blink");
    $(`[class="newBay20"][id="7"]`).addClass("blink");
}
/**
 *  vessel creation
 */
function createVesselSide(){
    $(`.createVessel`)[0].disabled = true;
    $.ajax({
        url: '/vesselStruct/ves_struct/',
        type: 'GET',
        data: {
            name: selected_vessel,
        },
        dataType: "json",
        success: function (res) {
            console.log(res);
            let bay_num = res.bay_inch20_num;
            let layerNumAbove = res.max_layer_above_number;
            let layerNumBelow = res.max_layer_below_number;
            let dir = res.bayDirection;
            let eng_list_ind = res.engine_room_index;
            drawVesselStruct(bay_num, layerNumAbove, layerNumBelow, dir, eng_list_ind)
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
    });
}
function drawVesselStruct(bay_num, lay_above_num, lay_below_num, dir, engine_list) {
    let bayLists = BayNumToRealIndexList(bay_num);
    let layerLists = layerNumToRealIndexList(lay_above_num,lay_below_num);
    let conZone_bay_num = bayLists.inch20.length;
    let conZone_layerAbove_num = layerLists.above.length;
    let conZone_layerBelow_num = layerLists.below.length;
    let eng_list_index = engine_list;
    // TODO: change conZoneAbove_inch20 according maxLayer input
    // TODO: tip1: set fixed height according maxLayer input
    let drawVesBayArea = function (index,args_dir) {
        let conZoneBayIndex = bayLists.inch20[index].bayRealIndex;
        $(`.onBoardSide`).append(`<div pos_x=${conZoneBayIndex} class="bayAbove_20"></div>`);
        $(`.belowBoardSide`).append(`<div pos_x=${conZoneBayIndex} class="bayBelow_20"></div>`);
    };
    let isInverse = true;
    directionDealer(conZone_bay_num,dir,drawVesBayArea,isInverse);
    // zone: bay + layer
    for(let j=0;j<conZone_bay_num;j++){
        let conZoneBayIndex = bayLists.inch20[j].bayRealIndex;
        for(let k=conZone_layerAbove_num-1;k>=0;k--){
            let conZoneLayerIndex = layerLists.above[k].layerRealIndex;
            let item = `<div class="conZone_20" p_x=${conZoneBayIndex} p_z=${conZoneLayerIndex}></div>`;
            $(`.onBoardSide div[pos_x=${conZoneBayIndex}]`).append(item);
        }
        for(let m=conZone_layerBelow_num-1;m>=0;m--){
            let conZoneLayerIndex = layerLists.below[m].layerRealIndex;
            let item = `<div class="conZone_20" p_x=${conZoneBayIndex} p_z=${conZoneLayerIndex}></div>`;
            $(`.belowBoardSide div[pos_x=${conZoneBayIndex}]`).append(item);
        }
    }
    // css control ves body, engine, and container zone
    $(`.bayAbove_20`).children('div').addClass("vessel_inch20_default");
    $(`.bayBelow_20`).children('div').addClass("vessel_inch20_default");
    console.log(eng_list_index);
    for (let i=0; i<eng_list_index.length; i++) {
        let index = eng_list_index[i].toString();
        console.log(index);
        $(`div[p_x=${index}]`).addClass("vesselBody_inch20");
    }
}
/**
 *  combination buttons
 */
function getCombineInfo (){
    $(`.bayCombineInfo`)[0].disabled = true;
    selected_vessel = $(`#vesselSelect option:selected`).val();
    $.ajax({
        url: '/vesselStruct/edit_bay/',
        type: 'GET',
        data: {
            name: selected_vessel,
            type: 'current_info',
        },
        dataType: "json",
        success: function (res) {
            console.log(res);
            createBayCombinationInfo(res);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
    });
}