from setting import session
from models.nutritionFact import NutritionFact

user = User()
user.name = "次郎"
session.add(user)
session.commit()

print(session.query(User).all())

session.close()