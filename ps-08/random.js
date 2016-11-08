var ctx = document.getElementById("random").getContext('2d');

var beginX = 0;
var beginY = 0;

var beginX1 = 0;
var beginY1 = 400;

var beginX2=0;
var beginY2=400;


var beginX3=400;
var beginY3=800;



var drawDot = function (x, y) {

  var weight = 20;
  var height = 20;
  ctx.fillStyle = "#ffffcc"
  ctx.strokeStyle = 'black'
  beginX = beginX + 22;
  if(beginX > 800) {
    beginX = 0;
    beginY = beginY + 22;
  }
  if (beginY > 400) {
    beginY = 0;
  }
  ctx.fillRect(beginX,beginY,weight,height);
};

setInterval(drawDot, 10);



var drawBubble=function(X1,Y1){
  var R=17;
  ctx.fillStyle="#238443"
  ctx.strokeStyle="black"
  beginX1=beginX1+22;
  if(beginX1>800){
    beginX1=400;
    beginY1=beginY1+22;
  }
  if(beginY1>800){
    beginY1=0;
  }
  ctx.fillRect(beginX1,beginY1,R,R);
}

setInterval(drawBubble, 10);




var drawPink=function(X2,Y2){
  var R=15;
  ctx.fillStyle="#78c679"
  ctx.strokeStyle="black"
  beginX2=beginX2+22;
  if(beginX2>800){
    beginX2=0;
    beginY2=beginY2+10;
  }
  if(beginY2>800){
    beginY2=400;
  }
  ctx.fillRect(beginX2,beginY2,R,R);
}

setInterval(drawPink, 10);



var drawBlue=function(X3,Y3){
  var R=15;
  ctx.fillStyle="#c2e699"
  ctx.strokeStyle="black"
  beginX3=beginX3+22;
  if(beginX3>800){
    beginX3=0;
    beginY3=beginY3-10;
  }
  if(beginY3>800){
    beginY3=400;
  }
  ctx.fillRect(beginX3,beginY3,R,R);
}

setInterval(drawBlue, 10);