from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.crud.nutritionFact import *

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

@app.get("/search")
def search_nutirition():
    return read_nutrition()
