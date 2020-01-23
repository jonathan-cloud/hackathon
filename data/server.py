import json
from flask import Flask, render_template
from geopy.distance import great_circle
from data.utils import db_connection
import data.db_setup as db

app = Flask(__name__, static_folder='../ui/public')

DB_CONF = json.load(open('../db_config.json', 'r'))
DBNAME = DB_CONF['db_name']


@app.route('/')
def index():
    return app.send_static_file('index.html')
    # return render_template('index.html')


@app.route('/get_recycling_facility/<string:types>')
def get_recycling_facility(req):
    d = json.loads(req)
    update_history(d)
    ret = json.dumps(get_air_distance(d))
    return ret


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


def main():
    with db_connection(**DB_CONF['user_conf']) as con:
        cur = con.cursor()
        cur.execute(f"""show databases;""")
        result = cur.fetchall()
        if DBNAME in sum(result, tuple()):
            db.create_db()
            db.insert('hackathon_data.xlsx', 'history.csv')

    app.run(debug=True)


if __name__ == '__main__':
    main()
