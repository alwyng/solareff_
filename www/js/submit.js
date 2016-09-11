function load()
{
	recalc();
}

function submit()
{
	alert("Submit");
}

function email()
{
	try {
		cordova.plugins.email.open({
			to:      'alwyn.grobler@gmail.com',
			cc:      [],
			bcc:     [],
			subject: 'Solareff App Result',
			body:    'Test'
		});
	}
	catch(err) {
		alert(err.message);
	}
}