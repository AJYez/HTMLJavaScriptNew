//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

//drawing the fonts
ctx.font = "40px Arial";
ctx.fillStyle = "blue";
ctx.strokeStyle = "yellow";
ctx.fillText("Welcome to the RPS Game", 125, 280);
ctx.strokeText("Welcome to the RPS Game", 125, 280);

//alert("Select Rock, Paper, or Scissors!");
var rps = ["Rock!","Paper!","Scissors!"];
console.log(rps[0]);

document.getElementById("rock").addEventListener('click',function(e){
alert("You picked "+rps[0]);
playgame(rps[0]);
});

document.getElementById("paper").addEventListener('click',function(e){
alert("You picked "+rps[1]);
playgame(rps[1]);
});

document.getElementById("scissors").addEventListener('click',function(e){
alert("You picked "+rps[2]);
playgame(rps[2]);
});

function playgame(playerChoice){
    var cpuChoice = Math.floor(Math.random()*2.99);
    console.log(cpuChoice, playerChoice);
    switch(playerChoice){
        case "Rock!":
            if(cpuChoice == 0){
                //rock
                alert("CPU chose Rock. It's a tie.")
            }
            else if(cpuChoice == 1){
                //paper
                alert("CPU chose Paper. You Lose.")
            }
            else{
                alert("CPU chose Scissors. You Win!")
            }
        break;

        case "Paper!":
            if(cpuChoice == 0){
                //rock
                alert("CPU chose Rock. You Win!")
            }
            else if(cpuChoice == 1){
                //paper
                alert("CPU chose Paper. It's a tie.")
            }
            else{
                alert("CPU chose Scissors. You Lose.")
            }
        break;

        case "Scissors!":
            if(cpuChoice == 0){
                //rock
                alert("CPU chose Rock. You Lose.")
            }
            else if(cpuChoice == 1){
                //paper
                alert("CPU chose Paper. You Win!")
            }
            else{
                alert("CPU chose Scissors. It's a tie.")
            }
        break;
    }
}