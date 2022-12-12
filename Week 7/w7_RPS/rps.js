//canvas drawing stuff
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var rock = new Image();
var paper = new Image();
var scissors = new Image();

var wrock = new Image();
var wpaper = new Image();
var wscissors = new Image();

var lrock = new Image();
var lpaper = new Image();
var lscissors = new Image();

rock.src = "images/rock-select.png"
paper.src = "images/paper-select.png"
scissors.src = "images/scissors-select.png" 

wrock.src = "images/rock-win.png"
wpaper.src = "images/paper-win.png"
wscissors.src = "images/scissors-win.png"

lrock.src = "images/rock-lose.png"
lpaper.src = "images/paper-lose.png"
lscissors.src = "images/scissors-lose.png"

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var results = "Select rock, paper, scissors above"

function onKeyDown(e){
    console.log(e.keyCode);
}
function onKeyUp(e){
    if(e.keyCode == 32)
        console.log("You pressed the spacebar");
        gameOver = false;
        draw(rock,paper,scissors,rock,paper,scissors)
}

function draw(rock,paper,scissors,crock,cpaper,cscissors){
    if(gameOver == true){
        //drawing the fonts
        ctx.font = "40px Arial";
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "yellow";
        ctx.textAlign = "center";
        ctx.fillText("Welcome to the RPS Game", canvas.width/2, 280);
        ctx.fillText("Press Space to Start", canvas.width/2, 320);
        ctx.strokeText("Welcome to the RPS Game", canvas.width/2, 280);
    }
    else{

        ctx.save();
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "pink";
        ctx.fillText("Player Choice", canvas.width/2, 100);
        ctx.drawImage(rock, canvas.width/2 - rock.width/2 - 100, 150);
        ctx.drawImage(paper, canvas.width/2 - paper.width/2, 150);
        ctx.drawImage(scissors, canvas.width/2 - scissors.width/2 + 100, 150);
        //computer choices
        ctx.fillText("Computer Choice", canvas.width/2, 325);
        ctx.drawImage(crock, canvas.width/2 - rock.width/2 - 100, 375);
        ctx.drawImage(cpaper, canvas.width/2 - paper.width/2, 375);
        ctx.drawImage(cscissors, canvas.width/2 - scissors.width/2 + 100, 375);

        ctx.fillText(results, canvas.width/2, 525);
        ctx.restore();
    }

}

//alert("Select Rock, Paper, or Scissors!");
var rps = ["Rock!","Paper!","Scissors!"];
console.log(rps[0]);

document.getElementById("rock").addEventListener('click',function(e){
//alert("You picked "+rps[0]);
playgame(rps[0]);
});

document.getElementById("paper").addEventListener('click',function(e){
//alert("You picked "+rps[1]);
playgame(rps[1]);
});

document.getElementById("scissors").addEventListener('click',function(e){
//alert("You picked "+rps[2]);
playgame(rps[2]);
});

function playgame(playerChoice){
    if(gameOver == true){
        return;
    }
    else{
        var cpuChoice = Math.floor(Math.random()*2.99);
        console.log(cpuChoice, playerChoice);
        switch(playerChoice){
            case "Rock!":
                if(cpuChoice == 0){
                    //rock
                    //alert("CPU chose Rock. It's a tie.")
                    results = "CPU chose Rock. It's a tie.";
                    draw(hrock,paper,scissors,hrock,paper,scissors);
                }
                else if(cpuChoice == 1){
                    //paper
                    //alert("CPU chose Paper. You Lose.")
                    results = "CPU chose Rock. You Lose.";
                    draw(hrock,paper,scissors,rock,hpaper,scissors);
                }
                else{
                    //scissors
                    //alert("CPU chose Scissors. You Win!")
                    results = "CPU chose Scissors. You Win!";
                    draw(hrock,paper,scissors,rock,paper,hscissors);
                }
            break;
    
            case "Paper!":
                if(cpuChoice == 0){
                    //rock
                    //alert("CPU chose Rock. You Win!")
                    results = "CPU chose Rock. You Win!";
                    draw(rock,hpaper,scissors,hrock,paper,scissors);
                }
                else if(cpuChoice == 1){
                    //paper
                    //alert("CPU chose Paper. It's a tie.")
                    results = "CPU chose Paper. It's a tie";
                    draw(rock,hpaper,scissors,rock,hpaper,scissors);
                }
                else{
                    //scissors
                    //alert("CPU chose Scissors. You Lose.")
                    results = "CPU chose Scissors. You Lose";
                    draw(rock,hpaper,scissors,rock,paper,hscissors);
                }
            break;
    
            case "Scissors!":
                if(cpuChoice == 0){
                    //rock
                    //alert("CPU chose Rock. You Lose.")
                    results = "CPU chose Rock. You Lose.";
                    draw(rock,paper,hscissors,hrock,paper,scissors);
                }
                else if(cpuChoice == 1){
                    //paper
                    //alert("CPU chose Paper. You Win!")
                    results = "CPU chose Rock. You Win!";
                    draw(rock,paper,hscissors,rock,hpaper,scissors);
                }
                else{
                    //scissors
                    //alert("CPU chose Scissors. It's a tie.")
                    results = "CPU chose Scissors. It's a tie.";
                    draw(rock,paper,hscissors,rock,paper,hscissors);
                }
            break;
        }
    }
}