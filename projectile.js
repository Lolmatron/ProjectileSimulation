function Projectile(x, y, r, v, angle) {

  this.x = x;
  this.y = y;
  this.r = r;
  this.v = v
  this.angle = angle;

  this.init = function(){

    this.i = this.v * Math.cos((this.angle * (Math.PI / 180)));
    this.j = this.v * Math.sin((this.angle * (Math.PI / 180)));
  }

  this.draw = function() {
    //draw the proj
    c.beginPath();
    c.arc(this.x * multi, this.y * multi, this.r, 0, 2 * Math.PI);
    c.fill();
    c.stroke();

  }

  this.updatePos = function() {

    timePassed = calcTimePassed();
    //update y pos and check for collisions
    this.j -= g * timePassed/1000;
    this.y += this.j * timePassed/1000;
    if (this.y < this.r / multi) {
      this.y = this.r / multi;
      this.j *= -1;

      clearInterval(interval);
      clearInterval(interval);

    } else if (this.y > canvas.height - this.r) {

      this.y = canvas.height - this.r;
      this.j *= -1;
    }
    //update x pos
    this.x += this.i * timePassed/1000;


     document.getElementById("x").innerHTML = this.x;
     document.getElementById("y").innerHTML = this.y;
  }
}
