from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker


engine = create_engine("mysql://root:M4e80Xr1jQcdBnPt@db:3306/myproject_1_db?charset=utf8mb4")

session = scoped_session(
    sessionmaker(
        autocommit = False,
        autoflush = True,
        bind = engine
    )
)

Base = declarative_base()
Base.query = session.query_property()