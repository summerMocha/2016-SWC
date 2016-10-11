var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext("2d");
var y = 10;
while(y <=990){
    drawingPad .beginPath();
    drawingPad .moveTo(10, y);
   drawingPad .lineTo(20, y);
    y = y + 10;
    drawingPad .strokeStyle = "black";
    drawingPad .stroke();
}

var y=30;
while(y<=990){
    drawingPad .beginPath();
    drawingPad.moveTo(30,y);
    drawingPad .lineTo(60, y);
    y = y + 30;
    drawingPad .strokeStyle = "grey";
    drawingPad .stroke();


}


var y=50;
while(y<=1000){
    drawingPad .beginPath();
    drawingPad.moveTo(70,y);
    drawingPad .lineTo(100, y);
    y = y + 10;
    drawingPad .strokeStyle = "grey";
    drawingPad .stroke();


}

var y=100;
while(y<=2000){
    drawingPad .beginPath();
    drawingPad.moveTo(110,y);
    drawingPad .lineTo(140, y);
    y = y + 20;
    drawingPad .strokeStyle = "grey";
    drawingPad .stroke();
}


var y=150;
while(y<=1050){
    drawingPad .beginPath();
    drawingPad.moveTo(150,y);
    drawingPad .lineTo(190, y);
    y = y + 100;
    drawingPad .strokeStyle = "grey";
    drawingPad .stroke();
}



