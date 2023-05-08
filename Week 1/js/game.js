// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var prevX;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	var ball = new GameObject();
	
	//------Declare the Player's speed on the x and y axis------
	ball.vx = -5;
	ball.vy = 0;
	//----------------------------------------------------
	player1 = new GameObject();
	player1.color = "purple";
	player1.x = 25;
	player1.width = 25;

	player2 = new GameObject();
	player2.color = "yellow";
	player2.x = 1000;
	player2.width = 25;

	timer = setInterval(animate, interval);

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
		console.log("Moving Up");
		player2.y += -5;
	}
	if(ArrowDown)
	{
		console.log("Moving Down");
		player2.y += 5;
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

	if(player2.y <= 0 + 50)
	{
		player2.y = 50;
	}
	
	if(player2.y >= 800 - 50)
	{
		player2.y = 750;
	}

//<----------------Ball Boundaries---------------->

	ball.move();

	//right wall
	if(ball.x >= 1050)
	{
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
	}

	//left wall
	if(ball.x <= 0 - 50)
	{
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
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
		ball.color = "purple";
		if(ball.y < player1.y - 16)
		{
		  ball.vx = 5;
		  ball.vy = -5;
		}

		if(ball.y > player1.y + 16)
		{
		  ball.vx = 5;
		  ball.vy = 5;
		}

		if(ball.y > player1.y - 16 && ball.y < player1.y +16)
		{
		  ball.vx = 5;
		}
	}

		//Player 2
		if(ball.hitTestObject(player2))
		{
			ball.color = "yellow";
			if(ball.y < player2.y - 16)
			{
			  ball.vx = -5;
			  ball.vy = -5;
			}
	
			if(ball.y > player2.y + 16)
			{
			  ball.vx = -5;
			  ball.vy = 5;
			}
	
			if(ball.y > player2.y - 16 && ball.y < player2.y +16)
			{
			  ball.vx = -5;
			}
		}

	//Update the Screen
	ball.drawCircle();
	player1.drawRect();
	player2.drawRect();
}