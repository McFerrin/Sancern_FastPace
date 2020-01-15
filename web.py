import os
import psycopg2
from flask import Flask
from flask import request
app = Flask(__name__)

  
# @app.route('/db/test')
# def db_test():
#   put "DB TEST"
#   RESPONSE = ""
#   DATABASE_URL = os.environ['DATABASE_URL']
#   try:
#     RESPONSE = "Loading" + DATABASE_URL
#     conn = psycopg2.connect( DATABASE_URL, sslmode='require')
#     cur = conn.cursor()
#     cur.execute("""SELECT * from boxes""")
#     rows = cur.fetchall()
#     for row in rows:
#       RESPONSE = RESPONSE + " " + row[0]
#   except:
#     RESPONSE = "I am unable to connect to the database"
#   return RESPONSE



@app.route('/<requestpath>')
def index(requestpath):
  path = 'include path=xxx as querystring parameter'
  if 'path' in request.args:
    path = request.args.get('path')
  script = '' \
    '<!DOCTYPE html>' \
    '  <html>' \
    '    <head>' \
    '      <title> Fast Pace </title>' \
    '      <script> ' \
    '       </script>' \
    '' \
    '   </head>' \
    '   <body>' \
    '     <h4>Request for page: <span>' + requestpath + '</span></h4>' \
    '     <h5>path: <span>' + path + '</span></h5>' \
    '   </body>' \
    ' </html>' 
  
  return script