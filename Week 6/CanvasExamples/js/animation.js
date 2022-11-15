var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);
var x = 220;
var y = 230;
var speedX = 1;
var speedY = 1;

var mm = new Image();
mm.src = "images/NB.png";
mm.onload = function(){
    main();
}

var bg = new Image();
bg.src = "images/galaxy.jpg"
bg.onload = function(){
    main();
}

function main(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
    /*
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x,300,20,0,2*Math.PI,true);
    ctx.fill();
    */
    //draw sprite image
    ctx.drawImage(mm,x,y,90,140)
    x+=speedX;
    y+=speedY;
    if(x>canvas.width-90 || x<0){
        speedX*=-1;
    }
    if(y>canvas.height-140 || y<0){
        speedY*=-1
    }
    console.log(speedX);
    timer = requestAnimationFrame(main);
}