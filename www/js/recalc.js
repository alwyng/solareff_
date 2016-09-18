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
			for (j=0;j<arrRoomDetail.length;j++) {
				var arrDetails = arrRoomDetail[j].split(",");
				if (arrDetails[1]!=null && arrDetails[2]!=null) {
					intKwh += arrDetails[1]*arrDetails[2];
				}
			}
			//alert(arrRooms);
		}
		
		localStorage.kWh = intKwh;
	} else {
		localStorage.kWh = 0;
	}

	document.frmKwh.txtKwh.value = localStorage.kWh+" kWh";
}