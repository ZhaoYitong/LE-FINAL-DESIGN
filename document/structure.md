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
2. 自动化集装箱码头
    通常，我们把基于自主装卸系统的集装箱码头简称为自动化集装箱码头，英文缩写为ACT。
自动化集装箱码头的发展迄今为止已有30年左右的历史。早在80年代中期，英国、日本和荷兰首先提出了自动化集装箱码头的建设规划，但是后来日本的川崎港没钱了，所以日本的建设计划就因此搁浅了。
直到1993年，荷兰鹿特丹建成了世界上第一个自动化集装箱码头。在总结了Delta Sealand码头建设和使用经验的基础上, ECT的Delta Dedicated East (DDE)和Delta Dedicated West (DDW)也分别于1997和2000年建成投产。
与此同时，新加坡PSA（Pasir Panjang码头）在1997年建成了远程操控的高架行车系统，实现了堆场的半自动操作，但由于防摇效果不尽如人意，操作效果不理想。香港HIT国际货柜码头则在1999年实现了堆场的半自动化作业。
进入21世纪后，尤其是码头实现了自动化后的优势得到了充分发挥，自动化码头如雨后春笋般出现。德国汉堡CTA码头一期于2002年10月投产，荷兰ECT Euromax码头于2008年投入试运营。
截止到目前，已运营的自动化码头有荷兰ECT码头、德国汉堡HHLA-CTA码头、荷兰Euromax码头、法国SETO-MSC码头、韩进西班牙TTI码头、DPW 比利时泽布勒赫码头；堆场自动化运营的码头有美国弗吉尼亚码头、香港HIT码头、新加坡码头、韩国釜山码头、台湾台北港、台湾阳明码头、澳大利亚Patrick码头。
3. 协同
“协同”概念有着更深的含义，不仅包括人与人之间的协作，也包括不同应用系统之间、不同数据资源之间、不同终端设备之间、不同应用情景之间、人与机器之间、科技与传统之间等全方位的协同。
协同是指元素对元素的相干能力，表现了元素在整体发展运行过程中协调与合作的性质。结构元素各自之间的协调、协作形成拉动效应，推动事物共同前进，对事物双方或多方而言，协同的结果使个个获益，整体加强，共同发展。导致事物间属性互相增强、向积极方向发展的相干性即为协同性。 研究事物的协同性，便形成协同理论。

1971年德国科学家哈肯提出了统一的系统协同学思想，认为自然界和人类社会的各种事物普遍存在有序、无序的现象，一定的条件下，有序和无序之间会相互转化，无序就是混沌，有序就是协同，这是一个普遍规律。协同现象在宇宙间一切领域中都普遍存在，没有协同，人类就不能生存，生产就不能发展，社会就不能前进。在一个系统内，若各种子系统（要素）不能很好协同，甚至互相拆台，这样的系统必然呈现无序状态，发挥不了整体性功能而终至瓦解。相反，若系统中各子系统（要素）能很好配合、协同，多种力量就能集聚成一个总力量，形成大大超越原各自功能总和的新功能。
4. 集装箱码头的配载
    集装箱码头的配载（实配）是指把预定装载出口的集装箱，按照船舶适航要求以及码头作业要求而制定的具体装载计划。码头配载员需根据船公司的预配要求以及实际收箱状况来确定集装箱在船舶中具体的装载位置和装载顺序。    
    配载所需资料： 
    船舶资料
    (1)箱位容量
    (2)堆积符合强度
    (3)船长、船宽和吃水
    (4)船舱盖和船吊
    (5)空船重量和常数
    (6)稳性计算书和吃水差计算书

    集装箱资料 
    (1)装箱单
    (2)装货单
    (3)预配清单
    (4)特种箱清单
    (5)危险品箱清单和危险品准备单
    (6)进场出口箱资料



