var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

//Array of words
var rps = [];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    ctx.font = "30px Impact";
    ctx.fillText((rps[pChoice] + " | " + rps[cChoice]), 418, 50);

    ctx.font = "30px Impact";
    ctx.fillText(`Refresh to Play Again!`, 360, 500);

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                ctx.fillStyle = "gray"
                ctx.font = "30px Impact";
                ctx.fillText(`You Tied`, 435, 280);
            }
            else if(cChoice === 1)
            {
                //display a loss
                ctx.fillStyle = "red"
                ctx.font = "30px Impact";
                ctx.fillText(`You Lost`, 440, 280);
            }
            else
            {
                //display a win
                ctx.fillStyle = "green"
                ctx.font = "30px Impact";
                ctx.fillText(`You Win!`, 438, 280);
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a win
                    ctx.fillStyle = "green"
                    ctx.font = "30px Impact";
                    ctx.fillText(`You Win!`, 438, 280);
                }
                else if(cChoice === 1)
                {
                    //display a tie
                    ctx.fillStyle = "gray"
                    ctx.font = "30px Impact";
                    ctx.fillText(`You Tied`, 435, 280);
                }
                else
                {
                    //display a loss
                    ctx.fillStyle = "red"
                    ctx.font = "30px Impact";
                    ctx.fillText(`You Lost`, 440, 280);
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a loss
                    ctx.fillStyle = "red"
                    ctx.font = "30px Impact";
                    ctx.fillText(`You Lost`, 440, 280);
                }
                else if(cChoice === 1)
                {
                    //display a win
                    ctx.fillStyle = "green"
                    ctx.font = "30px Impact";
                    ctx.fillText(`You Win!`, 438, 280);
                }
                else
                {
                    //display a tie
                    ctx.fillStyle = "gray"
                    ctx.font = "30px Impact";
                    ctx.fillText(`You Tied`, 435, 280);
                }
             break;
    }
}
