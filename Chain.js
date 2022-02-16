class Chain{
  constructor(bodyA, pointB){
  var options = {
    bodyA: bodyA.body,
    pointB: pointB,
    stiffness: 1,
    length: 250
  }
  this.line = Constraint.create(options);
  World.add(world, this.line);
  this.bodyA = bodyA.body;
  this.pointB = pointB;
 
}

display(){
  push();
  strokeWeight(4);
 if(this.line.bodyA){
  stroke(86, 38, 16)
  line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y)

 }

 pop();
}

}