from App import create_app
from flask_script import Manager
from flask_bootstrap import Bootstrap

app = create_app()
manage = Manager(app=app)
bootstrap = Bootstrap(app)


if __name__ == '__main__':
    manage.run()


# #######################初始化基本信息#######################
# 1.在manage.py中将app载入manage中，注意导入包from flask_script import Manager
# 2.在manage.py中删去app = Flask(__name__)将这一个过程写在__init__.py文件中，在__init__.py中注意导包
# 3.在创建完app后，初始化各种扩展库，初始化看的具体函数写在ext.py中
# 4.在views.py中创建蓝图,并创建一个路由，并创建一个注册蓝图的函数


# #####################初始化各种第三方配置#########################
# 1.在setting.py 中进行数据库配置