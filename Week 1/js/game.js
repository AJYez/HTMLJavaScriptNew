// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	var ball = new GameObject();
	
	
	//------Declare the Player's speed on the x and y axis------
	ball.vx = 2;
	ball.vy = 2;
	//----------------------------------------------------
	player1 = new GameObject();
	player1.color = "purple";
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	ball.move();
	//---------------------------------------------------
	
	//--------------Bounce off Right----------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx;
		ball.color = "red";
	}

	//--------------Bounce off Left----------------------
	if(ball.x == 0 + ball.width/2)
	{
		ball.vx = -ball.vx;
		ball.color = "blue";
	}
	//---------------------------------------------------

	//--------------Bounce off Top----------------------
	if(ball.y == 0 + ball.height/2)
	{
		ball.vy = -ball.vy;
		ball.color = "green";
	}
	//---------------------------------------------------

	//--------------Bounce off Bottom----------------------
	if(ball.y > canvas.height - ball.height/2)
	{
		ball.vy = -ball.vy;
		ball.color = "yellow";
	}
	
	//ball.drawCircle();
	player1.drawRect();
}