三、 实体分析
1. 船舶实体分析
    集装箱船舶的属性包括了航次信息、船舶结构信息、积载信息。
    船舶航次信息： 
    序号	英文名称	中文名称	类型
    1	Vessel	船名	String
    2	ImpVoy	进口航次	String
    3	ExpVoy	出口航次	String
    4	VesType	船型	String
    5	PlaBerThgTim	计划靠泊	datetime
    6	PlaUnbThgTim	计划离泊	datetime
    7	ReaBerThgTim	实际靠泊（时间）	datetime
    8	ActUnbTim	实际离泊	datetime
    9	PlaBerThgPos	计划靠泊位置	String
    10	ActBerPos	实际靠泊位置	numeric
    11	BerThgDir	靠泊方向	String
    12	VesDrauMax	进出最大吃水	Real
    13	PlaClosCustTim	计划截关时间	datetime
    14	ClosCustTim	截关时间	datetime
    15	OpAssSign	已安排作业	String
    16	EntPlanMakSig	已安排集港	String
    17	TaskFiniSig	作业完成否	String
    18	UnBSta	离泊情况	boolean
    19	PlaLoaGPCtnFotNum	计划进重40	Integer
    20	PlaLoaEmpCtnFotNum	计划进空40	Integer
    21	PlaLoaDraCtnFotNum	计划进危40	Integer
    22	PlaLoaGPCtnFotFivNum	计划进重45	Integer
    23	PlaLoaEmpCtnFotFivNum	计划进空45	Integer
    24	PlaLoaDraCtnFotFivNum	计划进危45	Integer
    25	PlaUloGPCtnFotNum	计划出重40	Integer
    26	PlaUloEmpCtnFotNum	计划出空40	Integer
    27	PlaUloDraCtnFotNum	计划出危40	Integer
    28	PlaUloGPCtnFotFivNum	计划出重45	Integer
    29	PlaUloEmpCtnFotFivNum	计划出空45	Integer
    30	PlaUloDraCtnFotFivNum	计划出危45	Integer
    备注：背景色为黄色，表示为关键字（主键）。
    备注：“作业完成情况”：表示装卸船情况，1表示正在卸船（未装船），2表示正在装船（未卸船）、3表示正在装卸船(两者同时开展)，4表示卸船完成，正在装船；5表示装卸船都完成；
    备注：“离泊情况”：1表示装卸船已经完成，正在离泊准备；2表示正在离泊作业，3表示离泊完成；
    备注：进出港最大吃水：是船舶进港和出港时，船舶的最大吃水深度，是为了制订船舶靠泊计划用。


表4-1-2船舶结构（针对某一船舶型号）：
序号	英文名称	中文名称	类型
1	VesType	船型	String
2	VesLeng	船长	numeric
3	VesWidth	船舶宽度	Real
4	VesFrLeng	船首长度（米）	Real
5	TweBayNum	20尺贝数	Integer
6	FotBayNum	40尺贝数	Integer
7	FotBayCom	40组贝	String
8	EngRomPos	机舱位置	Integer
9	EngRomWid	机舱宽度	Integer
10	MidBayDeaWit	中间贝处理	Boolean
11	RefCtnCap	冷冻容量	Real
12	VesEntBerSpd	船舶进港速度	speed
13	VesBerSpd	船舶靠泊速度	speed
14	HigCtnCap	高箱容量	Real
15	CapCtnFotFiv	45尺容量	Real
16	VesEmpGrvHeg	空船重心高	String
17	VesAtt	全隔槽？	String
18	LoadWeigth	载重量	Real
19	DeckCapWegt	甲板容量T	Real
20	CabCap	舱内容量T	Real
21	DanCtnAlw	允装危险品	String
备注：“40组贝”是一个字符串，长度为20尺贝位数，从船首开始往后计组贝情况，如第一个组贝为第2和3号20尺贝位，那第2、3位置标注为1，第4、5号20尺贝位为第二个40尺组贝，那在第4、5位置标注上2，依次类推。
备注：“中间贝处理”是为了确定船舶中间贝是00行，还是最中间就是一条线，左右两边对称放箱。


表4-1-3船舶贝位结构
序号	英文名称	中文名称	类型
1	VesType	船型	String
2	BayNo	贝号	String
3	BaySiz	贝尺寸	String
4	BayCom	贝组	String
5	DeckHeg	甲板层高	Integer
6	DeckWidMax	甲板最宽	Integer
7	CabHeg	舱内层高	Integer
8	CabWidMax	舱内最宽	Integer
9	HatCovKind	舱盖板类型	String
10	HatCovSiz	边舱盖板宽	Integer
11	BayX	贝X坐标	Integer
12	BayY	贝Y坐标	Integer
备注：“舱盖板类型”，0表示是自开式，1~4表示舱盖板数量；“边舱盖板宽”：这里假定舱盖板是左右对称的，结合“舱盖板类型”，可以确定具体尺寸，边舱盖板是最边上的舱盖板，宽度就是该舱盖板的宽度。
备注：贝尺寸：是20尺还是40尺，是否可以存放45尺。
备注：贝组：只有20尺贝需要组贝，0表示不组贝，1表示向右组贝，2表示向左组贝。
备注：贝X坐标和贝Y坐标：表示该贝位靠近船头一侧的面和船中心线的交点所在的坐标值。
备注：甲板最宽：表示船舶甲板上堆放集装箱的排数。

