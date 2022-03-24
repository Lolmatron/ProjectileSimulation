var fps = 60;
var multi = 10; //multiplies all values drawn on canvas
var start;

function update() {

  //updates canvas and proj  pos
  clearCanvas();
  projectile.draw();
  projectile.updatePos();

}

function clearCanvas() {

  //clear canvas
  c.beginPath();
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.stroke();

}

function calcTimePassed(){

  //returns time passed from last call
  let timePassed = Date.now() - start;
  start = Date.now();
  return timePassed;

}
