// TODO: set jshint config
/**
 *  const
 */
const VESSEL_IMO = "船舶航次：";
const BAY_INDEX = "贝位号: ";
const TIP_PLEASE_RESELECT = "请重新选择";
/**
 * @type {number}
 */
// 水平方向侧视 支持一条船
/*
    01   03   05   07   09   11   13   15   17    19    21    // 20 inch
       02   04   06   08   10   12   14   16   18    20   // 40 inch

 */
/*
      39    37    35    33    31    29    27    25     23    21    19    17    15    13    11    09    07    05    03    01
         38    36    34    32    30    28    26     24    22    20    18    16    14    12    10    08    06    04    02
 */
/*
            point-x : bayIndex
            point-y : rowIndex
            point-z : layerIndex
 */
// TODO: uniform the bay direction !!!!
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
    max_bay_number: 30, // TODO: set max number
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
// TODO: sql select!
let newBayList = {
    dataType: "RESPONSE_AFTER_CONFIRM_COMBINATION",
    vessel_IMO: "001",
    //TODO: update sql select function
    data: [
        {
            id: 1,
            type: "single",
            bayInch20:[
                {
                    index: "01",
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
let vesselOperationInfo = {
    dataType:"VESSEL_OPERATION_INFO",
    vessel_id:"001",
    vessel_IMO:"KuiYa123",
    // according to current combined bay
    //TODO: same as newBayList.data WILL BE BETTER
    data: {
        List:[
            // TODO: set direction !!
            {
                id: 1,
                type: "single",
                bayInch20:[
                    {
                        index: "01",
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
        //TODO: set inch20List null or set it to other value ?
        inch20List:[],
    },
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
// 1 -> 01; 12->12
function numToIdString(num) {
    return num < 10 ? "0" + num.toString() : num.toString();
}
// is exist in array
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
/**
 *  initialize bay area
 */
function initAreaForInline() {
    $(`.bayArea`).append(`<div class="bayArea_40"></div>`);
    $(`.bayArea`).append(`<div id="selectable" class="bayArea_20"></div>`);
}
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
function insertBay(bayLists){
    let bay_num = bayLists.inch20.length;
    for(let i=bay_num-1;i>=0;i--){
        let bayIndex = bayLists.inch20[i].bayRealIndex;
        let bayId = bayLists.inch20[i].id;
        $('.bayArea_40').append(`<div id= ${bayId} class="bayZone_inch40"></div>`);
        $('.bayArea_20').append(`<div id= ${bayId} title=${bayIndex} class="bayZone_inch20"><span class="bay20Index">${bayIndex}</span></div>`);
    }
}
/**
 * redraw bayArea after confirm
 */
function createBayAfterOperation(newList) {
    let newBay_num = newList.data.length;
    let dataList = newList.data;
    for(let i=newBay_num-1;i>=0;i--) {
        let itemId = dataList[i].id;
        if(dataList[i].type == "single"){
            $(`.newBayArea`).append(
                `<div id= ${itemId} class="newBay20 bayInfo">`+
                    `<span class="newBay20Index">${dataList[i].bayInch20[0].index}</span>`+
                `</div>`);
        }
        else {
            $(`.newBayArea`).append(
                `<div id= ${itemId} class="comBay20_40">`+
                    `<div class="newBay40InCom bayInfo"><span class="newBay40IndexInCom">${dataList[i].bayInch40[0].index}</span></div>`+
                    `<div class="newBay20InComParent">`+
                        `<div class="newBay20InComLeft bayInfo"><span class="newBay20IndexInCom">${dataList[i].bayInch20s[1].index}</span></div>` +
                        `<div class="newBay20InComRight bayInfo"><span class="newBay20IndexInCom">${dataList[i].bayInch20s[0].index}</span></div>` +
                    `</div>`+
                `</div>`);
        }
    }
    $(`[class="newBay20"][id="6"]`).addClass("blink");
    $(`[class="newBay20"][id="7"]`).addClass("blink");
    $(`.bayInfo`).click(function () {
        //TODO: ajax get, show with response
        let bayIndex = this.childNodes[0].innerText;
        console.log(bayIndex);

    });
}
/**
 *  select bay
 */
function selectToInch40(leftBay,rightBay,comBayIndex){
    $(`.bayArea_40 div[id=${leftBay}]`).addClass("leftBaySelected");
    $(`.bayArea_40 div[id=${leftBay}]`).addClass("combined");
    $(`.bayArea_40 div[id=${rightBay}]`).addClass("rightBaySelected");
    $(`.bayArea_40 div[id=${rightBay}]`).addClass("combined");

    $(`.bayArea_40 div[id=${leftBay}]`).append(`<span class="bay40Index">${comBayIndex}</span>`);
    $(`.bayArea_40 div[id=${rightBay}]`).append(`<span class="bay40Index">${comBayIndex}</span>`);
}
function clearSelected(){
    $(`.bayZone_inch20.ui-selected`).children().removeClass("ui-selected");
    $(`.bayZone_inch20.ui-selected`).removeClass("ui-selected");
}
/**
 *  vessel creation
 */
function createVesselSide(){
    // disable reCreate vessel
    $(`.createVessel`)[0].disabled = true;
    // TODO: vessel board in creating vessel: not supported !!
    // TODO： as inline-flex conflicts with vertical-align
    $(`.vesselAreaSide`).append(`<div class="onBoardSide"></div>`);
    $(`.vesselAreaSide`).append(`<div class="belowBoardSide"></div>`);
    let bayLists = BayNumToRealIndexList(numOfBay);
    let layerLists = layerNumToRealIndexList(layerNumAbove,layerNumBelow);
    let conZone_bay_num = bayLists.inch20.length;
    let conZone_layerAbove_num = layerLists.above.length;
    let conZone_layerBelow_num = layerLists.below.length;
    // TODO: change conZoneAbove_inch20 according maxLayer input
    // TODO: tip1: set fixed height according maxLayer input
    for(let i=conZone_bay_num-1;i>=0;i--){
        let conZoneBayIndex = bayLists.inch20[i].bayRealIndex;
        $(`.onBoardSide`).append(`<div point-x=${conZoneBayIndex} class="conZoneBayAbove_inch20"></div>`);
        $(`.belowBoardSide`).append(`<div point-x=${conZoneBayIndex} class="conZoneBayBelow_inch20"></div>`);
    }
    // test container on board
    // length : width : height   2.5:1:1
    // TODO: css control main area !!
    for(let j=0;j<conZone_bay_num;j++){
        let conZoneBayIndex = bayLists.inch20[j].bayRealIndex;
        for(let k=conZone_layerAbove_num-1;k>=0;k--){
            let conZoneLayerIndex = layerLists.above[k].layerRealIndex;
            $(`.onBoardSide div[point-x=${conZoneBayIndex}]`).append(`<div class="conZoneBayLayerAbove_inch20" pointx=${conZoneBayIndex} pointz=${conZoneLayerIndex}></div>`);
        }
        for(let m=conZone_layerBelow_num-1;m>=0;m--){
            let conZoneLayerIndex = layerLists.below[m].layerRealIndex;
            $(`.belowBoardSide div[point-x=${conZoneBayIndex}]`).append(`<div class="conZoneBayLayerBelow_inch20" pointx=${conZoneBayIndex} pointz=${conZoneLayerIndex}></div>`);
        }
    }
    for(let t=0;t<VIEW_SIDE.vessel.length;t++){
        for(let u=0;u<VIEW_SIDE.vessel[t].bayIndexList.length;u++){
            $(`[pointx=${VIEW_SIDE.vessel[t].bayIndexList[u]}][pointz=${VIEW_SIDE.vessel[t].layerIndex}]`).addClass("vesselBody_inch20");
        }
        for(let v=0;v<VIEW_SIDE.vessel[t].conZoneIndexList.length;v++){
            $(`[pointx=${VIEW_SIDE.vessel[t].conZoneIndexList[v]}][pointz=${VIEW_SIDE.vessel[t].layerIndex}]`).addClass("vesselConZone_inch20");
        }
    }
    // TODO: CUSTOM BLINK TRICK
    $(`[point-x="19"],[point-x="17"]`).addClass("blink");
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
    $(`.vesselStowageInfo`).append(`<div class="vesselHeader"><span class="stowageInfoHeader">${VESSEL_IMO}${header}</span></div>`);
    $(`.vesselStowageInfo`).append(`<div class="baysStowageArea"></div>`);
    for(let i=0;i<bayNum;i++){
        let itemType = vesselStorageInfoAll.data[i].type;
        if(itemType==="single"){
            let bayIndexOfBay = vesselStorageInfoAll.data[i].bayInch20[0].index;
            $(`.baysStowageArea`).append(`<div stowageBayIndex=${bayIndexOfBay} class="bayStowage">`+
                                            `<div class="bayStowageHeader"><span>${BAY_INDEX}${bayIndexOfBay}</span></div>`+
                                            `<div class="bayStowageContent"></div>`+
                                         `</div>`);
        }
        else {
            // itemType === "combine"
            let tempBayIndexOfBay_0 = vesselStorageInfoAll.data[i].bayInch20s[0].index;
            let bayIndexOfBay_1 = vesselStorageInfoAll.data[i].bayInch20s[1].index;
            let bayIndexOfBay_con = vesselStorageInfoAll.data[i].bayInch40[0].index;
            let bayIndexOfBay_0 = tempBayIndexOfBay_0+"("+ bayIndexOfBay_con + ")";
            $(`.baysStowageArea`).append(`<div stowageBayIndex=${bayIndexOfBay_0} class="bayStowage">`+
                                            `<div class="bayStowageHeader"><span>${BAY_INDEX}${bayIndexOfBay_0}</span></div>`+
                                            `<div class="bayStowageContent"></div>`+
                                        `</div>`);
            $(`.baysStowageArea`).append(`<div stowageBayIndex=${bayIndexOfBay_1} class="bayStowage">`+
                                            `<div class="bayStowageHeader"><span>${BAY_INDEX}${bayIndexOfBay_1}</span></div>`+
                                            `<div class="bayStowageContent"></div>`+
                                         `</div>`);
        }
    }
}
function createLoadOrUnloadInfo() {
    $(`.createLoadOrUnload`)[0].disabled = true;
    console.log("created load info!");
    // TODO: ajax  get
    let bayList = vesselOperationInfo.data.List;
    let bayListNum = vesselOperationInfo.data.List.length;
    // onBoard load 40inch
    // TODO: make bay direction uniform
    // TODO: change value in span according to the number of LOAD or UNLOAD!
    // TODO: inch40 and inch20 for not continued, show?
    for(let i=bayListNum-1;i>=0;i--){
        if(bayList[i].type == "single"){
            let bayIndex20 = bayList[i].bayInch20[0].index;
            $(`div[class="aboveUnloadInch40"]`).append(`<div bayIndex=${bayIndex20} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div>`);
            $(`div[class="belowUnloadInch40"]`).append(`<div bayIndex=${bayIndex20} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="aboveLoadInch40"]`).append(`<div bayIndex=${bayIndex20} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowLoadInch40"]`).append(`<div bayIndex=${bayIndex20} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
        }
        else {
            let bayIndex40 = bayList[i].bayInch40[0].index;
            $(`div[class="aboveUnloadInch40"]`).append(`<div bayIndex=${bayIndex40} class="unloadInch40"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowUnloadInch40"]`).append(`<div bayIndex=${bayIndex40} class="unloadInch40"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="aboveLoadInch40"]`).append(`<div bayIndex=${bayIndex40} class="loadInch40"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowLoadInch40"]`).append(`<div bayIndex=${bayIndex40} class="loadInch40"><span class="loadOrUnloadNum">0</span></div></div>`);
        }
    }
    for(let j=bayListNum-1;j>=0;j--){
        if(bayList[j].type == "single"){
            let bayIndex20 = bayList[j].bayInch20[0].index;
            $(`div[class="aboveUnloadInch20"]`).append(`<div bayIndex=${bayIndex20} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowUnloadInch20"]`).append(`<div bayIndex=${bayIndex20} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="aboveLoadInch20"]`).append(`<div bayIndex=${bayIndex20} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowLoadInch20"]`).append(`<div bayIndex=${bayIndex20} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
        }
        else {
            //TODO: from left to right?
            let bayIndex20_first = bayList[j].bayInch20s[1].index;
            let bayIndex20_second = bayList[j].bayInch20s[0].index;
            $(`div[class="aboveUnloadInch20"]`).append(`<div bayIndex=${bayIndex20_first} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="aboveUnloadInch20"]`).append(`<div bayIndex=${bayIndex20_second} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowUnloadInch20"]`).append(`<div bayIndex=${bayIndex20_first} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowUnloadInch20"]`).append(`<div bayIndex=${bayIndex20_second} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="aboveLoadInch20"]`).append(`<div bayIndex=${bayIndex20_first} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="aboveLoadInch20"]`).append(`<div bayIndex=${bayIndex20_second} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowLoadInch20"]`).append(`<div bayIndex=${bayIndex20_first} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowLoadInch20"]`).append(`<div bayIndex=${bayIndex20_second} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
        }
    }
    // vessel body
    // test
    let vesselBodyBayList = ["17","19",];
    for(let i=0;i<vesselBodyBayList.length;i++){
        $(`div[bayIndex=${vesselBodyBayList[i]}]`).addClass("vesselBodyInLoading");
        $(`div[bayIndex=${vesselBodyBayList[i]}] span`).addClass("vesselBodyBayIndex");
    }
    // TODO: loadOrUnloadNum value setting by jQuery
    // TODO: CUSTOM BLINK TRICK
    $(`[bayindex="19"],[bayindex="17"]`).addClass("blink");
}
/**
 * selectable
 */
let combinedBay20inch = [];
function setStopOfSelectable() {
    $(`#selectable`).selectable({
        stop: function() {
            let selectedBay = $(`.bayZone_inch20.ui-selected`);
            let isNumSelectRight = selectedBay.length===2 ? true : false;
            if(isNumSelectRight){
                let isReselect = (isExist(combinedBay20inch,selectedBay[0].id) || isExist(combinedBay20inch,selectedBay[1].id))? true:false;
                let isNextTo = toAbsent(parseInt(selectedBay[0].id) - parseInt(selectedBay[1].id)) == 1?true:false;
                // TODO: add left to right constraint
                if(isReselect || !isNextTo) {
                    alert(TIP_PLEASE_RESELECT);
                    clearSelected();
                }
                else {
                    let leftBayId = selectedBay[0].id;
                    let rightBayId = selectedBay[1].id;
                    combinedBay20inch.push(leftBayId);
                    combinedBay20inch.push(rightBayId);
                    let combinedBayInch40Index = numToIdString((leftBayId*2-1+rightBayId*2-1)/2);
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
function combineToStart (){
    // initial bay
    initAreaForInline();
    insertBay(BayNumToRealIndexList(numOfBay));
    $(`.startCombine`)[0].disabled = true;
    setStopOfSelectable();
    $(`.confirmCombine`)[0].disabled = false;
}
function combineToConfirm (){
    disableSelectable();
    //TODO: post new info of bay, refresh bayArea
    // TODO: get response from server
    $(`.startCombine`)[0].disabled = false;
    $(`.confirmCombine`)[0].disabled = true;
    clearSelected();
    $(`.bayArea`)[0].style.display = 'none'; // hide last bayArea
    createBayAfterOperation(newBayList); // get data from server
    $(`.confirmCombine`)[0].disabled = true;
}
function combineReset (){
    // TODO: delete last vessel's combination
    // TODO: get response after delete
    alert("确认重新组贝?");
    combinedBay20inch = [];
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
 *  zoom in and zoom out
 */
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
//setZoom(5,document.getElementsByClassName('container')[0]);
function showVal(a){
    let zoomScale = Number(a)/10;
    setZoom(zoomScale,document.getElementsByClassName('mainArea')[0])
}
/**
 * main
 */
let numOfBay = VIEW_SIDE.max_bay_number;
let layerNumAbove = VIEW_SIDE.max_layer_above_number;
let layerNumBelow = VIEW_SIDE.max_layer_below_number;
/**
 *  USAGE
 */
// TODO: append the item from bottom to floor in div
/**
 *  test area
 */
let temp =[];
let tempB = [];
let testA = BayNumToRealIndexList(30).inch20;
for(let i=0;i<testA.length;i++){
    temp[i] = testA[i].bayRealIndex;
}
for(let j=testA.length-1,k=0;j>=0;j--,k++){
    tempB[k] = testA[j].bayRealIndex;
}
// console.log(temp);
// console.log(tempB);
/**
 *  add css style
 */
/**
 *  layui: https://www.layui.com/doc/modules/layer.html
 */
// TODO: add layer with loading, support multiple layer