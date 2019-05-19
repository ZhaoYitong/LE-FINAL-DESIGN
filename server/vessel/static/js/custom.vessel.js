/**
 *  const
 */
const VESSEL_IMO = "船舶航次：";
const BAY_INDEX_TIP = "贝位号: ";
const TIP_PLEASE_RESELECT = "请重新选择";
const IS_TO_RESELECT= "确认重新组贝？";
/**
 *  variable initialize
 */
let selected_vessel = $(`#vesselSelect option:selected`).val(); // !!!
let combinedBay20inch = [];
let combinedBay40inch = [];
/**
 * @type {number}
 */
/*
    pos_x : bayIndex
    pos_y : rowIndex
    pos_z : layerIndex
 */
let VIEW_SIDE = {
    dataType: "",
    bayDirection: "",
    watchType: "sideViewing",
    vessel_id:"001",
    vessel_IMO:"KuiYa123",
    vessel_name:"亚历山大",
    vessel_width:"30m",
    vessel_frontLength:"100m",
    vessel_length:"300m",
    bay_inch20_num: 30,
    max_layer_above_number: 8, // all above
    max_layer_below_number: 5,  // all below
    hatCover_kind:"自开式",
    hatCover_number: 1,
    // create vessel
    vessel: [
           //  down to up
           // below: 02 04 06 08 10
           // above: 82 84 86 88 90 92 94 96 98
           // all: ["01", "03", "05", "07", "09", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29","31", "33", "35", "37", "39", "41", "43", "45", "47", "49","51", "53", "55", "57", "59",],
           // TODO: create a function to solve the value creation:
           // TODO: layer: set left end and right end. Then create bayIndexList and conIndexList
           {
               layerIndex: "02",
               bayIndexList: ["07", "09", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "39", "41", "43", "45", "47", "49", "51",],
               conZoneIndexList: ["35","37"],
           },
           {
               layerIndex: "04",
               bayIndexList: ["05", "07", "17","19", "49", "51", "53",],
               conZoneIndexList: ["09","11","13", "15","21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47"],
           },
           {
                layerIndex: "06",
                bayIndexList: ["03","05", "17","19","53","59"],
                conZoneIndexList: ["07","09","11","13", "15","21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47","49","51",],

           },
           {
               layerIndex: "08",
               bayIndexList: ["01", "03", "05", "17","19", "53", "55", "57", "59",],
               conZoneIndexList: ["07","09","11","13", "15","21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47","49","51",],
           },
           {
               layerIndex: "10",
               bayIndexList: ["01", "03", "17","19", "57", "59",],
               conZoneIndexList: ["05","07","09","11","13", "15","21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47","49","51", "53", "55",],

           },
           {
               layerIndex: "82",
               bayIndexList: ["17","19"],
               conZoneIndexList: ["01", "03", "05", "07", "09", "11", "13", "15", "21", "23", "25", "27", "29","31", "33", "35", "37", "39", "41", "43", "45", "47", "49","51", "53", "55", "57", "59",],

           },
           {
               layerIndex: "84",
               bayIndexList: [ "17","19",],
               conZoneIndexList: ["01", "03", "05", "07", "09", "11", "13", "15", "21", "23", "25", "27", "29","31", "33", "35", "37", "39", "41", "43", "45", "47", "49","51", "53", "55", "57", "59",],

           },
           {
               layerIndex: "86",
               bayIndexList: [ "17","19",],
               conZoneIndexList: ["01", "03", "05", "07", "09", "11", "13", "15", "21", "23", "25", "27", "29","31", "33", "35", "37", "39", "41", "43", "45", "47", "49","51", "53", "55", "57", "59",],

           },
           {
               layerIndex: "88",
               bayIndexList: [ "17","19",],
               conZoneIndexList: ["01", "03", "05", "07", "09", "11", "13", "15", "21", "23", "25", "27", "29","31", "33", "35", "37", "39", "41", "43", "45", "47", "49","51", "53", "55", "57", "59",],

           },
           {
               layerIndex: "90",
               bayIndexList: [ "17","19",],
               conZoneIndexList: ["01", "03", "05", "07", "09", "11", "13", "15", "21", "23", "25", "27", "29","31", "33", "35", "37", "39", "41", "43", "45", "47", "49","51", "53", "55", "57", "59",],

           },
           {
               layerIndex: "92",
               bayIndexList: [ "17",],
               conZoneIndexList: ["01", "03", "05", "07", "09", "11", "13", "15", "21", "23", "25", "27", "29","31", "33", "35", "37", "39", "41", "43", "45", "47", "49","51", "53", "55", "57", "59",],

           },
           {
               layerIndex: "94",
               bayIndexList: [],
               // conZoneIndexList: ["01", "03", "05", "07", "09", "11", "13", "15", "21", "23", "25", "27", "29","31", "33", "35", "37", "39", "41", "43", "45", "47", "49","51", "53", "55", "57", "59",],
               conZoneIndexList:[],
           },
           {
               layerIndex: "96",
               bayIndexList: [],
               // conZoneIndexList: ["01", "03", "05", "07", "09", "11", "13", "15", "21", "23", "25", "27", "29","31", "33", "35", "37", "39", "41", "43", "45", "47", "49","51", "53", "55", "57", "59",],
               conZoneIndexList:[],
           },

    ],
    // 舱盖板
    typeOfBoard: "",
    numOfBoard: 1,
};
let vesselStorageInfoAll = {
    dataType: "VESSEL_STORAGE_INFO",
    vessel_id:"001",
    vessel_IMO:"KuiYa123",
    // TODO: is inch20 and inch40 both supported?
    // TODO: load and unload operation : --- inch20 and inch40 both supported?
    data: [
        {
            id: 1,
            type: "single",
            bayInch20:[
                {
                    index: "01",
                    layerList: [

                    ],
                }
            ],
        },
        {
            id: 2,
            type: "combine",
            bayInch20s:[
                {
                    index: "03",
                },
                {
                    index: "05",
                },
            ],
            bayInch40: [
                {
                    index: "04",
                },
            ],
        },
        {
            id: 3,
            type: "single",
            bayInch20:[
                {
                    index: "07",
                }
            ],
        },
        {
            id: 4,
            type: "combine",
            bayInch20s:[
                {
                    index: "09",
                },
                {
                    index: "11",
                },
            ],
            bayInch40: [
                {
                    index: "10",
                },
            ],
        },
        {
            id: 5,
            type: "combine",
            bayInch20s:[
                {
                    index: "13",
                },
                {
                    index: "15",
                },
            ],
            bayInch40: [
                {
                    index: "14",
                },
            ],
        },
        {
            id: 6,
            type: "single",
            bayInch20:[
                {
                    index: "17",
                }
            ],
        },
        {
            id: 7,
            type: "single",
            bayInch20:[
                {
                    index: "19",
                }
            ],
        },
        {
            id: 8,
            type: "single",
            bayInch20:[
                {
                    index: "21",
                }
            ],
        },
        {
            id: 9,
            type: "single",
            bayInch20:[
                {
                    index: "23",
                }
            ],
        },
        {
            id: 10,
            type: "single",
            bayInch20:[
                {
                    index: "25",
                }
            ],
        },
        {
            id: 11,
            type: "single",
            bayInch20:[
                {
                    index: "27",
                }
            ],
        },
        {
            id: 12,
            type: "combine",
            bayInch20s:[
                {
                    index: "29",
                },
                {
                    index: "31",
                },
            ],
            bayInch40: [
                {
                    index: "30",
                },
            ],
        },
        {
            id: 13,
            type: "combine",
            bayInch20s:[
                {
                    index: "33",
                },
                {
                    index: "35",
                },
            ],
            bayInch40: [
                {
                    index: "34",
                },
            ],
        },
        {
            id: 14,
            type: "combine",
            bayInch20s:[
                {
                    index: "37",
                },
                {
                    index: "39",
                },
            ],
            bayInch40: [
                {
                    index: "38",
                },
            ],
        },
        {
            id: 15,
            type: "single",
            bayInch20:[
                {
                    index: "41",
                }
            ],
        },
        {
            id: 16,
            type: "single",
            bayInch20:[
                {
                    index: "43",
                }
            ],
        },
        {
            id: 17,
            type: "single",
            bayInch20:[
                {
                    index: "45",
                }
            ],
        },
        {
            id: 18,
            type: "single",
            bayInch20:[
                {
                    index: "47",
                }
            ],
        },
        {
            id: 19,
            type: "single",
            bayInch20:[
                {
                    index: "49",
                }
            ],
        },
        {
            id: 20,
            type: "single",
            bayInch20:[
                {
                    index: "51",
                }
            ],
        },
        {
            id: 21,
            type: "combine",
            bayInch20s:[
                {
                    index: "53",
                },
                {
                    index: "55",
                },
            ],
            bayInch40: [
                {
                    index: "54",
                },
            ],
        },
        {
            id: 22,
            type: "single",
            bayInch20:[
                {
                    index: "57",
                }
            ],
        },
        {
            id: 23,
            type: "single",
            bayInch20:[
                {
                    index: "59",
                }
            ],
        },
    ],
};
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
    if (isInverse) {
        if (dir === 'L') {
        for (let a=0; a<num; a++) {
            func(a);
        }
        }
        else {
            for (let b=num-1; b>=0; b--) {
                func(b);
            }
        }
    }
    else {
        if (dir === 'L') {
        for (let d=num-1; d>=0; d--) {
            func(d);
        }
        }
        else {
            for (let c=0; c<num; c++) {
                func(c);
            }
        }
    }
}
// zoom in and zoom out
function setZoom(zoom,el) {
    let transformOrigin = [0,0];
    el = el || instance.getContainer();
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
    //setZoom(5,document.getElementsByClassName('container')[0]);
    setZoom(zoomScale,document.getElementsByClassName('mainArea')[0])
}
/**
 *  initialize bay area
 */
