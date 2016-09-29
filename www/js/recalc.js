function recalc()
{
	//localStorage.roomList = "Kitchen";
	var intKwh = 0;
	if (localStorage.getItem("roomList")!=null) {
		var roomList = localStorage.getItem("roomList");
		var arrRooms = roomList.split(";");

		for (var i=0;i<arrRooms.length;i++) {
			var roomDetail = localStorage.getItem(arrRooms[i]);
			var arrRoomDetail = roomDetail.split(";");

			for (var j=0;j<arrRoomDetail.length/* && arrRoomDetail[j]!='' && arrRoomDetail[j]!=null*/;j++) {
				var arrDetails = arrRoomDetail[j].split(",");
				if (arrDetails[1]!=null && arrDetails[1]!='' && arrDetails[2]!=null && arrDetails[2]!='') {

					intKwh += Math.round(arrDetails[1]*arrDetails[2]*getKwh(arrDetails[0])/1000*10)/10;
				}
			}
		}

		localStorage.kWh = intKwh;
	} else {
		localStorage.kWh = 0;
	}

	alert(localStorage.kWh);
	document.frmKwh.txtKwh.value = localStorage.kWh+" kWh";
}

function getKwh(appliance)
{
	var arrAppliance = localStorage.arrApplianceList.split(',');
	var arrKwh = localStorage.arrApplianceWattList.split(',');
	var iKwh = 0;

	for (var i=0;i<arrAppliance.length;i++) {
		if (arrAppliance[i]==appliance) {
			iKwh = arrKwh[i];
			i = arrAppliance.length;
		}
	}
	//alert(iKwh);
	return iKwh;
}
