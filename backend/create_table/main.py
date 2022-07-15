import csv
import os

import pandas as pd
from sqlalchemy import create_engine


def create_nutrition_fact_db():
    
    engine = create_engine("mysql://root:" 
                            + os.environ["DB_PASSWORD"] 
                            + "@db:3306/myproject_nutrition_fact?charset=utf8")

    tbl_name = "nutrition_facts"    
    db_csv_path = os.getcwd() + "/csv/db_data.csv"
    df = pd.read_csv(db_csv_path, encoding="utf-8_sig")
    
    # dtypesでカラムのseriesを取得する
    series = df.dtypes

    # pydanticに対応した形に変換する
    series[series == "int64"] = "int"
    series[series == "object"] = "str"
    series[series == "float64"] = "float"

    # 「：」でカラム名とデータ型を結合する
    with open("text/sample.csv", "w") as f:
        list_d = [[":".join([i, v])] for i,v in series.items()]
        writer = csv.writer(f)
        writer.writerows(list_d)
        
    df.to_sql(con=engine, name=tbl_name)

if __name__=="__main__":
    create_nutrition_fact_db()