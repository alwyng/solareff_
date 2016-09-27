
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
	localStorage.arrKitchenApp = ["Stand alone Fridge","Oven","LED lights","Ceiling Fan","Airconditioner","Flourescent lights","Fridge freezer combination","Stand alone freezer","Microwave","Kettle","Evap Cooler","Electric Hob","Coffee machine","Toaster"];
	localStorage.intKitchenDefault = 14;
	
	localStorage.arrDiningRoomApp = ["LED lights","Flourescent lights","Ceiling Fan","Airconditioner"];
	localStorage.intDiningRoomDefault = 4;
	
	localStorage.arrBedroom1App = ["LED lights","Ceiling Fan","Airconditioner","Flourescent lights","Clock radio","Hairdryer"];
	localStorage.intBedroom1Default = 6;
	
	localStorage.arrBedroom2App = ["LED lights","Ceiling Fan","Airconditioner","Flourescent lights","Clock radio","Hairdryer"];
	localStorage.intBedroom2Default = 6;
	
	localStorage.arrBedroom3App = ["LED lights","Ceiling Fan","Airconditioner","Flourescent lights","Clock radio","Hairdryer"];
	localStorage.intBedroom3Default = 6;
	
	localStorage.arrBathroom1App = ["LED lights","Flourescent lights"];
	localStorage.intBathroom1Default = 2;
	
	localStorage.arrBathroom2App = ["LED lights","Flourescent lights"];
	localStorage.intBathroom2Default = 2;
	
	localStorage.arrBathroom3App = ["LED lights","Flourescent lights"];
	localStorage.intBathroom3Default = 2;
	
	localStorage.arrLivingInsideApp = ["LED lights","TV","Ceiling Fan","Airconditioner","Flourescent lights","Wi-Fi modem","Radio","Decoders","Game console","Cordless phone"];
	localStorage.intLivingInsideDefault = 10;
	
	localStorage.arrLivingOutsideApp = ["LED lights","Ceiling Fan","Airconditioner","Flourescent lights"];
	localStorage.intLivingOutsideDefault = 4;
	
	localStorage.arrSculleryApp = ["LED lights","Ceiling Fan","Airconditioner","Flourescent lights","Dishwasher","Vacuum cleaner"];
	localStorage.intSculleryDefault = 6;
	
	localStorage.arrLaundryApp = ["LED lights","Ceiling Fan","Airconditioner","Flourescent lights","Washing machine","Tumble Dryer","Iron"];
	localStorage.intLaundryDefault = 7;
	
	localStorage.arrGardenApp = ["Security lights (lights that operate during the night)","Electric Fence","Garage /  gate motors","Swimming pool pump"];
	localStorage.intGardenDefault = 4;
	
	localStorage.arrApplianceList = ["Security lights (lights that operate during the night)","LED lights","Flourescent lights","Electric Fence","Alarm","Wi-Fi modem","Clock radio","Garage /  gate motors","Radio","Laptops","Stand alone personal computer","Fridge freezer combination","Stand alone freezer","TV","Microwave","Washing machine","Tumble Dryer","Dishwasher","Kettle","Hairdryer","Vacuum cleaner","Iron","Heatpump geyser","Standard geyser (not recommended)","Swimming pool pump","Evap Cooler","Stand alone Fridge","Decoders","Oven","Electric Hob","Ceiliing Fan","Game console","Printer","Cordless phone","Airconditioner","Coffee machine","Toaster","Other (Text box to add to existing list)"];
	
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
	table.innerHTML = "";
	var arrStack = arrRooms;
	var iRows = Math.trunc(arrRooms.length/2);
	var iBtn = 0;
	//alert(arrStack);
	
	for (var i = 0; i<=iRows; i++) {
		var row = table.insertRow(table.rows.length);
		for (var j = 0; j<2; j++) {
			if (arrStack.length>0) {
				iBtn++;
				var cell = row.insertCell(j);
				var btn = document.createElement('div');

				btn.innerHTML = "<input type = 'button' class='button button-fill' value = '"+arrStack[0]+"' onClick = 'gotoAdder(this.value)'>"; 
				if (iBtn>13) {
					btn.innerHTML += '&nbsp<img src="../img/delete.gif" alt="Delete" onclick="removeRoom('+"'"+arrStack[0]+"'"+')">'; 
				}

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
	txtRoom.value = '';
	
	createRooms();
}

function removeRoom(strRoom)
{
	arrRooms = localStorage.arrRooms.split(',');
	for (var i=0;i<arrRooms.length;i++) {
		if (arrRooms[i]==strRoom) {
			arrRooms.splice(i,1);
			i = arrRooms.length;
		}
	}
	localStorage.arrRooms = arrRooms;
	
	createRooms();
}
