var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext("2d");
var y = 30;
while(y < 990){
	drawingPad.moveTo(30, y);
	drawingPad.lineTo(60, y);
	y = y + 30;
	drawingPad.strokeStyle = "gray";
	drawingPad.stroke();
	drawingPad.beginPath();
}
