from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

CORS(app)

@app.route('/api/data')
def index():
    example_data = {'data': 'Hello World!'}
    return jsonify(example_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)