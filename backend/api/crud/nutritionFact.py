from sqlalchemy import select
from sqlalchemy.engine import Result
from sqlalchemy.ext.asyncio import AsyncSession

from api.models.nutritionFact import NutritionFact


async def read_nutrition(q: str, db: AsyncSession):
    result: Result = await db.execute(
        select(NutritionFact).filter(NutritionFact.food_name.contains(q))
        )
    
    return result.all()