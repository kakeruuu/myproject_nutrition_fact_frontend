from sqlalchemy import select
from sqlalchemy.engine import Result
from sqlalchemy.ext.asyncio import AsyncSession

from api.models.nutritionFact import NutritionFact

# 次回コンマで分けた検索値から値を取得するSqlを考える
async def read_nutrition(q: str, db: AsyncSession):
    q_list = q.split(",")
    print(q_list)
    # result: Result = await db.execute(
    #     select(NutritionFact).filter(NutritionFact.food_name.contains(q))
    #     )
    result: Result = await db.execute(
        select(NutritionFact).filter(NutritionFact.food_name.in_(("砂糖","にんじん")))
        )
    return result.all()