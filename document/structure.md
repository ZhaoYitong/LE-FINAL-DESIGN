# 船舶配载决策支持系统

## 摘要

通过研究船舶配载决策支持系统的实现，基于B/S架构实现一套基本的船舶配载决策支持系统，系统支持船舶配载信息的监控，堆场箱位信息的实时监控，
船舶预配载信息的监控，船舶调度计划的实时更新，不同类型船舶结构信息的适配显示，堆场到船舶集装箱出场的手工配载，船舶贝位调整，船舶配载问题中新调度算法或决策模型的导入，基于遗传算法和模拟退火算法的初始模型库。通过人机友好界面设计以及模型库的引入辅助决策船舶配载问题。

### 关键词： B/S架构、模型库、辅助决策

## ABSTRACT

By studying the implementation of the ship's stowage decision support system, we implement a basic ship's stowage decision support system based on Browser/Server architecture. The system supports the monitoring of ship stowage information, real-time monitoring of the containers' position in the yard, monitoring of ship pre-loading information, real-time updating of ship sheduling plan, adaptable display of different types of ship, manual loading of container from yard to ship, ship shell adjusting, the import of new scheduling algorithm or new decision model in ship scheduling problem, the initial model library based on genetic algorithms and simulated annealing algoritms. Through the Graphic User Interface design and the introduction of the model library to assist decision-making ship loading problem.

### Key words: B/S architecture，model library, decision support

## 一、 绪论

### 1. 研究背景

改革开发以后，我国各个行业不断地繁荣蓬勃发展。现如今，它们呈现出百花齐放地姿态，所有这些，无不展现出当先社会主义制度的优越性。与此同时，当今时代，是开放的时代，包容的时代，和平的时代。经济的全球化发展，使得国与国之间的经济文化交流日益密切，关系也变得更加紧密。日益紧密地经济文化交流，促使国际化商品交易更加频繁，对进出口贸易的需求，国际化运输的需求（包括公路，水路，铁路等）不断提高。而港口，作为进出口商品的门户，必然要承担相关需求的增长。又是因为港口面对需求的功能的特殊性，它不仅要处理好商品的正常的进出口，更要进一步提高商品进出口操作的效率效益。这里，就要求港口作业，要更高——更高的标准，更快——更快的响应时间，更强——更强大的系统支持。

然而，面对光明的发展前景，祖国港口的发展建设的过程中，是机遇与挑战并存，一方面，2008年的国际金融危机过后，世界各国的经济秩序已经被严重冲击，这就让各国的实体经济遭受了严重的影响，于是，与实体经济密切相关的航运经济，也严重受损，曾经我国的航运业经济一度低迷；另一方面，鉴于以上，“五位一体”总体布局的概念现如今被国际提出，目的是努力建设现代化的经济体系，同时坚持供给侧改革。由原来的以价格取胜，过度生产等模式，转变为以质量取胜，合理控制生产。同时，科学技术的发展，现如今，云计算，云服务，云同步的概念，不断兴起，这也帮助港口的建设使用更智能化。

现如今，进行对外进出口贸易的港口的建设，已经如雨后春笋般撒满了祖国的各个沿海发达城市。港口城市方面，北有天津港——中国北方的第一个5亿吨港口，青岛港——环渤海湾集“航运、物流、金融”为一体的港口，中部有洋山深水港——国内首个全自动化集装箱码头，南部又有厦门港，广州港等，分别承担各个区域的港口作业。

在港口作业的具体实际业务层面，随着经济的发展，科技的进步，港口码头集装箱装卸作业面临的新的选择，新的标准，新的要求和新的挑战。一方面，港口码头的装卸作业，通过结合当前图像识别、机器学习，极大的加快了港口码头集装箱作业的运行效率以及作业准确度，另一方面，通过结合当前的新型的管理信息系统，实物仿真调度系统，Unity 3D 画面动态呈现等功能，帮助了港口码头调度人员进一步做更好的决策，在处理问题的过程中，引入新的技术，在引入新的技术的过程中，尝试新的方案，在尝试新的方案的过程中，让港口码头集装箱装卸作业由半自动化走向全自动化。

谈到港口码头集装箱装卸作业，无论是装载还是卸除，船舶配载问题又是重中之重，那么处理好船舶配载问题，也就变成了提高港口码头集装箱装卸作业的运行效率的充分先决条件。

### 2. 研究意义

