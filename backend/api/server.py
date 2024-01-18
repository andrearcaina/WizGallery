from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

CORS(app)

db_configs = {
    'host': str(os.environ.get('DB_HOST')),
    'user': str(os.environ.get('DB_USER')),
    'password': str(os.environ.get('DB_PASS')),
    'database': str(os.environ.get('DB_NAME'))
}

connection = mysql.connector.connect(
    host=db_configs['host'],
    user=db_configs['user'],
    password=db_configs['password'],
    database=db_configs['database'],
    port=8080
)

cursor = connection.cursor()

@app.route('/api/data', methods=['GET'])
def index():
    example_data = {'data': 'Hello World!'}
    return jsonify(example_data)

@app.route('/api/search', methods=['GET'])
def search():
    form = request.args.get('location')

    print(form)

    query = f"SELECT id, account, world, file_name FROM photos WHERE location = '{form}';"

    cursor.execute(query)

    output = cursor.fetchall()

    return jsonify(output)

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