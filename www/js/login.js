function captureEmail()
{
	//check validity
	var x = document.forms["myform"]["txtEmail"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
	
	//store email address
	persist();
}

function persist() 
{
	localStorage.userName = getElementsByName('txtName');
	localStorage.userSurname = getElementsByName('txtSurname');
	localStorage.userEmail = getElementsByName('txtEmail');
}

function load()
{
	localStorage.clear();
	recalc();
}

function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}