现实船舶配载作业中，通常要处理很多问题，由于实际集装箱尺寸上存在20尺、40尺甚至45尺；按照功能划分，又分为普通箱，冷藏箱，危险品箱，特种箱等；按照重量划分，又分为轻型箱，中型箱，重型箱，超重箱。复杂的集装箱类型，导致船舶货物配载工作难度加大，复杂度大大提升。并且装卸过程中要考虑多泊位，多贝位，多堆场的情况，现有的国内港口码头装卸工艺，具有代表性的即洋山四期深水港，其规定的具体装卸规则中，又要考虑岸桥不可交叉作业的约束限制，组贝问题（20尺贝位和40尺贝位的合并），船舱位置对岸桥调度作业的影响，舱盖板的数量，舱盖板的位置，甲板层上集装箱层数，甲板层下集装箱层数等一系列问题。与此同时，传统的C/S架构实现的船舶装配决策支持系统，已经无法满足需求日益增长的港口操作业务，现如今新型的基于互联网模式的B/S 架构下的船舶装配决策支持系统的建设问题，有待解决。实际的开发过程中，要考虑诸多技术限制，不同浏览器之间的内核不同，比如Chrome浏览器的Blink内核，IE的 Trident内核，Firefox浏览器的Gecko内核，Safari的Webkit内核以及Opera浏览器的Blink内核这几个主流浏览器。内核不同，导致具体做不同浏览器的兼容适配会出现问题，现有方案就是，提倡并建议用户进行浏览器系统升级，放弃落后的IE6、IE7等现如今微软官方不支持的浏览器，转而去使用现如今的主流浏览器，方便相关功能的适配；由于船舶配载问题的特殊性，现如今主流的UI(User Interface)框架，无法满足其相关功能的开发，严格讲，关于船舶配载信息监控，堆场和船舶之间的装载卸载问题，人工手动配载、自动配载问题，不同泊位不同船舶的不同结构加载问题，这要求前端的实现只能在需要在充分了解相关业务的前提下，去客户化定制或生成相关的功能页面设计。另外，船舶配载过程中，包含了大量数据的传输，监控信息的实时性更新，这背后，不仅需要硬件部分（如传感器，控制器等）进行支持，还需要网络传输部分的稳定执行，这在具体页面的实现上，需要考虑页面的发送请求问题，脚本加载速度，以及数据发送接收后的解析问题，页面渲染速度等。在前端部分实现的同时，同样的，要充分考虑后端的处理压力，实际船舶配载问题，管理上，会涉及到不同级别管理员对信息进行增删改查，分权限管理问题，很难产生清晰的管理方案，又因为船舶配载问题的复杂性（不同业务之间的关联），导致很多业务功能之间具有较高的耦合性，这对后台的功能模块化开发，又增加了实现难度；数据库方面，较大数据量的输入输出，导致传统的增删改查模式可能无法满足其现实的需求，更多的，如引入数据库开发概念中的存储过程，再比如引入视图机制（不同管理权限的管理员对数据库的操作），在处理事务并发（配载过程中可能会产生的资源抢占而导致的输入输出问题）过程中，对乐观锁，死锁等问题的处理等。

实际上，以上问题，更多是船舶配载的监控层面的功能实现，但这种监控层面的功能实现，只是决策支持系统的一部分，具体船舶配载问题的决策优化，还需要算法模型的引入，如何建立算法库，模型库，以及如何建立船舶配载问题中决策支持的知识库，如何在建立该决策支持系统的同时，处理整个系统的输入输出问题（接口信息的处理），如何保证整个系统的建立可以随着实际船舶配载操作业务流程的变更，同步升级，系统外业务流程变更后的功能适配等。

为此，本文在决策支持系统的具体功能实现上，前端页面部分（即人机交互部分），限制集装箱尺寸统一为20尺和40尺--两种尺寸，不考虑其他特殊尺寸的适配，船舶贝位上，实现两种贝位功能的适配，既支持船舶占用贝位式的贝位结构分配，也支持船舶不占用贝位式的不连续贝位结构分配。 组贝问题，支持20尺贝位的组贝功能。配载问题上，支持船舶配载信息的监控功能，支持堆场到船舶的手工配载功能（单个集装箱的手工配载，以及多个集装箱的批量配载）。贝位信息上，支持船舶舱盖板相对船舶00线的位置显示，数量显示（模拟实际距离）。配载信息上，支持显示甲板舱内各个贝位的装卸集装箱数目，同时也支持甲板舱外的各个贝位的集装箱装卸数目的查看显示。配载计划上，支持不同贝位的预配载计划，跟随时间变化的任务序列的显示。

