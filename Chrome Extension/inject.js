//import { brotliDecompressSync } from "zlib";

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

console.log("inject.js loading");


/*
var scriptName = 'https://code.jquery.com/jquery-3.4.1.slim.min.js';

  
    var script = document.constructor.prototype.createElement.call(document, 'script');
    script.src = scriptName;
    //script.integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=";
    script.crossorigin="anonymous";
    script.charset = "utf-8";
    document.documentElement.appendChild(script);
    script.parentNode.removeChild(script);
*/
  var injected_style = document.createElement('style');
  injected_style.innerHTML = ''
            + '.mikes_console { ' 
            + 'position:fixed; '
            + 'right: 5px;' 
            + 'zoom: 1; '
            + 'cursor:pointer; ' 
            + 'z-index:9999999; '
            + 'border:1px solid #FFFFFFAA; ' 
            + 'margin:0px; ' 
            + 'border-radius:0px 0px 0px 8px; ' 
            + 'opacity: 0; '
            + 'box-shadow:-20px 20px 20px #000000BA; '
           // + 'box-shadow:-8px 12px 8px #000000BB; '
            + 'text-shadow:-2px 2px 5px #FFFFFFE0; ' 
            + 'font-family: Arial; ' 
           // + 'font-size:.8em; ' 
            + 'text-align: center; ' 
            + 'padding:0px; '
            + 'background-color: #201fFFA0; ' 
           // + 'color: white; '
            +  ' } ' 
            + '.mikes_console hr { ' 
            +  'margin:0px; '
            +  'margin-top:0px; '
            +  'border: 2px inset #FFFFFF99; '
            +  'font-color: white; '
            +  'margin-bottom:2px; '
            + '}'
             + '.mikes_console p { ' 
             +  'padding: 4px; '
             +  'margin: 0px; '
             +  'font-size: 8px; '
            + '}'       
            + '.mikes_console div { ' 
            +  'background-color: #201f99D0; ' 
            +  'padding: 10px; '
            +  'margin: 7px; '
            +  'width:190px; '
            +  'font-family: Sans-serif; '
            +  'font-size: 10px; '
            +  'box-shadow: -0px -0px 10px #00000066; '
            +  'box-radius: 0px; '
            + '}'
            + '.mikes_console h4 { ' 
            +  'color: white; '
            + '}'
            + 'body { ' 
            +  'zoom: 1.00; '
            + '}'
  document.documentElement.appendChild( injected_style );

    var injected_panel = document.createElement('div');
    injected_panel.id = "mikes_console";
    injected_panel.className = "mikes_console";
    injected_panel.innerHTML = '<p>MIKES CONSOLE</p><hr/><div><h4 id="mikes_console_status">' 
    + '</h4>'
    + '<div>'
    + '<input type="text" id="mikes_console_search_param" />'
    + '<button onclick=" var xmlHttp = new XMLHttpRequest(); xmlHttp.open( \'GET\',\'https://fierce-wave.herokuapp.com/\' + (document.getElementById(\'mikes_console_search_param\').value) , false ); xmlHttp.send( null ); document.getElementById(\'mikes_console_remote\').innerHTML = xmlHttp.responseText ;">Load</button>'
    + '</div>'
        +'<div><h4 id="mikes_console_messages"></h4></div></div>'
      +'<div id="mikes_console_remote"></div>' ;
    document.documentElement.appendChild( injected_panel );
    
    var start_position = -50;
    var position = start_position;
    var fade_in = 0;
    var time_wait_before_load = 500;
    var time_refresh_animations = 15;
    var bounce_interval;
    var element = document.getElementById('mikes_console');
    var partial = document.getElementById('mikes_console_remote');

    window.setTimeout(function() {

      bounce_interval = window.setInterval(function()
        {
          position = ( position < 0 ? position - (((position/start_position)*(start_position/10)) + .04): 0 );
          element.style.right = position + 'px';         
          if ( fade_in < 1 )
          { element.style.opacity = fade_in += .02;;
          }
          if ( fade_in >= 1 && position > 1)
          { window.clearInterval(bounce_interval);
          }
        }, time_refresh_animations);
        
        partial.innerHTML = getHtml("https://fierce-wave.herokuapp.com/widgets/3");
        //element.innerHTML = getHtml("https://fierce-wave.herokuapp.com/widgets/1");

      }, time_wait_before_load);


        window.addEventListener("message", function(event) {
          // We only accept messages from ourselves
          console.log("inject.js window Message",'cannot access event data');
          if (event.source != window)
              return;
      
              alert(event.data.type);
          if (event.data.type && (event.data.type == "FROM_PAGE")) {
            console.log("inject.js window Message", 'received message' , JSON.stringify(event.source), JSON.stringify(event.data), JSON.stringify(event));
          }
      });
   
      


function addPath(url){
  var tabURL = encodeURIComponent( document.location.href.replace('http://','').replace('https://','') );
  var url = ( url.indexOf('?') >= 0 ? '&' : '?' ) + "path=" + tabURL;
  return url;
}
function getHtml(url){
		 var xmlHttp = new XMLHttpRequest();
				xmlHttp.open( 'GET',url , false );
				xmlHttp.send( null );
        return xmlHttp.responseText ;
}

 

  console.log("inject.js loaded");