// TODO: BayNumToRealIndexList and layerNumToRealIndexList -> class
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
function insertBay(bayLists, direction){
    let bay_num = bayLists.inch20.length;
    function drawBay(val) {
        let bayIndex = bayLists.inch20[val].bayRealIndex;
        let bayId = bayLists.inch20[val].id;
        $('.bayArea_40').append(`<div id= ${bayId} class="bayZone_inch40"></div>`);
        $('.bayArea_20').append(`<div id= ${bayId} title=${bayIndex} bay_index=${bayIndex} class="bayZone_20">`+
                                    `<span class="bay20Index">${bayIndex}</span>`+
                                `</div>`);
    }
    let isInverse = true;
    directionDealer(bay_num, direction, drawBay, isInverse);
}
/**
 * redraw bayArea after confirm
 */
function createBayAfterOperation(newList) {
    let newBay_num = newList.data.length;
    let dataList = newList.data;
    let dir = newList.bayDirection;
    // TODO: func to createLoadOrUnloadInfo
    let drawNewBay = function (index) {
        let itemId = dataList[index].id;
        if (dataList[index].type === "single") {
            let bayIndex = dataList[index].bayInch20[0].index;
            $(`.newBayArea`).append(`<div id= ${itemId} bay_index=${bayIndex} class="newBay20 bayInfo">` +
                `<span class="newBay20Index">${dataList[index].bayInch20[0].index}</span>` +
                `</div>`);
        } else {
            $(`.newBayArea`).append(`<div id= ${itemId} class="comBay20_40">` +
                `<div class="newBay40InCom bayInfo">` +
                `<span class="newBay40IndexInCom">${dataList[index].bayInch40[0].index}</span>` +
                `</div>` +
                `<div class="newBay20InComParent">` +
                `<div class="newBay20InComLeft bayInfo">`+
                `<span class="newBay20IndexInCom">${dataList[index].bayInch20s[1].index}</span></div>` +
                `<div class="newBay20InComRight bayInfo">`+
                `<span class="newBay20IndexInCom">${dataList[index].bayInch20s[0].index}</span></div>` +
                `</div>` +
                `</div>`);
        }
    };
    let isInverse = true;
    directionDealer(newBay_num, dir, drawNewBay, isInverse);

    $(`[class="newBay20"][id="6"]`).addClass("blink");
    $(`[class="newBay20"][id="7"]`).addClass("blink");
    $(`.bayInfo`).click(function () {
        //TODO: ajax get, show with response
        let bayIndex = this.childNodes[0].innerText;
        // console.log(bayIndex);
    });
}
/**
 *  select bay
 */
