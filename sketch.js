var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var balls = []
var ball 
var count = 0
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score = 0;
var gameState = "start"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  
  //create 4th row of plinko objects
  
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  text("score: " +  score, 20, 40)
  fill("blue")
  textSize(35)
  text(" 500 ",5,550)
  text(" 500 ",80,550)
  text(" 500 ",160,550)
  text(" 500 ", 240,550)
  text(" 500 " ,320,550)
  text(" 500 " ,400,550)
  text(" 500 " ,560,550)
  text(" 500 " ,640,550)
  text(" 500 " ,720,550)


  Engine.update(engine);
  ground.display();
  
  if(gameState == "end"){
    textSize(35)
    text("Game Over", 150, 250)
  }
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  if(ball != null){
    ball.display()

  if(ball.body.position.y > 760){
    if(ball.body.position.x < 300){
      score = score+500
      ball = null
      if(count>= 5){
        gameState = "end"
      }
      else if(ball.body.position.x < 600 && ball.body.position.x> 301){
        score = score + 100
        ball = null
        if(count >= 5)
        {
          gameState = "end"
        }
        else if(ball.body.position.x<900 && ball.body.position.x> 601){
          score = score + 200
          ball = null
          if(count >= 5){
            gameState = "end"
          }
        }
        
      }
    }
  }
  }
   
function mousePressed(){
  if(gameState!=="end"){
    count++
    ball = new Ball(mouseX, 10,10,10)
  } 
}

}