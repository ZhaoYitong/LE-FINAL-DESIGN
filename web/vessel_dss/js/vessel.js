/**
 * @type {number}
 */
const NUMBER_BAY_TYPE = 2;
// 水平方向侧视 支持一条船

/*
    01   03   05   07   09   11   13   15   17    19    21    // 20 inch
       02   04   06   08   10   12   14   16   18    20   // 40 inch

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
    max_layer_above_number: 10, // all above
    max_layer_below_number: 8,  // all below
    num_bay_type: 2, // 20inch  + 40inch inline
    hatCover_kind:"自开式", // 自开式  堆叠式
    hatCover_number: 4,  // 自开式这里默认一层 显示颜色特殊  堆叠式:分为 1、2、3、4层
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
let CONTAINER_LIST = {
    pic_type:"侧视图", // 俯视图  剖面图
    vessel_id:"001",
    vessel_IMO:"KuiYa123",
    vessel_name:"亚历山大",
    vessel_width:"30m",
    vessel_frontLength:"100m",
    vessel_length:"300m",
    max_bay_number: 50,
    max_layer_above_number: 10, // all above
    max_layer_below_number: 8,  // all below
    num_bay_type: 2, // 20inch  + 40inch inline
    hatCover_kind:"自开式", // 自开式  堆叠式
    hatCover_number: 1,  // 自开式这里默认一层 显示颜色特殊  堆叠式:分为 1、2、3、4层
};
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
                        isContainer: true,
                        type: "single",
                        bayIndex: "01",
                    },
                    {
                        isContainer: true,
                        type: "single",
                        bayIndex: "03",
                    },


                ],

            },
            {
                layerIndex: "84",
                cons: [

                ],
            },
            {
                layerIndex: "86",
                cons: [

                ],

            },
            {
                layerIndex: "88",
                cons: [

                ],
            },
        ],
        containerBelow:[
            // layer > cons
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

/**
 * custom function
 */
// id number to string
// 1 -> 01; 12->12
function numToidString(num) {
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
    $('.bayArea').append(`<div id="selectable" class="bayArea_20"></div>`);
    $('.bayArea').append(`<div class="bayArea_40"></div>`);
}
function BayNumToRealIndexList(bayNum) {
    let bay = {};
    bay.inch20 = [];
    bay.inch40 = [];
    for (let i=0;i<bayNum;i++){
        bay.inch20[i] = {
            "id":i+1,
            "bayRealIndex":numToidString(i*2+1)
        };
        if(i<bayNum-1){
            bay.inch40[i] = {
                "id":(i+1)*2,
                // "bayRealIndex":numToidString((i+1)*2)
            };
        }
    }
    return bay;
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
            $(".newBayArea").append(`<div id= ${itemId} class="newBay20"><span class="newBay20Index">${dataList[i].bayInch20[0].index}</span></div>`);
        }
        else {
            $(".newBayArea").append(`<div id= ${itemId} class="comBay20_40">`+
                `<div class="newBay20InComParent">`+
                    `<div class="newBay20InComLeft"><span class="newBay20IndexInCom">${dataList[i].bayInch20s[1].index}</span></div>` +
                    `<div class="newBay20InComRight"><span class="newBay20IndexInCom">${dataList[i].bayInch20s[0].index}</span></div>` +
                `</div>`+
                `<div class="newBay40InCom"><span class="newBay40IndexInCom">${dataList[i].bayInch40[0].index}</span></div>`+
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
    // TODO: display index with one
    $('.bayArea_40 div[id='+leftBay+']').append(`<span class="bay40Index">${comBayIndex}</span>`);
    $('.bayArea_40 div[id='+rightBay+']').append(`<span class="bay40Index">${comBayIndex}</span>`);
}
function clearSelected(){
    $(".bayZone_inch20.ui-selected").children().removeClass("ui-selected");
    $(".bayZone_inch20.ui-selected").removeClass("ui-selected");
}
/**
 *  vessel creation
 */
function createVesselSide(){
    // above
    let bayLists = BayNumToRealIndexList(numOfBay);
    let con_bay_num = bayLists.inch20.length;
    for(let i=con_bay_num-1;i>=0;i--){
        let conBayId = bayLists.inch20[i].id;
        $(".onBoardSide").append(`<div id=${conBayId} class="conZoneAbove_inch20"></div>`);
    }
    // test container on board
    // length : width : height   2.5:1:1
    let conId = 5;
    $(".onBoardSide div[id='2']").append(`<div id=${conId} class="conBayAbove_inch20"></div>`);


    // board
    let boardNum = numOfBoard;
    for(let i=0;i<boardNum;i++){
        $(".boardSide").append(`<div class="cabinCover"></div>`);
    }
    // below
    for(let i=con_bay_num-1;i>=0;i--){
        let conBayId = bayLists.inch20[i].id;
        $(".belowBoardSide").append(`<div id=${conBayId} class="conZoneBelow_inch20"></div>`);
    }
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
                let isStartOrEnd = selectedBay[1].id == 1 || selectedBay[0].id == numOfBay? true:false;
                let isNextTo = toAbsent(parseInt(selectedBay[0].id) - parseInt(selectedBay[1].id)) == 1?true:false;
                if(isReselect || isStartOrEnd || !isNextTo) {
                    alert("请重新选择");
                    clearSelected();
                }
                else {
                    let leftBayId = selectedBay[0].id;
                    let rightBayId = selectedBay[1].id;
                    combinedBay20inch.push(leftBayId);
                    combinedBay20inch.push(rightBayId);
                    let combinedBayiInch40Index = numToidString((leftBayId*2-1+rightBayId*2-1)/2);
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
 * main
 */
let numOfBay = VIEW_SIDE.max_bay_number;
let numOfBoard = VIEW_SIDE.hatCover_number;
/**
 *  USAGE
 */
// TODO: append the item from bottom to floor in div


