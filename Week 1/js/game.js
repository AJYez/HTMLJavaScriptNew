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
		p1Wins = p1Wins + 1;
	}

	//left wall
	if(ball.x <= 0 - 50)
	{
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
		p2Wins = p2Wins + 1;
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
	context.save();
	context.strokeStyle = "dark gray";
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, 800);
	context.closePath();
	context.lineWidth = "5px";
	context.stroke();
	context.restore();

	//ball.drawCircle();
	player1.drawRect();
	player2.drawRect();

	context.drawImage(ric, ball.x - 60, ball.y - 53, 120, 103);

	context.font = "25px Arial";
	context.fillStyle = "black";
	context.textAlign = "center";
	context.fillText("Player 1  |  Player 2", canvas.width/2, 40);
	context.fillText((p1Wins + "                 " + p2Wins), canvas.width/2, 70);
}