function selectToInch40(leftBay,rightBay,comBayIndex){
    let span_bayIndex = `<span class="bay40Index">${comBayIndex}</span>`;
    $(`.bayArea_40 div[id=${leftBay}]`).addClass("leftBaySelected combined").append(span_bayIndex);
    $(`.bayArea_40 div[id=${rightBay}]`).addClass("rightBaySelected combined").append(span_bayIndex);
}
function clearSelected(){
    $(`.bayZone_20.ui-selected`).removeClass("ui-selected").children().removeClass("ui-selected");
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
    let drawVesBayArea = function (index) {
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
    /*
    for(let t=0;t<VIEW_SIDE.vessel.length;t++){
        for(let u=0;u<VIEW_SIDE.vessel[t].bayIndexList.length;u++){
            let x = VIEW_SIDE.vessel[t].bayIndexList[u];
            let z = VIEW_SIDE.vessel[t].layerIndex;
            $(`[p_x=${x}][p_z=${z}]`).addClass("vesselBody_inch20");
        }
        for(let v=0;v<VIEW_SIDE.vessel[t].conZoneIndexList.length;v++){
            let x = VIEW_SIDE.vessel[t].conZoneIndexList[v];
            let z = VIEW_SIDE.vessel[t].layerIndex;
            $(`[p_x=${x}][p_z=${z}]`).addClass("vesselConZone_inch20");
        }
    }
     */
}
/**
 *  stowage info
 */
function createStowageInfo() {
    // TODO: disable according to relevant func before click
    // TODO: ajax get data from server
    $(`.createStowage`)[0].disabled = true;
    let header = vesselStorageInfoAll.vessel_IMO;
    let bayNum = vesselStorageInfoAll.data.length;
    let ves_header = `<div class="vesselHeader"><span class="stowageInfoHeader">${VESSEL_IMO}${header}</span></div>`;
    let ves_bay_stowage_area = `<div class="baysStowageArea"></div>`;
    $(`.vesselStowageInfo`).append(ves_header).append(ves_bay_stowage_area);
    let item_bay_info = function (tip, bayIndex) {
        return `<div id="${bayIndex}" class="bayStowage"><div class="header"><span>${tip}${bayIndex}</span></div><div class="content"></div></div>`
    };
    for(let i=0;i<bayNum;i++){
        let itemType = vesselStorageInfoAll.data[i].type;
        if(itemType==="single"){
            let bayIndexOfBay = vesselStorageInfoAll.data[i].bayInch20[0].index;
            $(`.baysStowageArea`).append(item_bay_info(BAY_INDEX_TIP,bayIndexOfBay));
        }
        else {
            // itemType === "combine"
            let tempBayIndexOfBay_0 = vesselStorageInfoAll.data[i].bayInch20s[0].index;
            let bayIndexOfBay_1 = vesselStorageInfoAll.data[i].bayInch20s[1].index;
            let bayIndexOfBay_con = vesselStorageInfoAll.data[i].bayInch40[0].index;
            let bayIndexOfBay_0 = tempBayIndexOfBay_0+"("+ bayIndexOfBay_con + ")";
            $(`.baysStowageArea`)
                .append(item_bay_info(BAY_INDEX_TIP,bayIndexOfBay_0))
                .append(item_bay_info(BAY_INDEX_TIP,bayIndexOfBay_1));
        }
    }
}
function drawVesselPending(new_bay_num, bayList, dir, dataList, engine_list) {
    // TODO: make bay direction uniform
    function draw_single_row(pos, op_type, bay_list, index) {
        // add class: above or below, load or unload
        let position = 'ves_' + pos;
        let type = 'ves_' + op_type;
        if (bay_list[index].type === "single") {
         let bayIndex = bayList[index].bayInch20[0].index;
         $(`div[class = ${pos}] div[class=${op_type}]`)
             .append(`<div id=${bayIndex} class="bay_20 ${position} ${type}"><span class="text_silver"></span></div>`);
        } else {
            // TODO: direction setting bay20[0] bay20[1]
            let bay_40 = bayList[index].bayInch40[0].index;
            let left_index = bayList[index].bayInch20s[1].index;
            let right_index = bayList[index].bayInch20s[0].index;
         $(`div[class = ${pos}] div[class=${op_type}]`)
             .append(`<div class="comBay"><div id=${bay_40} class="bay40InCom ${position} ${type}">`+
             `<span class="text_silver"></span></div><div class="bay20sInCom">` +
             `<div id=${left_index} class="bay20InComLeft ${position} ${type}"><span class="text_silver"></span></div>` +
             `<div id=${right_index} class="bay20InComRight ${position} ${type}"><span class="text_silver"></span></div>` +
             `</div></div>`);
        }
    }
    let drawConsPending = function (key) {
        draw_single_row("above", "unload", bayList, key);
        draw_single_row("above", "load", bayList, key);
        draw_single_row("below", "unload", bayList, key);
        draw_single_row("below", "load", bayList, key);
    };
    let isInverse = true;
    directionDealer(new_bay_num, dir, drawConsPending, isInverse);
    // TODO: add data to area
    console.log(dataList);
    for(let i=0;i<dataList.inch20.length;i++) {
        let index = dataList.inch20[i].index;
        let val_above_load = dataList.inch20[i].data.above_load;
        let val_above_unload = dataList.inch20[i].data.above_unload;
        let val_below_load = dataList.inch20[i].data.below_load;
        let val_below_unload = dataList.inch20[i].data.below_unload;
        $(`div[class="above"] div[class="load"] div[id=${index}] span`)[0].innerText = val_above_load;
        $(`div[class="above"] div[class="unload"] div[id=${index}] span`)[0].innerText = val_above_unload;
        $(`div[class="below"] div[class="load"] div[id=${index}] span`)[0].innerText = val_below_load;
        $(`div[class="below"] div[class="unload"] div[id=${index}] span`)[0].innerText = val_below_unload;
    }
    for (let j=0; j<dataList.inch40.length;j++) {
        let index = dataList.inch40[j].index;
        let val_above_load = dataList.inch40[j].data.above_load;
        let val_above_unload = dataList.inch40[j].data.above_unload;
        let val_below_load = dataList.inch40[j].data.below_load;
        let val_below_unload = dataList.inch40[j].data.below_unload;
        $(`div[class="above"] div[class="load"] div[id=${index}] span`)[0].innerText = val_above_load;
        $(`div[class="above"] div[class="unload"] div[id=${index}] span`)[0].innerText = val_above_unload;
        $(`div[class="below"] div[class="load"] div[id=${index}] span`)[0].innerText = val_below_load;
        $(`div[class="below"] div[class="unload"] div[id=${index}] span`)[0].innerText = val_below_unload;
    }
    // $(`div[class="above"] div[class="unload"] div[id="69"] span`)[0].innerText = 10;

    // engine_body
    for(let k=0; k<engine_list.length; k++){
        console.log(typeof engine_list[k]);
        let index = engine_list[k].toString();
        $(`div[class="above"] div[class="load"] div[id=${index}]`).addClass("engineBody").children("span")[0].innerText = null;
        $(`div[class="above"] div[class="unload"] div[id=${index}]`).addClass("engineBody").children("span")[0].innerText = null;
        $(`div[class="below"] div[class="load"] div[id=${index}]`).addClass("engineBody").children("span")[0].innerText = null;
        $(`div[class="below"] div[class="unload"] div[id=${index}]`).addClass("engineBody").children("span")[0].innerText = null;
    }
}
function createLoadOrUnloadInfo() {
    $(`.createLoadOrUnload`)[0].disabled = true;
    $.ajax({
        url: '/vesselStruct/con_pend_info/',
        type: 'GET',
        data: {
            name: selected_vessel,
        },
        dataType: "json",
        success: function (res) {
            console.log(res);
            let new_bay_num = res.bay_list.length;
            let bay_list = res.bay_list;
            let dir = res.bayDirection;
            let data_list = res.data_list;
            let engBodyList = res.engineRoomIndex;
            drawVesselPending(new_bay_num, bay_list, dir, data_list, engBodyList);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
    });
}
/**
 * selectable
 */
function setStopOfSelectable(engineList) {
    $(`#selectable`).selectable({
        stop: function() {
            let engineBodyBays = [];
            for(let j=0;j<engineList.length;j++){
                engineBodyBays.push(engineList[j].toString());
            }
            let selectedBay = $(`.bayZone_20.ui-selected`);
            let isNumSelectRight = selectedBay.length === 2;
            if(isNumSelectRight){
                let isReselect =
                    isExist(combinedBay20inch,selectedBay[0].id) || isExist(combinedBay20inch,selectedBay[1].id);
                let isNextTo =
                    toAbsent(parseInt(selectedBay[0].id) - parseInt(selectedBay[1].id)) === 1;
                let isEngine =
                    isExist(engineBodyBays,selectedBay[0].title) || isExist(engineBodyBays,selectedBay[1].title);
                // TODO: add left to right constraint
                if(isReselect || !isNextTo || isEngine) {
                    alert(TIP_PLEASE_RESELECT);
                    clearSelected();
                }
                else {
                    let leftBayId = selectedBay[0].id;
                    let rightBayId = selectedBay[1].id;
                    combinedBay20inch.push(leftBayId);
                    combinedBay20inch.push(rightBayId);
                    let combinedBayInch40Index = numToIdString((leftBayId*2-1+rightBayId*2-1)/2);
                    combinedBay40inch.push(combinedBayInch40Index);
                    selectToInch40(leftBayId,rightBayId,combinedBayInch40Index);
                }
            }
            else {
                alert(TIP_PLEASE_RESELECT);
                clearSelected();
            }
        }
    });
}
function disableSelectable() {
    $(`#selectable`).selectable({
        disabled: true
    });
}
// TODO: enable after reset combination
function enableSelectable() {
    $(`#selectable`).selectable({
       disabled: false
    });
}
/**
 *  combination buttons
 */
function disableBayCombine(eng_list){
    for(let i=0; i<eng_list.length; i++){
        let ind = eng_list[i].toString();
        // console.log(ind);
        $(`div[bay_index=${ind}]`).addClass("engineBody");
    }
}
function combineToStart (){
    selected_vessel = $(`#vesselSelect option:selected`).val();
    $.ajax({
        url: '/vesselStruct/edit_bay/',
        type: 'GET',
        data: {
            name: selected_vessel,
            type: 'edit',
        },
        dataType: "json",
        success: function (res) {
            let num = res.number;
            let dir = res.bayDirection;
            let engBodyList = res.engineRoomIndex;
            // console.log(res);
            insertBay(BayNumToRealIndexList(num), dir);
            $(`.startCombine`)[0].disabled = true;
            disableBayCombine(engBodyList);
            setStopOfSelectable(engBodyList);
            $(`.confirmCombine`)[0].disabled = false;
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
    });
}
function combineToConfirm (){
    let context = {
        vessel_name: selected_vessel,
        bayInch20s: combinedBay20inch,
        bayInch40s: combinedBay40inch,
    };
    disableSelectable();
    $.ajax({
        url: '/vesselStruct/edit_bay/',
        type: 'POST',
        data: JSON.stringify(context),
        success: function(res){
            console.log(res);
            let baysList = res;
            $(`.confirmCombine`)[0].disabled = true;
            clearSelected();
            $(`.bayArea`)[0].style.display = 'none';
            createBayAfterOperation(baysList);
        },
        dataType: "json",
    });
}
function combineReset (){
    // TODO: delete last vessel's combination
    // TODO: get response after delete
    alert(IS_TO_RESELECT);
    combinedBay20inch = [];
    $.ajax({
       url: '/vesselStruct/edit_bay/',
       type: 'DELETE',
       data:  {
           name: selected_vessel,
           type: 'delete',
       },
       success: function (res) {
            // console.log(res)
       },
    });
    // enableSelectable();
    // setStopOfSelectable();
    // // get new info of vessel from server
    // $(".newBayArea")[0].style.display = 'none'; // hide combined bayArea
    // TODO: reInitial the bayArea
    // $(".bayArea")[0].style.display = '';
    // $(".bayArea").remove(".bayArea_20");
    // $(".bayArea").remove(".bayArea_40");
}
/**
 *  layui: https://www.layui.com/doc/modules/layer.html
 */
// TODO: add layer with loading, support multiple layer
/**
 *
 *  TODO AREA
 */
// TODO: add engine after combination of bay
/**
 *  test area
 */
// TODO: CUSTOM BLINK TRICK
$(`[pos_x="19"],[pos_x="17"]`).addClass("blink");

/**
 *  data input
 **/
