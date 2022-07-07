from models import user
from crud import user
# from models import post

# user, postテーブルの初期化
if __name__=="__main__":
    # user.Base.metadata.create_all(bind=user.engine)
    user.create_user()
