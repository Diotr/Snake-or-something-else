var canvas =document.getElementById("myCanvas");
var context =canvas.getContext("2d"); 
context.fillStyle = "#66ffff";
context.fillRect(0,0,canvas.width,canvas.height);

var headWidth =40, headHeight = 40,headColor ="#426ef4",headYposition =150, headXposition = 150;
var snake = canvas.getContext("2d");
var directionX;
var directionY;
snake.fillStyle=headColor;
function draw(){
    snake.clearRect(0, 0, canvas.width, canvas.height);
    //context.fillRect(0,0,canvas.width,canvas.height);
    snake.fillRect(headXposition,headYposition,headHeight,headWidth);
    
}

function moveUp(){
//console.log(headYposition+=10)
headYposition-=10;

draw();
}

function moveDown(){
    console.log(headYposition+=10)
  
    
    draw();
    }

    function moveLeft(){
        console.log(headXposition-=10)
       
        
        draw();
        }

        function moveRight(){
            console.log(headXposition+=10)
            
            
            draw();
            }