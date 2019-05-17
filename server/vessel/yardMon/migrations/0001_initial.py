# Generated by Django 2.2.1 on 2019-05-17 06:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='armg_info',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('YcNo', models.CharField(blank=True, max_length=50, null=True, verbose_name='场吊编号')),
                ('YcKind', models.CharField(blank=True, max_length=50, null=True, verbose_name='类别')),
                ('YcLocZone', models.CharField(max_length=50, verbose_name='场吊所在箱区')),
                ('YcLocPos', models.FloatField(verbose_name='当前场吊位置')),
                ('YcStat', models.CharField(choices=[('0', '空闲'), ('1', '卸船'), ('2', '装船'), ('3', '大车移动'), ('4', '故障'), ('5', '移箱')], max_length=50, verbose_name='场吊状态')),
                ('OpVes', models.CharField(blank=True, max_length=50, null=True, verbose_name='作业船舶')),
                ('ZoneDis', models.FloatField(blank=True, null=True, verbose_name='箱区起贝定位')),
                ('NowOpDesPosFir', models.CharField(blank=True, max_length=50, null=True, verbose_name='当前作业目标位一')),
                ('OpCtnNoFir', models.CharField(blank=True, max_length=50, null=True, verbose_name='当前作业箱号一')),
                ('OpCtnDesPosSec', models.CharField(blank=True, max_length=50, null=True, verbose_name='当前作业目标位二')),
                ('OpCtnNoSec', models.CharField(blank=True, max_length=50, null=True, verbose_name='当前作业箱号二')),
                ('OpOriStaSit', models.CharField(blank=True, max_length=50, null=True, verbose_name='当前作业起点位置')),
                ('QcNoLeft', models.CharField(blank=True, max_length=50, null=True, verbose_name='左侧场吊编号')),
                ('QcNoRight', models.CharField(blank=True, max_length=50, null=True, verbose_name='右侧场吊编号')),
                ('OpLifTime', models.DateTimeField(blank=True, null=True, verbose_name='作业起吊时间')),
                ('OpRelCtnTim', models.DateTimeField(blank=True, null=True, verbose_name='作业放箱时间')),
            ],
        ),
        migrations.CreateModel(
            name='armg_op_plan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('YcNo', models.CharField(max_length=50, verbose_name='场吊编号')),
                ('OpZone', models.CharField(max_length=50, verbose_name='作业箱区')),
                ('OpCtnNum', models.IntegerField(blank=True, null=True, verbose_name='作业箱数')),
                ('OpKind', models.CharField(choices=[('1', '卸船箱'), ('2', '装船箱'), ('3', '进场箱'), ('4', '出场箱'), ('5', '移箱')], max_length=50, verbose_name='作业类别')),
                ('OpOriPosFir', models.CharField(blank=True, max_length=50, null=True, verbose_name='作业位置源一')),
                ('OpOriPosSec', models.CharField(blank=True, max_length=50, null=True, verbose_name='作业位置源二')),
                ('DesPosFir', models.CharField(blank=True, max_length=50, null=True, verbose_name='目的位置一')),
                ('DesPosSec', models.CharField(blank=True, max_length=50, null=True, verbose_name='目的位置二')),
                ('PreYcNo', models.CharField(blank=True, max_length=50, null=True, verbose_name='紧前场吊编号')),
                ('PreOpZone', models.CharField(blank=True, max_length=50, null=True, verbose_name='紧前作业箱区')),
                ('PreOpCtnNum', models.IntegerField(blank=True, null=True, verbose_name='紧前作业箱数')),
                ('PreOpKind', models.CharField(blank=True, max_length=50, null=True, verbose_name='紧前作业类别')),
                ('PreOriPosFir', models.CharField(blank=True, max_length=50, null=True, verbose_name='紧前作业位置源一')),
                ('PreOriPosSec', models.CharField(blank=True, max_length=50, null=True, verbose_name='紧前作业位置源二')),
                ('PreDesPosFir', models.CharField(blank=True, max_length=50, null=True, verbose_name='紧前目的位置一')),
                ('PreDesPosSec', models.CharField(blank=True, max_length=50, null=True, verbose_name='紧前目的位置二')),
            ],
        ),
        migrations.CreateModel(
            name='armg_schedule_plan_input',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('OpZone', models.CharField(max_length=50, verbose_name='作业箱区')),
                ('TaskNo', models.CharField(max_length=50, verbose_name='作业编号')),
                ('OpKind', models.CharField(choices=[('1', '卸船箱'), ('2', '装船箱'), ('3', '进场箱'), ('4', '出场箱'), ('5', '移箱')], max_length=50, verbose_name='作业类别')),
                ('TaskBegSit', models.CharField(max_length=50, verbose_name='作业源地_集装箱初始位置')),
                ('DesPos', models.CharField(max_length=50, verbose_name='目的地_集装箱目的位置')),
                ('YcNum', models.IntegerField(verbose_name='场吊数')),
                ('YcNoFir', models.CharField(blank=True, max_length=50, null=True, verbose_name='第一场吊')),
                ('YcNoSec', models.CharField(blank=True, max_length=50, null=True, verbose_name='第二场吊')),
                ('YcNoTHr', models.CharField(blank=True, max_length=50, null=True, verbose_name='第三场吊')),
                ('PreYcNoFir', models.CharField(blank=True, max_length=50, null=True, verbose_name='第一场吊紧前')),
                ('PreYcNoSec', models.CharField(blank=True, max_length=50, null=True, verbose_name='第二场吊紧前')),
                ('PreYcNoThr', models.CharField(blank=True, max_length=50, null=True, verbose_name='第三场吊紧前')),
                ('PasThoSig', models.BooleanField(blank=True, null=True, verbose_name='需要穿越')),
                ('PlanClass', models.CharField(blank=True, max_length=50, null=True, verbose_name='第一二类')),
                ('ABCls', models.CharField(blank=True, max_length=50, null=True, verbose_name='AB类')),
                ('MidPosFir', models.CharField(blank=True, max_length=50, null=True, verbose_name='第一中间位')),
                ('MidPosSec', models.CharField(blank=True, max_length=50, null=True, verbose_name='第二中间位')),
                ('ModPlanKind', models.CharField(blank=True, max_length=50, null=True, verbose_name='模型计划类型')),
                ('EffFactr', models.CharField(blank=True, max_length=50, null=True, verbose_name='影响因素')),
                ('ModFud', models.CharField(blank=True, max_length=50, null=True, verbose_name='模型基础')),
                ('ModObj', models.CharField(blank=True, max_length=50, null=True, verbose_name='模型目标')),
                ('ModCons', models.CharField(blank=True, max_length=50, null=True, verbose_name='模型约束')),
            ],
        ),
        migrations.CreateModel(
            name='armg_schedule_plan_output',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('OpZone', models.CharField(max_length=50, verbose_name='作业箱区')),
                ('TaskNo', models.CharField(max_length=50, verbose_name='作业编号')),
                ('OpKind', models.CharField(choices=[('1', '卸船箱'), ('2', '装船箱'), ('3', '进场箱'), ('4', '出场箱'), ('5', '移箱')], max_length=50, verbose_name='作业类别')),
                ('TaskBegSit', models.CharField(max_length=50, verbose_name='作业源地')),
                ('DesPos', models.CharField(max_length=50, verbose_name='目的地')),
                ('OpTime', models.DateTimeField(blank=True, null=True, verbose_name='作业时间')),
            ],
        ),
        migrations.CreateModel(
            name='yard',
            fields=[
                ('YardCel', models.CharField(max_length=20, primary_key=True, serialize=False, verbose_name='箱位')),
                ('Status', models.CharField(max_length=20, verbose_name='状态')),
                ('CtnNo', models.CharField(max_length=20, verbose_name='箱号')),
                ('StrLoaUnlSig', models.CharField(max_length=20, verbose_name='直接装卸船')),
                ('CtnTyp', models.CharField(max_length=20, verbose_name='箱型')),
                ('CtnWegt', models.CharField(max_length=20, verbose_name='箱重')),
                ('UnloadPort', models.CharField(max_length=20, verbose_name='卸货港')),
                ('Size', models.CharField(max_length=20, verbose_name='尺寸')),
                ('Owner', models.CharField(max_length=20, verbose_name='持箱人')),
                ('LoaVesTim', models.CharField(max_length=20, verbose_name='装船日期')),
                ('Box', models.CharField(max_length=20, verbose_name='箱区')),
                ('Bay', models.CharField(max_length=20, verbose_name='贝位')),
                ('Col', models.CharField(max_length=20, verbose_name='列数')),
                ('Lay', models.CharField(max_length=20, verbose_name='层数')),
                ('Color', models.CharField(max_length=20, verbose_name='集装箱颜色（补充）')),
            ],
        ),
        migrations.CreateModel(
            name='yard_cur_cons',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CtnNo', models.CharField(blank=True, max_length=50, null=True, verbose_name='箱号')),
                ('Vessel', models.CharField(blank=True, max_length=50, null=True, verbose_name='船名')),
                ('Voyage', models.CharField(blank=True, max_length=50, null=True, verbose_name='航次')),
                ('CtnTyp', models.CharField(blank=True, max_length=50, null=True, verbose_name='箱型')),
                ('Size', models.CharField(blank=True, max_length=50, null=True, verbose_name='尺寸')),
                ('Status', models.CharField(blank=True, max_length=50, null=True, verbose_name='状态')),
                ('CtnWegt', models.FloatField(blank=True, null=True, verbose_name='箱重')),
                ('Owner', models.CharField(blank=True, max_length=50, null=True, verbose_name='持箱人')),
                ('OpSty', models.CharField(blank=True, max_length=50, null=True, verbose_name='作业方式')),
                ('YardCel', models.CharField(blank=True, max_length=50, null=True, verbose_name='场箱位')),
                ('PlaCtnCel', models.CharField(blank=True, max_length=50, null=True, verbose_name='计划箱位')),
                ('CtnOpeSta', models.CharField(blank=True, max_length=50, null=True, verbose_name='箱作业状态')),
                ('FromWhr', models.CharField(blank=True, max_length=50, null=True, verbose_name='来源')),
                ('PlaGosWhr', models.CharField(blank=True, max_length=50, null=True, verbose_name='计划去向')),
                ('UloVesTime', models.DateTimeField(blank=True, null=True, verbose_name='卸船日期')),
                ('EntYrdTim', models.DateTimeField(blank=True, null=True, verbose_name='进场日期')),
                ('IOSig', models.CharField(blank=True, max_length=50, null=True, verbose_name='进出口')),
                ('IOYrd', models.CharField(blank=True, max_length=50, null=True, verbose_name='进出场')),
                ('VesCellNo', models.CharField(blank=True, max_length=50, null=True, verbose_name='船箱位')),
                ('ColNo', models.IntegerField(blank=True, null=True, verbose_name='列号')),
                ('CellDH', models.CharField(blank=True, max_length=50, null=True, verbose_name='D/H')),
                ('StaPort', models.CharField(blank=True, max_length=50, null=True, verbose_name='起运港')),
                ('UnloadPort', models.CharField(blank=True, max_length=50, null=True, verbose_name='卸货港')),
                ('DesPort', models.CharField(blank=True, max_length=50, null=True, verbose_name='目的港')),
                ('StrLoaUnlSig', models.CharField(blank=True, max_length=50, null=True, verbose_name='直接装卸船')),
                ('CtnChkDobCra', models.CharField(blank=True, max_length=50, null=True, verbose_name='箱校核/双吊')),
                ('EntYrdSeo', models.CharField(blank=True, max_length=50, null=True, verbose_name='进场次序')),
                ('ExiYrdSeo', models.CharField(blank=True, max_length=50, null=True, verbose_name='出场次序')),
                ('OriVes', models.CharField(blank=True, max_length=50, null=True, verbose_name='原船')),
                ('OriVoy', models.CharField(blank=True, max_length=50, null=True, verbose_name='原航次')),
                ('CtnWegtCla', models.IntegerField(blank=True, null=True, verbose_name='箱重等级')),
                ('PrpSig', models.IntegerField(blank=True, choices=[(0, '否'), (1, '是')], null=True, verbose_name='配载')),
                ('DesPortNam', models.CharField(blank=True, max_length=50, null=True, verbose_name='目的港全称')),
                ('VesVoy', models.CharField(blank=True, max_length=50, null=True, verbose_name='船名航次')),
                ('EntOpKind', models.CharField(blank=True, max_length=50, null=True, verbose_name='进场类别')),
                ('ForeighDomSig', models.CharField(blank=True, max_length=50, null=True, verbose_name='内外贸标志')),
                ('LoaVesTim', models.DateTimeField(blank=True, null=True, verbose_name='装船日期')),
                ('ExiYrdTim', models.DateTimeField(blank=True, null=True, verbose_name='出场日期')),
                ('DeliCtnSeo', models.IntegerField(blank=True, null=True, verbose_name='发箱顺序')),
                ('CusChkSig', models.CharField(blank=True, max_length=50, null=True, verbose_name='海关放行')),
                ('PlanTruck', models.CharField(blank=True, max_length=50, null=True, verbose_name='计划集卡接箱位置')),
            ],
        ),
    ]
