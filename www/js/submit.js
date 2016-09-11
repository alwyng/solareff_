function load()
{
	recalc();
}

function submit()
{
	alert("Submit");
}
/*
function email()
{
	alert('try to send mail');
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
	alert('mail send complete');
}*/