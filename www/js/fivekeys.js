function persist()
{
	localStorage.sizeSolGeyser = document.getElementById('txtSizeSolGeyser').value;				
	localStorage.QtySolGeyser = document.getElementById('txtQtySolGeyser').value;					
	localStorage.SizeElecGeyser = document.getElementById('txtSizeElecGeyser').value;				
	localStorage.QtyElecGeyser = document.getElementById('txtQtyElecGeyser').value;				
	localStorage.SizeGasGeyser = document.getElementById('txtSizeGasGeyser').value;				
	localStorage.QtyGasGeyser = document.getElementById('txtQtyGasGeyser').value;					
	localStorage.IsHeatPump = document.getElementById('selIsHeatPump').value;					
	localStorage.IsBlanket = document.getElementById('selIsBlanket').value;					
	localStorage.StoveType = document.getElementById('selStoveType').value;					
	localStorage.OvenType = document.getElementById('selOvenType').value;		
}

function load()
{
	document.getElementById('txtSizeSolGeyser').value = localStorage.sizeSolGeyser ;				
	document.getElementById('txtQtySolGeyser').value = localStorage.QtySolGeyser ;					
	document.getElementById('txtSizeElecGeyser').value = localStorage.SizeElecGeyser ;				
	document.getElementById('txtQtyElecGeyser').value = localStorage.QtyElecGeyser ;				
	document.getElementById('txtSizeGasGeyser').value = localStorage.SizeGasGeyser ;				
	document.getElementById('txtQtyGasGeyser').value = localStorage.QtyGasGeyser ;					
	document.getElementById('selIsHeatPump').value = localStorage.IsHeatPump ;					
	document.getElementById('selIsBlanket').value = localStorage.IsBlanket ;					
	document.getElementById('selStoveType').value = localStorage.StoveType ;					
	document.getElementById('selOvenType').value = localStorage.OvenType ;						
}