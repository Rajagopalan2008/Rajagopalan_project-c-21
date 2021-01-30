var bullet, wall;
var speed,weight,damage,thickness;
function setup() {
  createCanvas(800,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall=createSprite(750,200,thickness,200);
  bullet=createSprite(50,200,30,10);

}

function draw() {
  background("orange");  
  wall.shapeColor="yellow"
  bullet.shapeColor="lightblue"
//to make the speed as the bullet's velocity
bullet.velocityX=speed;

//to calculate the deformation
damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

if(bullet.x-wall.x<wall.width/2+bullet.width/2 && wall.x-bullet.x<wall.width/2+bullet.width/2 && damage<10){
wall.shapeColor="green";
bullet.velocityX=0;
}
if(bullet.x-wall.x<wall.width/2+bullet.width/2 && wall.x-bullet.x<wall.width/2+bullet.width/2 && damage>10){
  wall.shapeColor="red";
  bullet.velocityX=0;
  }

  drawSprites();
}