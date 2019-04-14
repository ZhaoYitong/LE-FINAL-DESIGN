const ROW = 20;
const COL_SEA = 5;
const COL_BUFFER = 1;
const COL_YARD = 5;
const PRESET_AGV = 10;
const MANNUAL = "手工设置";
const NOT_MANNUAL = "自动设置";
let COUNT = 0;
let AGV_POS = {
    "data":
    [
    ]
};
let eableSubmit = false;
// response from server
let AGV_LIST = {
    "data":
        [{
        "id": "AGV_01",
        "status_battery":"80%",
        "total_route": "200km",
        "isRunnable": true,
        "color":"blue",
        "status":"正常"
         },
        {
            "id": "AGV_02",
            "status_battery":"60%",
            "total_route": "100km",
            "isRunnable": false,
            "color":"red",
            "status":"故障"
        },
        {
            "id": "AGV_03",
            "status_battery":"100%",
            "total_route": "20km",
            "isRunnable": true,
            "color":"blue",
            "status":"正常"
        },
        {
            "id": "AGV_04",
            "status_battery":"80%",
            "total_route": "60km",
            "isRunnable": true,
            "color":"blue",
            "status":"正常"
        },
        {
            "id": "AGV_05",
            "status_battery":"90%",
            "total_route": "0km",
            "isRunnable": true,
            "color":"blue",
            "status":"正常"
        },
        {
            "id": "AGV_06",
            "status_battery":"95%",
            "total_route": "200km",
            "isRunnable": true,
            "color":"blue",
            "status":"正常"
        },
        {
            "id": "AGV_07",
            "status_battery":"93%",
            "total_route": "20km",
            "isRunnable": true,
            "color":"blue",
            "status":"正常"
        },
        {
            "id": "AGV_08",
            "status_battery":"80%",
            "total_route": "200km",
            "isRunnable": false,
            "color":"blue",
            "status":"故障"
        },
        {
            "id": "AGV_09",
            "status_battery":"40%",
            "total_route": "50km",
            "isRunnable": true,
            "color":"blue",
            "status":"正常"
        }
        ]

};
// function isWorkable(val) {
//     return val===true?"正常":"故障";
// }
function initAGVs(num,agvList) {
    for(let i=0,j=1;i<num;i++,j++){
        var temp_id = agvList.data[i].id.substring(4,6);
        $('.inlineLazyAreaForAGV').append(
            "<div id='"+agvList.data[i].id+"' " +
            "class=\"ui-widget-content AGV\" " +
            "title='"+agvList.data[i].id+"\n当前电量: " +
                    ""+agvList.data[i].status_battery+"\n总里程:" +
                    ""+agvList.data[i].total_route+"\n当前状态:" +
                    ""+agvList.data[i].status+" ' " +
                    //""+isWorkable(agvList.data[i].isRunnable)+" ' " +
            "style = 'width:15px;" +
            "height:60px;" +
            "padding:0.5em;" +
            "float:left;" +
            "margin:10px 30px 10px 0;" +
            "background-color:blue;" +
            "display:table;'>" +
            "<p class=\"textInAGV\" style='text-align:center;" +
            "vertical-align:middle;" +
            "display:table-cell'>AGV\n"+temp_id+"</p>" +
            "</div>");

    }
}
function initAreaForInline(col_sea,col_buffer,col_yard) {
    let aa = col_sea;
    let bb = col_sea + 1;
    let cc = col_sea+col_buffer+1;
    for(let i=0,j=1;i<aa;i++,j++){
        $('.mainArea').append("<div id='"+j+"' style='display:inline-flex' class=\"lineArea\">" + "</div>");
    }
    for(let ii=0,jj=bb;ii<col_buffer;ii++,jj++){
        $('.mainArea').append("<div id='"+jj+"'' style='display:inline-flex;' class=\"bufferArea\">" + "</div>");
    }
    for(let iii=0,jjj=cc;iii<col_yard;iii++,jjj++){
        $('.mainArea').append("<div id='"+jjj+"'' style='display:inline-flex' class=\"lineArea\">" + "</div>");
    }
}
function numToidString(num) {
    return num<10?"0"+num.toString():num.toString();
}
function initLineBar(num,areaId){
    for(let i=0,j=1;i<num;i++,j++){
        let zoneId = numToidString(j)+numToidString(areaId);
        $('.mainArea div[id='+areaId+']').append("<div id='"+zoneId+"' pointX='"+j+"' pointY='"+areaId+"' class=\"ui-widget-header lineZone\"" +
                                                 "style= 'width:30px;" +
                                                         "height:30px;" +
                                                         "padding:0.5em;" +
                                                         "float:left;" +
                                                         "margin:2px;'>" +
                                                "</div>");
    }
}
function initBufferBar(num,areaId){
    for(let i=0,j=1;i<num;i++,j++){
        let zoneId = numToidString(j)+numToidString(areaId);
        $('.mainArea div[id='+areaId+']').append("<div id='"+zoneId+"' pointX='"+j+"' pointY='"+areaId+"' class=\"ui-widget-header bufferZone\" " +
                                            "style= 'width:30px;" +
                                                    "height:180px;" +
                                                    "padding:0.5em;" +
                                                    "float:left;" +
                                                    "margin:2px;'>" +
                                                    "<p></p>" +
                                                "</div>");
    }
}
function autoSetLayoutManual(numOfAGV,roadROW,col_sea,col_buffer,col_yard,agv_list){
    numOfAGV = numOfAGV>agv_list.data.length? agv_list.data.length:numOfAGV;
    initAGVs(numOfAGV,agv_list);
    initAreaForInline(col_sea,col_buffer,col_yard);
    for(let i=1;i<col_sea+1;i++)
    {
        initLineBar(roadROW,i);
    }
    for(let j=col_sea+1;j<col_sea+col_buffer+1;j++)
    {
        initBufferBar(roadROW,j);
    }
    for(let k=col_sea+col_buffer+1;k<col_sea+col_buffer+col_yard+1;k++)
    {
        initLineBar(roadROW,k);
    }
}
/*
*******
 */
