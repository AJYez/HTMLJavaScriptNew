// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var prevX;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	var ball = new GameObject();
	
	//<----------------Ball---------------->
	ball.color = "magenta";
    ball.width = 80;
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.vx = 0;
	ball.vy = 5;
	//<----------------Paddle---------------->
	player1 = new GameObject();
	player1.color = "cyan";

	timer = setInterval(animate, interval);

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);

	if(a)
	{
		console.log("Moving Left");
		player1.x += -5;
	}
	if(d)
	{
		console.log("Moving Right");
		player1.x += 5;
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
	if(ball.x >= 960)
	{
        ball.vx = -ball.vx;
	}

	//left wall
	if(ball.x <= 0 - 40)
	{
        ball.vx = -ball.vx;
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
		if(ball.x < player1.x + 41)
		{
		  ball.vx = -5;
		  ball.vy = -5;
		}

		if(ball.x > player1.x + 41)
		{
		  ball.vx = 5;
		  ball.vy = -5;
		}

		if(ball.x > player1.x - 41 && ball.x < player1.x + 41)
		{
		  ball.vy = 5;
		}
	}

	//Update the Screen
	context.save();
	context.beginPath();
	context.lineTo(ball.x, ball.y);
	context.lineTo(player1.x, player1.y);
	context.stroke();

	ball.drawCircle();
	player1.drawRect();
}