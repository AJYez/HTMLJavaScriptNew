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
	ball.vx = 4;
	ball.vy = 4;
	//----------------------------------------------------
	player1 = new GameObject();
	player1.color = "purple";
	player1.x = 25;
	player1.width = 25;

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
	if(ball.x > canvas.width - ball.height/2 + 10)
	{
		ball.vx = -ball.vx;
		ball.color = "red";
	}

	//left wall
	if(ball.x == 0 + ball.height/2 - 10)
	{
		//ball.vx = -ball.vx;
		ball.color = "blue";
	}

	//ceiling
	if(ball.y == 0 + ball.height/2 - 10)
	{
		ball.vy = -ball.vy;
		ball.color = "green";
	}
	
	//floor
	if(ball.y > canvas.height - ball.height/2 + 10)
	{
		ball.vy = -ball.vy;
		ball.color = "yellow";
	}

	//<----------------------------------------------------------------------->

	if(ball.hitTestObject(player1))
	{
		ball.color = "blue";
		ball.vx = -ball.vx;
	}

	//Update the Screen
	ball.drawCircle();
	player1.drawRect();
}