var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var score = 0;
var highScore = 0;
var currentState = 0;
var gameState = [];

//asteroids
var numAsteroids = 30;
var asteroids = [];

//player ship
var ship = new PlayerShip();
ship.src = "images/playership.png"

ship.onload = function(){
    main();
}

document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);

function pressKeyDown(e){
    if(!gameOver){

       //WASD
        if(e.keyCode == 87){
        //code for up W/up
        ship.up = true;
        }
        if(e.keyCode == 65){
        //code for up A/left
        ship.backward = true;
        }
        if(e.keyCode == 68){
        //code for up D/right
        ship.forward = true;
        }
        if(e.keyCode == 83){
        //code for up S/down
        ship.down = true;
        }

        //Arrows
        if(e.keyCode == 38){
        //code for up 
        ship.up = true;
        }
        if(e.keyCode == 37){
        //code for up left
        ship.backward = true;
        }
        if(e.keyCode == 39){
        //code for up right
        ship.forward = true;
        }
        if(e.keyCode == 40){
        //code for up down
        ship.down = true;
        }     
    }

    //menu inputs for spacebar
    if(gameOver){
        if(e.keyCode == 32){
            if(currentState == 2){
                //game over inputs
                currentState = 0;
                numAsteroids = 30;
                asteroids = [];
                score = 0;
                //start game here
                main();
                gameStart();
            }else{
                //main menu inputs
                gameStart();
                currentState = 1;
                gameOver = false;
                main();
                scoreTimer();
            }
        }
    }

}
function pressKeyUp(e){
    if(!gameOver){
        //WASD
        if(e.keyCode == 87){
        //code for up W/up
        ship.up = false;
        }
        if(e.keyCode == 65){
        //code for up A/left
        ship.backward = false;
        }
        if(e.keyCode == 68){
        //code for up D/right
        ship.forward = false;
        }
        if(e.keyCode == 83){
        //code for up S/down
        ship.down = false;
        }

        //Arrows
        if(e.keyCode == 38){
        //code for up 
        ship.up = false;
        }
        if(e.keyCode == 37){
        //code for up A/left
        ship.backward = false;
        }
        if(e.keyCode == 39){
        //code for up D/right
        ship.forward = false;
        }
        if(e.keyCode == 40){
        //code for up S/down
        ship.down = false;
        }        
    }
}

//asteroid class
function Asteroid(){
    //properties to draw the asteroid
    this.radius = randomRange(15,2);
    this.x = randomRange(canvas.width-this.radius , this.radius) + canvas.width;
    this.y = randomRange(canvas.height-this.radius , this.radius);
    this.vx = randomRange(-6,-3);
    this.color = "white";

    //methods(functions) to draw asteroid
    this.drawAsteroid = function(){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}

//Player Class
function PlayerShip(){
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 20;
    this.height = 20;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;
    this.flameLength = 30;

    this.drawShip = function(){
        ctx.save();
        ctx.translate(this.x,this.y);

        //draw thruster
        if(this.up || this.down || this.forward){
            ctx.save();
            if(this.flameLength == 30){
                this.flameLength = 20;
                ctx.fillStyle = "white";
            }else{
                this.flameLength = 30;
                ctx.fillStyle = "lightblue";
            }
            //draw flame
            ctx.beginPath();
            ctx.moveTo(0,this.flameLength);
            ctx.lineTo(5,5);
            ctx.lineTo(-5,5);
            ctx.lineTo(0,this.flameLength);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

            //draw ship
            drawShip();
        }
    }

    this.moveShip = function(){
        this.x += this.vx;
        this.y += this.vy;

        //bottom boundary
        if(this.y > canvas.height - this.height/2){
            this.y = canvas.height - this.height/2;
            this.vy = 0;
        }

        //top boundary
        if(this.y < this.height/2){
            this.y = this.height/2;
            this.vy = 0;
        }
        //right boundary
        if(this.x > canvas.width - this.width/2){
            this.x = canvas.width - this.width/2;
            this.vx = 0;
        }
        //left boundary
        if(this.x < this.width/2){
            this.x = this.width/2;
            this.vx = 0;
        }
    }

}

function main(){
    //clear the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);

    gameState[currentState]();
    if(!gameOver){
    //refresh
    timer = requestAnimationFrame(main);
    }
}

//game states

//main menu
gameState[0] = function(){
    ctx.save();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2 - 30);
    ctx.restore();
}

//play game
gameState[1] = function(){
    //draw score
    ctx.save();
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(`Score : ${score}`, canvas.width -150 , 30)
    ctx.restore();

    //vertical
    if(ship.up){
        ship.vy = -5;
    }else{
        ship.vy = 0;
    }
    if(ship.down){
        ship.vy = 5;
    }

    //horizontal
    if(ship.backward){
        ship.vx = -5;
    }else{
        ship.vx = -3;
    }

    if(ship.forward){
        ship.vx = 5;
    }

    for(var i = 0; i<asteroids.length; i++){
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var distance = Math.sqrt((dX*dX) + (dY*dY));

        //collision detection
        if(detectCollision(distance, (ship.height/2 + asteroids[i].radius))){
            gameOver = true;
            currentState = 2;
            main();
            return;
        }

        if(asteroids[i].x > canvas.width + asteroids[i].radius){
            asteroids[i].y = randomRange(canvas.height + asteroids[i].radius, asteroids[i].radius);
            asteroids[i].x = randomRange(canvas.width + asteroids[i].radius, asteroids[i].radius) + canvas.width;
        }

        asteroids[i].x += asteroids[i].vx;
        asteroids[i].drawAsteroid();
    }

    //draw the ship
    ship.moveShip();
    drawShip();

    //adds asteroids over time
    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid());
    }
}

//game over
gameState[2] = function(){
    if(score > highScore){
        highScore = score;

        ctx.save();
        ctx.font = "30px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center";
        ctx.fillText("Game Over, Your Score : " + score.toString(), canvas.width/2, canvas.height/2 - 60);
        ctx.fillText("Your New High Score : " + highScore.toString(), canvas.width/2, canvas.height/2 - 30);
        ctx.fillText("New Record!", canvas.width/2, canvas.height/2);
        ctx.font = "15px Arial";
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20);
        ctx.restore();

    }else{
        //game over menu
        ctx.save();
        ctx.font = "30px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center";
        ctx.fillText("Game Over, Your Score : " + score.toString(), canvas.width/2, canvas.height/2 - 60);
        ctx.fillText("Your High Score : " + highScore.toString(), canvas.width/2, canvas.height/2 - 30);
        ctx.font = "15px Arial";
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20);
        ctx.restore();   
    } 
}

//utility

function drawShip(){
    ctx.drawImage(ship,80,80,80,80)
}

function gameStart(){
    //for loop
    for(var i = 0; i<numAsteroids; i++){
    asteroids[i] = new Asteroid();
    }

    ship = new PlayerShip();
}

function randomRange(high,low){
    return Math.random() * (high-low) + low
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}

function scoreTimer(){
    if(!gameOver){
        score++;

        if(score %5 == 0){
            numAsteroids += 5;
            console.log(numAsteroids);
        }
        //calls scoreTimer every second
        setTimeout(scoreTimer, 1000);
    }
}