var ctx = document.getElementById("snow").getContext('2d');

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

var drawSnowMan = function() {
  clearScreen ();
  drawImage("snow.jpg", ctx, 0, 0);
};

var height = 600;
var width = 600;
var points = [];
var numPoints = 100;

var clearScreen = function() {

  drawImage("snow.jpg", ctx, 0, 0);

};

var wrap = function(point) {
  if (point.x > width) {
    point.x = 0;
    point.y = point.y + 11;
  }
  if (point.y > height) {
    point.y = 0;
  }
  if (point.y < 0) {
    point.y = height;
  }

};




var move = function(p) {
  var speed = p.speed;
  var direction = Math.random();
  if (direction < 0.80) {
    p.y = p.y + speed;
  } else if (direction < 0.90) {
    p.x = p.x - speed;
  } else {
    p.x = p.x + speed;
  }
}

var makeColor = function(hue, sat, light, alph) {
  return "hsla(" + hue + "," + sat + "%," + light + "%," + alph + ")";
};
var drawPoints = function() {
  clearScreen();

  ctx.strokeStyle = '';

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var alph = point.y / 5 + 100;
    move(point);
    wrap(point);
    ctx.fillStyle = makeColor(240, 100, 100, alph);
    ctx.fillRect(point.x, point.y, point.size, point.size);
  }
  requestAnimationFrame(drawPoints);
};

var makePoints = function() {
  for (var i = 0; i < numPoints; i++) {
    var size = Math.random() * 10;
    var x = Math.random() * width;
    var speed = 10 - size;
    points.push({
      x: x,
      y: 0,
      size: size,
      speed: speed/5,
    });
  }
};

drawSnowMan();
makePoints();
requestAnimationFrame(drawPoints);







