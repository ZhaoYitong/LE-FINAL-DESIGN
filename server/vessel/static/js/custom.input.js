
let selected_vessel = $(`#vesselSelect option:selected`).val(); // !!!

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
function editLoadOrUnloadInfo() {
$(`.editLoadOrUnload`)[0].disabled = true;
let item_num = function (bayIndex,class_div) {
    return `<div bayIndex="${bayIndex}" class="${class_div}"><input/></div>`;};
    $.ajax({
        url: '/vesselStruct/test_creat_pend_info/',
        type: 'GET',
        data: {
            name: selected_vessel,
        },
        dataType: "json",
        success: function (res) {
            console.log(res);
            let bayList = res.data;
            let bayListLength = res.data.length;
            let dir = res.bayDirection;
            drawInfo(bayList, bayListLength);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
    });
    function drawInfo (bay_list, bay_list_length) {
        for(let i=bay_list_length-1;i>=0;i--){
            if(bay_list[i].type === "single"){
                let bayIndex20 = bay_list[i].bayInch20[0].index;
                $(`div[class="aboveUnload_40"]`).append(item_num(bayIndex20,"unload_20"));
                $(`div[class="belowUnload_40"]`).append(item_num(bayIndex20,"unload_20"));
                $(`div[class="aboveLoad_40"]`).append(item_num(bayIndex20,"load_20"));
                $(`div[class="belowLoad_40"]`).append(item_num(bayIndex20,"load_20"));
            }
            else {
                let bayIndex40 = bay_list[i].bayInch40[0].index;
                $(`div[class="aboveUnload_40"]`).append(item_num(bayIndex40,"unload_40"));
                $(`div[class="belowUnload_40"]`).append(item_num(bayIndex40,"unload_40"));
                $(`div[class="aboveLoad_40"]`).append(item_num(bayIndex40,"load_40"));
                $(`div[class="belowLoad_40"]`).append(item_num(bayIndex40,"load_40"));
            }
        }
    for(let j=bay_list_length-1;j>=0;j--){
        if(bay_list[j].type === "single"){
            let bayIndex20 = bay_list[j].bayInch20[0].index;
            $(`div[class="aboveUnload_20"]`).append(item_num(bayIndex20,"unload_20"));
            $(`div[class="belowUnload_20"]`).append(item_num(bayIndex20,"unload_20"));
            $(`div[class="aboveLoad_20"]`).append(item_num(bayIndex20,"load_20"));
            $(`div[class="belowLoad_20"]`).append(item_num(bayIndex20,"load_20"));
        }
        else {
            //TODO: from left to right?
            let bayIndex20_0 = bay_list[j].bayInch20s[1].index;
            let bayIndex20_1 = bay_list[j].bayInch20s[0].index;
            $(`div[class="aboveUnload_20"]`)
                .append(item_num(bayIndex20_0,"unload_20"))
                .append(item_num(bayIndex20_1,"unload_20"));
            $(`div[class="belowUnload_20"]`)
                .append(item_num(bayIndex20_0,"unload_20"))
                .append(item_num(bayIndex20_1,"unload_20"));
            $(`div[class="aboveLoad_20"]`)
                .append(item_num(bayIndex20_0,"load_20"))
                .append(item_num(bayIndex20_1,"load_20"));
            $(`div[class="belowLoad_20"]`)
                .append(item_num(bayIndex20_0,"load_20"))
                .append(item_num(bayIndex20_1,"load_20"));
        }
    }
}
}

function confirmLoadOrUnloadInfo() {
     $.ajax({
        url: '/vesselStruct/test_creat_pend_info/',
        type: 'GET',
        data: {
            name: selected_vessel,
        },
        dataType: "json",
        success: function (res) {
            console.log("confirm: ", res);
            let bayList = res.data;
            let bayListLength = res.data.length;
            let dir = res.bayDirection;
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
        },
    });

     let unload_40_list = [];
     let unload_20_list = [];
     let load_40_list = [];
     let load_20_list = [];
     let objs_unload_40 = $(`.unload_40`);
     let objs_unload_20 = $(`.unload_20`);
     let objs_load_40 = $(`.load_40`);
     let objs_load_20 = $(`.load_20`);
     console.log(objs_unload_40);
     // Math.ceil(Math.random()*10);
     // for(let i=0; i<objs_unload_40.length; i++){
     //     unload_40_list.push({'index':objs_unload_40[i].attributes.bayindex.value, 'num': objs_unload_40[i].childNodes[0].value});
     // }
     // for(let j=0; j<objs_unload_20.length; j++) {
     //     unload_20_list.push({'index':objs_unload_20[j].attributes.bayindex.value, 'num': objs_unload_20[j].childNodes[0].value});
     // }
     // for(let k=0; k<objs_load_40.length; k++) {
     //     load_40_list.push({'index':objs_load_40[k].attributes.bayindex.value, 'num': objs_load_40[k].childNodes[0].value});
     // }
     // console.log('objs_load_20: ' + objs_load_20);
     // for(let m=0; m<objs_load_20.length; m++) {
     //     load_20_list.push({'index':objs_load_20[m].attributes.bayindex.value, 'num': objs_load_20[m].childNodes[0].value});
     // }

     for(let i=0; i<objs_unload_40.length; i++){
         unload_40_list.push({'index':objs_unload_40[i].attributes.bayindex.value, 'num': Math.ceil(Math.random()*10)});
     }
     for(let j=0; j<objs_unload_20.length; j++) {
         unload_20_list.push({'index':objs_unload_20[j].attributes.bayindex.value, 'num': Math.ceil(Math.random()*10)});
     }
     for(let k=0; k<objs_load_40.length; k++) {
         load_40_list.push({'index':objs_load_40[k].attributes.bayindex.value, 'num': Math.ceil(Math.random()*10)});
     }
     console.log('objs_load_20: ' + objs_load_20);
     for(let m=0; m<objs_load_20.length; m++) {
         load_20_list.push({'index':objs_load_20[m].attributes.bayindex.value, 'num': Math.ceil(Math.random()*10)});
     }
     console.log('unload_40_list: '+ unload_40_list + '\n' + 'unload_20_list: ' + unload_20_list + '\n' + 'load_40_list: ' + load_40_list + '\n' + 'load_20_list: ' + load_20_list);
     // update
     selected_vessel = $(`#vesselSelect option:selected`).val();
     let data_lists = {
        vessel_name: selected_vessel,
        unload_40_list: unload_40_list,
        unload_20_list: unload_20_list,
        load_40_list: load_40_list,
        load_20_list: load_20_list,
     };

     $.ajax({
        url: '/vesselStruct/test_creat_pend_info/',
        type: 'POST',
        data: JSON.stringify(data_lists),
        success: function(res){
            console.log(res);
        },
        dataType: "json",
    });
}



/**
 *  as input area
 *
 */


