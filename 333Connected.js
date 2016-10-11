var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext("2d");
var y = 10;
while(y <=1000){
    drawingPad .beginPath();
    drawingPad .moveTo(10, y);
    drawingPad .lineTo(30, y+10);
    y = y + 30;
    drawingPad .strokeStyle = "black";
    drawingPad .stroke();
}

y = 10;
while(y <=1000){
    drawingPad .beginPath();
    drawingPad .moveTo(30, y+10);
    drawingPad .lineTo(50, y);
    y = y + 30;
    drawingPad .strokeStyle = "grey";
    drawingPad .stroke();
}

y = 10;
while(y <=1000){
    drawingPad .beginPath();
    drawingPad .moveTo(50, y);
    drawingPad .lineTo(70, y+10);
    y = y + 30;
    drawingPad .strokeStyle = "black";
    drawingPad .stroke();
}

y = 10;
while(y <=1000){
    drawingPad .beginPath();
    drawingPad .moveTo(70, y+10);
    drawingPad .lineTo(90, y);
    y = y + 30;
    drawingPad .strokeStyle = "grey";
    drawingPad .stroke();
}

y = 10;
while(y <=1000){
    drawingPad .beginPath();
    drawingPad .moveTo(70, y+10);
    drawingPad .lineTo(90, y);
    y = y + 30;
    drawingPad .strokeStyle = "black";
    drawingPad .stroke();
}
y = 10;
while(y <=1000){
    drawingPad .beginPath();
    drawingPad .moveTo(90, y);
    drawingPad .lineTo(120, y+10);
    y = y + 30;
    drawingPad .strokeStyle = "grey";
    drawingPad .stroke();
}
y = 10;
while(y <=1000){
    drawingPad .beginPath();
    drawingPad .moveTo(120, y+10);
    drawingPad .lineTo(150, y);
    y = y + 30;
    drawingPad .strokeStyle = "black";
    drawingPad .stroke();
}
y = 10;
while(y <=1000){
    drawingPad .beginPath();
    drawingPad .moveTo(150, y);
    drawingPad .lineTo(200, y+10);
    y = y + 30;
    drawingPad .strokeStyle = "grey";
    drawingPad .stroke();
}

y = 10;
while(y <=1000){
    drawingPad .beginPath();
    drawingPad .moveTo(200, y+10);
    drawingPad .lineTo(250, y);
    y = y + 30;
    drawingPad .strokeStyle = "black";
    drawingPad .stroke();

}

y = 10;
while(y <=1000){
    drawingPad .beginPath();
    drawingPad .moveTo(250, y);
    drawingPad .lineTo(350, y+10);
    y = y + 30;
    drawingPad .strokeStyle = "grey";
    drawingPad .stroke();
}
y = 10;
while(y <=1000){
    drawingPad .beginPath();
    drawingPad .moveTo(350, y+10);
    drawingPad .lineTo(450, y);
    y = y + 30;
    drawingPad .strokeStyle = "black";
    drawingPad .stroke();
}
