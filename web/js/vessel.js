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



let VIEW_SIDE = {
    watchType: "sideViewing",
    vessel_id:"001",
    vessel_IMO:"KuiYa123",
    vessel_name:"亚历山大",
    vessel_width:"30m",
    vessel_frontLength:"100m",
    vessel_length:"300m",
    max_bay_number: 30,
    max_layer_above_number: 8, // all above
    max_layer_below_number: 5,  // all below
    num_bay_type: 2, // 20inch  + 40inch inline
    hatCover_kind:"自开式", // 自开式  堆叠式
    hatCover_number: 1,  // 自开式这里默认一层 显示颜色特殊  堆叠式:分为 1、2、3、4层
    containerOnBoard: [
      // distribution depend on bay, layer
        // 01 04  07 09
        {
            bayID: "01",
            bayType: "20inch",
            maxNumOfCon: 6,
        },
        {
            bayID: "04",
            bayType:"40inch",
            maxNumOfCon: 7,
        },
        {
            bayID:"07",
            bayType:"20inch",
            maxNumOfCon:5,
        },
        {
            bayID:"09",
            bayType:"20inch",
            maxNumOfCon:6,
        },
    ],
    containerBelowBoard: [
        // distribution depend on bay, layer
        {
            bayID: "01",
            bayType: "20inch",
            maxNumOfCon: 6,
        },
        {
            bayID: "04",
            bayType:"40inch",
            maxNumOfCon:4,
        },
        {

        }

    ],
    // 舱盖板
    typeOfBoard: "",
    numOfBoard: 1,

};
// TODO: table -- vessel
let newBayList = {
    vessel_IMO: "001",
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
// TODO: to make sure container's location absolutely correct
// TODO: down to up !! no blank in middle
// TODO: table -- box
// TODO: control correctness of load or unload setting
let conListViewSide = {
    vessel_IMO:"KuiYa123",
    data: {
        containerAbove:[
            // layer > cons
            // down to up : 82, 84, 86, 88
            {
                layerIndex: "82",
                cons: [
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "01",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "03",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "05",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "08",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "12",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "15",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "17",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "19",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "21",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "24",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "28",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "31",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "33",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "35",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "37",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "39",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "41",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "44",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "48",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "52",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "55",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "57",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "59",
                    },
                ],
            },
            {
                layerIndex: "84",
                cons: [
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "01",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "04",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "08",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "12",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "15",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "17",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "20",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "24",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "28",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "31",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "33",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "36",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "39",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "41",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "44",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "47",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "50",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "54",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "57",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "59",
                    },
                ],
            },
            {
                layerIndex: "86",
                cons: [
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "01",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "03",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "05",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "08",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "12",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "15",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "17",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "19",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "21",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "24",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "28",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "31",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "33",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "35",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "37",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "39",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "41",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "44",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "48",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "52",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "55",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "57",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "59",
                    },
                ],

            },
            {
                layerIndex: "88",
                cons: [
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "01",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "03",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "05",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "08",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "12",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "15",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "17",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "19",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "21",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "24",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "28",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "31",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "33",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "35",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "37",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "39",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "41",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "44",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: false,
                        type: "combine",
                        bayIndex: "48",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "combine",
                        bayIndex: "52",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "55",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "57",
                    },
                    {
                        isContainerZone: true,
                        isContainerExist: true,
                        type: "single",
                        bayIndex: "59",
                    },
                ],
            },
        ],
        containerBelow:[
            // layer > cons
            // down to up
            {
                layerIndex: "02",
                cons: [

                ],
            },
            {
                layerIndex: "04",
                cons: [

                ],
            },
            {
                layerIndex: "06",
                cons: [

                ],
            },
            {
                layerIndex: "08",
                cons: [

                ],
            },
        ],
    },
};
let vesselViewSide = {
    vessel_IMO:"KuiYa123",
    data: {

    }
};

/**
 * custom function
 */
// id number to string
// 1 -> 01; 12->12
function numToIdString(num) {
    if(num>=100){
        console.log("all index only support num below 100!");
    }
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
// TODO: change size of div according to the number of bay and container!!
// TODO: delete scroll bar
function initAreaForInline() {
    $('.bayArea').append(`<div id="selectable" class="bayArea_20"></div>`);
    $('.bayArea').append(`<div class="bayArea_40"></div>`);
}
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
        $('.bayArea_20').append(`<div id= ${bayId} title=${bayIndex} class="bayZone_inch20"><span class="bay20Index">${bayIndex}</span></div>`);
        $('.bayArea_40').append(`<div id= ${bayId} class="bayZone_inch40"></div>`)
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
            $(".newBayArea").append(
                `<div id= ${itemId} class="newBay20">`+
                    `<span class="newBay20Index">${dataList[i].bayInch20[0].index}</span>`+
                `</div>`);
        }
        else {
            $(".newBayArea").append(
                `<div id= ${itemId} class="comBay20_40">`+
                    `<div class="newBay40InCom"><span class="newBay40IndexInCom">${dataList[i].bayInch40[0].index}</span></div>`+
                    `<div class="newBay20InComParent">`+
                        `<div class="newBay20InComLeft"><span class="newBay20IndexInCom">${dataList[i].bayInch20s[1].index}</span></div>` +
                        `<div class="newBay20InComRight"><span class="newBay20IndexInCom">${dataList[i].bayInch20s[0].index}</span></div>` +
                    `</div>`+
                `</div>`);
        }
    }
}
/**
 *  select bay
 */
