class Pipe {
    constructor(){
        this.BottomPipe = BottomPipe
        this.TopPipe = TopPipe
        this.box = 130
        this.top = random( height - this.box)
        this.bottom = (height - this.top) - this.box ;
        this.x = width;
        this.height = height;
        this.w = TopPipe.width;
        this.speed = 2;
        this.y1img = -800 + this.top ;
        this.y2 = height-this.bottom;
        this.y1 = 0;
        
}

    show(){
        push();
        fill(0)
      //  rect(this.x, this.y1, this.w, this.top)
     //   rect(this.x, this.y2, this.w, this.bottom)
        image(TopPipe, this.x, this.y1img );
        image(BottomPipe, this.x, this.y2 );
        pop();
    }

    move(){
        this.x -= this.speed;
        
    }

    offscreen(){
        if(this.x < -this.w){
            return (this.x < -this.w)
        }
    }

    hits(bird){
        this.rectX = (bird.x - bird.size / 2 - 8 + bird.birdSprite.width / 2) - bird.w /2;
        this.rectY = (bird.y - bird.size / 2 + bird.birdSprite.height / 2) - bird.h/2;
   //    circle(this.rectX, this.rectY , bird.h)
        return collideRectRect(this.x, this.y1, this.w, this.top, this.rectX , this.rectY, bird.w, bird.h) + collideRectRect(this.x, this.y2, this.w, this.bottom,this.rectX , this.rectY, bird.w, bird.h);
        
    }
    

}