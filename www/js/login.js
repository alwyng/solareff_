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
	localStorage.userName = document.getElementById("txtName").value; 
	localStorage.userSurname = document.getElementById('txtSurname').value;
	localStorage.userEmail = document.getElementById('txtEmail').value;
}

function populate()
{
	if (localStorage.userName!=null) {document.getElementById('txtName').value=localStorage.userName} else {document.getElementById('txtName').value=''};
	if (localStorage.userSurname!=null) {document.getElementById('txtSurname').value=localStorage.userSurname} else {document.getElementById('txtSurname').value=''};
	if (localStorage.userEmail!=null) {document.getElementById('txtEmail').value=localStorage.userEmail} else {document.getElementById('txtEmail').value=''};
}

function load()
{
	//localStorage.clear();
	populate();
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