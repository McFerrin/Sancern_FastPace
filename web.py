from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/<requestpath>')
def index(requestpath):
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