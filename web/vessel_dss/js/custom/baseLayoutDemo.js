/**
 * @type {number}
 */
const NUMBER_BAY_TYPE = 2;

let CONTAINER_LIST = {
    pic_type:"侧视图", // 俯视图  剖面图
    vessel_id:"001",
    vessel_IMO:"KuiYa123",
    vessel_name:"亚历山大",
    vessel_width:"30m",
    vessel_frontLength:"100m",
    vessel_length:"300m",
    max_bay_number: 25,
    max_layer_above_number: 10,
    max_layer_below_number: 8,
    num_bay_type: 2, // 20inch  + 40inch inline
    hatCover_kind:"自开式", // 自开式  堆叠式
    hatCover_number: 1,  // 自开式这里默认一层 显示颜色特殊  堆叠式:分为 1、2、3、4层
    // container info list
    data:
    [
        {

        },

    ],
};

/**
 *
 *
 * @param num
 * @returns {string}
 */

// 初始化生成 多条贝位区域  默认 20inch  40inch
function initAreaForInline(numOfBayType) {
    // let aa = col_sea;
    // for(let i=0;i<numOfBayType;i++){
    //     $('.mainArea').append("<div id='"+i+"' style='display:inline-flex' class=\"bayArea_20\">" + "</div>");
    // }
    $('.mainArea').append("<div style='display:inline-flex' class=\"bayArea_20\">" + "</div>");
    $('.mainArea').append("<div style='display:inline-flex' class=\"bayArea_40\">" + "</div>");

}

// id number to string
// 1 -> 01; 12->12
function numToidString(num) {
    return num < 10 ? "0" + num.toString() : num.toString();
}

//
function BayNumToRealIndexList(bayNum) {
    //let bay = [];
    let bay = {};
    bay.inch20 = [];
    bay.inch40 = [];
    for (let i=0;i<bayNum;i++){
        bay.inch20[i] = {
            "id":i+1,
            "bayRealIndex":numToidString(i+1)
        };
        if(i<bayNum-1){
            bay.inch40[i] = {
                "id":(i+1)*2,
                "bayRealIndex":numToidString((i+1)*2)
            }
        }
    }
    return bay;
}


function insertBay(bayLists){
    let bay_num = bayLists.inch20.length;
    for(let i=bay_num-1;i>=0;i--){
        let bayIndex = bayLists.inch20[i].bayRealIndex;
        let bayId = bayLists.inch20[i].id;
        $('.bayArea_20').append("<div id='"+bayId+"' class=\"bayZone_inch20\"" +
            "style= 'width:30px;" +
            "height:30px;" +
            "padding:0.5em;" +
            "float:left;" +
            "background-color:grey;" +
            "margin:2px;'>" +
            "<span>'"+ bayIndex + "'</span>"+
            "</div>");
        $('.bayArea_40').append("<div id='"+bayId+"' class=\"bayZone_inch40\"" +
            "style= 'width:30px;" +
            "height:30px;" +
            "padding:0.5em;" +
            "float:left;" +
            //"background-color:lightgrey;" +
            "margin:2px;'>" +
          //  "<span>'"+ bayIndex + "'</span>"+
            "</div>")
    }
}
//
// let testId = "0402";
// //$('.lineArea div[id='+testId+']').addClass("next-to-sea");
// $('.lineArea div[id='+testId+']').css("background-color", "#0077be");

let testIDLeft = "24";
let testIDRight = "23";
function selectToInch40(){
    // test
    //$('.bayArea_40 div[id='+testID+']').css("background-color", "#0077be");
    $('.bayArea_40 div[id='+testIDLeft+']').css({"border-left": "5px solid red","border-bottom":"3px solid red","border-top":"3px solid red","width":"25px","height":"24px"});
    $('.bayArea_40 div[id='+testIDRight+']').css({"border-right": "5px solid red","border-bottom":"3px solid red","border-top":"3px solid red","width":"25px","height":"24px"});

}

/**
 *
 * main
 */
let numOfType = CONTAINER_LIST.num_bay_type;
let numOfBay = CONTAINER_LIST.max_bay_number;

initAreaForInline(numOfType);
let bayList = BayNumToRealIndexList(numOfBay);
insertBay(bayList);


selectToInch40();





