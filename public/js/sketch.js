console.log(" i am checking in from sketch.js");

let snake;
var rez = 10;
var food;
let w;
let h;



function setup(){
  createCanvas(450,450);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5); 
  snake = new Snake();
  foodLocation();
}

function foodLocation(){
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
  console.log('this is the food:', food)  
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW){
    snake.setDir(1, 0);

  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);

  } else if (keyCode === UP_ARROW){
    snake.setDir(0, -1);

  } else if (keyCode === ' '){
    snake.grow();
  }
}


function draw(){
  scale(rez);
  background(220);

  if(snake.eat(food)){
    foodLocation();
  }
  // snake.eat(food);
  snake.update();
  snake.show();

  if (snake.isDead()){
    print("GameOva");
    background(255, 0, 0);
    noLoop();
  }

  fill(255, 0, 0);
  noStroke();
  rect(food.x, food.y, 1, 1);
}

// function draw (){
//   if (mouseIsPressed){
//     fill(0);
//   } else{
//     fill(255);
//   }
//   ellipse(mouseX, mouseY,80,80);
// }