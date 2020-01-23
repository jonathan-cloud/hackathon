#pip install mysqlclient

import numpy as np
import pandas as pd
import mysql.connector
import json
from data.utils import db_connection
from sqlalchemy import create_engine
import MySQLdb

num = 500

lat = np.random.uniform(32.0496, 32.0959, num)
lon = np.random.uniform(34.7740, 34.7988, num)

for i in range(num):
    if i % 5 ==0:
        lat[i] = lat[i-1]
        lon[i] = lon[i-1]
type = np.random.randint(1, 6, num)

df = pd.DataFrame(data=[lat,lon,type]).T
df.columns = ['lat', 'lon', 'type']
df['type'] = df['type'].astype(int)
df=df[~df.duplicated()].reset_index()
df=df.drop('index', axis=1)
df.to_csv('history.csv', index=False)
df.head()

def update_database(df):
    db_config = json.load(open('../db_config.json', 'r'))
    dbname = db_config['db_name']

    engine = create_engine('mysql+mysqldb://[root]:["KKkm73iaC2cnH3c#oMG$KD^JzA*f"]@[localhost]/[recycling]', echo=False)
    df.to_sql(name='history', con=engine, index=False)

    # with db_connection(**db_config['user_conf']) as con:
    #     cur = con.cursor()
    #     cur.execute(f'use {dbname}')
    #
    #     df.to_sql('history', con)


update_database(df)


