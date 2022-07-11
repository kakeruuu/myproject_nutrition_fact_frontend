from sqlalchemy import Column, Integer, String, Float, DateTime

from setting import engine
from setting import Base

class NutritionFact(Base):
    __tablename__ = "nutritionFact"
    __table_args__ = {
        "comment": "食品成分表情報のマスターテーブル"
    }

    id = Column("id", Integer, primary_key=True, autoincrement=True)
    food_name = Column("food_name", String(200))
    disposal_rate = Column("age", Integer)
    email = Column("email", String(200))
    
    # TODO:食品成分表の数値であってほしいデータのデータ型がテキストになっているのを修正
    # to_sqlの段階でテキスト化？そもそもSQLAlchemyは使わない方がいい？
    # MySQLには問題はなくて、そもそもCSVのデータにテキストと数値の混ざった列があるのが問題
    # 混じっていてもいい？混在しているとモデルの作成時に面倒になる？
    # 原因：Tr(微量,トレース)というデータが含まれているため
    # 今回はTrのものは０として表記して注釈を入れることにする。
    # ↑Trを全て0にしてもデータ型オブジェクトのままだった。
    # ↑-が含まれていたから？

    # 以下のobjectには混在してる可能性あり(df)
    # id                                                 int64
    # food_name                                         object
    # disposal_rate                                      int64
    # energy(KJ)                                         int64
    # energy(Kcal)                                       int64
    # moisture                                          object
    # protein_by_amino_acid_composition                 object
    # protein                                           object
    # fatty_acid_tria_silglycerol_equivalent            object
    # cholesterol                                       object
    # lipid                                             object
    # available_carbohydrates(single_sugar)             object
    # available_carbohydrates_(mass_meters)             object
    # available_carbohydrates_by_the_dispatch_method    object
    # total_amount_of_dietary_fiber                     object
    # sugar_alcohol                                     object
    # carbohydrate                                      object
    # organic_acid                                      object
    # ash                                               object
    # sodium                                            object
    # potassium                                         object
    # calcium                                           object
    # magnesium                                         object
    # rin                                               object
    # iron                                              object
    # zinc                                              object
    # copper                                            object
    # manganese                                         object
    
    # Tr変換後↓
    # id                                                  int64
    # food_name                                          object
    # disposal_rate                                       int64
    # energy(KJ)                                          int64
    # energy(Kcal)                                        int64
    # moisture                                          float64
    # protein_by_amino_acid_composition                  object
    # protein                                            object
    # fatty_acid_tria_silglycerol_equivalent             object
    # cholesterol                                        object
    # lipid                                              object
    # available_carbohydrates(single_sugar)              object
    # available_carbohydrates_(mass_meters)              object
    # available_carbohydrates_by_the_dispatch_method     object
    # total_amount_of_dietary_fiber                      object
    # sugar_alcohol                                      object
    # carbohydrate                                      float64
    # organic_acid                                       object
    # ash                                               float64
    # sodium                                             object
    # potassium                                          object
    # calcium                                            object
    # magnesium                                          object
    # rin                                                object
    # iron                                               object
    # zinc                                               object
    # copper                                             object
    # manganese                                          object

    # そもそもモデルって何のために作るんだっけ？
    # modelはDBとやり取りすための場所
    
if __name__=="__main__":
    Base.metadata.create_all(bind=engine)
