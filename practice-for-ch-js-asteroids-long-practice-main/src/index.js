console.log("Index is working")
const MovingObject = require("./moving_object.js");

// const movingObject = new MovingObject();
// console.log(movingObject);

window.MovingObject = MovingObject;


const canvasEl = document.getElementById("game-canvas");
const ctx = canvasEl.getContext('2d');

window.context = ctx;