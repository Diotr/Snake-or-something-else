var canvas =document.getElementById("myCanvas");
var context =canvas.getContext("2d"); 
//context.fillStyle = "#66ffff";
//context.fillRect(0,0,canvas.width,canvas.height);
var x=10;
var y=30;
//var up=x+4;
//var down =x-4;

function drawSnake(a,b){
    
context.clearRect(0,0,canvas.width,canvas.height)
//context.beginPath();
context.fillRect(x, y, 10, 10);
context.fillStyle = "#0095DD";
context.fill();
//context.closePath();
console.log("x="+x)
if (x==350){
   
    console.log("koniec")
}
var a;
var b;
x=x+a;
y=y+b;

}

        


function moveUp(){ 
    clearInterval(drawSnake);
    setInterval(drawSnake, 100, 0,-5)}

function moveDown(){ 
    
    setInterval(drawSnake, 30,0,3)}