function recalc()
{
	//localStorage.roomList = "Kitchen";
	var intKwh = 0;
	if (localStorage.getItem("roomList")!=null) {
		var roomList = localStorage.getItem("roomList");
		var arrRooms = roomList.split(";");
		//alert('a');

		for (var i=0;i<arrRooms.length;i++) {
			var roomDetail = localStorage.getItem(arrRooms[i]);
			var arrRoomDetail = roomDetail.split(";");
			//alert('b');

			for (var j=0;j<arrRoomDetail.length/* && arrRoomDetail[j]!='' && arrRoomDetail[j]!=null*/;j++) {
				var arrDetails = arrRoomDetail[j].split(",");
				//alert('c');
				if (arrDetails[1]!=null && arrDetails[1]!='' && arrDetails[2]!=null && arrDetails[2]!='') {
					//alert(arrDetails[0].replace("\n","")+"'");
					//alert(getKwh(arrDetails[0].replace("\n","")));
					intKwh += Math.round(arrDetails[1]*arrDetails[2]*getKwh(arrDetails[0].replace("\n",""))/1000*10)/10;
				}
			}
		}

		//alert('e');
		localStorage.kWh = intKwh;
	} else {
		//alert('f');
		localStorage.kWh = 0;
	}

	
	document.frmKwh.txtKwh.value = localStorage.kWh+" kWh";
}

function getKwh(appliance)
{
	var arrAppliance = localStorage.arrApplianceList.split(',');
	var arrKwh = localStorage.arrApplianceWattList.split(',');
	var iKwh = 0;
	
	for (var i=0;i<arrAppliance.length;i++) {
		//alert("'"+arrAppliance[i]+"'"+appliance+"'");
		if (arrAppliance[i]==appliance) {
			//alert('t');
			iKwh = arrKwh[i];
			i = arrAppliance.length;
		}
	}
	//alert(iKwh);
	return iKwh;
}
