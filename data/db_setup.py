import json

from data.utils import db_connection

db_config = json.load(open('../db_config.json', 'r'))
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
                    lan float,
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
                    lan float,
                    lat float
                    type_id int,
                    
                    FOREIGN KEY (type_id) REFERENCES types(id)
    );''')
