function recalc()
{
	//localStorage.roomList = "Kitchen";
	var intKwh = 0;
	if (localStorage.getItem("roomList")!=null) {
		var roomList = localStorage.getItem("roomList");
		var arrRooms = roomList.split(";");

		//alert(arrRooms);
		for (var i=0;i<arrRooms.length;i++) {
			var roomDetail = localStorage.getItem(arrRooms[i]);
			var arrRoomDetail = roomDetail.split(";");

			//alert(localStorage.Bathroom1);
			//alert(arrRoomDetail);
			for (var j=0;j<arrRoomDetail.length/* && arrRoomDetail[j]!='' && arrRoomDetail[j]!=null*/;j++) {
				//alert(arrRoomDetail[j]);
				var arrDetails = arrRoomDetail[j].split(",");
				/*alert(arrDetails[1]);
				alert('and');
				alert(arrDetails[2]);
				alert('---');*/
				if (arrDetails[1]!=null && arrDetails[1]!='' && arrDetails[2]!=null && arrDetails[2]!='') {
					//alert('go');
					intKwh += arrDetails[1]*arrDetails[2];
				}
			}
			//alert(arrRooms);
		}
		
		localStorage.kWh = intKwh;
	} else {
		localStorage.kWh = 0;
	}

	//alert('done');
	document.frmKwh.txtKwh.value = localStorage.kWh+" kWh";
}