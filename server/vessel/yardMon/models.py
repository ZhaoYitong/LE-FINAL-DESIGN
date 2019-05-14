from django.db import models


class Yard(models.Model):
    def __str__(self):
        return self.YardCel

    YardCel = models.CharField(max_length=20, primary_key=True, verbose_name='箱位')
    Status = models.CharField(max_length=20, verbose_name='状态')
    CtnNo = models.CharField(max_length=20, verbose_name='箱号')
    StrLoaUnlSig = models.CharField(max_length=20, verbose_name='直接装卸船')
    CtnTyp = models.CharField(max_length=20, verbose_name='箱型')
    CtnWegt = models.CharField(max_length=20, verbose_name='箱重')
    UnloadPort = models.CharField(max_length=20, verbose_name='卸货港')
    Size = models.CharField(max_length=20, verbose_name='尺寸')
    Owner = models.CharField(max_length=20, verbose_name='持箱人')
    LoaVesTim = models.CharField(max_length=20, verbose_name='装船日期')
    Box = models.CharField(max_length=20, verbose_name='箱区')
    Bay = models.CharField(max_length=20, verbose_name='贝位')
    Col = models.CharField(max_length=20, verbose_name='列数')
    Lay = models.CharField(max_length=20, verbose_name='层数')
    Color = models.CharField(max_length=20, verbose_name='集装箱颜色（补充）')
