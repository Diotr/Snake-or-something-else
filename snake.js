var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//variables for snakes head
var x = canvas.width/2;
var y = canvas.height/2;
var snakeInterval;


//variables for snakes food

var foodX;
var foodY;

var score=0;
var lives=3;

//keyboard input

canvas.onkeydown = function (e) {
    if (e.key === '38' || e.key === 'ArrowDown') {
        e.view.event.preventDefault();
    }
}
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        moveLeft();

    }
    else if (event.keyCode == 39) {
        moveRight();
    }
    else if (event.keyCode == 38) {
        moveUp();
    }
    else if (event.keyCode == 40) {
        moveDown();
    }
}, true);

//call function which returns number of lives, display press start to play or game over
gameInfo();

function gameInfo(){
    document.getElementById("lives").innerHTML=("Lives = "+lives);
    if(score==0||lives==3){
        document.getElementById("gameplayInfo").innerHTML=("Press Start to play!")
    }
    else if(lives==0){
        document.getElementById("gameplayInfo").innerHTML=("GAME OVER!!!")
    }
else{

}
    
}

function draw(a, b) {
    //draw the snake
   if(lives!=0){
       
   
    foodDetection();
    borderDetection()
    context.clearRect(0, 0, canvas.width, canvas.height)
    
    context.fillRect(x, y, 10, 10);
    context.fillStyle = "#0095DD";
    context.fill();
    
   
    var a;
    var b;
    x = x + a;
    y = y + b;
    //draw the food
    context.fillRect(foodX, foodY, 10, 10);
    context.fillStyle = "#0095DD";
    context.fill();

   }
   else{
    context.clearRect(0, 0, canvas.width, canvas.height)

   }
}


function moveUp() {
    clearInterval(snakeInterval);
    snakeInterval = setInterval(draw, 20, 0, -1)
}

function moveDown() {

    clearInterval(snakeInterval);
    snakeInterval = setInterval(draw, 20, 0, 1)
}


function moveLeft() {

    clearInterval(snakeInterval);
    snakeInterval = setInterval(draw, 20, -1, 0)
}

function moveRight() {

    clearInterval(snakeInterval);
    snakeInterval = setInterval(draw, 20, 1, 0)
}

function borderDetection(){

if(x==0||x==canvas.width||y==0||y==canvas.height){
    clearInterval(snakeInterval)
    console.log("game over")
    x = canvas.width/2;
     y = canvas.height/2;
    context.clearRect(0, 0, canvas.width, canvas.height)
    lives--;
    
    gameInfo();
}

}

function start(){
//create random coordinates of food for snake
//starts the game
if(lives>0){
foodX =Math.floor(Math.random() * (canvas.width - 0 + 1) ) + 0;
foodY =Math.floor(Math.random() * (canvas.height - 0 + 1) ) + 0;
console.log("random coord "+foodX+" "+foodY)
if(score<1){
    moveRight();}
}
else document.getElementById("gamelayInfo").innerHTML = ("Game over!!!");
}

function foodDetection(){
    console.log("wąż  "+x+" "+y)
console.log("jedzenie  "+foodX+" "+foodY)
if  ((Math.abs(x - foodX) <= 10)&&(Math.abs(y - foodY) <= 10)){
    score++;
console.log("punkt")
start();
document.getElementById("displayScore").innerHTML=("Score ="+score);

}

}



