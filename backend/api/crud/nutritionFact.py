from api.setting import session
from api.models.nutritionFact import NutritionFact


def read_nutrition():
    result = NutritionFact.query.limit(10).all()
    # ↑と同義 result = session.query(NutritionFact).limit(10).all()
    r_list = [row.food_name for row in result]
        
    session.commit()
    
    return r_list