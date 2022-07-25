from api.setting import session
from api.models.nutritionFact import NutritionFact


def read_nutrition(q: str):
    result = NutritionFact.query.filter(NutritionFact.food_name.contains(q))
    # ↑と同義 result = session.query(NutritionFact)
    r_list = [row.food_name for row in result]

    session.commit()

    return r_list