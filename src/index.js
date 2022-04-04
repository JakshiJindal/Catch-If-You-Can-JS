import "./styles.css";
var catchMe = document.getElementById("catchMe");
var block = document.getElementById("block");
var boundX = block.clientWidth - 60;
var boundY = block.clientHeight - 60;
console.log(boundX, boundY);
catchMe.addEventListener("mouseover", function () {
  var posX = catchMe.offsetLeft;
  var posY = catchMe.offsetTop;

  if (posX < boundX && posY < boundY) {
    posX = Math.floor(Math.random() * (boundX - posX));
    posY = Math.floor(Math.random() * (boundY - posY));
    catchMe.style.top = posY + "px";
    catchMe.style.left = posX + "px";
    console.log(posX, posY);
  } else if (posX < boundX && posY > boundY) {
    posX = posX + Math.floor(Math.random() * (boundX - posX));
    posY = posY - Math.floor(Math.random() * (boundY - posY));
    catchMe.style.top = posY + "px";
    catchMe.style.left = posX + "px";
    console.log(posX, posY);
  } else if (posX > boundX && posY < boundY) {
    posX = posX - Math.floor(Math.random() * (boundX - posX));
    posY = posY + Math.floor(Math.random() * (boundY - posY));
    catchMe.style.top = posY + "px";
    catchMe.style.left = posX + "px";
    console.log(posX, posY);
  } else if (posX > boundX && posY > boundY) {
    posX = posX - Math.floor(Math.random() * (boundX - posX));
    posY = posY - Math.floor(Math.random() * (boundY - posY));
    catchMe.style.top = posY + "px";
    catchMe.style.left = posX + "px";
    console.log(posX, posY);
  }
});
