from flask import Flask
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
    '     <h4>Request for page</h4>' \
    '   </body>' \
    ' </html>' 
  
  return script
  

   # '         alert("loaded!");' \
    # '         chrome.runtime.onMessage.addListener(' \
    # '         function(request, sender, sendResponse) {' \
    # '           console.log(sender.tab ?' \
    # '                       "from a content script:" + sender.tab.url :' \
    # '                       "from the extension");' \
    # '           if (request.greeting == "hello")' \
    # '             sendResponse({farewell: "goodbye"});' \
    # '         });' \
    # '         alert("done!");' \
   
