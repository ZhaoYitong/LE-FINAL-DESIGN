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
    max_bay_number: 25,
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


let VIEW_UP = {
    watchType: "upViewing",


};
// TODO: support more number of bay with scroll bar
let CONTAINER_LIST = {
    pic_type:"侧视图", // 俯视图  剖面图
    vessel_id:"001",
    vessel_IMO:"KuiYa123",
    vessel_name:"亚历山大",
    vessel_width:"30m",
    vessel_frontLength:"100m",
    vessel_length:"300m",
    max_bay_number: 25,
    max_layer_above_number: 10, // all above
    max_layer_below_number: 8,  // all below
    num_bay_type: 2, // 20inch  + 40inch inline
    hatCover_kind:"自开式", // 自开式  堆叠式
    hatCover_number: 1,  // 自开式这里默认一层 显示颜色特殊  堆叠式:分为 1、2、3、4层
};

/**
 *
 *
 * @param num
 * @returns {string}
 */

// 初始化生成 多条贝位区域  默认 20inch  40inch
function initAreaForInline(numOfBayType) {
    $('.bayArea').append("<div style='display:inline-flex' id='selectable' class=\"bayArea_20\">" + "</div>");
    $('.bayArea').append("<div style='display:inline-flex' class=\"bayArea_40\">" + "</div>");
}

// id number to string
// 1 -> 01; 12->12
function numToidString(num) {
    return num < 10 ? "0" + num.toString() : num.toString();
}
function createBay40Num() {

}

function BayNumToRealIndexList(bayNum) {
    //let bay = [];
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
        $('.bayArea_20').append("<div id='"+bayId+"' class=\"bayZone_inch20\"" +
            "style= 'width:30px;" +
            "height:30px;" +
            "padding:0.5em;" +
            "float:left;" +
            // "background-color:grey;" +
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
            "</div>")
    }
}

function selectToInch40(leftBay,rightBay,comBayIndex){
    $('.bayArea_40 div[id='+leftBay+']').css({"border-left": "5px solid red","border-bottom":"3px solid red","border-top":"3px solid red","width":"25px","height":"24px"});
    $('.bayArea_40 div[id='+rightBay+']').css({"border-right": "5px solid red","border-bottom":"3px solid red","border-top":"3px solid red","width":"25px","height":"24px"});
    //TODO: display index with one
    $('.bayArea_40 div[id='+leftBay+']').append("<span>'"+ comBayIndex + "'</span>");
    $('.bayArea_40 div[id='+rightBay+']').append("<span>'"+ comBayIndex + "'</span>");
}
function selectToInch20(leftBay,rightBay){
    $('.bayArea_20 div[id='+leftBay+']').css({"border-left": "5px solid red","border-bottom":"3px solid red","border-top":"3px solid red","width":"25px","height":"24px"});
    $('.bayArea_20 div[id='+rightBay+']').css({"border-right": "5px solid red","border-bottom":"3px solid red","border-top":"3px solid red","width":"25px","height":"24px"});
    
}

function clearSelected(){
    $(".bayZone_inch20.ui-selected").children().removeClass("ui-selected");
    $(".bayZone_inch20.ui-selected").removeClass("ui-selected");
}

function disabledSelectFunc(){
//ui-selectee
    $(".bayZone_inch20.ui-selected").children().removeClass("ui-selected","ui-selectee");
    // $(".bayZone_inch20.ui-selected").removeClass("ui-selected","ui-selectee");
    $(".bayZone_inch20.ui-selected").hide();

}
function reCombination(){

    console.log("reCombination correct");
}

function createVesselSide(){
    // above
    let bayLists = BayNumToRealIndexList(numOfBay);
    let con_bay_num = bayLists.inch20.length;
    for(let i=con_bay_num-1;i>=0;i--){
        let conBayId = bayLists.inch20[i].id;
        $(".onBoardSide").append("<div id='"+conBayId+"' class=\"conZoneAbove_inch20\"" +
            "style= 'width:38px;" +
            "display: table-cell;"+
            "vertical-align: bottom;"+
            "height:80px;" +
            // "padding:0;" +
            // "float:left;" +
            "background-color:#d0ddf2;" +
            "margin:2px;'>" +
            "</div>")
    }
    //  
    // test container on board
    // length : width : height   2.5:1:1
    let areaId = 2;
    let conId = 5;
    $(".onBoardSide div[id='2']").append("<div id='"+conId+"' class=\"conBayAbove_inch20\"" +
        "style= 'width:36px;" +
        "height:12px;" +
        "margin:1px 1px 0 0;" +
        "background-color:darkred;'>" +
        "</div>");


    // board
    let boardNum = numOfBoard;
    for(let i=0;i<boardNum;i++){
        $(".boardSide").append("<div style='height:5px;background-color: grey; margin:2px 2px;'></div>")
    }
    // below
    for(let i=con_bay_num-1;i>=0;i--){
        let conBayId = bayLists.inch20[i].id;
        $(".belowBoardSide").append("<div id='"+conBayId+"' class=\"conZoneBelow_inch20\"" +
            "style= 'width:38px;" +
            "display: table-cell;"+
            "vertical-align: bottom;"+
            "height:50px;" +
            // "padding:0.5em;" +
            "float:left;" +
            "background-color:#d0ddf2;margin:2px;'>" +
            "</div>")
    }
}

function createVesselUp(){

}


/**
 *
 * main
 */
let numOfType = VIEW_SIDE.num_bay_type;
let numOfBay = VIEW_SIDE.max_bay_number;
let numOfBoard = VIEW_SIDE.hatCover_number;

initAreaForInline(numOfType);
let bayList = BayNumToRealIndexList(numOfBay);
insertBay(bayList);


let BayInch20 = [];
let BayInch40 = [];

// selectToInch40();
$( function() {
    $( "#selectable" ).selectable({
        stop: function() {
            let selectedBay = $(".bayZone_inch20.ui-selected");
            // 判断当前选择数目是否合法
            if(selectedBay.length!==2) {
                alert("请重新选择");
                clearSelected();
            }
            // disable select left end or right end
            else if(selectedBay[1].id ==1 || selectedBay[0].id == numOfBay){
                alert("请重新选择");
                clearSelected();
            }
            else {
                // TODO: to disable reSelect after first selection
                let leftBayId = selectedBay[0].id;
                let rightBayId = selectedBay[1].id;
                let combinedBayIndex = numToidString((leftBayId*2-1+rightBayId*2-1)/2);
                console.log(combinedBayIndex);
                selectToInch40(leftBayId,rightBayId,combinedBayIndex);
                // disabledSelectFunc();
                // console.log("correct");
            }
        }
    });

} );

/**
 *
 *  USAGE
 */
// TODO: append the item from bottom to floor in div
/*
$('button').click(function() {
    $('#parent').append('<div>element</div>');
});

#parent {
    height: 200px;
    width: 100px;
    border: 1px solid #ccc;
    display: table-cell;
    vertical-align: bottom;
}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script><div id="parent"></div>
<button>
Add
</button>

*/

