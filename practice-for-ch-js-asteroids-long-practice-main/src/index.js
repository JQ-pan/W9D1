// document.addEventListener("DOMContentLoaded", function() {
  // console.log("Index is working")
  const MovingObject = require("./moving_object.js");

  // const movingObject = new MovingObject();
  // console.log(movingObject);

  window.MovingObject = MovingObject;


  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext('2d');

  window.context = ctx;

  const mo = new MovingObject(
    {pos: [50, 50],
    vel: [50, 50],
    radius: 20,
    color: "blue"});

  mo.draw(context);
  mo.move();
  mo.draw(context);
  // mo.move();
// });
