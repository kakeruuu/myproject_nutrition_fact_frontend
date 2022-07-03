from models import user
from models import post

# user, postテーブルの初期化
if __name__=="__main__":
    user.Base.metadata.create_all(bind=user.engine)
    post.Base.metadata.create_all(bind=post.engine)