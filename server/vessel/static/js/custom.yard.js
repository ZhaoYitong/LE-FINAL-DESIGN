let container_object;
let container_list_object;
let bay_object;
let box_object;
let yard_yardcel;
let yard_status;
let yard_ctnno;
let yard_strloaunlsig;
let yard_ctntyp;
let yard_ctnwegt;
let yard_unloadport;
let yard_size;
let yard_owner;
let yard_loaVesTim;
let yard_color;
let color_old;

let box_title_list = ["A", "B", "C", "D", "E", "F"];
let col_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
// table
function fun_infor(obj) {
    color_old = obj.style.backgroundColor;
    obj.style.backgroundColor = "yellow";
    document.getElementById("add1").innerText = yard_yardcel[obj.id];
    document.getElementById("add2").innerText = yard_status[obj.id];
    document.getElementById("add3").innerText = yard_ctnno[obj.id];
    document.getElementById("add4").innerText = yard_strloaunlsig[obj.id];
    document.getElementById("add5").innerText = yard_ctntyp[obj.id];
    document.getElementById("add6").innerText = yard_ctnwegt[obj.id];
    document.getElementById("add7").innerText = yard_unloadport[obj.id];
    document.getElementById("add8").innerText = yard_size[obj.id];
    document.getElementById("add9").innerText = yard_owner[obj.id];
    document.getElementById("add10").innerText = yard_loaVesTim[obj.id];
}

function re_fun_infor(obj) {
   // obj.style.backgroundColor = color_old;
    obj.style.backgroundColor = yard_color[obj.id];
}

for(let i=5; i>0; i--){
    let lay_index_id = "container_information_"+ (i) + "_layer";
    $(`.container_information_table`).append(`<tr height="14%" id=${lay_index_id}>`);
    $(`tr[id=${lay_index_id}]`).append(`<td width="10%" bgcolor="#a9a9a9">${i}</td>`);
    for(let j=0; j<col_list.length; j++){
        let col_index = col_list[j];
        let col_lay = col_index + i.toString();
        $(`tr[id=${lay_index_id}]`).append(`<td width="9%" id=${col_lay} onmouseenter="fun_infor(this)" onmouseleave="re_fun_infor(this)"></td>`);
    }
}

$(`.container_information_table`).append(`<tr height="14%" id="container_information_col">`+
                `<td width="10%">层数<br>贝位</td>`+
                `<td width="9%">1</td>`+
                `<td width="9%">2</td>`+
                `<td width="9%">3</td>`+
                `<td width="9%">4</td>`+
                `<td width="9%">5</td>`+
                `<td width="9%">6</td>`+
                `<td width="9%">7</td>`+
                `<td width="9%">8</td>`+
                `<td width="9%">9</td>`+
                `<td width="9%">10</td>`+
            `</tr>`+
            `<tr>`+
                `<td class="table-confirm" colspan="11">`+
                    `<input id="container_information_button" type="button" onclick='des()' value="确定">`+
                `</td>`+
            `</tr>`);

//这里是写出贝位
for (let i = 0; i < 90; i++) {
    let bay = 2 * i + 1;
    $(`.bay_Y`).append(`<div class="bay_Y_num">${bay}</div>`);
}
// 增加列号
for(let i=0; i<box_title_list.length; i++){
    let index = box_title_list[i];
    let box_sub_title = "box_" + index + "_title";
    let box_sub_name = index + "箱区";
    $(`.box_title`).append(`<div class=${box_sub_title}><div class="box_name">${box_sub_name}</div></div>`);
    for(let i = 0; i < col_list.length; i++){
        $(`div[class=${box_sub_title}]`).append(`<div class="box_col">${col_list[i]}</div>`);
    }
}
//这里是画箱子   箱区  贝位 列
for(let i=0; i<box_title_list.length; i++){
    let box_area_sub = "box_" + box_title_list[i];
    let yard_add = box_title_list[i];
    $(`.box_area`).append(`<div class=${box_area_sub}></div>`);
    for(let j=0; j<900; j++){
        //name_str="A"+String(parseInt(j/10)*2+1)+col_list[j%10];
        let bay_str = String(parseInt(j / 10) * 2 + 1);
        let col_str = col_list[j % 10];
        $(`div[class=${box_area_sub}]`).append(`<div class="container" yard=${yard_add} bay=${bay_str} col=${col_str} onclick="container_add(this,event)"></div>`);
    }
}

