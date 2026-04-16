from flask import Flask, jsonify, send_from_directory
import os

frontend_folder = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'frontend', 'public'))
app = Flask(__name__, static_folder=frontend_folder, static_url_path='')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/hello')
def hello():
    return jsonify(message='Hello from Python backend! [System Status: Secure]')

if __name__ == '__main__':
    app.run(port=5000, debug=True)
