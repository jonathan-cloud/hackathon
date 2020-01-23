import json
from flask import Flask
from geopy.distance import great_circle
from data.utils import db_connection


app = Flask(__name__)

DB_CONF = json.load(open('../db_config.json', 'r'))
DBNAME = DB_CONF['db_name']


# @app.route('/get_recycling_facility/<string:types>')
def get_recycling_facility(req):
    d = json.loads(req)
    update_history(d)
    return get_air_distance(d)


def get_air_distance(data):
    db_config = json.load(open('../db_config.json', 'r'))
    with db_connection(**db_config) as con:
        cur = con.cursor()
        cur.execute(f'use {DBNAME}')







def update_history(data):
    with db_connection(**DB_CONF['user_conf']) as con:
        cur = con.cursor()
        # get types
        cur.execute(f"USE {DBNAME}")
        cur.execute("SELECT * FROM types")
        result = cur.fetchall()
        dct = {k: v for v, k in result}
        for record in data['types']:
            insert_query = """INSERT INTO history (lan, lat, type_id) VALUES (%s, %s, %s)"""
            cur.execute(insert_query, (data['lan'], data['lon'], dct[record]))




#################################################
jdata= {
  "lan": 77.32,
  "lon": 89.36,
  "types": "paper, dress"}

st = json.dumps(jdata)
get_recycling_facility(st)

