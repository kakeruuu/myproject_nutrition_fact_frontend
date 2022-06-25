from sqlalchemy import Column, Integer, String, Float, DateTime

from setting import engine
from setting import Base


class Post(Base):
    __tablename__ = "posts"
    __table_args__ = {
        "comment": "ユーザーがポストした内容のマスターテーブル"
    }

    post_id = Column("id", Integer, primary_key=True, autoincrement=True)
    contents = Column("name", String(200))

    
if __name__=="__main__":
    Base.metadata.create_all(bind=engine)