表4-1-4船舶贝位层结构
序号	英文名称	中文名称	类型
1	VesType	船型	String
2	BayNo	贝号	String
3	TireNo	层号	String
4	DeckCagSig	甲板or舱内	boolean
5	BayWid	宽度	Integer
6	BayHigh	离底层	Integer
7	CellSpeSig	箱位特标	String
8	RefSig	箱位冷冻标	String
备注：“离底层”表示该层离开舱底和甲板的层数。
备注：上述三张表应该可以完整表示船舶结构。


表4-1-5船舶积载（进口箱的积载）：
序号	英文名称	中文名称	类型
1	Vessel	船名	String
2	Voyage	航次	String
3	VesCellNo	船箱位	String
4	ColNo	列号	tinyint
5	DeckCagSig	甲板or舱内	String
6	CtnNo	箱号	String
7	CtnTyp	箱型	String
8	Size	尺寸	String
9	Status	状态	String
10	CtnWegt	箱重	Real
11	Owner	持箱人	String
12	GForce	货特要求	String
13	StaPort	起运港	String
14	UnloadPort	卸货港	String
15	DesPort	目的港	String
16	StrPickAwayCtn	直提箱	String
17	CtnOpeSta	箱作业状态	String
18	PlaCtnCel	计划箱位	String


表4-1-6出口箱配载计划：
序号	英文名称	中文名称	类型
1	Vessel	船名	String
2	Voyage	航次	String
3	VesCellNo	船箱位	String
4	ColNo	列号	tinyint
5	DeckCagSig	甲板or舱内	String
6	CtnNo	箱号	String
7	CtnTyp	箱型	String
8	Size	尺寸	String
9	Status	状态	String
10	CtnWegt	箱重	Real
11	GForce	货特要求	String
12	StaPort	起运港	String
13	UnloadPort	卸货港	String
14	DesPort	目的港	String
15	CtnOpeSta	箱作业状态	String
16	YardCel	堆场箱位	String


2. 岸桥实体分析
岸桥的设备类型分很多种，主要有单小车、双小车、三小车岸吊，同时吊具有双吊和双四十尺吊，所以总共有六种岸桥，需要对岸桥建立统一的类型分析。



四、 系统规划
1. 船舶结构
2. 船舶配载过程

   码头配载依据——预配船图：
    预配是指由船公司确定的各港口集装箱在船舶上的装载区域。

    配载原则和作业流程： 
    1.收集并核对配载单证资料
    2.制作配载船图
    3.配载图的审核
    4.配载图的签发
    5.退关箱复关的处理

    配载的数据准备
    数据准备： 
    制作船舶规范
    确定航次挂靠港
    场站收据放关确认
    退关箱、复关箱处理
    出口箱整船换装

    制作船舶规范：
        船型结构定义：
            船舶轮廓尺寸参数
            倍内单元设定
            特殊箱位设定
            组倍设定
        船舶资料：

    

    船舶配载的一般步骤：
    分类
    索箱
    选倍
    划块
    配箱

    配载应遵循的原则：
        满足船舶的运输稳性要求：
            (1)保证船舶良好的稳性
            (2)保持船舶适当的吃水差
            (3)满足船体强度要求
            (4)避免配载不当造成沿线挂港作业困难
            (5)满足特种箱的配载要求
        符合码头的作业要求：
            ⑴符合堆场取箱规则
            ⑵符合单船作业计划要求
            ⑶确保机械合理、有序地移动


    配载的主要决策内容：
        实配的主要决策内容：
            根据船公司的预配要求以及实际收箱状况来确定集装箱在船舶中具体的装载位置和装载顺序

    船舶适航要求：
    配载结果 -- 出口船图 ----  船公司配载确认 ---船舶适航要求

                        | -- 大副确认

    



















    

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
<script>
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

