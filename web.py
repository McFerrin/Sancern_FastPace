from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
  return '<h2>Whats up Mark!!!</h2>'
