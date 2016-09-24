
function load()
{
	/*Declare global variables*/
	arrRooms = ["Kitchen","Dining Room","Bedroom 1","Bathroom 1","Bedroom 2","Bathroom 2","Bedroom 3","Bathroom 3","Living Inside","Living Outside","Scullery","Laundry","Garden"];
	if (localStorage.arrRooms==null) {
		localStorage.arrRooms = arrRooms;
	}
	else {
		arrRooms = localStorage.arrRooms.split(',');
	}
	
	//Room defaults*/
	localStorage.arrKitchenApp = ["Lights","Stove","Oven","Fridge","Dishwasher"];
	localStorage.intKitchenDefault = 3;
	
	localStorage.arrBathroom1App = ["Lights","App2","App3","App4","App5"];
	localStorage.intBathroom1Default = 2;
	
	/*------------------------*/

	//set to true for debug mode
	localStorage.isDebug = "false";

	document.addEventListener("deviceready",deviceReadyFeedback,false);
	
	createRooms();
	
	recalc();
}

function createRooms()
{
	var table = document.getElementById("tblRooms");
	var arrStack = arrRooms;
	var iRows = Math.trunc(arrRooms.length/2);
	//alert(arrStack);
	
	for (var i = 0; i<=iRows; i++) {
		var row = table.insertRow(table.rows.length);
		for (var j = 0; j<2; j++) {
			if (arrStack.length>0) {
				var cell = row.insertCell(j);
				var btn = document.createElement('div');
				btn.innerHTML = "<input type = 'button' value = '"+arrStack[0]+"' onClick = 'gotoAdder(this.value)'>"; 
				cell.appendChild(btn);
				
				//pop the first stack item
				arrStack.splice(0,1);
			}
		}
	}
}

function deviceReadyFeedback()
{
	if (!cordova.plugins.email) {
		alert('Email functionality not available');
	};
}

function gotoAdder(txt)
{
	setCurrentApp(txt);
	window.location.href = 'appliance_adder.html';
}

function setCurrentApp(txt)
{
	localStorage.CurrentApp = txt;
}

function addRoom()
{
	var txtRoom = document.getElementById('txtRoom');
	arrRooms = localStorage.arrRooms.split(',');
	arrRooms.push(txtRoom.value);
	localStorage.arrRooms = arrRooms;
	txtRoom.innerHTML = '';
	
	var Table = document.getElementById("tblRooms");
	Table.innerHTML = "";
	
	createRooms();
}