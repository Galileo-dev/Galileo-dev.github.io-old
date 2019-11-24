class Bird{

    constructor(brain){
        this.birdSprite = sprite;
        
        this.w = 30;
        this.h = 30;
        this.x = 100;
        this.y = height/2 - 50;
        
        this.size = 40;

        this.dead = false;
        this.isOnGround = false;
        this.gravity = 0.7;
        this.vy = 0;
        this.lift = -8;
        this.score = 0;
        this.fitness = 0;

        if (brain instanceof NeuralNetwork) {
          this.brain = brain.copy();
        }else{
        this.brain = new NeuralNetwork(5, 8, 2);
      }

        this.fallRotation = -PI / 6;

        // Neural Network Gargen

        
    }

       
    show(){
            
      push();
  translate(this.x - this.size / 2 - 8 + this.birdSprite.width / 2, this.y - this.size / 2 + this.birdSprite.height / 2);
  if (this.vy < 15) {
  rotate(-PI / 6);
  this.fallRotation = -PI / 6;
  } else if (this.vy <= 25) {
  this.fallRotation += PI / 8.0;
  this.fallRotation = constrain(this.fallRotation, -PI / 6, PI / 2);
  rotate(this.fallRotation);
  // rotate(map(this.velY, 10, 25, -PI / 6, PI / 2));
  } else {
  rotate(PI / 2);
  }
  
  image(this.birdSprite, -this.birdSprite.width / 2, -this.birdSprite.height / 2);
  //rect(bird.birdSprite.width , bird.birdSprite.height, bird.w, bird.h)   
  
  pop();

  // push();
  // angleMode(DEGREES)
  // //======== Rotate ===================
  // translate(this.x - this.size / 2 - 8 + this.w / 2, this.y - this.size / 2 + this / 2)

  
  // if (this.vy < 15) {
  //     rotate(-PI / 6);
  //     this.fallRotation = -PI / 6;
  // } else if (this.vy <= 25) {
  //     this.fallRotation += PI / 8.0;
  //     this.fallRotation = constrain(this.fallRotation, -PI / 6, PI / 2);
  //     rotate(this.fallRotation);
  //     // rotate(map(this.velY, 10, 25, -PI / 6, PI / 2));
  // } else {
  //     rotate(PI / 2);
  // }



  // //==========Image===================
  // image(this.birdSprite,this.x - (this.h / 2), this.y - (this.w / 2), this.h, this.w);
  // //circle(this.x, this.y, 50)
  // pop();
}
       

    mutate(){
      this.brain.mutate(0.1)
    }

    think(pipes){

      //find closest Pipe
      let closest = null;
      let record = Infinity;
      for (let i = 0; i < pipes.length; i++) {
      let diff = (pipes[i].x + pipes[i].w) - this.x;
      if (diff > 0 && diff < record) {
        record = diff;
        closest = pipes[i];
      }
    }

    let inputs = [];
    // x position of closest pipe
    inputs[0] = map(closest.x, this.x, width, 0, 1);
    // top of closest pipe opening
    inputs[1] = map(closest.top, 0, height, 0, 1);
    // bottom of closest pipe opening
    inputs[2] = map(closest.bottom, 0, height, 0, 1);
    // bird's y position
    inputs[3] = map(this.y, 0, height, 0, 1);
    // bird's y velocity
    inputs[4] = map(this.vy, -5, 5, 0, 1);

      let outputs = this.brain.predict(inputs);
      if(outputs[0] > outputs[1]){
        this.jump()
      }
    }

    offScreen(){
      return(this.y > height || this.y < 0);
    }

    move() {
      this.score++; 


    this.vy += this.gravity;
    //this.y = constrain(this.y, this.h / 2 , height - this.h)
    if (!this.dead) {
      this.vy = constrain(this.vy, -1000, 25);
    } else {
      this.vy = constrain(this.vy, -1000, 40);
    }
    if (!this.isOnGround) {
      this.y += this.vy;
    }
   
        
    

    
  }

    jump(){
        if (!this.dead && !this.isOnGround) {
        // this.velY = -35;
        this.vy = this.lift;
    }
    }

    

	
        
    

}