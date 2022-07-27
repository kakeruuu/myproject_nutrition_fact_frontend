from sqlalchemy import select, or_, and_
from sqlalchemy.engine import Result
from sqlalchemy.ext.asyncio import AsyncSession

from api.models.nutritionFact import NutritionFact

# 検索食材名を含むデータを返す
# 該当する食材を一旦表示して、ユーザーに正しい内容を再度選択してもらう
# ユーザー側に見せるのはIDとfood_nameだけでいい？
# 次回上記の機能について考える
async def read_nutrition(q: str, db: AsyncSession):
    q_list = q.split(",")
    
    filters = [NutritionFact.food_name.contains(l) for l in q_list]
    
    result: Result = await db.execute(
        select(NutritionFact).filter(or_(*filters))
        )

    return result.all()