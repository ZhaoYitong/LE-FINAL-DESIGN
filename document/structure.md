一、 绪论

1. 研究背景
    船舶配载问题，一直以来，是港口码头作业研究的热点问题。决策支持系统，又是当前。。。。。


2. 研究意义
    通过对船舶配载问题的决策支持系统的研究，在人机交互层面，实现船舶配载信息监控以及船舶装配的手工指定； 在算法模型层面，引入方法库、模型库，生成配载调度的决策信息，方便仿真系统的仿真实施； 在数据库存储层面，引入关系模型，关联存储船舶配载相关信息，并及时进行增删该查，有利于港口码头调度作业中其他子系统的信息获取，以及该系统内部信息的关联变化。
3. 研究现状 
    通过查阅相关文献，阐述研究现状， 这里要假如引用参考文献的部分。。。。。。

二、 相关技术理论阐述

1. 决策支持系统解释
    决策支持系统（Decision Support Systems，简称DSS），是协助进行商业级或组织级决策活动的信息系统。DSSs一般面向中高层面管理，服务于组织机构内部管理、操作和规划级的决策，帮助决策者对快速变化并且很难提前确定的问题进行决策，通常是非结构化（Non-structured）和半结构化（Semi-structured）的决策问题。决策支持系统既可以是完全自动化决策，也可以是完全人工决策，或者两者兼有。[refs:https://zh.wikipedia.org/wiki/决策支持系统 ]
    

三、 船舶实体分析
1. 

四、 系统规划
1. 船舶结构
2. 船舶作业过程

五、 系统界限
1. 船舶相关的信息分析
2. 船舶配载业务功能调查
3. 船舶配载业务流程调查
4. 数据汇总
    4.1 ER模型
    4.2 数据项
    4.3 U/C 矩阵
5. 数据流程图
6. 数据字典
    6.1 数据结构
    6.2 数据流
    6.3 数据存储
    6.4 外部实体
    6.5 逻辑处理


六、 数学模型
1. 方法库 
2. 模型库

七、 系统设计
1. 功能结构图设计
    1.1 层次模块结构图
    1.2 H图
    1.3 IPO 图

2. 系统流程图


3. 数据存储设计
    3.1 关系模型

4. 处理流程图
    4.1 处理流程--
    4.2 处理流程--

5. 程序设计
    5.1 配载程序设计
    5.2 输出设计
    5.3 输入设计

八、 结论和展望

参考文献


致谢


附录
# code repository: https://github.com/ZhaoYitong/LE-FINAL-DESIGN
# 文件结构
LE-FINAL-DESIGN
    ├─.idea
    ├─document
    ├─server
    └─web
        ├─css
        │  └─tool
        │      └─fontawesome-free
        │          ├─css
        │          ├─sprites
        │          ├─svgs
        │          │  ├─brands
        │          │  ├─regular
        │          │  └─solid
        │          └─webfonts
        ├─images
        ├─js
        │  └─tool
        │      ├─bootstrap
        │      │  └─js
        │      ├─jquery
        │      └─jquery-easing
        └─template
            └─subTemplate
                ├─loadOrUnload
                │  ├─loadView
                │  └─unloadView
                ├─vessel
                │  ├─vesselSheet
                │  └─vesselView
                └─yard
                    ├─yardSheet
                    └─yardView

# core:
function numToIdString(num) {
    return num < 10 ? "0" + num.toString() : num.toString();
}
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
                `<div id= ${itemId} class="newBay20">`+
                    `<span class="newBay20Index">${dataList[i].bayInch20[0].index}</span>`+
                `</div>`);
        }
        else {
            $(`.newBayArea`).append(
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
    // disable reCreate vessel
    $(`.createVessel`)[0].disabled = true;
}
/**
 *  stowage info
 */
function createStowageInfo() {
    // TODO: disable according to relevant func before click
    $(`.createStowage`)[0].disabled = true;

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
                    alert("请重新选择");
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
                alert("请重新选择");
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



