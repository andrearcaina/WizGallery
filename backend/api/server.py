from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import mysql.connector
from dotenv import load_dotenv
import base64
import os
import time

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

CORS(app)

host = str(os.environ.get('DB_HOST'))
port = 8080

if os.environ.get('DOCKER_ENV') == 'True':
    host = 'database'
    port = 3306

db_configs = {
    'host': host,
    'user': str(os.environ.get('DB_USER')),
    'password': str(os.environ.get('DB_PASS')),
    'database': str(os.environ.get('DB_NAME')),
    'port': int(port)
}

print(f"db port: {port}")

def establish_connection():
    while True:
        try:
            connection = mysql.connector.connect(
                host=db_configs['host'],
                user=db_configs['user'],
                password=db_configs['password'],
                database=db_configs['database'],
                port=db_configs['port']
            )
            return connection
        
        except mysql.connector.Error as err:
            print(f"Error: {err}")
            print("Retrying database connection in 5 seconds...")
            time.sleep(5)

connection = establish_connection()
cursor = connection.cursor()

@app.route('/api/data', methods=['GET'])
def index():
    example_data = {'data': 'Hello World!'}
    return jsonify(example_data)

@app.route('/api/search', methods=['GET'])
def search():
    form = request.args.get('location')

    info_query = f"SELECT id, account, world, file_name, date FROM photos WHERE location = '{form}';"
    cursor.execute(info_query)

    info = cursor.fetchall()

    img_query = f"SELECT image_data FROM photos WHERE location = '{form}';"
    cursor.execute(img_query)

    imgs = cursor.fetchall()

    # testing if the images are being retrieved and if they're different
    for i in imgs:
        for j in i:
            print(len(j))

    if info: # return the images in jpg format
        img_data = []
        for i in imgs:
            for j in i:
                img_data.append(base64.b64encode(j).decode('utf-8'))
    
        return jsonify({'info': info, 'img_data': img_data})

@app.route('/api/locations', methods=['GET'])
def locations():
    world = request.args.get('world')
    
    query = f"SELECT DISTINCT location FROM photos WHERE world = '{world}';"
    cursor.execute(query)

    output = cursor.fetchall()

    return jsonify(output)

@app.route('/api/worlds', methods=['GET'])
def worlds():
    query = 'SELECT DISTINCT world FROM photos;'
    cursor.execute(query)

    output = cursor.fetchall()

    return jsonify(output)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)