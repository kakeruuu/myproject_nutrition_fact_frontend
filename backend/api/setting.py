import os

from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker, declarative_base


async_engine = create_async_engine(
    "mysql://root:" + os.environ["DB_PASSWORD"] + "@db:3306/myproject_nutrition_fact?charset=utf8mb4",
    echo=True
    )

async_session = sessionmaker(
    autocommit=False, autoflush=False, bind=async_engine, class_=AsyncSession
    )

Base = declarative_base()

async def get_session():
    async with async_session() as session:
        yield session