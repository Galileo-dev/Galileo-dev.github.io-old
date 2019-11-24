
const TOTAL = 500;
let spritesheet;
let reload;
let birds = [];
let savedBirds = [];
let pipes = [];
let isPaused = false
var menu
var PipeTiming
var bgImg;
var size = 0.6; 
var timer;
var timerStr;
var miliseconds;
var seconds;
var minutes;
let counter = 0;
let cycles = 100
let slider;
let radio;

function preload()
{
    
    
    bgImg = loadImage('/assets/bg.png')
        sprite = loadImage('/assets/bird_bigger.png')
        TopPipe = loadImage("/assets/top.png")
        BottomPipe = loadImage("/assets/bottom.png")
    
    
    reload = loadImage("/assets/reload.png")
    
   
    GameFont = loadFont('/assets/fonts/gamer_2/Gamer.ttf');
    
}

function setup() 
{
 
    radio = createRadio();
    radio.option('Original', 1);
    radio.option('Polution', 2);
    radio.style('width', '60px');
    radio.value('1') 
    radio.style('width', '60px');
    textAlign(CENTER);
    startStopwatch();
    

 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
   

    var cnv = createCanvas(360+(360 * size), 640+(360 * size));
    
    cnv.parent('sketch-holder')
   var x = (windowWidth - width) / 2;
   var y = (windowHeight - height) / 2;
   cnv.position(x, y);
    
    slider = createSlider(1, 100, 1)
   
    
  
    resetSketch();
   
}

function resetSketch(){
   
//======stop======

resetStopwatch();
startStopwatch();

//=========Bird==========
    


for(let i = 0; i < TOTAL; i++){
    birds[i] = new Bird(sprite)
}

//========Pipes==========

   
  //   PipeTiming = setInterval(addPipe ,3000);
//========ResetMenu=========

    menu = new ResetMenu();


 //===============Calculate Time==========================
    
 

}

// function addPipe(){
//         pipes.push(new Pipe());   
// }



    

  
  
function draw()
{
    
    

    for(let n = 0; n < slider.value(); n++){
    if(counter % 210 == 0){
        pipes.push(new Pipe());  
    }
    counter++
  

    //=================Game====================
    
     
    
 

   
    for(var i = pipes.length-1; i >=0; i--) {
        pipes[i].move();



        for(let j = birds.length -1; j >= 0; j--){
            if(pipes[i].hits(birds[j])){
        
            savedBirds.push(birds.splice(j,1)[0]);
          
        }
        }


        if(pipes[i].offscreen()){
            pipes.splice(i, 1);
        }
    }

    for(let i = birds.length -1; i >= 0; i--){
        if(birds[i].offScreen()){
        savedBirds.push(birds.splice(i,1)[0]);
      
    }
    }

    for(let bird of birds){
    bird.think(pipes)
    if(!isPaused)bird.move();
    }
    
    if(birds.length === 0) {
        counter = 0
        nextGeneration();
        pipes = []
    }
    }

    //===============All the drawing stuff ==========================
    background(bgImg, 10, 10)

   for (let bird of birds){
       bird.show();
   }

   for (let pipe of pipes){
       pipe.show()
   }

   if(radio.value() === '1'){
    bgImg = loadImage('/assets/bg.png')
    sprite = loadImage('/assets/bird_bigger.png')
    TopPipe = loadImage("/assets/top.png")
    BottomPipe = loadImage("/assets/bottom.png")
    }else if (radio.value() === '2'){
    bgImg = loadImage('/assets/ClimateChange/polution.gif')
    BottomPipe = loadImage("/assets/ClimateChange/SwageTop.png")
    TopPipe = loadImage("/assets/ClimateChange/SwageBottom.png")
    }
     //=======================Text-Score===========================

    // score =  10;

    
    // push();
    //  fill("white");
    //  textFont(GameFont);
    //  stroke("black");
    //  strokeWeight(7);
    //  textSize(50);
    //  text(`Score: ${score}`, 12, 2, 200, 50);
    // pop();
    
}


   


// function keyPressed(){
//     if (key == " "){
//         bird_1.jump()
//         console.log("jump")
//     }
    
//     if(isPaused && key == " "){
//         console.log("reset")
//         resetSketch();
//         pipes = []
//         isPaused = false;
//         bird_1.jump()
//     }
 
// }

// function mousePressed(){
//     if(menu.hover_reset()){
//         console.log("pressed")
//         resetSketch();
//         pipes = []
//         isPaused = false;
        
        
        
//     }
// }




   