统计方面，支持不同方法模型输入输出后的数据对比分析，支持不同模型方法的切换对比进行决策。
数据输入方面，支持EDI报文格式的信息输入。支持船舶配载信息的表单手工输入。支持船舶基本结构的信息输入。支持临时配载计划的输入。

后台服务端部分，增加了方法库，模型库，便于模型算法的引；引入关系模型，关联存储船舶配载相关信息，并及时进行增删该查，有利于港口码头实际调度作业中，其他子系统的信息输入输出，以及船舶配载系统部分内部信息的关联变化；增加了数据库的存储过程，方便优化查询等数据库操作。

整个系统的设计，以人机友好界面操作为原则，便于用户更好的监控分析当前船舶配载信息。模型算法库的支持，进一步增加了船舶配载问题的智能化。

### 3. 研究现状

基于船舶配载的相关决策支持系统建设，国内外已经进行了好多研究。国内方面，主要以上海海事大学，大连海事大学，武汉理工大学为主，其中，大连海事大学杜嘉立曾提出以专家系统为基础去产生智能化控制船舶配载的策略，该方案可以提供船舶在装卸的每一个子进程中，集装箱数量的多少，装入船舱的时间先后，顺序等性能指标。[ref-基于专家系统的船舶配载智能控制策略](http://www.cnki.com.cn/Article/CJFD2005-JYGC200503013.htm)。计明军通过对集装箱船舶配载策略展开并进行比较分析，以四种配载方式划分，通过对比不同模式下船舶的倒箱率大小、稳定性、强度、吃水深度差，分析出不同配载方式的优势和不足，从而为减少实际船舶倒箱率问题提供辅助决策支持。[ref-集装箱船舶配载策略的比较分析](http://www.cnki.com.cn/Article/CJFDTotal-HHJS201201012.htm)。近几年的研究中，上海海事大学的物流研究中心的丁一等人，以堆场箱区的作业均衡性为前提，去研究港口码头的船舶配载问题， 减少了总装船时间的平均值，翻箱数量，以及不均衡程度，同时可以满足箱区作业的最大程度的均衡。[ref-考虑箱区作业均衡的ACT船舶配载研究](http://kns.cnki.net/KCMS/detail/detail.aspx?dbcode=CJFQ&dbname=CJFDLAST2018&filename=JYRJ201809003&v=MDAwNDFyQ1VSTE9mWXVac0ZDamxVNzdCTHpUWlpMRzRIOW5NcG85Rlo0UjhlWDFMdXhZUzdEaDFUM3FUcldNMUY=)。杨蔚等人在研究集装箱班轮运输的配载优化时，把船舶的稳定性作为条件约束，求解目标设定为整条航线最小倒箱量之和，数学模型的构建是基于0-1整数规划，并通过改进遗传算法，从而提升了配载计划的稳定性，以及船舶运营的安全性。[ref-集装箱班轮运输配载优化问题](http://kns.cnki.net/kcms/detail/detail.aspx?filename=DLHS201801011&dbcode=CJFQ&dbname=CJFD2018&v=)

### 4. 文章内容及结构

## 二、 相关技术理论阐述

### 1. 决策支持系统解释

决策支持系统（英文全称叫Decision-Support-Systems，简称DSS），它可以利用信息帮助需要决策的决策者进行决策，协助进行商业级或组织级别或者其他级别的决策活动的信息系统。DSSs通常服务于中高层面管理人群，作用于组织机构内部操作、管理、和规划级的决策，帮助决策者对快速变化同时决策者自身很难提前确定的问题进行决策分析，提出相应意见或者建议。由于决策支持系统的建立，需要既有知识库，方法库，模型库等作为决策支持的基础，同时，决策支持系统在商业中一般会涉及数据仓库，数据挖掘等研究， 故需要运用决策支持系统的通常是非结构化（Non-structured）和半结构化（Semi-structured）的决策问题，也就是在实际管理工作中，中级管理人员和高级管理人员要面对的问题，理论上，它的最终发展目标是智能化决策。决策支持系统既可以是完全脱离外在干预的自动化决策，也可以是相关信息反馈给决策者之后的完全人工决策，或者两者兼有。[refs-wiki/DSS](https://zh.wikipedia.org/wiki/决策支持系统/)
决策支持系统按照分类的不同维度有以下几种：通过该系统支持的管理层次划分，分为高层决策支持系统和中层决策支持系统；通过持赞同建议的决策者的数目，分为组织决策支持系统和个体决策支持系统；通过系统的智能程度，分为智能决策支持、传统决策支持以及专家系统。[ref-mis-book](管理信息系统-第六版-薛华成-清华大学出版社)
决策支持系统的位置，

### 2. 自动化集装箱码头

随着港口经济的发展，传统的集装箱码头的作业方式，以及很难再去满足当前巨大的港口装卸作业需求。不难想象，滞后的集装箱码头作业方式，将会大量的耗费人力以及物力， 假如不做改变，这里将会损失巨大的经济效益。为此，一种基于自主装卸操作的集装箱码头(英文缩写为ACT)的概念被提出。这里，我们把它称为自动化集装箱码头。
实际上，自动化集装箱码头技术的发展到目前为止已经有超过30年的历史。
上个世纪80年代的中期，荷兰、英国、日本首先提出建设规划自动化集装箱码头这一概念，但是后来日本的川崎港缺少足够的资金投入，导致日本的自动化集装箱码头建设计划就因此搁置。直到1993年，荷兰的鹿特丹港口向世人宣布，建成了第一个自动化集装箱码头。在充分总结了Delta Sealand码头建设和使用经验的基础上, ECT的Delta Dedicated East (DDE)和Delta Dedicated West (DDW)也分别于1997和2000年建成投产。[ref-blank]()

与此同时，新加坡的PSA（Pasir Panjang码头）在1997年建成了远程操控的高架行车系统，实现了堆场的半自动操作，但由于防摇效果不尽如人意，操作效果不理想。香港HIT国际货柜码头则在1999年实现了堆场的半自动化作业。
进入21世纪后，尤其是码头实现了自动化后的优势得到了充分发挥，自动化码头如雨后春笋般出现。德国汉堡CTA码头一期于2002年10月投产，荷兰ECT Euromax码头于2008年投入试运营。
截止到目前，已运营的自动化码头有荷兰ECT码头、德国汉堡HHLA-CTA码头、荷兰Euromax码头、法国SETO-MSC码头、韩进西班牙TTI码头、DPW 比利时泽布勒赫码头；堆场自动化运营的码头有美国弗吉尼亚码头、香港HIT码头、新加坡码头、韩国釜山码头、台湾台北港、台湾阳明码头、澳大利亚Patrick码头。

### 3. 协同

“协同”概念有着更深的含义，不仅包括社会生活中人与人之间的协作，也包括不同应用系统之间、不同模块之间、不同资源之间、不同设备之间、不同应用情景之间、人与机器之间、过去与现在、时间和空间、科技与传统之间等全方位的协同。
协同是指元素对元素的相互干扰的能力，表现了某个元素在系统整体发展运行过程中进行协调与合作的性质或特性。
推动事物共同前进，需要结构元素彼此之间的协调、协作而形成的拉动效应。对事物双方或多方而言，协同不是一种零和博弈，它的结果通常是共赢，实现“1+1>2”的博弈思想。因为协同的目的是使不同子系统或者不同独立模块共同获益，整体加强之后并共同发展。协同性即可表示为导致事物间属性互相促进并增强、向积极方向发展的相干性。 通过研究事物的协同性，便形成协同理论。
1971年德国科学家哈肯提出了统一的系统协同学思想，认为自然界和人类社会的各种事物普遍存在有序、无序的现象，一定的条件下，系统内部的有序和无序之间会相互转化，无序的状态就是混沌，有序的状态就是协同，这是一个普遍规律。协同这个现象在宇宙间任何领域中都普遍存在，没有协同的存在，人类就无法正常生存，生产就不能正常发展，社会就不能正常前进。在一个系统内，若各种子系统（要素）不能很好协同，甚至互相拆台或者相互干扰，这样的系统必然呈现无序状态，发挥不了整体性功能而终导致瓦解。相反，若系统中各子系统（要素）能很好配合、协同，多种力量就能集聚成一个总力量，形成大大超越原各自功能总和的新功能。

### 4. 集装箱码头的配载

[ref-MBA-集装箱船舶配载](https://wiki.mbalib.com/wiki/集装箱船舶配载)

4.1 定义：

集装箱码头的配载（实配）是指把预定装载出口的集装箱，按照船舶适航要求以及码头作业要求而制定的具体装载计划。码头配载员需根据船公司的预配要求以及实际收箱状况来确定集装箱在船舶中具体的装载位置和装载顺序。

    集装箱船舶资料内容：
    集装箱船舶箱位容量情况和箱位分布情况
    船舶堆积负荷强度大小和船舶堆积负荷强度大小
    船舶的长度、宽度大小和吃水要求具体情况
    冷藏箱位的位置情况和对危险货物箱的装载限制明细
    空船重量大小和常数设置
    稳性和吃水差计算书


    堆场集装箱资料：
    集装箱装箱单信息
    装货单信息
    特种箱清单信息
    危险货物箱清单信息和危准单信息
    预配船图船舶结构
    集装箱的堆场位置明细

    集装箱船舶配载的基本原则：
    满足船舶的运输要求
    　　(1)确保船舶拥有良好的稳性
    　　(2)保证满足船舶适当的吃水差
    　　(3)不超过船舶规定的强度规范
    　　(4)避免配载不当产生沿线挂港作业困难的问题
    　　(5)满足特殊箱如危险货物箱和特种箱的运输要求标准
    符合码头的作业要求
    　　(1)遵守堆场取箱作业规则
    　　(2)遵守船舶装载作业计划要求
    保证机械合理有序地移动

### 5. 系统技术工具

#### 5.1 前端

基于原生的 Html， css，javascript， 在浏览器内部实现船舶配载的功能操作。
html（HyperText Markup Language），它的中文名叫超文本标记语言， 它是一种可以用来动态化创建出网页页面的标记语言。 网页浏览器可以去读取服务端发送的html文件，之后把该文件渲染生成相应的可视化网页。它描述的是一个网站的结构化语义，使之成为一种标记语言，但不是编程语言。 Html 元素是构建网站的基础。开发者可以把图像，视频，音频等需要的对象嵌入其中，同时也可以利用其去构建交互式的表单信息，这样便于去结构化信息处理，具体例如列表，标题，段落等

CSS(Cascading Style Sheets)，它的中文翻译为层叠样式表，它是一种可以为结构化的文档添加样式（包括颜色，边距，间距，字体等）的一门计算机语言。具体由World Wide Web 进行维护升级。

JS(Javascript)， 它通常写作缩写形式:JS， 它是比较高级的，解释性功能的编程语言。 这门语言基于原型（prototype）、函数先行（function），它也是一门多范式（multi Norm Forms）的语言。 可以支持命令式（Imperative）编程， 面向对象（object oriented）编程， 以及函数式(Functional)编程。 该编程语言通过语法来操控数组、字符串、浮点数、日期以及正则表达式等形式。 但不能够直接支持输入输出（I/O），具体如存储、网络和图形等操作， 但实际处理上可以通过该语言的宿主环境，来进行功能上的支持。与此同时，该语言已经被 欧洲计算机制造商协会（ECMA）通过ECMAScript实现语言的标准化。其中，它已经被主流浏览器（Safari、IE、Chrome、Opera、Firefox）支持。在客户端中，传统意义上，JavaScript被实现为一种解释语言。如今，它可以被即时编译。同时，最新的HTML5和CSS3语言标准让Js适应不同的应用程序的开发，以及不同的服务端网络运行环境。

#### 5.2 后端

后端框架详述， Django.
Django 是一个由python编写的开源的Web应用框架。其软件设计模式采用了模型层Model，视图层View和模板层Template即MVT的软件设计模式。该框架创立的主要目标是为了简化由数据库驱动的，复杂的网站的开发流程。其中，该框架特别注重以下原则：Don't Repeat Yourself（DRY），敏捷开发原则，组件的可以复用性，组件的可插拔。

该框架的组件部分主要包括路由分发、视图显示、模板渲染、连接数据库关系模型的中间。并且，该框架具有独立的Web服务器，这使得开发者便于进行开发和功能测试；处理表单序列化的系统以及验证防止CSRF的系统，这便于前端页面数据和后端数据库部分的数据转化；各种中间件的实现，开发者可以对一个http请求的每一个阶段做单独处理；独特的序列化系统，减轻了处理数据传输过程中，读取或者生成相关数据的代码压力。

数据库，mysql
mysql是一套成熟的开源（曾经开源）的关系型数据库管理系统。实际使用上，mysql 具有高性能、低成本、健壮性等特点。
mysql 的管理工作。
传统的方案，利用命令行工具操作mysql, 亦可利用mysql 编辑器，即GUI工具 Workbench进行数据库的管理操作。
第三方集成管理工具：Navicat。Navicat 支持连接到本地或远程数据库并进行可视化显示，支持query查询等基本数据库管理功能。

mysql 连接方式。
python有一套开源的连接mysql的驱动程序：mysqlclient。

关系模型：
关系模型的产生，源自上个世纪，最初数据库的设计，主要是数据结构层面。层次模型是数据库系统中最早使用的数据模型。层次模型通过一种“有向树”的数据结构表示系统内各个实体以及各个实体之间的关系。[ref-数据库原理及开发应用](数据库原理及开发应用（第二版）-李艳娟-周)网状模型在20世纪70年代由CODASYL（数据系统语言研究会）下属的机构提出，它用来表达无法用层次模型表达的非层次关系的模型。但这两种模型的诞生，具有很多不足，如对数据插入和删除的操作限制，DDL（数据定义语言）的过度复杂等，于是，1970年IBM公司提出的基于实体--属性的关系模型，进一步完善了上面的不足，每一个关系模型，都由“二维表”组成的集合组成。同时，关系模型的设立，是基于严格的数学关系推导。关系模型涉及关系（Relation），元组（Tuple），属性（Attribute），关键字（Key），域（Domain），分量，关系模式这些基本概念。实际操作运用上，它涉及ER模型的建立，ER模型的转换， 完整性约束，如一对一、一对多、多对一、多对多的关系模型。

关系型数据库具有以下三类完整性，模型实体的完整性（EntityIntegrity），模型的参照的完整性（ReferentialIntegrity），以及模型的用户定义的完整性。在完成关系模型的设计之后，通常还要考虑关系模式的设计是否规范，如数据冗余问题，属性间的联系是否合理，函数依赖的设定中，是否合理区分部分函数依赖和完全函数依赖，多值依赖是否要保留，以及是否要运用更高级别的范式理论（关系模式设计中，模式分解需要无损连接性，从而保证分解之后的关系信息不会丢失；模式分解需要保持函数依赖，从而减轻或者解决各种异常情况）。

#### 5.3 版本控制

    平台 github
    github 通过git bash 操作，实现代码的版本控制服务。

    控制工具 git
    git 是一个可以进行分布式版本控制代码的软件。起初是为了管理Linux内核代码的版本。
    该工具采用了一套分布式存储的版本库。在进行版本控制的过程中，开发者不必单独使用一些其他的服务端软件，即可实现不同版本的稳定管理。
    git 库目录：
    hooks：存储钩子
    logs： 存储日志
    refs：存储指向各分支的指针
    objects： 存储git对象
    config: 存储设置文档
    HEAD： 存储当前开发所在分支的文件路径指向

    版本控制用例：
    git pull   #连接远程代码库，把相关更新同步到本地代码库
    git status #当前项目对应远程分支代码更新状态
    git add .  #把当前修改工作暂存
    git commit #输入当前修所要记录的基本信息，并保存
    git push   #把当前commit后的修改，提交到远程分支



### 6 算法概念

#### 6.1 遗传算法

遗传算法用于解决运筹学中的最优化的问题。该算法起初由生物学借鉴而得，算法过程包括杂交、突变和自然选择等。该算法具体的实现类似计算机模拟。选定部分个体，作为算法的候选解，这里在生物遗传学中，可以抽象的理解为染色体，让整个种群进化到更好的状态。

求解过程上，可以用零和壹表示解。从完全随机的个体的种群启动进化程序，每一代都发生变化，同时评估当前种群的适应度，之后基于当前种群的适应度随机地选择多个个体，通过程序中的自然选择和突变处理产生新的生命种群，下一次算法开始迭代运算时，该新生命种群成为当前种群。[ref-wiki/GA](https://zh.wikipedia.org/wiki/遗传算法)

算法原理：。。。。

### 7 船舶配载规范

#### 7.1 集装箱船舶箱位命名规则

实际船舶配载过程中，为了能够准确描述集装箱在船舶上的具体位置，这里引入船舶箱位的概念。根据洋山四期深水港规划建设的标准，船舶上的每一个箱位，都由一个由六位字符组成的字符串表示，这六位字符串，前后分别包含了贝位（BAY），列数（ROW）,层数（TIER）。对于贝位，初始船舶预配载前只有奇数贝位，且奇数贝位有两位字符显示，小于10的奇数，需要添加字符“0”，组合成诸如“01”，“03”，“05”，“07”这种，大于10的奇数，即表示位相应的字符形式。对于列数，由于实际船舶配载过程中，列数有奇数列，也有偶数列。另外，由于箱子堆放问题，箱子 有时在“00线”两侧堆放，有时覆盖“00线”堆放，故层数设定，一侧以字符串“01”、“03”、“05”、“07”....依次表示，另一侧以“02”、“04”、“06”、“08”....依次显示。中间线位置有箱位覆盖时，即用“00”表示，否则，该字符串不表示任何箱位。层数表示的设定上，由于船舶装卸，分为甲板舱内和甲板舱外，从船身侧面观察，即舱盖板以上和舱盖板以下。具体的，甲板舱内层数，从下往上，不同层数依次是“02”，“04”，“06”呈递增形式的字符串表示，甲板舱外层数，从下往上，依次是“82”，“84”，“86”，“88”，同样呈递增形式。

#### 7.2 集装箱船舶装卸规则

一艘船舶在进行装卸作业前，首先要进行预配载信息设定。这里包括组贝设置、箱位信息设置等。组贝设置上，只有两个相邻的20尺贝位方可组合（组贝）变成40尺贝位。
岸桥调度过程中，要考虑船舶船舱位置，对于船舱位置的处理，通常有两种方式，一种是船舱占据一定数目的贝位，同时贝位分布是连续的；另一种是船舱不占据任何贝位，同时贝位分布是不连续的。具体装卸顺序上，考虑到整体船舶的装船和卸船，通常是先卸船，再装船，具体顺序是，甲板舱外卸箱————甲板舱内卸箱————甲板舱内装箱———甲板舱外装箱。实际操作中，如装箱的时候，会涉及到倒箱，即目标箱位当前存放的集装箱不满足当前最新的调度装卸方案而进行的集装箱之间的箱位变换。岸桥在进行装卸作业过程中，也要遵循不可跨越当前作业区的原则，最大程度避免了岸桥与岸桥之间的作业冲突。

## 三、 实体分析

### 1. 船舶实体分析

    集装箱船舶的属性包括了航次信息、船舶结构信息、积载信息。
    船舶航次信息：
    序号    英文名称    中文名称    类型
    1   Vessel  船名    String
    2   ImpVoy  进口航次    String
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
    1    VesType	船型	String
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
    序号    英文名称        中文名称	    类型
    1       Vessel          船名	    String
    2       Voyage          航次	    String
    3       VesCellNo       船箱位	    String
    4       ColNo           列号	    tinyint
    5       DeckCagSig      甲板or舱内	String
    6       CtnNo           箱号	    String
    7       CtnTyp          箱型	    String
    8       Size            尺寸	    String
    9       Status          状态	    String
    10      CtnWegt         箱重	    Real
    11      Owner           持箱人	    String
    12      GForce          货特要求	String
    13      StaPort         起运港	    String
    14      UnloadPort      卸货港	    String
    15      DesPort         目的港	    String
    16      StrPickAwayCtn  直提箱	    String
    17      CtnOpeSta       箱作业状态	String
    18      PlaCtnCel       计划箱位	String


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

### 2. 岸桥实体分析

岸桥的设备类型分很多种，主要有单小车、双小车、三小车岸吊，同时吊具有双吊和双四十尺吊，所以总共有六种岸桥，需要对岸桥建立统一的类型分析。

## 四、 系统规划

### 1. 船舶结构

船舶结构具体包含以下：

### 2. 船舶配载过程

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

                       ----  大副确认

## 五、系统界限

### 1. 船舶相关的信息分析

### 2. 船舶配载业务功能调查

### 3. 船舶配载业务流程调查

### 4. 数据汇总

#### 4.1 ER模型

#### 4.2 数据项

#### 4.3 U/C 矩阵

### 5. 数据流程图

### 6. 数据字典

#### 6.1 数据结构

#### 6.2 数据流

#### 6.3 数据存储

#### 6.4 外部实体

#### 6.5 逻辑处理

## 六、数学模型

### 1. 方法库

### 2. 模型库

## 七、 系统设计

### 1. 功能结构图设计

#### 1.1 层次模块结构图

#### 1.2 H图

#### 1.3 IPO 图

### 2. 系统流程图

### 3. 数据存储设计

#### 3.1 关系模型

### 4. 处理流程图

#### 4.1 处理流程--

#### 4.2 处理流程--

### 5. 程序设计

#### 5.1 配载程序设计

#### 5.2 输出设计

#### 5.3 输入设计

## 八、模型评价

### 1. 参数指标

## 九、 结论和展望

## 参考文献

## 致谢

## 附录

### 代码仓库：

[存储位置][1]

[1]: https://github.com/ZhaoYitong/LE-FINAL-DESIGN/ "Kerouac Repository"

### 文件结构

```bash
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
```

### html

```html
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
```

### css

```css
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
    height:80px;
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
    height:50px;
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
```

### javacript

```JavaScript
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
    $(`.vesselAreaSide`).append(`<div class="onBoardSide"></div>`);
    $(`.vesselAreaSide`).append(`<div class="belowBoardSide"></div>`);
    let bayLists = BayNumToRealIndexList(numOfBay);
    let layerLists = layerNumToRealIndexList(layerNumAbove,layerNumBelow);
    let conZone_bay_num = bayLists.inch20.length;
    let conZone_layerAbove_num = layerLists.above.length;
    let conZone_layerBelow_num = layerLists.below.length;
    for(let i=conZone_bay_num-1;i>=0;i--){
        let conZoneBayIndex = bayLists.inch20[i].bayRealIndex;
        $(`.onBoardSide`).append(`<div point-x=${conZoneBayIndex} class="conZoneBayAbove_inch20"></div>`);
        $(`.belowBoardSide`).append(`<div point-x=${conZoneBayIndex} class="conZoneBayBelow_inch20"></div>`);
    }
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
    $(`.createVessel`)[0].disabled = true;
}
/**
 *  stowage info
 */
function createStowageInfo() {
    $(`.createStowage`)[0].disabled = true;

}
function createLoadOrUnloadInfo() {
    $(`.createLoadOrUnload`)[0].disabled = true;
    let bayList = vesselOperationInfo.data.List;
    let bayListNum = vesselOperationInfo.data.List.length;
    for(let i=bayListNum-1;i>=0;i--){
        if(bayList[i].type == "single"){
            let bayIndex20 = bayList[i].bayInch20[0].index;
            $(`div[class="aboveUnloadInch40"]`).append(
                `<div bayIndex=${bayIndex20} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div>`);
            $(`div[class="belowUnloadInch40"]`).append(
                `<div bayIndex=${bayIndex20} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="aboveLoadInch40"]`).append(
                `<div bayIndex=${bayIndex20} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowLoadInch40"]`).append(
                `<div bayIndex=${bayIndex20} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
        }
        else {
            let bayIndex40 = bayList[i].bayInch40[0].index;
            $(`div[class="aboveUnloadInch40"]`).append(
                `<div bayIndex=${bayIndex40} class="unloadInch40"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowUnloadInch40"]`).append(
                `<div bayIndex=${bayIndex40} class="unloadInch40"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="aboveLoadInch40"]`).append(
                `<div bayIndex=${bayIndex40} class="loadInch40"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowLoadInch40"]`).append(
                `<div bayIndex=${bayIndex40} class="loadInch40"><span class="loadOrUnloadNum">0</span></div></div>`);
        }
    }
    for(let j=bayListNum-1;j>=0;j--){
        if(bayList[j].type == "single"){
            let bayIndex20 = bayList[j].bayInch20[0].index;
            $(`div[class="aboveUnloadInch20"]`).append(
                `<div bayIndex=${bayIndex20} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowUnloadInch20"]`).append(
                `<div bayIndex=${bayIndex20} class="unloadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="aboveLoadInch20"]`).append(
                `<div bayIndex=${bayIndex20} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
            $(`div[class="belowLoadInch20"]`).append(
                `<div bayIndex=${bayIndex20} class="loadInch20"><span class="loadOrUnloadNum">0</span></div></div>`);
        }
        else {
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
    $(`.bayArea`)[0].style.display = 'none';
    createBayAfterOperation(newBayList);
    $(`.confirmCombine`)[0].disabled = true;
}
function combineReset (){
    alert("确认重新组贝?");
    combinedBay20inch = [];
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
```
