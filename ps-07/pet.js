function upArrowPressed() {
   var element = document.getElementById("image1");
   var top = parseInt(element.style.top) || 0;
   top = top -5;
   element.style.top = top + "px";
 }

function downArrowPressed() {
   var element = document.getElementById("image1");
   var top = parseInt(element.style.top) || 0;
   top = top +5;
   element.style.top = top + "px";
 }


function rightArrowPressed() {
   var element = document.getElementById("image1");
   var top = parseInt(element.style.right) || 0;
   right = right+5;
   element.style.right = right+ "px";
 }

function leftArrowPressed() {
   var element = document.getElementById("image1");
   var top = parseInt(element.style.left) || 0;
   left = left-5;
   element.style.left = left+ "px";
 }


 function moveSelection(evt) {
   console.log(evt.keyCode);
   switch (evt.keyCode) {
     case 37:
       leftArrowPressed();
       break;
     case 39:
       rightArrowPressed();
       break;
     case 38:
       upArrowPressed();
       break;
     case 40:
       downArrowPressed();
       break;
   }
 };

window.addEventListener('keydown', moveSelection);