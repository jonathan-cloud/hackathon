import json
from flask import Flask
from geopy.distance import great_circle
from data.utils import db_connection


app = Flask(__name__)


# @app.route('/get_recycling_facility/<string:types>')
def get_recycling_facility(req):
    d = json.loads(req)
    # print(d)
    update_history(d)
    return get_air_distance(d)


def get_air_distance(lan, lon, types):
    db_config = json.load(open('../db_config.json', 'r'))
    with db_connection(**db_config) as con:
        cur = con.cursor()
        cur.execute(f'use {dbname}')


def update_history(lan, lon, types):
    pass


#################################################
data= {
  "lan": "root",
  "lon": "localhost",
  "types": "paper, dress"}

st = json.dumps(data)
get_recycling_facility(st)
