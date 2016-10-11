var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');
  var w=800;
  while(w>0){
    drawingPad.fillStyle="black";
    drawingPad.strokeStyle="white";
    drawingPad.fillRect(0,0,w,w);
    drawingPad.strokeRect(0,0,w,w);
    w=w-30;
  }




var h=700;
  while(h>-20){
    drawingPad.fillStyle="gray";
    drawingPad.strokeStyle="black";
    drawingPad.fillRect(h,h,50,50);
    drawingPad.strokeRect=(h,h,50,50);
    h=h-50;
}



