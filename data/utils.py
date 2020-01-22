import contextlib

import mysql.connector as mysql


@contextlib.contextmanager
def db_connection(user, host, passwd, port=3306, db=''):
    conn = mysql.connect(user=user, host=host, passwd=passwd, port=port, db=db)

    try:
        yield conn
    except Exception:
        conn.rollback()
        raise
    else:
        conn.commit()
    finally:
        conn.close()

