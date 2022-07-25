from typing import Optional, List

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession

from api.crud.nutritionFact import *
from api.setting import get_session

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def index():
    return {"Hello": "World"}

@app.post("/search")
async def search_nutirition(
    q: str, db: AsyncSession = Depends(get_session)
    ):
    return await read_nutrition(q, db)
