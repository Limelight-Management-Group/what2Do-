console.log("checking in from Snake.js");

class Snake {
  constructor(){
    this.body = [];
    this.body[0] = createVector(floor(w/2),floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.size = 1;
  }
  setDir(x, y){
    this.xdir = x;
    this.ydir = y;
  }

  update(){
    var head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
    console.log("this is the head", head)
    console.log("this is the length of body", this.body.length)
  }

  grow(){
    var head = this.body[this.body.length-1].copy();
    this.size++;
    this.body.push(head);
  }

  isDead(){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if (x > w-1 || x < 0 || y > h-1 || h < 0){
      return true;
    }

    for(var i = 0; i < this.body.length-1; i++){
      var part = this.body[i];
      if(part.x == x && part.y == y){
        return true;
      }
    }
    return false;
  }

  eat(pos){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y){
      this.grow();
      return true;

    }
    return false; 
  }

  show(){
    for(var i = 0; i < this.body.length; i++){
    fill(0);
    noStroke();
    rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}