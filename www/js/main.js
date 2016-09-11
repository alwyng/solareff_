function load()
{
	recalc();

	//set to true for debug mode
	localStorage.isDebug = "false";
	
	document.addEventListener('deviceready', function () {
		// cordova.plugins.email is now available 
	}, false);
	//alert("deviceready fired");
	
	//var callback = function(result) { alert(result) };
	//cordova.plugins.email.isAvailable(callback);

}

function setCurrentApp(txt)
{
	localStorage.CurrentApp = txt;
}

function mail()
{
	alert("mail start");
	cordova.plugins.email.isAvailable(
    function (isAvailable) {
        console.log('Service is not available.');
		}
	);
	alert("mail end");
	
	
}

function mail2()
{
	alert("start");
	
	
	
	alert("end");
}

var clientId = '491366748073-bs990o1vonvc7a0pskiqg9fgkrh4gtna.apps.googleusercontent.com';
var apiKey = 'u1n8vKmX-TySZBovzRTiWFOX';
var scopes =
			  'https://www.googleapis.com/auth/gmail.readonly '+
			  'https://www.googleapis.com/auth/gmail.send';
				  
function handleClientLoad() 
{
	gapi.client.setApiKey(apiKey);
	window.setTimeout(checkAuth, 1);
}

function checkAuth() 
{
	gapi.auth.authorize({
	  client_id: clientId,
	  scope: scopes,
	  immediate: true
	}, handleAuthResult);
}

function handleAuthClick() {
	gapi.auth.authorize({
	  client_id: clientId,
	  scope: scopes,
	  immediate: false
	}, handleAuthResult);
	return false;
}

function handleAuthResult(authResult) {
	alert('handleAuthResult');
	if(authResult && !authResult.error) {
	  loadGmailApi();
		alert('success');
	} else {
		alert('fail');
	}
}

function loadGmailApi() {
	gapi.client.load('gmail', 'v1', displayInbox);
}


function sendEmail()
{
	alert('start');
  sendMessage(
    {
      'To': 'alwyn.grobler@gmail.com',
      'Subject': 'test'
    },
    'Message body',
    composeTidy
  );

  return false;
}

function sendMessage(headers_obj, message, callback)
{
  var email = '';

  for(var header in headers_obj)
    email += header += ": "+headers_obj[header]+"\r\n";

  email += "\r\n" + message;
  alert('ttt');
  var sendRequest = gapi.client.gmail.users.messages.send({
    'userId': '491366748073-bs990o1vonvc7a0pskiqg9fgkrh4gtna.apps.googleusercontent.com',
    'resource': {
      'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
    }
  });
  
  alert('done');

  return sendRequest.execute(callback);
}

function composeTidy()
{}