function setDefault(){
    $(".maxNumberOfAGV")
        .append("<span class=\"help-block blue maxValueTipOfAGV\">" +"当前可配载AGV最大数目: "+AGV_LIST.data.length+"</span>");
    $(".defaultSetting").show();
    $('.submitButton').removeAttr('disabled');
}
function switchMethodToDraw(item) {
    if(item.methodOfSet == MANNUAL){
        autoSetLayoutManual(item.numOfAGV,item.numOfRow,item.numOfLaneSea,item.numOfLaneBuffer,item.numOfLaneLand,AGV_LIST);
    }
    else{
        alert("当前只支持手工设置!");
    }
}
function finishSetting() {
    console.log(AGV_POS.data);
}
/*
    request the server for new AGV_LIST when load first time,
    when submit, first request the server, server will response data and permit new layout
 */
function submitInput(){
    let setData = {};
    setData.numOfRow = $('#numberOfRow')[0].value;
    setData.numOfAGV = $('#numberOfAGV')[0].value;
    setData.methodOfSet = $('.methodOfSet')[0].value;
    setData.numOfLaneSea = $('#numberOfLaneSea')[0].value;
    setData.numOfLaneLand = $('#numberOfLaneLand')[0].value;
    setData.numOfLaneBuffer = $('#numberOfLaneBuffer')[0].value;

    switchMethodToDraw(setData);
    $(".defaultSetting").hide();
    $('.submitButton').attr('disabled','disabled');
    $( ".AGV" ).draggable({ revert: "invalid" });
    //$( ".AGV" ).selectable();
    $( ".bufferZone,.lineZone" ).droppable({
        drop: function( event, ui ) {
            let item = ui.draggable;
           // AGV_POS.push(ui.draggable);
            $( this )
                .addClass( "ui-state-highlight" );
            // .find( "p" );
            // .html( "Dropped!" );
        },
        out: function ( event, ui) {
            $( this )
                .removeClass("ui-state-highlight");
        }
    });
    // horizontal
    // reset ?
    $(".AGV").dblclick(function () {
        $( this )[0].style.transform = "rotate(90deg)";
    });

}

// function autoDis(){
//     if( $('.methodOfSet')[0].value == "自动分配"){
//         $('.form-defaultSetting').append("");
//     }
// }

$( function() {
    $('.submitButton').attr('disabled','disabled');
    $(".defaultSetting").hide();

    autoSetLayoutManual(PRESET_AGV,ROW,COL_SEA,COL_BUFFER,COL_YARD,AGV_LIST);

    $( ".AGV" ).draggable({ revert: "invalid" });
    //$( ".AGV" ).selectable();
    $( ".bufferZone,.lineZone" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" );
            // .find( "p" );
            // .html( "Dropped!" );
            let draggedId = ui.draggable[0].id;
            let droppedId = $(this)[0].id;
            // delete last position
            if(AGV_POS.data.length == 0){
                AGV_POS.data.push({"AGV_id":draggedId,"AGV_initPos":droppedId});
            }
            else{
                let countDif = 0;
                for(let i=0;i<AGV_POS.data.length;i++){
                    if(draggedId==AGV_POS.data[i].AGV_id && droppedId==AGV_POS.data[i].AGV_initPos){
                        break;
                    }
                    else if(draggedId==AGV_POS.data[i].AGV_id && droppedId!=AGV_POS.data[i].AGV_initPos){
                        AGV_POS.data[i].AGV_initPos = droppedId;
                    }
                    else if (draggedId!=AGV_POS.data[i].AGV_id ){
                        countDif = countDif+1;
                        if(countDif==AGV_POS.data.length){
                            AGV_POS.data.push({"AGV_id":draggedId,"AGV_initPos":droppedId});
                        }
                    }
                }
            }
        },
        out: function ( event, ui) {
            $( this )
                .removeClass("ui-state-highlight");
        }
    });
    // horizontal
    // reset ?
    $(".AGV").dblclick(function () {
        $( this )[0].style.transform = "rotate(90deg)";
    });

    let testId = "0402";
    //$('.lineArea div[id='+testId+']').addClass("next-to-sea");
    $('.lineArea div[id='+testId+']').css("background-color", "#0077be");
} );
