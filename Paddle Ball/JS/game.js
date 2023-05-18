var canvas;
var context;
var timer;
var interval = 1000/60;
var prevX;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	var img=document.getElementById("ric");
	var ball = new GameObject();
	
	//------Declare the Player's speed on the x and y axis------
	ball.vx = 0;
	ball.vy = 5;
	ball.color = "magenta";
	ball.width = 40;
	//----------------------------------------------------
	player1 = new GameObject();
	player1.color = "cyan";
	player1.width = 250;
	player1.height = 40;
	player1.y = 550;

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
	if(ball.x >= 1050)
	{
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
	}

	//left wall
	if(ball.x <= 0 - 20)
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
		if(ball.x < player1.x - 16)
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

	//Update the Screen
	context.save();

	context.beginPath();
	context.lineTo(ball.x, ball.y);
	context.lineTo(player1.x, player1.y);
	context.stroke();

	ball.drawCircle();
	player1.drawRect();
}