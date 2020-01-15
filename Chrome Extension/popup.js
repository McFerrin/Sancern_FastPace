
var pageHandlers = 
[
{ 	Name: "Example",
	Match:   [ { type: 'title' , text: '- Kigo Checkout ' } ] ,
	Buttons:  [ { 	text:													    'Request Quote for Solution 17026' , 
					script:														"SETBYID('apikey', '4699b5d1-86ce-4d2d-8e43-51391393a60d');" +
																				"SETBYNAME('Currency','GBP');" +
																				"SETBYID('propertyid', '292395');" +
																				"SETBYNAME('checkin', '2019-03-17');" +
																				"SETBYNAME('checkout', '2019-03-21');" +
																				"PRESSBYTAG('button');"	},
					
				{ 	text: 														'Try another Check-in date' ,
					script:														"var m = '0' + Math.ceil(Math.random()*11);" +
																				"var d =  Math.ceil(Math.random()*24);" +
																				"var din = '0' + d;" +
																				"var dout = '0' + (d+3);" +
																				"SETBYNAME('checkin', '2019-' + m.substr(m.length-2) + '-' + din.substr(din.length-2) ); "  +
																				"SETBYNAME('checkout', '2019-' + m.substr(m.length-2) + '-' + dout.substr(dout.length-2) ); "  +
																				"PRESSBYTAG('button');" 
				},
				{ 	text: 														'Go to Checkout', 
					script:														"window.location = document.getElementsByTagName('a')[0].href;" }]
},
{ 	Name: "New Reservation",
	Match: [ { type: 'url' , text: '/reservations/new' } , 
			 { type: 'elementName', text: 'brand_id' } ],
	Buttons: [ { 	text:														'Populate', 
					script: 													"" +
																				"SETBYNAME('brand_id','2');" +
																				"GETBYCLASS('field-brand',0).click();" +
																				"" } 
			]
},
{ 	Name: "New Reservation Payment",
	Match: [ { type: 'url' , text: '/reservations/new' } , 
			 { type: 'elementName', text: 'customer_name' } ],
	Buttons: [ { 	text:														'Populate', 
					script: 													"SETBYNAME('customer_name','Test Customer');" +
							 													"SETBYNAME('customer_email','mike@directsoftware.com');" +
																				"SETBYNAME('customer_telephone','2143005551');" +
																				"" } 
			]
},
{ 	Name: "Checkout Guest Credit Card Page",
	Match: [ { type: 'url' , text: '/booking/checkout/creditcard/' } , 
			 { type: 'elementName', text: 'CreditCard.CardHolderName' } ],
	Buttons: [ { 	text: 														'Populate Credit Card Details and Submit',
					script: 													"SETBYCLASS('kp-form-control',0,'Mike McFerrin');" +
																				"SETBYCLASS('kp-form-control',1,'123 Main Street');" +
																				"SETBYCLASS('kp-form-control',2,'Addison');" +
																				"SETBYCLASS('kp-form-control',3,'Texas');" +
																				"SETBYCLASS('kp-form-control',4,'75002');" +
																				"SETBYCLASS('kp-form-control',5,'US');" +
																				"SETBYCLASS('kp-form-control',6,'4711100000000000');" +
																				"SETBYCLASS('kp-form-control',7,'01');" +
																				"SETBYCLASS('kp-form-control',8,'2019');" +
																				"SETBYCLASS('kp-form-control',9,'234');" +
																				"CHECK('chk_agreement');" +
																				"PRESS('btnMakePayment');" 
		
		} 
		]
	},
	{ 	Name: "YouTube",
		Match: [ { type: 'url' , text: 'www.youtube.com/' } , 
				 { type: 'ById', text: 'movie_player' } ],
		Buttons: [ { 	text: 														'Simplify! Remove Junk',
						script: 													"document.getElementById('secondary').style['display'] = 'none';" +
																					"STYLEBYCLASS('video-stream', 'width' , window.outerWidth + 'px');" +
																					"STYLEBYCLASS('video-stream', 'height' , (window.innerHeight - 200) + 'px');" +
																					"REMOVEBYID('comments'); var response = 'Simplified!'; response = response; " 
				},
	{ 							text: 				'Get all the Suggested Video Info',
								script: 			"var elems = document.getElementsByTagName('ytd-thumbnail'); " +
													"var log = '<ol>'; " +
													"for( var i = 0 ; i < elems.length ; i++ )" +
													"{ var url = elems[ i ].children[0].href; " +
													"  var title = elems[ i ].nextElementSibling.children[0].children[0].children[0].nextElementSibling.title;" +
													" log +=  '<li>' + title + '<a target=\"_blank\" href=\"' + url + '\"> ' + url + '</a></li>'; " +
													"}; log = log + '</ol>';"
				} 			
			
			
			]
		}
]; 