function selectToInch40(leftBay,rightBay,comBayIndex){
    $('.bayArea_40 div[id='+leftBay+']').addClass("leftBaySelected");
    $('.bayArea_40 div[id='+leftBay+']').addClass("combined");
    $('.bayArea_40 div[id='+rightBay+']').addClass("rightBaySelected");
    $('.bayArea_40 div[id='+rightBay+']').addClass("combined");

    $('.bayArea_40 div[id='+leftBay+']').append(
        `<span class="bay40Index">${comBayIndex}</span>`
    );
    $('.bayArea_40 div[id='+rightBay+']').append(
        `<span class="bay40Index">${comBayIndex}</span>`
    );
}
function clearSelected(){
    $(".bayZone_inch20.ui-selected").children().removeClass("ui-selected");
    $(".bayZone_inch20.ui-selected").removeClass("ui-selected");
}
/**
 *  vessel creation
 */
function createVesselSide(){
    let bayLists = BayNumToRealIndexList(numOfBay);
    let layerLists = layerNumToRealIndexList(layerNumAbove,layerNumBelow);
    let conZone_bay_num = bayLists.inch20.length;
    let conZone_layerAbove_num = layerLists.above.length;
    let conZone_layerBelow_num = layerLists.below.length;
    // TODO: change conZoneAbove_inch20 according maxLayer input
    // TODO: tip1: set fixed height according maxLayer input
    for(let i=conZone_bay_num-1;i>=0;i--){
        let conZoneBayIndex = bayLists.inch20[i].bayRealIndex;
        $(".onBoardSide").append(
            `<div point-x=${conZoneBayIndex} class="conZoneAbove_inch20"></div>`
        );
    }
    // below
    for(let i=conZone_bay_num-1;i>=0;i--){
        let conZoneBayIndex = bayLists.inch20[i].bayRealIndex;
        $(".belowBoardSide").append(
            `<div point-x=${conZoneBayIndex} class="conZoneBelow_inch20"></div>`
        );
    }

    // test container on board
    // length : width : height   2.5:1:1
    // TODO: css control main area !!
    for(let j=0;j<conZone_bay_num;j++){
        let conZoneBayIndex = bayLists.inch20[j].bayRealIndex;
        for(let k=conZone_layerAbove_num-1;k>=0;k--){
            let conZoneLayerIndex = layerLists.above[k].layerRealIndex;
            $(`.onBoardSide div[point-x=${conZoneBayIndex}]`).append(`<div class="conBayAbove_inch20" point-z=${conZoneLayerIndex}></div>`);
        }
        for(let m=conZone_layerBelow_num-1;m>=0;m--){
            let conZoneLayerIndex = layerLists.below[m].layerRealIndex;
            $(`.belowBoardSide div[point-x=${conZoneBayIndex}]`).append(`<div class="conBayAbove_inch20" point-z=${conZoneLayerIndex}></div>`);
        }
    }

    // disable reCreate vessel
    $(".createVessel")[0].disabled = true;
}
/**
 *  stowage info
 */
function createStowageInfo() {
    // TODO: disable according to relevant func before click

}

/**
 * selectable
 */
let combinedBay20inch = [];
function setStopOfSelectable() {
    $( "#selectable" ).selectable({
        stop: function() {
            let selectedBay = $(".bayZone_inch20.ui-selected");
            let isNumSelectRight = selectedBay.length===2 ? true : false;
            if(isNumSelectRight){
                let isReselect = (isExist(combinedBay20inch,selectedBay[0].id) || isExist(combinedBay20inch,selectedBay[1].id))? true:false;
                let isNextTo = toAbsent(parseInt(selectedBay[0].id) - parseInt(selectedBay[1].id)) == 1?true:false;
                // TODO: add left to right constraint
                if(isReselect || !isNextTo) {
                    alert("请重新选择");
                    clearSelected();
                }
                else {
                    let leftBayId = selectedBay[0].id;
                    let rightBayId = selectedBay[1].id;
                    combinedBay20inch.push(leftBayId);
                    combinedBay20inch.push(rightBayId);
                    let combinedBayiInch40Index = numToIdString((leftBayId*2-1+rightBayId*2-1)/2);
                    selectToInch40(leftBayId,rightBayId,combinedBayiInch40Index);
                }
            }
            else {
                alert("请重新选择");
                clearSelected();
            }
        }
    });
}
function disableSelectable() {
    $( "#selectable" ).selectable({
        disabled: true
    });
}
// TODO: enable after reset combination
function enableSelectable() {
    $("#selectable").selectable({
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

    $(".startCombine")[0].disabled = true;
    setStopOfSelectable();
    $(".confirmCombine")[0].disabled = false;
}
function combineToConfirm (){
    disableSelectable();
    //TODO: post new info of bay, refresh bayArea
    // TODO: get response from server

    $(".startCombine")[0].disabled = false;
    $(".confirmCombine")[0].disabled = true;
    clearSelected();
    console.log(combinedBay20inch);
    $(".bayArea")[0].style.display = 'none'; // hide last bayArea
    createBayAfterOperation(newBayList); // get data from server
    $(".confirmCombine")[0].disabled = true;
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
let numOfBoard = VIEW_SIDE.hatCover_number;
let layerNumAbove = VIEW_SIDE.max_layer_above_number;
let layerNumBelow = VIEW_SIDE.max_layer_below_number;
/**
 *  USAGE
 */
// TODO: append the item from bottom to floor in div


