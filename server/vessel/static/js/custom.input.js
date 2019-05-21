/**
 *  const
 */
const VESSEL_IMO = "船舶航次：";
const BAY_INDEX_TIP = "贝位号: ";
const TIP_PLEASE_RESELECT = "请重新选择";
const IS_TO_RESELECT= "确认重新组贝？";
const TIP_RESET_BAY_SUCCESS = "重新组贝成功";
/**
 *  initialize
 */
let selected_vessel = $(`#vesselSelect option:selected`).val();
let combinedBay20inch = [];
let combinedBay40inch = [];
// let getTable = document.getElementById("table-bay-struct");
// getTable.style.display='none';
// set table_bay_struct display: none
// let getTable = document.getElementById("table-bay-struct");
// getTable.style.display='none';

$(`button[id="add-vessel-submit"]`).click(function () {
    let ves_name = $(`input[id="vessel-name"]`)[0].value;
    let ves_len = $(`input[id="vessel-length"]`)[0].value;
    let ves_wid = $(`input[id="vessel-width"]`)[0].value;
    let ves_fr_len = $(`input[id="vessel-front-length"]`)[0].value;
    let bay_20_num = $(`input[id="bay-inch20-num"]`)[0].value;
    let eng_pos = $(`input[id="engine-pos"]`)[0].value;
    let eng_wid = $(`input[id="engine-width"]`)[0].value;
    let deck_max_lay = $(`input[id="deck-max-layer-num"]`)[0].value;
    let cab_max_lay = $(`input[id="cabin-max-layer-num"]`)[0].value;
    let deck_max_col = $(`input[id="deck-max-col-num"]`)[0].value;
    let cab_max_col = $(`input[id="cabin-max-col-num"]`)[0].value;
    let ves_imp_voy = $(`input[id="vessel-import-voy"]`)[0].value;
    let ves_exp_voy = $(`input[id="vessel-export-voy"]`)[0].value;
    let plan_ber_pos = $(`input[id="vessel-plan-ber-pos"]`)[0].value;
    let real_ber_pos = $(`input[id="vessel-real-ber-pos"]`)[0].value;
    let ves_ber_dir = $(`input[id="vessel-ber-dir"]`)[0].value;
    let data = {
        ves_name: ves_name,
        ves_len: ves_len,
        ves_wid: ves_wid,
        ves_fr_len: ves_fr_len,
        bay_20_num: bay_20_num,
        eng_pos: eng_pos,
        eng_wid: eng_wid,
        deck_max_lay: deck_max_lay,
        cab_max_lay: cab_max_lay,
        deck_max_col: deck_max_col,
        cab_max_col: cab_max_col,
        ves_imp_voy: ves_imp_voy,
        ves_exp_voy: ves_exp_voy,
        plan_ber_pos: plan_ber_pos,
        real_ber_pos: real_ber_pos,
        ves_ber_dir: ves_ber_dir,
    };
    if (!ves_name) {
        console.log("Vessel NAME IS NULL!");
        return false
    }
    $.ajax({
        url: '/vesselStruct/add_vessel/',
        type: 'POST',
        data: JSON.stringify(data),
        success: function (res) {
            console.log(res);
            location.reload();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
        dataType: "json",
    });
});
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
function showVal(a){
    let zoomScale = Number(a)/10;
    setZoom(zoomScale,document.getElementsByClassName('bayStructArea')[0])
}
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
/**
 * bay
 */
function insertBay(bayLists, direction){
    let bay_num = bayLists.inch20.length;
    function drawBay(val,args_dir) {
        let bayIndex = bayLists.inch20[val].bayRealIndex;
        let bayId = bayLists.inch20[val].id;
        $('.bayArea_40').append(`<div id= ${bayId} class="bayZone_inch40"></div>`);
        $('.bayArea_20').append(`<div id= ${bayId} title=${bayIndex} 
                                    bay_index=${bayIndex} class="bayZone_20">`+
                                    `<span class="bay20Index">${bayIndex}</span>`+
                                `</div>`);
    }
    let isInverse = true;
    directionDealer(bay_num, direction, drawBay, isInverse);
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
            $(`.newBayArea`).append(`<div id= ${itemId} bay_index=${bayIndex} 
                class="newBay20 bay">` +
                `<span class="newBay20Index">${dataList[index].bayInch20[0].index}</span>` +
                `</div>`);
        } else {
            if (bay_dir === 'R'){
                let bay40_index = dataList[index].bayInch40[0].index;
                let bay20_left = dataList[index].bayInch20s[1].index;
                let bay20_right = dataList[index].bayInch20s[0].index;
                $(`.newBayArea`).append(`<div id= ${itemId} class="comBay20_40">` +
                    `<div class="newBay40InCom bayInfo">` +
                    `<span class="newBay40IndexInCom">${bay40_index}</span>` +
                    `</div>` +
                    `<div class="newBay20InComParent">` +
                    `<div class="newBay20InComLeft bay">`+
                    `<span class="newBay20IndexInCom">${bay20_left}</span></div>` +
                    `<div class="newBay20InComRight bay">`+
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
                    `<div class="newBay40InCom bayInfo">` +
                    `<span class="newBay40IndexInCom">${bay40_index}</span>` +
                    `</div>` +
                    `<div class="newBay20InComParent">` +
                    `<div class="newBay20InComLeft bay">`+
                    `<span class="newBay20IndexInCom">${bay20_left}</span></div>` +
                    `<div class="newBay20InComRight bay">`+
                    `<span class="newBay20IndexInCom">${bay20_right}</span></div></div>` +
                    `</div>`);
            }
        }
    };
    let isInverse = true;
    directionDealer(newBay_num, dir, drawNewBay, isInverse);
    // TODO: as bayArea is created dynamically, use on click
    // TODO: disable this func before bayCombined!
    $(`.bay`).on('click', function () {
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
                let bay_struct_max = res.bay_struct_max;
                let deck_max_lay = res.bay_struct_max.deck_lay_num_max;
                let cab_max_lay = res.bay_struct_max.cab_lay_num_max;
                let deck_max_col = res.bay_struct_max.deck_lay_num_max;
                let cab_max_col = res.bay_struct_max.cab_col_num_max;

                let data = res;
                let bay_struct_edit =
                    `<div id='table-bay-struct'>`+
                    `<div id="sub-table">`+
                    `<h1>test areaa </h1>`+
                    `<button class="btn btn-dark test_btn">确认</button>`+
                    `</div></div>`;

                let area_size = ['1000px', '650px']; // change according to size of ves_struct
                let title = '定义贝位结构';
                // 当前贝位结构
                // 编辑 确认
                // 当前贝位结构情况
                // 点击编辑 按钮 则 可以对当前贝位结构（定义/未定义）进行更新操作
                //      支持 selectable 一个  多个 ---> jquery UI
                // 点击 确认 按钮 则 对当前贝位结构信息（更新/未更新）提交
                //
                layer.open({
                    type: 1,
                    title: title,
                    area: area_size, //宽高
                    closeBtn: 1,
                    shadeClose: false,
                    skin: '',
                    content: bay_struct_edit,
                });
                // button func in layer
                $(`.test_btn`).on('click', function () {
                   console.log("hhh");
                });
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
 *  select bay
 */
function selectToInch40(leftBay,rightBay,comBayIndex){
    let span_bayIndex = `<span class="bay40Index">${comBayIndex}</span>`;
    $(`.bayArea_40 div[id=${leftBay}]`)
        .addClass("leftBaySelected combined")
        .append(span_bayIndex);
    $(`.bayArea_40 div[id=${rightBay}]`)
        .addClass("rightBaySelected combined")
        .append(span_bayIndex);
}
function clearSelected(){
    $(`.bayZone_20.ui-selected`)
        .removeClass("ui-selected")
        .children().removeClass("ui-selected");
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
                    isExist(combinedBay20inch,selectedBay[0].id) ||
                    isExist(combinedBay20inch,selectedBay[1].id);
                let isNextTo =
                    toAbsent(parseInt(selectedBay[0].id) -
                        parseInt(selectedBay[1].id)) === 1;
                let isEngine =
                    isExist(engineBodyBays,selectedBay[0].title) ||
                    isExist(engineBodyBays,selectedBay[1].title);
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
                    let combinedBayInch40Index =
                        numToIdString((leftBayId*2-1+rightBayId*2-1)/2);
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
function get_combined_info (){
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
            let data = res;
            createBayCombinationInfo(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
    });
}
function combineReset() {
    alert(IS_TO_RESELECT);
    selected_vessel = $(`#vesselSelect option:selected`).val();
    $.ajax({
        url: '/vesselStruct/reset_bay_combine/',
        type: 'POST',
        data: {
            name: selected_vessel,
            type: 'reset',
        },
        dataType: "json",
        success: function (res) {
            console.log(res);
            let num = res.number;
            let dir = res.bayDirection;
            let engBodyList = res.engineRoomIndex;
            $(`.newBayArea`)[0].style.display = 'none';
            insertBay(BayNumToRealIndexList(num), dir);
            $(`.reStartCombine`)[0].disabled = true;
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
            alert(TIP_RESET_BAY_SUCCESS);
        },
        dataType: "json",
    });
}

/**
 *
 */
