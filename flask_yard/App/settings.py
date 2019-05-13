
def get_db_uri(dbinfo):
    ENGINE = dbinfo.get("ENGINE") or "mysql"
    DRIVER = dbinfo.get("DRIVER") or "pymysql"
    USER = dbinfo.get("USER") or "root"
    PASSAORD = dbinfo.get("PASSWORD") or "wode2016"
    HOST = dbinfo.get("HOST") or "localhost"
    PORT = dbinfo.get("PORT") or "3306"
    NAME = dbinfo.get("NAME") or "test"

    return "{}+{}://{}:{}@{}:{}/{}".format(ENGINE, DRIVER, USER, PASSAORD, HOST, PORT, NAME)


class Config:
    DEBUG = False
    TESTING = False
    SECRET_KEY = "ashichwhcwquh1"
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopConfig(Config):
    DEBUG = True
    DATABASE = {
        "ENGINE":"mysql",
        "DRIVER":"pymysql",
        "USER":"root",
        "PASSWORD":"wode2016",
        "HOST":"localhost",
        "PORT":"3306",
        "NAME":"flask"
    }

    SQLALCHEMY_DATABASE_URI = get_db_uri(DATABASE)


class TestingConfig(Config):
    DEBUG = True
    DATABASE = {
        "ENGINE":"mysql",
        "DRIVER":"pymysql",
        "USER":"root",
        "PASSWORD":"wode2016",
        "HOST":"localhost",
        "PORT":"3306",
        "NAME":"flask"
    }

    SQLALCHEMY_DATABASE_URI = get_db_uri(DATABASE)


class StagingConfig(Config):
    DEBUG = True
    DATABASE = {
        "ENGINE":"mysql",
        "DRIVER":"pymysql",
        "USER":"root",
        "PASSWORD":"wode2016",
        "HOST":"localhost",
        "PORT":"3306",
        "NAME":"flask"
    }

    SQLALCHEMY_DATABASE_URI = get_db_uri(DATABASE)


class ProductConfig(Config):
    DEBUG = True
    DATABASE = {
        "ENGINE":"mysql",
        "DRIVER":"pymysql",
        "USER":"root",
        "PASSWORD":"wode2016",
        "HOST":"localhost",
        "PORT":"3306",
        "NAME":"flask"
    }

    SQLALCHEMY_DATABASE_URI = get_db_uri(DATABASE)


envs = {
    'develop':DevelopConfig,
    'testing':TestingConfig,
    'staging':StagingConfig,
    'product':ProductConfig
}