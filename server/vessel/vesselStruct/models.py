from django.db import models
from django.utils.timezone import now
# TODO: 升级并统一字符长度类型， 模块方式导入
# length setting
# short: 10
# middle: 50
# big: 100
# supper: 500
# TODO: SET PRIMARY KEY AND FOREIGN KEY


class vesselVoyInfo(models.Model):
    TASK_FIN_SIG_CHOICES = (
        ('1', '正在卸船（未装船）'),
        ('2', '正在装船（未卸船）'),
        ('3', '正在装卸船(两者同时开展)'),
        ('4', '卸船完成，正在装船'),
        ('5', '装卸船都完成'),
    )
    UNB_STATUS_CHOICES = (
        ('1', '装卸船已经完成，正在离泊准备'),
        ('2', '正在离泊作业'),
        ('3', '离泊完成')
    )
    Vessel = models.CharField(max_length=50, verbose_name='船名')
    ImpVoy = models.CharField(max_length=50, verbose_name='进口航次')
    ExpVoy = models.CharField(max_length=50, verbose_name='出口航次')
    VesType = models.CharField(max_length=50, verbose_name='船型')
    PlaBerThgTim = models.DateTimeField(verbose_name='计划靠泊', default=now)
    PlaUnbThgTim = models.DateTimeField(verbose_name='计划离泊', default=now)
    ReaBerThgTim = models.DateTimeField(verbose_name='实际靠泊（时间）', default=now)
    ActUnbTim = models.DateTimeField(verbose_name='实际离泊', default=now)
    PlaBerThgPos = models.CharField(max_length=50, verbose_name='计划靠泊位置')
    ActBerPos = models.FloatField(verbose_name='实际靠泊位置')
    BerThgDir = models.CharField(max_length=50, verbose_name='靠泊方向')
    VesDrauMax = models.FloatField(verbose_name='进出最大吃水')
    PlaClosCustTim = models.DateTimeField(verbose_name='计划截关时间', default=now)
    ClosCustTim = models.DateTimeField(verbose_name='截关时间', default=now)
    OpAssSign = models.CharField(max_length=50, verbose_name='已安排作业', default='hh')
    EntPlanMakSig = models.CharField(max_length=50, verbose_name='已安排集港', default='jj')
    TaskFiniSig = models.CharField(max_length=3, choices=TASK_FIN_SIG_CHOICES, verbose_name='作业完成情况', default='1')
    # TODO:这里是完成情况 还是 完成否
    UnBSta = models.CharField(max_length=3, choices=UNB_STATUS_CHOICES, verbose_name='离泊情况', default='1')
    # TODO: 这里对应三种情况, 但文档却显示 boolean ?
    PlaLoaGPCtnFotNum = models.IntegerField(verbose_name='计划进重40', default=0)
    PlaLoaEmpCtnFotNum = models.IntegerField(verbose_name='计划进空40', default=0)
    PlaLoaDraCtnFotNum = models.IntegerField(verbose_name='计划进危40', default=0)
    PlaLoaGPCtnFotFivNum = models.IntegerField(null=True, blank=True, verbose_name='计划进重45', default=0)
    PlaLoaEmpCtnFotFivNum = models.IntegerField(null=True, blank=True, verbose_name='计划进空45', default=0)
    PlaLoaDraCtnFotFivNum = models.IntegerField(null=True, blank=True, verbose_name='计划进危45', default=0)
    PlaUloGPCtnFotNum = models.IntegerField(verbose_name='计划出重40', default=0)
    PlaUloEmpCtnFotNum = models.IntegerField(verbose_name='计划出空40', default=0)
    PlaUloDraCtnFotNum = models.IntegerField(verbose_name='计划出危40', default=0)
    PlaUloGPCtnFotFivNum = models.IntegerField(null=True, blank=True, verbose_name='计划出重45', default=0)
    PlaUloEmpCtnFotFivNum = models.IntegerField(null=True, blank=True, verbose_name='计划出空45', default=0)
    PlaUloDraCtnFotFivNum = models.IntegerField(null=True, blank=True, verbose_name='计划出危45', default=0)


