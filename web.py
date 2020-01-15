from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/<requestpath>')
def index(requestpath):
 
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
    '     <h4>Request for page<span>' + requestpath + '</span></h4>' \
    '   </body>' \
    ' </html>' 
  
  return script
  