function container_add(container_this, e) {
    ////////////////////发送信息//////////////////////////
    let data = {"Box": container_this.getAttribute("yard"), "Bay": container_this.getAttribute("bay")};
    $.ajax({
        url: "/yardMon/yard_layout/",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(data),
        dataType: "text",
        success: function (yard_database) {
            yard_database = JSON.parse(yard_database);

            yard_yardcel = yard_database["yard_yardcel"];
            yard_status = yard_database["yard_status"];
            yard_ctnno = yard_database["yard_ctnno"];
            yard_strloaunlsig = yard_database["yard_strloaunlsig"];
            yard_ctntyp = yard_database["yard_ctntyp"];
            yard_ctnwegt = yard_database["yard_ctnwegt"];
            yard_unloadport = yard_database["yard_unloadport"];
            yard_size = yard_database["yard_size"];
            yard_owner = yard_database["yard_owner"];
            yard_loaVesTim = yard_database["yard_loaVesTim"];
            yard_color = yard_database["yard_color"];

            //console.log(yard_database);

            let col_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
            let lay_list = ["1", "2", "3", "4", "5"];
            // var find_str;
            // var color_str;
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 10; j++) {
                    let find_str = col_list[j] + lay_list[i];
                    let color_str = yard_color[find_str];
                    document.getElementById(find_str).style.backgroundColor = color_str;
                }
            }

            //判断空值还原颜色
            if (container_object) {
                container_object.style.backgroundColor = "darksalmon";
                for (let i = 0; i < 10; i++) {
                    container_list_object[i].style.backgroundColor = "darksalmon";
                }
                let con_tab = document.getElementById("container_information");
                con_tab.style.left = "383px";
                con_tab.style.top = "100px";
            }
            if (bay_object) {
                bay_object.style.backgroundColor = "skyblue";
            }
            if (box_object) {
                box_object.style.backgroundColor = "skyblue";
            }

            //////////////////操作table
            let yard = container_this.getAttribute("yard");
            let bay = container_this.getAttribute("bay");
            let pos_str = yard + "箱区" + "*" + bay + "贝位" + "*" + "详细信息";
            document.getElementById("container_information_title").innerText = pos_str;

            //更改每个箱位的颜色

            //更改表格属性颜色  yard_list
            //在点击后获取到箱区 贝位相同的集装箱箱位
            //在确定了层和列后设置颜色
            //改变集装箱颜色 贝位颜色 箱区颜色
            container_this.style.backgroundColor = "red";

            //改变整个贝位的颜色

            let con_list = document.getElementsByClassName("container");

            let bay_obj_list = [];
            for (let i = 0; i < con_list.length; i++) {
                let yard_list_str = con_list[i].getAttribute("yard");
                let bay_list_str = con_list[i].getAttribute("bay");
                if (yard_list_str === yard && bay_list_str === bay) {
                    bay_obj_list.push(con_list[i]);
                }
            }
            for (let i = 0; i < 10; i++) {
                bay_obj_list[i].style.backgroundColor = "red";
            }

            //传递整个贝位
            container_list_object = bay_obj_list;

            let bay_list = document.getElementsByClassName("bay_Y_num");
            for (let i = 0; i < 90; i++) {
                let bay_obj = bay_list[i];
                if (bay_obj.innerHTML === bay) {
                    bay_obj.style.backgroundColor = "red";
                    bay_object = bay_obj;
                    break;
                }
            }

            let box_list = document.getElementsByClassName("box_name");
            for (let i = 0; i < 6; i++) {
                let box_obj = box_list[i];
                if (box_obj.innerHTML === (yard + "箱区")) {
                    box_obj.style.backgroundColor = "red";
                    box_object = box_obj;
                    break;
                }
            }
            //传递集装箱
            container_object = container_this;
            document.getElementById("container_information").hidden = false;
            // con_tab.hidden = false;
        },
        error: function (msg) {
            //alert("发送失败");
        }
    });
}

function des() {
    let con_tab = document.getElementById("container_information");
    con_tab.hidden = true;
    // 还原 颜色 坐标
    container_object.style.backgroundColor = "darksalmon";
    for (let i = 0; i < 10; i++) {
        container_list_object[i].style.backgroundColor = "darksalmon";
    }

    bay_object.style.backgroundColor = "skyblue";
    box_object.style.backgroundColor = "skyblue";
    con_tab.style.left = "383px";
    con_tab.style.top = "100px";

    let col_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let lay_list = ["1", "2", "3", "4", "5"];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            let find_str = col_list[j] + lay_list[i];
            document.getElementById(find_str).style.backgroundColor = "wheat";
            // $(`${find_str}`)
        }
    }
}

dragElement(document.getElementById(("container_information")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        if ((elmnt.offsetTop - pos2) > 100) {
            if ((elmnt.offsetLeft - pos1) > 60) {
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }
        }
    }
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
