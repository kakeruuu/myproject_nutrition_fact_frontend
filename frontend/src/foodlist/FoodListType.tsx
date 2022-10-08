// 表現したいオブジェクト → {[{}]}
export type foodLists = {
    [k: string]: Array<foodObject>
  }

// export type foodObject = {
//     [k: string]: string
// }
// FoodListsの値がすべてstringで送られてきているので以下の形になっている。
// しかし、Badkend側のレスポンスの値を変えれば以下のようなデータ型にしなくてよい
export type foodObject = {
    // typeはオブジェクトのキーバリューの形式を指定してるだけではないの？
    [k: string]: string,
    id: string,
    food_name: string,
    disposal_rate: string,
    energy_KJ: string,
    energy_Kcal: string,
    moisture: string,
    protein_by_amino_acid_composition: string,
    protein: string,
    fatty_acid_tria_silglycerol_equivalent: string,
    cholesterol: string,
    lipid: string,
    available_carbohydrates_single_sugar: string,
    available_carbohydrates_mass_meters: string,
    available_carbohydrates_by_the_dispatch_method: string,
    total_amount_of_dietary_fiber: string,
    sugar_alcohol: string,
    carbohydrate: string,
    organic_acid: string,
    ash: string,
    sodium: string,
    potassium: string,
    calcium: string,
    magnesium: string,
    rin: string,
    iron: string,
    zinc: string,
    copper: string,
    manganese: string,
}

