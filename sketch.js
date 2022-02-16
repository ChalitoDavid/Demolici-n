const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup(){
    var canvas = createCanvas(1000,600)
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,580,1200,20);
    tower1 = new Tower(800,10,150,150);
    tower2= new Tower(800,80,150,150);
    tower3 = new Tower(800,200,150,150);
    destructor = new Ball(250,20,50)
    cadena = new Chain(destructor,{x:550, y:150})

}
function draw(){
background("green")



Engine.update(engine);
ground.display();
tower1.display();
tower2.display();
tower3.display();
destructor.display();
cadena.display();
}
function mouseDragged(){
    Matter.Body.setPosition(destructor.body,{x:mouseX, y:mouseY});
    }