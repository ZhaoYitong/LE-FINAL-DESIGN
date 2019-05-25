# Generated by Django 2.2 on 2019-05-25 17:01

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='con_pend_info',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Vessel', models.CharField(max_length=50, verbose_name='船名')),
                ('BayNo', models.CharField(max_length=50, verbose_name='贝号')),
                ('DeckLodNum', models.IntegerField(blank=True, null=True, verbose_name='甲板装数')),
                ('DeckUloNum', models.IntegerField(blank=True, null=True, verbose_name='甲板卸数')),
                ('CabLoaNum', models.IntegerField(blank=True, null=True, verbose_name='舱内装数')),
                ('CabUloNum', models.IntegerField(blank=True, null=True, verbose_name='舱内卸数')),
                ('HatCovKind', models.CharField(blank=True, choices=[('0', '自开式'), ('1', '数目1'), ('2', '数目2'), ('3', '数目3'), ('4', '数目4')], default='0', max_length=10, null=True, verbose_name='舱盖板类型')),
            ],
        ),
        migrations.CreateModel(
            name='con_sto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Vessel', models.CharField(max_length=50, verbose_name='船名')),
                ('Voyage', models.CharField(max_length=50, verbose_name='航次')),
                ('VesCellNo', models.CharField(max_length=50, verbose_name='船箱位')),
                ('ColNo', models.CharField(max_length=50, verbose_name='列号')),
                ('DeckCagSig', models.CharField(max_length=50, verbose_name='甲板or舱内')),
                ('CtnNo', models.CharField(max_length=50, verbose_name='箱号')),
                ('CtnTyp', models.CharField(max_length=50, verbose_name='箱型')),
                ('Size', models.CharField(max_length=50, verbose_name='尺寸')),
                ('Status', models.CharField(max_length=50, verbose_name='状态')),
                ('CtnWegt', models.FloatField(verbose_name='箱重')),
                ('GForce', models.CharField(max_length=1000, verbose_name='货特要求')),
                ('StaPort', models.CharField(max_length=50, verbose_name='起运港')),
                ('UnloadPort', models.CharField(max_length=50, verbose_name='卸货港')),
                ('DesPort', models.CharField(max_length=50, verbose_name='目的港')),
                ('CtnOpeSta', models.CharField(max_length=50, verbose_name='箱作业状态')),
                ('YardCel', models.CharField(max_length=50, verbose_name='堆场箱位')),
            ],
        ),
        migrations.CreateModel(
            name='con_stowage_import',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Vessel', models.CharField(max_length=50, verbose_name='船名')),
                ('Voyage', models.CharField(max_length=50, verbose_name='航次')),
                ('VesCellNo', models.CharField(max_length=50, verbose_name='船箱位')),
                ('ColNo', models.CharField(max_length=50, verbose_name='列号')),
                ('DeckCagSig', models.CharField(max_length=50, verbose_name='甲板or舱内')),
                ('CtnNo', models.CharField(max_length=50, verbose_name='箱号')),
                ('CtnTyp', models.CharField(max_length=50, verbose_name='箱型')),
                ('Size', models.CharField(max_length=50, verbose_name='尺寸')),
                ('Status', models.CharField(max_length=50, verbose_name='状态')),
                ('CtnWegt', models.FloatField(verbose_name='箱重')),
                ('Owner', models.CharField(max_length=50, verbose_name='持箱人')),
                ('GForce', models.CharField(max_length=1000, verbose_name='货特要求')),
                ('StaPort', models.CharField(max_length=50, verbose_name='起运港')),
                ('UnloadPort', models.CharField(max_length=50, verbose_name='卸货港')),
                ('DesPort', models.CharField(max_length=50, verbose_name='目的港')),
                ('StrPickAwayCtn', models.CharField(max_length=50, verbose_name='直提箱')),
                ('CtnOpeSta', models.CharField(max_length=50, verbose_name='箱作业状态')),
                ('PlaCtnCel', models.CharField(max_length=50, verbose_name='计划箱位')),
            ],
        ),
        migrations.CreateModel(
            name='qc_dis_plan_out',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('QCNo', models.CharField(max_length=10, verbose_name='岸桥编号')),
                ('TaskCluVes', models.CharField(max_length=50, verbose_name='作业船舶')),
                ('TaskCluBay', models.CharField(max_length=10, verbose_name='作业贝位')),
                ('BayInnTaskCluNo', models.CharField(blank=True, max_length=1000, null=True, verbose_name='作业贝位内任务簇编号(贝位作业的再划分)')),
                ('TaskCluKind', models.CharField(choices=[('1', '表示甲板卸'), ('2', '表示卸舱盖板'), ('3', '表示舱内卸'), ('4', '表示舱内装'), ('5', '表示装舱盖板'), ('6', '表示甲板装')], max_length=3, verbose_name='作业类别')),
                ('PreTaskCluVes', models.CharField(blank=True, max_length=50, null=True, verbose_name='紧前作业船舶')),
                ('PreTaskCluBay', models.CharField(blank=True, max_length=50, null=True, verbose_name='紧前作业贝位')),
                ('PreBayInnTaskCluNo', models.CharField(blank=True, max_length=1000, null=True, verbose_name='紧前作业贝位内任务簇编号')),
                ('PreTaskCluKind', models.CharField(blank=True, choices=[('1', '表示甲板卸'), ('2', '表示卸舱盖板'), ('3', '表示舱内卸'), ('4', '表示舱内装'), ('5', '表示装舱盖板'), ('6', '表示甲板装')], max_length=3, null=True, verbose_name='作业紧前类别')),
                ('TaskCluEstBegTim', models.DateTimeField(verbose_name='作业开始时间（估计）')),
                ('TaskCluEstEndtim', models.DateTimeField(verbose_name='作业结束时间（估计） ')),
                ('ModPlanKind', models.CharField(blank=True, max_length=50, null=True, verbose_name='模型计划类型')),
                ('EffFactr', models.CharField(blank=True, max_length=500, null=True, verbose_name='影响因素')),
                ('ModFud', models.CharField(blank=True, max_length=500, null=True, verbose_name='模型基础')),
                ('ModObj', models.CharField(blank=True, max_length=500, null=True, verbose_name='模型目标')),
                ('ModCons', models.CharField(blank=True, max_length=500, null=True, verbose_name='模型约束')),
            ],
        ),
        migrations.CreateModel(
            name='qc_info',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('QCNo', models.CharField(max_length=10, verbose_name='岸桥编号')),
                ('QcOpLengFr', models.FloatField(verbose_name='外伸作业距')),
                ('QcHeg', models.FloatField(verbose_name='岸桥高度')),
                ('QcOpHeg', models.FloatField(verbose_name='作业高度')),
                ('QcPos', models.FloatField(verbose_name='岸桥位置')),
                ('QCSta', models.CharField(choices=[('0', '空闲'), ('1', '忙碌'), ('2', '维护')], max_length=10, verbose_name='岸桥状态')),
                ('OpVes', models.CharField(blank=True, max_length=50, null=True, verbose_name='作业船舶')),
                ('NowOpVesCel', models.CharField(blank=True, max_length=50, null=True, verbose_name='当前作业船箱位')),
                ('QcNoLeft', models.CharField(blank=True, max_length=50, null=True, verbose_name='左侧岸桥编号')),
                ('QcNoRight', models.CharField(blank=True, max_length=50, null=True, verbose_name='右侧岸桥编号')),
                ('QCEffMovPeH', models.IntegerField(blank=True, null=True, verbose_name='岸吊作业效率')),
                ('PlaQcMtnFiniTim', models.DateTimeField(blank=True, null=True, verbose_name='岸吊预期修复时间')),
            ],
        ),
        migrations.CreateModel(
            name='ves_bay_lay_struct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Vessel', models.CharField(max_length=50, verbose_name='船名')),
                ('BayNo', models.CharField(max_length=10, verbose_name='贝号')),
                ('TireNo', models.CharField(max_length=100, verbose_name='层号')),
                ('DeckCagSig', models.CharField(max_length=10, verbose_name='甲板or舱内')),
                ('BayWid', models.IntegerField(verbose_name='宽度')),
                ('BayTieCtnLay', models.CharField(max_length=50, verbose_name='层箱位分布')),
                ('BayHigh', models.IntegerField(blank=True, null=True, verbose_name='离底层(该层层号)')),
                ('CellSpeSig', models.CharField(blank=True, max_length=50, null=True, verbose_name='箱位特标')),
                ('RefSig', models.CharField(blank=True, max_length=50, null=True, verbose_name='箱位冷冻标')),
            ],
        ),
        migrations.CreateModel(
            name='ves_bay_struct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Vessel', models.CharField(max_length=50, verbose_name='船名')),
                ('BayNo', models.CharField(max_length=50, verbose_name='贝号')),
                ('BaySiz', models.CharField(blank=True, max_length=50, null=True, verbose_name='贝尺寸')),
                ('BayCom', models.CharField(blank=True, choices=[('0', '不组贝'), ('1', '向右组贝'), ('2', '向左组贝')], default='0', max_length=10, null=True, verbose_name='贝组')),
                ('DeckHeg', models.IntegerField(blank=True, null=True, verbose_name='甲板层高')),
                ('DeckWidMax', models.IntegerField(blank=True, null=True, verbose_name='甲板最宽')),
                ('CabHeg', models.IntegerField(blank=True, null=True, verbose_name='舱内层高')),
                ('CabWidMax', models.IntegerField(blank=True, null=True, verbose_name='舱内最宽')),
                ('HatCovKind', models.CharField(choices=[('0', '自开式'), ('1', '数目1'), ('2', '数目2'), ('3', '数目3'), ('4', '数目4')], default='0', max_length=10, verbose_name='舱盖板类型')),
                ('HatCovPos', models.CharField(max_length=50, verbose_name='舱盖板明细')),
                ('BayX', models.IntegerField(blank=True, null=True, verbose_name='贝X坐标')),
                ('BayY', models.IntegerField(blank=True, null=True, verbose_name='贝Y坐标')),
                ('MidBayDeaWit', models.CharField(blank=True, choices=[('0', '00行'), ('1', '非00行')], max_length=10, null=True, verbose_name='中间贝处理')),
            ],
        ),
        migrations.CreateModel(
            name='ves_struct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Vessel', models.CharField(max_length=50, verbose_name='船名')),
                ('VesLeng', models.FloatField(verbose_name='船长')),
                ('VesWidth', models.FloatField(verbose_name='船舶宽度')),
                ('VesFrLeng', models.FloatField(verbose_name='船首长度（米）')),
                ('TweBayNum', models.IntegerField(verbose_name='20尺贝数')),
                ('FotBayNum', models.IntegerField(blank=True, null=True, verbose_name='40尺贝数')),
                ('FotBayCom', models.CharField(blank=True, max_length=500, null=True, verbose_name='40组贝')),
                ('EngRomPos', models.IntegerField(verbose_name='机舱位置')),
                ('EngRomWid', models.IntegerField(verbose_name='机舱宽度')),
                ('MidBayDeaWit', models.BooleanField(blank=True, null=True, verbose_name='中间贝处理')),
                ('RefCtnCap', models.FloatField(blank=True, null=True, verbose_name='冷冻容量')),
                ('VesEntBerSpd', models.FloatField(blank=True, null=True, verbose_name='船舶进港速度')),
                ('VesBerSpd', models.FloatField(blank=True, null=True, verbose_name='船舶靠泊速度')),
                ('HigCtnCap', models.FloatField(blank=True, null=True, verbose_name='高箱容量')),
                ('CapCtnFotFiv', models.FloatField(blank=True, null=True, verbose_name='45尺容量')),
                ('VesEmpGrvHeg', models.CharField(blank=True, max_length=50, null=True, verbose_name='空船重心高')),
                ('VesAtt', models.CharField(blank=True, max_length=50, null=True, verbose_name='全隔槽？')),
                ('LoadWeigth', models.FloatField(blank=True, null=True, verbose_name='载重量')),
                ('DeckCapWegt', models.FloatField(blank=True, null=True, verbose_name='甲板容量T')),
                ('CabCap', models.FloatField(blank=True, null=True, verbose_name='舱内容量T')),
                ('DanCtnAlw', models.CharField(blank=True, max_length=10, null=True, verbose_name='允装危险品')),
                ('DeckLayNumMax', models.IntegerField(verbose_name='甲板最大层高')),
                ('CabLayNumMax', models.IntegerField(verbose_name='舱内最大层深')),
                ('DeckColNumMax', models.IntegerField(verbose_name='甲板最大列数')),
                ('CabColNumMax', models.IntegerField(verbose_name='舱内最大列数')),
            ],
        ),
        migrations.CreateModel(
            name='vessel_voy_info',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Vessel', models.CharField(max_length=50, verbose_name='船名')),
                ('ImpVoy', models.CharField(max_length=50, verbose_name='进口航次')),
                ('ExpVoy', models.CharField(max_length=50, verbose_name='出口航次')),
                ('VesType', models.CharField(blank=True, max_length=50, null=True, verbose_name='船型')),
                ('PlaBerThgTim', models.DateTimeField(default=django.utils.timezone.now, verbose_name='计划靠泊')),
                ('PlaUnbThgTim', models.DateTimeField(default=django.utils.timezone.now, verbose_name='计划离泊')),
                ('ReaBerThgTim', models.DateTimeField(default=django.utils.timezone.now, verbose_name='实际靠泊（时间）')),
                ('ActUnbTim', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True, verbose_name='实际离泊')),
                ('PlaBerThgPos', models.CharField(max_length=50, verbose_name='计划靠泊位置')),
                ('ActBerPos', models.FloatField(verbose_name='实际靠泊位置')),
                ('BerThgDir', models.CharField(max_length=50, verbose_name='靠泊方向')),
                ('VesDrauMax', models.FloatField(blank=True, null=True, verbose_name='进出最大吃水')),
                ('PlaClosCustTim', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True, verbose_name='计划截关时间')),
                ('ClosCustTim', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True, verbose_name='截关时间')),
                ('OpAssSign', models.CharField(blank=True, default='hh', max_length=50, null=True, verbose_name='已安排作业')),
                ('EntPlanMakSig', models.CharField(blank=True, default='jj', max_length=50, null=True, verbose_name='已安排集港')),
                ('TaskFiniSig', models.CharField(blank=True, choices=[('1', '正在卸船（未装船）'), ('2', '正在装船（未卸船）'), ('3', '正在装卸船(两者同时开展)'), ('4', '卸船完成，正在装船'), ('5', '装卸船都完成')], default='1', max_length=10, null=True, verbose_name='作业完成情况')),
                ('UnBSta', models.CharField(blank=True, choices=[('1', '装卸船已经完成，正在离泊准备'), ('2', '正在离泊作业'), ('3', '离泊完成')], default='1', max_length=10, null=True, verbose_name='离泊情况')),
                ('PlaLoaDraCtnTweNum', models.IntegerField(blank=True, null=True, verbose_name='计划进危20')),
                ('PlaUloDraCtnTweNum', models.IntegerField(blank=True, null=True, verbose_name='计划出危20')),
                ('PlaLoaEmpCtnTweNum', models.IntegerField(blank=True, null=True, verbose_name='计划进空20')),
                ('PlaUloEmpCtnTweNum', models.IntegerField(blank=True, null=True, verbose_name='计划出空20')),
                ('PlaLoaGPCtnTweNum', models.IntegerField(blank=True, null=True, verbose_name='计划进重20')),
                ('PlaUloGPCtnTweNum', models.IntegerField(blank=True, null=True, verbose_name='计划出重20')),
                ('PlaLoaGPCtnFotNum', models.IntegerField(blank=True, null=True, verbose_name='计划进重40')),
                ('PlaLoaEmpCtnFotNum', models.IntegerField(blank=True, null=True, verbose_name='计划进空40')),
                ('PlaLoaDraCtnFotNum', models.IntegerField(blank=True, null=True, verbose_name='计划进危40')),
                ('PlaLoaGPCtnFotFivNum', models.IntegerField(blank=True, null=True, verbose_name='计划进重45')),
                ('PlaLoaEmpCtnFotFivNum', models.IntegerField(blank=True, null=True, verbose_name='计划进空45')),
                ('PlaLoaDraCtnFotFivNum', models.IntegerField(blank=True, null=True, verbose_name='计划进危45')),
                ('PlaUloGPCtnFotNum', models.IntegerField(blank=True, null=True, verbose_name='计划出重40')),
                ('PlaUloEmpCtnFotNum', models.IntegerField(blank=True, null=True, verbose_name='计划出空40')),
                ('PlaUloDraCtnFotNum', models.IntegerField(blank=True, null=True, verbose_name='计划出危40')),
                ('PlaUloGPCtnFotFivNum', models.IntegerField(blank=True, null=True, verbose_name='计划出重45')),
                ('PlaUloEmpCtnFotFivNum', models.IntegerField(blank=True, null=True, verbose_name='计划出空45')),
                ('PlaUloDraCtnFotFivNum', models.IntegerField(blank=True, null=True, verbose_name='计划出危45')),
            ],
        ),
    ]