</script>

<style>
    body {
    margin:0;
    padding:0;
}

#control-buttons {
    margin-top: 20px;
    margin-bottom: 40px;
}

#control-buttons > div > button {
    margin: 5px;
}

.zoomToggle {
    margin-top:10px;
    margin-bottom: 40px;
}

.mainArea {
    width: 100%;
}

.bayArea .bayZone_inch20 {
    background:#2f96b4;
    width:38px;
    height:30px;
    float:left;
    margin:2px;
    display:flex;
    justify-content:center;
    align-items:center;
}
/* combined bay area */
.bayArea .bayZone_inch40 {
    width:38px;
    height:30px;
    float:left;
    background-color:lightgrey;
    margin:2px;
    position: relative;
}

.newBayArea .newBay20 {
    background:#2f96b4;
    width: 38px;
    height: 60px;
    float:left;
    margin:2px;
    display:flex;
    justify-content:center;
    align-items:center;
}

.newBayArea .comBay20_40 {
    width: 80px;
    height:60px;
    float: left;
    margin: 2px;
}

.newBayArea .comBay20_40 .newBay40InCom {
    width: 80px;
    height: 30px;
    float:left;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: yellow;
}

.newBayArea .comBay20_40 .newBay20InComParent {
    width: 80px;
    height: 30px;
    display:flex;
    background:#2f96b4;
}

.newBayArea .comBay20_40 .newBay20InComParent .newBay20InComLeft {
    width: 40px;
    height: 30px;
    float:left;
    display:flex;
    justify-content:center;
    align-items:center;
    border-right: 1px solid silver;
}

.newBayArea .comBay20_40 .newBay20InComParent .newBay20InComRight {
    width: 40px;
    height: 30px;
    float:left;
    display:flex;
    justify-content:center;
    align-items:center;
    border-left: 1px solid silver;
}
/* combined bay area */
/* vesselOperation */
.vesOperationInfo {
    margin-top: 30px;
}
.vesOperationInfo .above {
    margin-bottom: 20px;
}


.unload > div,
.load > div {
    display: flex;
}

.unloadInch20 {
    background:#dd569e;
    width: 38px;
    height: 20px;
    float:left;
    /*margin:2px;*/
    margin-left: 2px;
    margin-right: 2px;
    border: 1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
}

.loadInch20 {
    background:#373db2;
    width: 38px;
    height: 20px;
    float:left;
    /*margin:2px;*/
    margin-left: 2px;
    margin-right: 2px;
    border: 1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
}

.unloadInch40 {
    background:#dd569e;
    width: 80px;
    height: 20px;
    float: left;
    /*margin:2px;*/
    margin-left: 2px;
    margin-right: 2px;
    border: 1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
}

.loadInch40 {
    background:#373db2;
    width: 80px;
    height: 20px;
    float: left;
    /*margin:2px;*/
    margin-left: 2px;
    margin-right: 2px;
    border: 1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
}

.vesselBodyInLoading {
    background:black;
}
/* vesselOperation */

/* selected bay control when selecting  */
.bayArea_40 .leftBaySelected {
    border-left:5px solid red;
    border-bottom: 3px solid red;
    border-top: 3px solid red;
}

.bayArea_40 .rightBaySelected {
    border-right:5px solid red;
    border-bottom: 3px solid red;
    border-top: 3px solid red;
}

/* selected bay control when selecting  */
.bayArea .bayArea_20,
.bayArea .bayArea_40,
.mainArea .newBayArea {
    display: inline-flex;
}

.mainArea .vesselAreaSide {
    margin-top: 25px;
}

.conZoneBayAbove_inch20 {
    width:38px;
    height:80px; /*  */
    float: left;
    background-color:#d0ddf2;
    margin:2px;
}

.boardSide_inch20 {
    width:42px;
    height:10px;
    float: left;
    background-color:#775614;
}

.conZoneBayBelow_inch20 {
    width:38px;
    height:50px; /*  */
    float:left;
    background-color:#d0ddf2;
    margin:2px;
}

.conZoneBayLayerAbove_inch20,
.conZoneBayLayerBelow_inch20 {
    width:38px;
    height:10px;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid white;
    background-color: white;
}

.vesselBody_inch20 {
    width:38px;
    height:10px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    background-color: black;
}