var ScriptPrefix = 
"function SETBYID(id,value){	document.getElementById(id).value = value;} " +
"function SETBYNAME(name,value){	document.getElementsByName(name)[0].value = value;} " +
"function PRESS(buttonId){	document.getElementById(buttonId).click();} " +
"function PRESSBYTAG(tag){	document.getElementsByTagName(tag)[0].click();}" +
"function CHECK(checkboxId){	document.getElementById(checkboxId).setAttribute('checked','checked');} " +
"function SETBYCLASS(className,index,value){	document.getElementsByClassName(className)[index].value = value;} " +
"function GETBYCLASS(className,index){	return document.getElementsByClassName(className)[index]; } " +
"";

function SETBYID(id,value){	document.getElementById(id).value = value;}
function SETBYNAME(name,value){	document.getElementsByName(name)[0].value = value;}
function PRESS(buttonId){	document.getElementById(buttonId).click();}
function PRESSBYTAG(tag){	document.getElementsByTagName(tag)[0].click();}
function CHECK(checkboxId){	document.getElementById(checkboxId).setAttribute('checked','checked');}
function SETBYCLASS(className,index,value){	document.getElementsByClassName(className)[index].value = value;}
function GETBYCLASS(className,index){	return document.getElementsByClassName(className)[index];} 


var CurrentTab;

  
chrome.tabs.onUpdated.addListener( function(tabid,changeInfo,tab) { 
	if ( changeInfo.status == 'complete' )
	{	
		console.log('URL Redirect in tab while Chrome Extension window was open');
		if ( tab.url != null && CurrentTab != null && tab.url != CurrentTab.url )
		{
			chrome.runtime.reload();		  
		}
	}
} );


$(document).ready(function(){ 
	//$.get( "http://fast-pace-prod.herokuapp.com", function( data ) { alert( "Data Loaded: " + data ); console.log(data);  });
});

