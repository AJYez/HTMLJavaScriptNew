var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);

var jwfont = new FontFace(jwfont,url(fonts/Compacta.ttf));
jwfont.load().then(function(font){
  document.fonts.add(font);
  console.log("Font loaded");
});

var start = 50;
var finish = 876;
var carPos = 2;
var speed = 3;
var carWidth = 115;

var startFuel = randomNumber(canvas.width,600);
var fuel = startFuel;
var fuelBarWidth = 400;
var gameOver = true;

var seconds = 3;
var fps = 60;
var frames = fps;

//load game sprites
var carSprite = new Image();
carSprite.src = "images/car.png";

var viggoCarSprite = new Image();
viggoCarSprite.src = "images/viggoCar.png";

var helipad = new Image();
helipad.src = "images/helipad.png";

var water = new Image();
water.src = "images/water.png";

var road = new Image();
road.src = "images/road.png";

carSprite.onload = function(){
    main();
}

viggoCarSprite.onload = function(){
    main();
}

helipad.onload = function(){
    main();
}

//add some event listensers
document.addEventListener("keydown",keyPressDown);

function keyPressDown(e){
    if(e.keyCode == 32 && gameOver){
        gameOver = false
    }
    if(fuel <= 0){
        //restart game
        restartGame();
    }
}

function main(){

    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(gameOver){
        ctx.fillStyle = "black";
        ctx.font = "30px jwfont";
        ctx.textAlign = "center";
        ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2);
    }else{

        if(!gameOver && seconds > 0){
            runStartTimer();
            drawStartTimer();
        }else{
            if(fuel > 0){
                carPos += speed;
                fuel -= speed;
            }
        }

        drawWater();
        drawRoad();
        drawStartFinish();
        drawHelipad();
        drawCar();
        drawViggo();
    
        drawFuelBar();
        if(carPos + carWidth > finish || fuel<=0){
            drawResults();
        }
    }

    timer = requestAnimationFrame(main);
}

function drawStartFinish(){
    ctx.fillStyle = "purple";
    //start line
    ctx.fillRect(start,50,10,668);
    //finish line
    ctx.fillRect(finish,50,10,668);
}

function drawCar(){
    //draw a car
    ctx.drawImage(carSprite,carPos,canvas.height/2,carWidth,40);
}
function drawViggo(){
    ctx.drawImage(viggoCarSprite,carPos+145,canvas.height/2+35,120,40)
}
function drawHelipad(){
    ctx.drawImage(helipad,900,canvas.height/2,100,40)
}
function drawWater(){
    ctx.drawImage(water,0,0,1024,300)
}
function drawRoad(){
    ctx.drawImage(road,0,290,1024,300)
}

function drawFuelBar(){
    var currentBarWidth = fuelBarWidth * (fuel/startFuel);
    ctx.fillStyle = "orange";
    ctx.fillRect(start,30,fuelBarWidth,10);
    ctx.font = "25px Arial";
    ctx.fillText("Fuel",start,25);

    if(fuel>0){
        ctx.fillStyle = "green";
        ctx.fillRect(start,30,currentBarWidth,10);
    }
}

function drawResults(){
    if(carPos + carWidth> finish){
        ctx.fillStyle = "purple";
        ctx.font = "25px Arial";
        ctx.textAlign = "center";
        ctx.fillText("You made it to the finish . . . You Win!",canvas.width/2, canvas.height/2)
    }else{
        ctx.fillStyle = "purple";
        ctx.font = "25px Arial";
        ctx.textAlign = "center";
        ctx.fillText("You ran out of fuel . . . You Lose",canvas.width/2, canvas.height/2)
    }
}

function restartGame(){
    location.reload();
}

function runStartTimer(){
    frames -= 1;
    if(frames < 0){
        frames = fps
        seconds -= 1;
    }
}

function drawStartTimer(){
    ctx.fillStyle = "black";
    ctx.font = "25px Arial";
    ctx.textAlign = "center";
    ctx.fillText(seconds,canvas.width/2, canvas.height/2)
}

function randomNumber(high,low){
    return Math.round(Math.random() * (high-low)+low)
}