var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);
var x = 100;
var y = 300;
var speedX = 1;
var speedY = 1;

var dvd = new Image();
dvd.src = "images/dvd.png";
dvd.onload = function(){
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
    ctx.drawImage(dvd,x,y,110,80)
    x+=speedX;
    y+=speedY;
    if(x>canvas.width-90 || x<0){
        speedX*=-1;
    }
    if(y>canvas.height-55 || y<0){
        speedY*=-1
    }
    console.log(speedX);
    timer = requestAnimationFrame(main);
}