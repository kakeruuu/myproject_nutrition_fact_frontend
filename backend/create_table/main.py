import os

import pandas as pd
from sqlalchemy import create_engine

def main():
    engine = create_engine("mysql://root:M4e80Xr1jQcdBnPt@db:3306/myproject_nutrition_fact?charset=utf8mb4")
    tbl_name = "nutrition_facts"
    # TODO:データベース上の日本語が文字化けしているので直す
    db_csv_path = os.getcwd() + "/csv/db_data.csv"
    df = pd.read_csv(db_csv_path, encoding="cp932")
    
    df.to_sql(con=engine, name=tbl_name)

if __name__=="__main__":
    main()