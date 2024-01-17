import os
import mysql.connector
from dotenv import load_dotenv
from datetime import datetime
from time import sleep

load_dotenv()

db_configs = {
    'host': str(os.environ.get('DB_HOST')),
    'user': str(os.environ.get('DB_USER')),
    'password': str(os.environ.get('DB_PASS')),
    'database': str(os.environ.get('DB_NAME'))
}

print(f"Connecting to {db_configs['database']}:")
print(f"Host: {db_configs['host']}")
print(f"User: {db_configs['user']}")

connection = mysql.connector.connect(
    host=db_configs['host'],
    user=db_configs['user'],
    password=db_configs['password'],
    database=db_configs['database'],
    port=8080
)
cursor = connection.cursor()

def table_exists(table):
    cursor.execute(f"SHOW TABLES LIKE '{table}';")
    return cursor.fetchone() is not None

def create_table():
    if not table_exists("photos"):
        query = """ 
            CREATE TABLE IF NOT EXISTS photos (
                id INT AUTO_INCREMENT PRIMARY KEY,
                account VARCHAR(255),
                world VARCHAR(255),
                location VARCHAR(255),
                file_name VARCHAR(255),
                date DATE,
                image_data LONGBLOB
            );
            """
        cursor.execute(query)
        return False
    else:
        return True

def insert_photo(account, world, location, file_name, date, image_data):
    query = 'INSERT INTO photos (account, world, location, file_name, date, image_data) VALUES (%s, %s, %s, %s, %s, %s)'
    values = (account, world, location, file_name, date, image_data)

    print(values[:5])
    
    cursor.execute(query, values)

def read_image(file_path):
    with open(file_path, 'rb') as file:
        return file.read()

def traverse():
    base_dir = r'C:\Users\dtand\Downloads\Wizard101\Photos'

    for account in os.listdir(base_dir):
        account_path = os.path.join(base_dir, account)

        for world in os.listdir(account_path):
                world_path = os.path.join(account_path, world)

                for location in os.listdir(world_path):
                    location_path = os.path.join(world_path, location)

                    print(location_path)

                    if os.path.isdir(location_path):
                        for file_name in os.listdir(location_path):
                            if file_name.endswith('.jpg'):
                                image_path = os.path.join(location_path, file_name)

                                timestamp = os.path.getctime(image_path)

                                date = datetime.utcfromtimestamp(timestamp).strftime('%Y-%m-%d')

                                image_data = read_image(image_path)
                                insert_photo(account, world, location, file_name, date, image_data)
                    
                    else:
                        image_path = location_path
                        
                        timestamp = os.path.getctime(image_path)

                        date = datetime.utcfromtimestamp(timestamp).strftime('%Y-%m-%d')

                        image_data = read_image(image_path)
                        insert_photo(account, world, 'Unknown', location, date, image_data)

def main():
    exists = create_table()
    
    if not exists:
        print("Creating table...")
        print("Retrieving data...")
        sleep(1)
        traverse()
        connection.commit()
        cursor.close()
        connection.close()
    
    else:
        print("Table already exists.")

if __name__ == '__main__':
    main()