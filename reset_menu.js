class ResetMenu {

    constructor(){
        this.y = (height/2) 
        this.x = (width/2) 
    }

    show(img_relaod){

        


        fill(63, 212, 197)
        
        push()
        
        stroke(245, 66, 227)
        rect(this.x - 150, this.y - 100, 300, 200,20);
        
        
     
        stroke(0);
        fill(230)
        rect(this.x-25, this.y-25, 50, 50, 20)
        imageMode(CENTER)
        image(img_relaod, this.x , this.y, 30, 30) 
       
        pop()

        var timerStr = `${minutes}:${seconds}:${miliseconds}`
        push();
        fill("white");
        textFont(GameFont);
        stroke("black");
        strokeWeight(7);
        textSize(50);
        textAlign(CENTER);
        text(`FINISHED!`,  0, this.y - 35, width);
        text(`Time: ${timerStr}`,  0, this.y - 70, width);
       pop();
    }

    hover_reset(){
        return collidePointRect(mouseX,mouseY,this.x-25, this.y-25, 50, 50);
            
    }

}