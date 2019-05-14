from App.ext import db


class Yard(db.Model):
    YardCel = db.Column(db.String(20), primary_key=True)
    Status = db.Column(db.String(20))
    CtnNo = db.Column(db.String(20))
    StrLoaUnlSig = db.Column(db.String(20))
    CtnTyp = db.Column(db.String(20))
    CtnWegt = db.Column(db.String(20))
    UnloadPort = db.Column(db.String(20))
    Size = db.Column(db.String(20))
    Owner = db.Column(db.String(20))
    LoaVesTim = db.Column(db.String(20))
    Box = db.Column(db.String(20))
    Bay = db.Column(db.String(20))
    Col = db.Column(db.String(20))
    Lay = db.Column(db.String(20))
    Color = db.Column(db.String(20))

