from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import mysql.connector
from dotenv import load_dotenv
from io import BytesIO
import base64, os, time

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

def encode(imgs):
    img_data = []
    
    for i in imgs:
        for j in i:
            img_data.append(base64.b64encode(j).decode('utf-8'))

    return img_data

@app.route('/api/data', methods=['GET'])
def index():
    example_data = {'data': 'Hello World!'}
    return jsonify(example_data)

@app.route('/api/search', methods=['GET'])
def search():
    form = request.args.get('location')

    info_query = f"SELECT id, account, world, file_name, date FROM photos WHERE location = %s;"
    cursor.execute(info_query, (form,))

    info = cursor.fetchall()

    img_query = f"SELECT image_data FROM photos WHERE location = %s;"
    cursor.execute(img_query, (form,))

    imgs = cursor.fetchall()

    # testing if the images are being retrieved and if they're different
    for i in imgs:
        for j in i:
            print(len(j))

    return jsonify({'info': info, 'img_data': encode(imgs)})

@app.route('/api/locations', methods=['GET'])
def locations():
    world = request.args.get('world')
    
    query = f"SELECT DISTINCT location FROM photos WHERE world = %s;"
    cursor.execute(query, (world,))

    output = cursor.fetchall()

    return jsonify(output)

@app.route('/api/worlds', methods=['GET'])
def worlds():
    query = 'SELECT DISTINCT world FROM photos;'
    cursor.execute(query)

    output = cursor.fetchall()

    return jsonify(output)

@app.route('/api/search/<int:image_id>', methods=['GET'])
def get_image(image_id):
    query = f"SELECT image_data FROM photos WHERE id = %s;"

    cursor.execute(query, (image_id,))
    image_data = cursor.fetchone()

    image_bytes = BytesIO(image_data[0])

    return send_file(image_bytes, mimetype='image/jpeg')

@app.route('/api/journey', methods=['GET'])
def journey():
    cursor.execute("""
        SELECT image_data FROM photos 
        ORDER BY date ASC;
    """)
    imgs = cursor.fetchall()

    cursor.execute("""
        SELECT date FROM photos
        ORDER BY date ASC;
    """)
    dates = cursor.fetchall()

    return jsonify({'dates': dates, 'img_data': encode(imgs)})

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)