

class Vehicle {


    constructor(x, y) {
      this.pos = createVector(random(width), random(height));
      this.target = createVector(x, y);
      this.vel = p5.Vector.random2D();
      this.acc = createVector();
      this.r = 5;
      this.maxspeed = 20;
      this.maxforce = 0.5;
    }
  
    behaviors() {
      var arrive = this.arrive(this.target);
      var mouse = createVector(mouseX, mouseY);
      var flee = this.flee(mouse);
  
      arrive.mult(2.2);
      flee.mult(5);
  
      this.applyForce(arrive);
      this.applyForce(flee);
    }

    behaviors1() {
      var arrive = this.arrive(this.target);
      var mouse = createVector(mouseX, mouseY);
      var flee = this.flee(mouse);
  
      arrive.mult(2.2);
      flee.mult(5);
  
      this.applyForce(arrive);
      this.applyForce(flee);
    }


    jitter() {
        this.pos.x += noise(-1, 2)
    }
  
    applyForce(f) {
      this.acc.add(f);
    }
  
    update() {
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.acc.mult(0.5);
    }
  
    show() {
      stroke(255);
      strokeWeight(this.r);
      point(this.pos.x, this.pos.y);
    }
  
  
    arrive(target) {
      var desired = p5.Vector.sub(target, this.pos);
      var d = desired.mag();
      var speed = this.maxspeed;
      if (d < 100) {
        speed = map(d, 0, 100, 0, this.maxspeed);
      }
      desired.setMag(speed);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    }
  
    flee(target) {
      var desired = p5.Vector.sub(target, this.pos);
      var d = desired.mag();
      if (d < 50) {
        desired.setMag(this.maxspeed);
        desired.mult(-0.5);
        var steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxforce);
        return steer;
      } else {
        return createVector(0, 0);
      }
    }

  }