.vesselConZone_inch20 {
    width:38px;
    height:10px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    background-color: white;
}

.onBoardSide,
.belowBoardSide{
    width: 100%;
    display: inline-flex;
    /*vertical-align: bottom; */
    /* https://stackoverflow.com/questions/38872653/why-inline-flex-element-with-clearfix-has-a-weird-white-space  */
}
/* jquery ui-select */
#feedback {
    font-size: 1.4em;
}

#selectable .ui-selecting {
    background: #FECA40;
}

#selectable .ui-selected {
    background: #F39814;
    color: white;
}
/* jquery ui-select */
/* character in span  */
.bay20Index,
.newBay20Index,
.newBay20IndexInCom,
.loadOrUnloadNum {
    color: #cdd8f6;
}
/* character in span  */
.newBay40IndexInCom,
.vesselBodyBayIndex{
    color: black;
}

.leftBaySelected .bay40Index  {
    float: right;
    margin-right: 2px;
}

.rightBaySelected .bay40Index  {
    float: left;
    margin-left: 2px;
}
/* custom */
@-webkit-keyframes blinker {
    from {opacity: 1.0;}
    to {opacity: 0.0;}
}
/*.blink{*/
/*    text-decoration: blink;*/
/*    -webkit-animation-name: blinker;*/
/*    -webkit-animation-duration: 0.6s;*/
/*    -webkit-animation-iteration-count:infinite;*/
/*    -webkit-animation-timing-function:ease-in-out;*/
/*    -webkit-animation-direction: alternate;*/
/*}*/

</style>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="../../../../css/tool/jquery-ui.css">
  <link href="../../../../css/tool/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="../../../../css/tool/google-api.css" rel="stylesheet">
  <link href="../../../../css/main.css" rel="stylesheet">
  <link href="../../../../css/custom.vessel.css" rel="stylesheet">
</head>
<body id="page-top">
<div id="IMO-001" class="vessel">
    <div id="control-buttons">
        <div id="buttons" class="d-flex flex-row">
            <button type="button" class="btn btn-outline-primary startCombine" onclick="combineToStart()">编辑组贝</button>
            <button type="button" class="btn btn-outline-primary confirmCombine" disabled onclick="combineToConfirm()">确认组贝</button>
            <button type="button" class="btn btn-outline-primary reStartCombine" onclick="combineReset()">重新组贝</button>
            <button type="button" class="btn btn-outline-success createVessel" onclick="createVesselSide()">生成船舶</button>
            <button type="button" class="btn btn-outline-success createStowage" onclick="createStowageInfo()">配载信息</button>
            <button type="button" class="btn btn-outline-success createLoadOrUnload" onclick="createLoadOrUnloadInfo()">待装卸信息</button>
        </div>
    </div>
    <div class="zoomToggle d-flex flex-row">
        <input id="test" min="1" max="10" value='10' step="1" onchange="showVal(this.value)" type="range"/>
    </div>
    <div class="mainArea">
        <div class="bayArea"></div>
        <div class="newBayArea"></div>
        <div class="vesselAreaSide">
        </div>
        <div class="vesOperationInfo">
            <div class="above">
                <div class="operationInch40Num">

                </div>
                <div class="unload">
                    <div class="aboveUnloadInch40"></div>
                    <div class="aboveUnloadInch20"></div>
                </div>
                <div class="load">
                    <div class="aboveLoadInch40"></div>
                    <div class="aboveLoadInch20"></div>
                </div>
                <div class="operationInch20Num">

                </div>
            </div>
            <div class="board"> </div>
            <div class="below">
                <div class="unload">
                    <div class="belowUnloadInch40"></div>
                    <div class="belowUnloadInch20"></div>
                </div>
                <div class="load">
                    <div class="belowLoadInch40"></div>
                    <div class="belowLoadInch20"></div>
                </div>
            </div>
        </div>
        <div class="vesselStowageInfo">
        </div>
    </div>
</div>
<script src="../../../../js/tool/jquery.js"></script>
<script src="../../../../js/tool/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../../../../js/tool/jquery-easing/jquery.easing.min.js"></script>
<script src="../../../../js/tool/jquery-ui.js"></script>
<script src="../../../../js/main.min.js"></script>
<script src="../../../../js/vessel.js"></script>
</body>
</html>

