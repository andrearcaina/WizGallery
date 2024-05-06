import mysql.connector
from dotenv import load_dotenv
import psycopg2
import os

load_dotenv()

db_configs = {
    'host': str(os.environ.get('DB_HOST')),
    'user': str(os.environ.get('DB_USER')),
    'password': str(os.environ.get('DB_PASS')),
    'database': str(os.environ.get('DB_NAME')),
    'port': 8080
}

mysql_conn = mysql.connector.connect(
    host=db_configs['host'],
    user=db_configs['user'],
    password=db_configs['password'],
    database=db_configs['database'],
    port=db_configs['port']
)

supabase_conn = psycopg2.connect(
    user='postgres.mddimapzicgfdtnkcpqz',
    password=str(os.environ.get('SUPABASE_PASS')),
    host='aws-0-ca-central-1.pooler.supabase.com',
    port='5432',
    dbname='postgres'
)

mysql_cursor = mysql_conn.cursor()
supabase_cursor = supabase_conn.cursor()

create_table_query = """
CREATE TABLE IF NOT EXISTS wiz_photos (
    id SERIAL PRIMARY KEY,
    account VARCHAR(255),
    world VARCHAR(255),
    location VARCHAR(255),
    file_name VARCHAR(255),
    date DATE,
    image_data BYTEA
);
"""

supabase_cursor.execute(create_table_query)

mysql_cursor.execute("SELECT account, world, location, file_name, date, image_data FROM photos")
data = mysql_cursor.fetchall()

for row in data:
    supabase_cursor.execute("INSERT INTO wiz_photos (account, world, location, file_name, date, image_data) VALUES (%s, %s, %s, %s, %s, %s)", row)

supabase_conn.commit()

mysql_cursor.close()
supabase_cursor.close()
mysql_conn.close()
supabase_conn.close()