document.addEventListener('DOMContentLoaded', checkForPageHandlers , false);

 function checkForPageHandlers() {
	 
	//	SetBadge('');

	chrome.tabs.query({active: true,lastFocusedWindow: true}, 
	function(tabs) 
	{
		if ( tabs.length == 0 )
			return;
		
		CurrentTab = tabs[0];		
		
		document.getElementById('TabTitle').value = CurrentTab.title;
		document.getElementById('buttonArea').innerHTML = "";		
		document.getElementById('messageArea').innerHTML = "Loading";
		
		js = ""
		url = "https://fast-pace-prod.herokuapp.com"; 

		chrome.tabs.executeScript(CurrentTab.id, {code: 
				"var xmlHttp = new XMLHttpRequest();" +
				"var tabURL = encodeURI( document.location.href );" +
				"xmlHttp.open( \"GET\", \"" + url + "/\" + tabURL, false ); " +
				"xmlHttp.send( null );" +
				"console.log('Return from public url', xmlHttp.responseText ) ;" +
				"var theElement = document.createElement('div');" +
				"theElement.tagName='CHROME_EXTENSION_RESULT';" +
				"theElement.className = 'CHROME_EXTENSION_RESULT';" +
				"var existingElementCount = document.getElementsByClassName('CHROME_EXTENSION_RESULT').length;" +
				"theElement.style = 'height: 82px; padding:2px 10px; overflow: hidden; box-shadow: -5px 10px 8px rgba(0, 0, 0, 0.833); border:3px solid rgba(255, 255, 255, 0.833); ; border-radius: 7px; background-color:white; position:absolute; z-index:99999; left: 10px; top:' + (existingElementCount * 90) + 'px;';" + 
				"theElement.innerHTML = xmlHttp.responseText;" + 
				"document.getElementsByTagName(\"body\")[0].appendChild(theElement);" +
				"theElement.innerHTML;"


			 }, 
				function(response) 
				{   console.log('Executed call public url', response);
					document.getElementById('messageArea').innerHTML = response;
				});						

		


		for( var i = 0 ; i < pageHandlers.length  ; i++ )
		{
			var matched = false;
			for( var m = 0 ; m < pageHandlers[ i ].Match.length ; m++ )
			{
				if ( pageHandlers[ i ].Match[ m ].type == 'title' || pageHandlers[ i ].Match[ m ].type == 'url' )
				{
					if (( pageHandlers[ i ].Match[ m ].type == 'title' &&  CurrentTab.title.toLowerCase().indexOf( pageHandlers[ i ].Match[ m ].text.toLowerCase() ) >= 0 )
					 || ( pageHandlers[ i ].Match[ m ].type == 'url' &&  CurrentTab.url.toLowerCase().indexOf( pageHandlers[ i ].Match[ m ].text.toLowerCase() ) >= 0 ))
					{
						matched = true;
					}
					else
					{   
						matched = false;
						break;
					}
				}
			}
					
			var isQueryingPage = false;
			if ( matched )
			{
				for( var m = 0 ; m < pageHandlers[ i ].Match.length ; m++ )
				{
					if ( pageHandlers[ i ].Match[ m ].type == 'elementName' )
					{
						isQueryingPage = true;
						chrome.tabs.executeScript(CurrentTab.id, {code: "document.getElementsByName('" + pageHandlers[ i ].Match[ m ].text + "').length > 0 ? " + i + " : -1" }, 
								function(response) 
								{   // returns count of elements that match the name
									if ( response >= 0 )
									{	
										SetupPage( response );
									}
								});						
					}
				}
			}
				
			
			
			if ( matched && !isQueryingPage )
			{
					SetupPage( i );
			}
		}
		
	});
	
		
}


function SetupPage( i )
{	
	// No real use for this Right Now - SetBadge( " ON ");

	document.getElementById('MatchName').value = pageHandlers[ i ].Name;	
					
	var buttonArea = document.getElementById('buttonArea');
			
	for ( var s = 0 ; s < pageHandlers[ i ].Buttons.length ; s++ ) 
	{				
		var btn = document.createElement("BUTTON");
		btn.setAttribute('handlerIndex', i );
		btn.setAttribute('buttonIndex', s );
		btn.innerHTML = pageHandlers[ i ].Buttons[ s ].text;
		btn.onclick = function()
		{
			var buttonIndex = this.getAttribute('buttonIndex');
			var handlerIndex = this.getAttribute('handlerIndex');
			chrome.tabs.executeScript(CurrentTab.id, {code: ScriptPrefix + pageHandlers[ handlerIndex ].Buttons[ buttonIndex ].script}, 
				function(response) 
				{  
				});
		};		
		buttonArea.appendChild(btn);													
	}
}

function SetBadge(text)
{chrome.browserAction.setBadgeText({text:text});
}

function Persistance()
{
	
	//  PERSISTENT Storage - Globally
//  Save data to storage across their browsers...

chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
    //  A data saved callback omg so fancy
});

chrome.storage.sync.get(/* String or Array */["yourBody"], function(items){
    //  items = [ { "yourBody": "myBody" } ]
});

//  LOCAL Storage

// Save data to storage locally, in just this browser...

chrome.storage.local.set({ "phasersTo": "awesome" }, function(){
    //  Data's been saved boys and girls, go on home
});

chrome.storage.local.get(/* String or Array */["phasersTo"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
	
	
	/* OBSERVE storage */
	      chrome.storage.onChanged.addListener(function(changes, namespace) {
        for (key in changes) {
          var storageChange = changes[key];
          console.log('Storage key "%s" in namespace "%s" changed. ' +
                      'Old value was "%s", new value is "%s".',
                      key,
                      namespace,
                      storageChange.oldValue,
                      storageChange.newValue);
        }
      });
      
});


}
