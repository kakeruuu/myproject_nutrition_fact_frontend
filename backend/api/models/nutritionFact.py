from sqlalchemy import Column, Integer, String, Float, DateTime

from api.setting import async_engine
from api.setting import Base

class NutritionFact(Base):
    __tablename__ = "nutrition_facts"
    __table_args__ = {
        "comment": "食品成分表情報のマスターテーブル"
    }

    id = Column("id", Integer, primary_key=True, autoincrement=True)
    food_name = Column("food_name", String(200))
    disposal_rate = Column("disposal_rate", Integer)
    energy_KJ = Column("energy_KJ", Integer)
    energy_Kcal = Column("energy_Kcal", Integer)
    moisture = Column("moisture", Float)
    protein_by_amino_acid_composition = Column("protein_by_amino_acid_composition", Float)
    protein = Column("protein", Float)
    fatty_acid_tria_silglycerol_equivalent = Column("fatty_acid_tria_silglycerol_equivalent", Float)
    cholesterol = Column("cholesterol", Integer)
    lipid = Column("lipid", Float)
    available_carbohydrates_single_sugar = Column("available_carbohydrates_single_sugar", Float)
    available_carbohydrates_mass_meters = Column("available_carbohydrates_mass_meters", Float)
    available_carbohydrates_by_the_dispatch_method = Column("available_carbohydrates_by_the_dispatch_method", Float)
    total_amount_of_dietary_fiber = Column("total_amount_of_dietary_fiber", Float)
    sugar_alcohol = Column("sugar_alcohol", Float)
    carbohydrate = Column("carbohydrate", Float)
    organic_acid = Column("organic_acid", Float)
    ash = Column("ash", Float)
    sodium = Column("sodium", Integer)
    potassium = Column("potassium", Integer)
    calcium = Column("calcium", Integer)
    magnesium = Column("magnesium", Integer)
    rin = Column("rin", Integer)
    iron = Column("iron", Float)
    zinc = Column("zinc", Float)
    copper = Column("copper", Float)
    manganese = Column("manganese", Float)

    
    # TODO:食品成分表の数値であってほしいデータのデータ型がテキストになっているのを修正
    # Tr - † の削除で修正完了
    # doubleは小数
