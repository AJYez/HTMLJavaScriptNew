// JavaScript Document
var canvas;
var context;
var timer;
var interval = 1000/60;
var prevX;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	var ball = new GameObject();
	var p1Wins = 0;
	
	//<----------------Ball---------------->
	ball.vx = -5;
	ball.vy = 0;
	//<----------------Player/Paddle---------------->
	player1 = new GameObject();
	player1.color = "red";
	player1.x = 25;
	player1.width = 25;

	timer = setInterval(animate, interval);

	//<----------------Dark Mode---------------->
	var background = new GameObject();
	background.x = 0;
	background.y = 0;
	background.width = 2100;
	background.height = 1600;
	background.color = "white";

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

//<-------------------------------------------------->

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);

	//<----------------Dark Mode---------------->
	if(space)
	{
		background.color = "black";
	}

	//<----------------Player Movement---------------->
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

	//<----------------Player Colors---------------->
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

//<------------------Player Top & Bottom Boundaries------------------>

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

	//<----------------Collision---------------->

	//Player 1
	if(ball.hitTestObject(player1))
	{
		if(ball.y < player1.y - 16 || ball.y > player1.y + 16 || ball.y > player1.y - 16 && ball.y < player1.y +16)
		{
			p1Wins = p1Wins + 1;
		}

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

	//<-------------------------------------------------->
	
	context.save();
	context.restore();

	background.drawRect();
	player1.drawRect();
	ball.drawCircle();

	context.font = "25px Arial";
	context.fillStyle = "black";
	context.fillText(("Score : " + p1Wins), 60, 70);

	context.font = "25px Arial";
	context.fillStyle = "black";
	context.textAlign = "center";
	context.fillText("Match the color of your paddle to the color of the ball!", canvas.width/2, 40);

	context.font = "15px Arial";
	context.fillStyle = "black";
	context.textAlign = "center";
	context.fillText("Left Arrow = Yellow  |  Up Arrow = Red  |  Down Arrow = Blue  |  Right Arrow = Green", canvas.width/2, 70);

	context.font = "15px Arial";
	context.fillStyle = "black";
	context.textAlign = "center";
	context.fillText("For dark mode, press SPACE", canvas.width/2, 95);

	context.font = "25px Arial";
	context.fillStyle = "white";
	context.fillText(("Score : " + p1Wins), 60, 750);
}