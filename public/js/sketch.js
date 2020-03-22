console.log(" i am checking in from sketch.js");

let activityOjbects = document.querySelectorAll('.activityTitle');
console.log("activityOjbects", activityOjbects[0])


var bubbleContainer = [];


function setup(){
  createCanvas(600, 400);
for(var i = 0; i < activityOjbects.length; i++){
  var bubbleObject = {};
  bubbleObject = activityOjbects[i];
  bubbleObject.x = Math.random(0, screen.width);
  bubbleObject.y = Math.random(0, screen.heightj);
  bubbleObject.display = function(){
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
  bubbleObject.move = function(){
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  console.log("this is the bubbleObject", bubbleObject);
  console.log("added new bubble. Container contains:", bubbleContainer.length)
  bubbleContainer.push(bubbleObject)
}
}

function draw(){
  background(0);
  for(var i = 0; i < bubbleContainer.length; i++){
    bubbleContainer[i].move();
    bubbleContainer[i].display();
  }

}
// let snake;
// var rez = 10;
// var food;
// let w;
// let h;



// function setup(){
//   createCanvas(450,450);
//   w = floor(width / rez);
//   h = floor(height / rez);
//   frameRate(5); 
//   snake = new Snake();
//   foodLocation();
// }

// function foodLocation(){
//   let x = floor(random(w));
//   let y = floor(random(h));
//   food = createVector(x, y);
//   console.log('this is the food:', food)  
// }

// function keyPressed(){
//   if (keyCode === LEFT_ARROW){
//     snake.setDir(-1, 0);
//   } else if (keyCode === RIGHT_ARROW){
//     snake.setDir(1, 0);

//   } else if (keyCode === DOWN_ARROW) {
//     snake.setDir(0, 1);

//   } else if (keyCode === UP_ARROW){
//     snake.setDir(0, -1);

//   } else if (keyCode === ' '){
//     snake.grow();
//   }
// }


// function draw(){
//   scale(rez);
//   background(220);

//   if(snake.eat(food)){
//     foodLocation();
//   }
//   // snake.eat(food);
//   snake.update();
//   snake.show();

//   if (snake.isDead()){
//     print("GameOva");
//     background(255, 0, 0);
//     noLoop();
//   }

//   fill(255, 0, 0);
//   noStroke();
//   rect(food.x, food.y, 1, 1);
// }

