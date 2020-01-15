from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/')
def index():
 
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
    '     <h4>Request for page<span>' + request.path + '</span></h4>' \
    '   </body>' \
    ' </html>' 
  
  return script
  
