from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import psycopg2
from dotenv import load_dotenv
import base64, os, time

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

CORS(app)

def establish_connection():
    while True:
        try:
            connection = psycopg2.connect(
                user=str(os.environ.get('SUPABASE_USER')),
                password=str(os.environ.get('SUPABASE_PASS')),
                host=str(os.environ.get('SUPABASE_HOST')),
                port=str(os.environ.get('SUPABASE_PORT')) or 5432,
                dbname=str(os.environ.get('SUPABASE_DB'))
            )
            return connection
        
        except psycopg2.Error as err:
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

    info_query = f"SELECT date FROM wiz_photos WHERE location = %s;"
    cursor.execute(info_query, (form,))

    date = cursor.fetchall()

    img_query = f"SELECT image_data FROM wiz_photos WHERE location = %s;"
    cursor.execute(img_query, (form,))

    imgs = cursor.fetchall()

    return jsonify({'dates': date, 'img_data': encode(imgs)})

@app.route('/api/locations', methods=['GET'])
def locations():
    world = request.args.get('world')
    
    query = f"SELECT DISTINCT location FROM wiz_photos WHERE world = %s;"
    cursor.execute(query, (world,))

    output = cursor.fetchall()

    return jsonify(output)

@app.route('/api/worlds', methods=['GET'])
def worlds():
    query = 'SELECT DISTINCT world FROM wiz_photos;'
    cursor.execute(query)

    output = cursor.fetchall()

    return jsonify(output)

@app.route('/api/journey', methods=['GET'])
def journey():
    page = request.args.get('page', 1, type=int)

    offset = (page - 1) * 10

    cursor.execute("""
        SELECT image_data FROM wiz_photos 
        ORDER BY date ASC
        LIMIT 10 OFFSET %s;
    """, (offset,))
    
    imgs = cursor.fetchall()

    cursor.execute("""
        SELECT date FROM wiz_photos
        ORDER BY date ASC
        LIMIT 10 OFFSET %s;
    """, (offset,))
    dates = cursor.fetchall()

    return jsonify({'dates': dates, 'img_data': encode(imgs)})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)