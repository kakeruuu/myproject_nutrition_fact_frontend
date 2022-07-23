from typing import Optional

from pydantic import BaseModel, Field


class NutritionFact(BaseModel):
    id: int
    food_name: str
    disposal_rate: int
    energy_KJ: int
    energy_Kcal: int
    moisture: float
    protein_by_amino_acid_composition: float
    protein: float
    fatty_acid_tria_silglycerol_equivalent: float
    cholesterol: int
    lipid: float
    available_carbohydrates_single_sugar: float
    available_carbohydrates_mass_meters: float
    available_carbohydrates_by_the_dispatch_method: float
    total_amount_of_dietary_fiber: float
    sugar_alcohol: float
    carbohydrate: float
    organic_acid: float
    ash: float
    sodium: int
    potassium: int
    calcium: int
    magnesium: int
    rin: int
    iron: float
    zinc: float
    copper: float
    manganese: float

    class Config:
        orm_mode = True