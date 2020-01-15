from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
  
  script = '<script> '\
    'chrome.runtime.onMessage.addListener(' \
    'function(request, sender, sendResponse) {' \
    '  console.log(sender.tab ?' \
    '              "from a content script:" + sender.tab.url :' \
    '              "from the extension");' \
    '  if (request.greeting == "hello")' \
    '    sendResponse({farewell: "goodbye"});' \
    '});' \
    'alert("loaded!");' \
    '</script>' \
    '<h1>fastpace</h1>' 

  return script
