from typing import List
from fastapi import APIRouter

import schemas.nutritionFact as nutrition_schema
import models.nutritionFact as nutrition_schema

router = APIRoter()

@router.get("/nutritionFact")
async def get_nutritionFact():
    return 