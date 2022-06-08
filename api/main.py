from enum import Enum
from fastapi import FastAPI


class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"

app = FastAPI()
# FastApiのインスタンス

@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    # 引数の型をEnumを引数にとったClassにすることで、Class内で使われる変数しか表示されなくなる？
    # Enumがよくわからない
    if model_name == ModelName.alexnet:
        return {"model_name": model_name, "message": "Deep Learning FTW!"}
    if model_name.value == "lenet":
        return {"model_name": model_name, "message": "LeCNN all the images"}
    
    return {"model_name": model_name, "message": "Have some residuals"}

@app.get("/items/{item_id}")
# バスオペレーションデコレータ
async def read_item(item_id: int):
    # バスオペレーション関数
    return {"item_id": item_id}