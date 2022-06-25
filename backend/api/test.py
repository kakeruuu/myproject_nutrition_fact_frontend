from models import user
from models import post

if __name__=="__main__":
    user.Base.metadata.create_all(bind=user.engine)
    post.Base.metadata.create_all(bind=post.engine)