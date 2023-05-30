// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var prevX;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	var img=document.getElementById("ric");
	var ball = new GameObject();
	var p1Wins = 0;
	var p2Wins = 0;
	
	//------Declare the Player's speed on the x and y axis------
	ball.vx = -5;
	ball.vy = 0;
	//----------------------------------------------------
	player1 = new GameObject();
	player1.color = "red";
	player1.x = 25;
	player1.width = 25;

	timer = setInterval(animate, interval);

	//<----------------Ball Colors---------------->

function colorChange()
{
	var numColor = Math.floor(Math.random() * 4) + 1;

	if(numColor == 1)
	{
		ball.color = "red";
	}
	if(numColor == 2)
	{
		ball.color = "blue";
	}
	if(numColor == 3)
	{
		ball.color = "yellow";
	}
	if(numColor == 4)
	{
		ball.color = "green";
	}
}

setInterval(colorChange, 2000);

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);

	if(w)
	{
		console.log("Moving Up");
		player1.y += -5;
	}
	if(s)
	{
		console.log("Moving Down");
		player1.y += 5;
	}

	if(ArrowUp)
	{
		console.log("Red");
		player1.color = "red";
	}
	if(ArrowDown)
	{
		console.log("Blue");
		player1.color = "blue";
	}
	if(ArrowLeft)
	{
		console.log("Yellow");
		player1.color = "yellow";
	}
	if(ArrowRight)
	{
		console.log("Green");
		player1.color = "green";
	}
	
//<------------------Paddle Top & Bottom Boundaries------------------>

	if(player1.y <= 0 + 50)
	{
		player1.y = 50;
	}
	
	if(player1.y >= 800 - 50)
	{
		player1.y = 750;
	}

//<----------------Ball Boundaries---------------->

	ball.move();

	//right wall
	if(ball.x >= 985)
	{
		ball.vx = -ball.vx;
	}

	//left wall
	if(ball.x <= 0 - 50)
	{
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
		p1Wins = 0;
	}

	//ceiling
	if(ball.y == 0 + ball.height/2 + 10)
	{
		ball.vy = -ball.vy;
	}
	
	//floor
	if(ball.y > canvas.height - ball.height/2)
	{
		ball.vy = -ball.vy;
	}

	//<----------------------------------------------------------------------->

	//Player 1
	if(ball.hitTestObject(player1))
	{
		p1Wins = p1Wins + 1;

		if(ball.y < player1.y - 16)
		{
			if(ball.color == player1.color)
			{
				ball.vx = 5;
				ball.vy = -5;
			}
		}

		if(ball.y > player1.y + 16)
		{
			if(ball.color == player1.color)
			{
				ball.vx = 5;
				ball.vy = 5;
			}
		}

		if(ball.y > player1.y - 16 && ball.y < player1.y +16)
		{
			if(ball.color == player1.color)
			{
				ball.vx = 5;
			}
		}
	}

	//Update the Screen
	context.save();
	/*context.strokeStyle = "dark gray";
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, 800);
	context.closePath();
	context.lineWidth = "5px";
	context.stroke();*/
	context.restore();

	//ball.drawCircle();
	player1.drawRect();
	ball.drawCircle();

	context.font = "25px Arial";
	context.fillStyle = "black";
	context.fillText(("Score : " + p1Wins), 50, 70);

	context.font = "25px Arial";
	context.fillStyle = "black";
	context.textAlign = "center";
	context.fillText("Match the color of your paddle to the color of the ball!", canvas.width/2, 40);

	context.font = "15px Arial";
	context.fillStyle = "black";
	context.textAlign = "center";
	context.fillText("Left Arrow = Yellow  |  Up Arrow = Red  |  Down Arrow = Blue  |  Right Arrow = Green", canvas.width/2, 70);

	console.log(ball.color);
	console.log(numColor);
}