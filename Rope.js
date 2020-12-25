class Rope {
    constructor(bodyA, bodyB) {
      var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        length: 500,
      };
  
      this.rope = Constraint.create(options);
      
      World.add(world, this.rope);
    }
    attach(body) {
      this.rope.bodyA = body;
    }
  
    fly() {
      this.rope.bodyA = null;
    }
  
    display() {
      if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(3);
 // console.log(pointA.x);
 // console.log(pointA.y);
        line(pointA.x+50, pointA.y+100, pointB.x+50, pointB.y+100);
      //  image(ribbon,(pointB.x+50-pointA.x+50)/2+110,pointA.y+90,40,40);
        pop();
        console.log((pointB.x+50-pointA.x+50)/2+110);
      }
    }
  }
  