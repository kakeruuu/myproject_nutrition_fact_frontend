import os

import pandas as pd
from sqlalchemy import create_engine


def main():
    
    engine = create_engine("mysql://root:" 
                            + os.environ["DB_PASSWORD"] 
                            + "@db:3306/myproject_nutrition_fact?charset=utf8")

    tbl_name = "nutrition_facts"    
    db_csv_path = os.getcwd() + "/csv/db_data.csv"
    df = pd.read_csv(db_csv_path, encoding="utf-8_sig")
    
    df.to_sql(con=engine, name=tbl_name)

if __name__=="__main__":
    main()