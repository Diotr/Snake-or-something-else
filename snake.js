var canvas =document.getElementById("myCanvas");
var context =canvas.getContext("2d"); 
//context.fillStyle = "#66ffff";
//context.fillRect(0,0,canvas.width,canvas.height);
var x=10;
var y=30;
var snakeInterval;


function drawSnake(a,b){
    
context.clearRect(0,0,canvas.width,canvas.height)
//context.beginPath();
context.fillRect(x, y, 10, 10);
context.fillStyle = "#0095DD";
context.fill();
//context.closePath();
console.log("x="+x)
console.log("y="+y)
if (x==350){
   
    console.log("koniec")
}
var a;
var b;
x=x+a;
y=y+b;

}

        


function moveUp(){ 
    clearInterval(snakeInterval);
    snakeInterval=setInterval(drawSnake, 100, 0,-5)}

function moveDown(){ 
    
    clearInterval(snakeInterval);
    snakeInterval=setInterval(drawSnake, 100, 0,5)}

   
    function moveLeft(){ 
    
        clearInterval(snakeInterval);
        snakeInterval=setInterval(drawSnake, 100, -5,0)}

        function moveRight(){ 
    
            clearInterval(snakeInterval);
            snakeInterval=setInterval(drawSnake, 100, 5,0)}
    