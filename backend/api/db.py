from sqlalchemy import  create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, String
from sqlalchemy.orm import sessionmaker


engine = create_engine("mysql://root:M4e80Xr1jQcdBnPt@db:3306/python_db")

Base = declarative_base()

SessionClass = sessionmaker(autocommit=false, autoflush=true, engine)  # セッションを作るクラスを作成
session = SessionClass()

print(session.query())