class vesStruct(models.Model):
    VesType = models.CharField(max_length=30, verbose_name='船型')
    VesLeng = models.FloatField(verbose_name='船长')
    VesWidth = models.FloatField(verbose_name='船舶宽度')
    VesFrLeng = models.FloatField(verbose_name='船首长度（米）')
    TweBayNum = models.IntegerField(verbose_name='20尺贝数')
    FotBayNum = models.IntegerField(verbose_name='40尺贝数')
    FotBayCom = models.CharField(max_length=500, verbose_name='40组贝')
    EngRomPos = models.IntegerField(verbose_name='机舱位置')
    EngRomWid = models.IntegerField(verbose_name='机舱宽度')
    MidBayDeaWit = models.BooleanField(verbose_name='中间贝处理') # set to 00 ? true:false
    RefCtnCap = models.FloatField(null=True, blank=True, verbose_name='冷冻容量')
    VesEntBerSpd = models.FloatField(null=True, blank=True, verbose_name='船舶进港速度')
    VesBerSpd = models.FloatField(null=True, blank=True, verbose_name='船舶靠泊速度')
    HigCtnCap = models.FloatField(verbose_name='高箱容量')
    CapCtnFotFiv = models.FloatField(null=True, blank=True, verbose_name='45尺容量')
    VesEmpGrvHeg = models.CharField(max_length=50, verbose_name='空船重心高')
    VesAtt = models.CharField(max_length=50, verbose_name='全隔槽？')
    LoadWeigth = models.FloatField(verbose_name='载重量')
    DeckCapWegt = models.FloatField(verbose_name='甲板容量T')
    CabCap = models.FloatField(verbose_name='舱内容量T')
    DanCtnAlw = models.CharField(max_length=50, verbose_name='允装危险品')# true or false
    # TODO: 这里换成 boolean 还是 choiceType ?
    DeckLayNumMax = models.IntegerField(verbose_name='甲板最大层高')
    CabLayNumMax = models.IntegerField(verbose_name='舱内最大层深')
    DeckColNumMax = models.IntegerField(verbose_name='甲板最大列数')
    CabColNumMax = models.IntegerField(verbose_name='舱内最大列数')


class vesBayStruct(models.Model):
    BAY_COM_CHOICES = (
        ('0', '不组贝'),
        ('1', '向右组贝'),
        ('2', '向左组贝'),
    )
    HAT_COVER_CHOICES = (
        ('0', '自开式'),
        ('1', '数目1'),
        ('2', '数目2'),
        ('3', '数目3'),
        ('4', '数目4'),
    )
    MID_BAY_DEAL_WIT_CHOICES = (
        ('0', '00行'),
        ('1', '非00行'),
    )
    VesType = models.CharField(max_length=30, verbose_name='船型')
    BayNo = models.CharField(max_length=50, verbose_name='贝号')
    BaySiz = models.CharField(max_length=50, verbose_name='贝尺寸')
    BayCom = models.CharField(max_length=3, choices=BAY_COM_CHOICES, default='0', verbose_name='贝组')
    DeckHeg = models.IntegerField(verbose_name='甲板层高')
    DeckWidMax = models.IntegerField(verbose_name='甲板最宽')
    CabHeg = models.IntegerField(verbose_name='舱内层高')
    CabWidMax = models.IntegerField(verbose_name='舱内最宽')
    HatCovKind = models.CharField(max_length=3, choices=HAT_COVER_CHOICES, default='0', verbose_name='舱盖板类型')# choice
    HatCovPos = models.CharField(max_length=50, verbose_name='舱盖板明细')
    BayX = models.IntegerField(verbose_name='贝X坐标')
    BayY = models.IntegerField(verbose_name='贝Y坐标')
    MidBayDeaWit = models.CharField(max_length=3, default='0', verbose_name='中间贝处理')#choice


class vesBayLayStruct(models.Model):
    DECK_CAG_SIG_CHOICES = (
        ('0', '甲板'),
        ('1', '舱内'),
    )
    VesType = models.CharField(max_length=30, verbose_name='船型')
    BayNo = models.CharField(max_length=10, verbose_name='贝号')
    TireNo = models.CharField(max_length=100, verbose_name='层号')
    DeckCagSig = models.CharField(max_length=3, verbose_name='甲板or舱内')# choice
    BayWid = models.IntegerField(verbose_name='宽度')
    BayTieCtnLay = models.CharField(max_length=50, verbose_name='层箱位分布')
    BayHigh = models.IntegerField(verbose_name='离底层')
    CellSpeSig = models.CharField(max_length=50, verbose_name='箱位特标')
    RefSig = models.CharField(max_length=50, verbose_name='箱位冷冻标')

    # TODO: to be with Pei Qiling everyday when encoding

    # TODO: say good night to Miss Pei

    # TODO: Pei is always my love, hah.




