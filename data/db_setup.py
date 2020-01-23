import json
import csv
import pandas as pd
import numpy as np

from data.utils import db_connection


CONF_PATH = '../db_config.json'


def create_db():
    db_config = json.load(open(CONF_PATH, 'r'))
    dbname = db_config['db_name']

    with db_connection(**db_config['user_conf']) as con:
        cur = con.cursor()
        cur.execute(f'CREATE DATABASE IF NOT EXISTS {dbname}')
        cur.execute(f'use {dbname}')
        cur.execute(f'''CREATE TABLE IF NOT EXISTS types (
                        id int PRIMARY KEY AUTO_INCREMENT,
                        category varchar(255)
        );''')
        cur.execute(f'''CREATE TABLE IF NOT EXISTS locations (
                        address varchar(255) PRIMARY KEY,
                        lon float,
                        lat float
        );''')
        cur.execute(f'''CREATE TABLE IF NOT EXISTS types_to_locations (
                        id int AUTO_INCREMENT PRIMARY KEY, 
                        location_address varchar(255),
                        type_id int,
                        
                        FOREIGN KEY (location_address) REFERENCES locations(address),
                        FOREIGN KEY (type_id) REFERENCES types(id)
        );''')

        cur.execute(f'''CREATE TABLE IF NOT EXISTS history (
                        id int AUTO_INCREMENT PRIMARY KEY,
                        lon float,
                        lat float,
                        type_id int,

                        FOREIGN KEY (type_id) REFERENCES types(id)
        );''')


def insert(file, his_data):
    xl = pd.ExcelFile(file)
    df1 = xl.parse('data')
    db_config = json.load(open(CONF_PATH, 'r'))
    dbname = db_config['db_name']
    street = set(df1.address)
    types = set(df1.type)

    with db_connection(**db_config['user_conf']) as con:
        cur = con .cursor()
        cur.execute(f"USE {dbname}")
        # locations table
        for record in street:
            lan, lon = np.random.uniform(low=32, high=35, size=2)
            insert_query = """INSERT IGNORE INTO locations (address, lon, lat) VALUES (%s, %s, %s)"""
            cur.execute(insert_query, (record, lan, lon))

        # types table
        for record in types:
            insert_query = """INSERT INTO types (category) VALUES (%s)"""
            cur.execute(insert_query, (record,))

        # types_to_locations table
        cur.execute("SELECT * FROM types")
        result = cur.fetchall()
        dct = {k: v for v, k in result}

        for index, row in df1.iterrows():
            insert_query = """INSERT INTO types_to_locations (location_address, type_id) VALUES (%s, %s)"""
            cur.execute(insert_query, (row[1], dct[row[0]]))

        # history table
        with open(his_data, 'r') as f:
            f.readline()
            reader = csv.reader(f, delimiter=',')
            for lat, lon, c_type in reader:
                insert_query = """INSERT INTO history (lon, lat, type_id) VALUES (%s, %s, %s)"""
                cur.execute(insert_query, (lat, lon, c_type))
