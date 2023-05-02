// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	var ball = new GameObject();
	
	
	//------Declare the Player's speed on the x and y axis------
	ball.vx = 4;
	ball.vy = 4;
	//----------------------------------------------------
	player1 = new GameObject();
	player1.color = "purple";
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
	
//<----------------------------------------------------------------------->

	if(player1.y <= 0 + 50)
	{
		player1.y = 50;
	}
	
	if(player1.y >= 800 - 50)
	{
		player1.y = 750;
	}

//<----------------------------------------------------------------------->

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

	obj1 = player1;
	obj2 = ball;

	obj1.leftSide = function(){return player1.x - player1.width/2};
	obj1.rightSide = function(){return player1.x + player1.width/2};
	obj1.topSide = function(){return player1.y - player1.height/2};
	obj1.bottomSide = function(){return player1.y + player1.height/2};

	obj2.leftSide = function(){return ball.x - ball.width/2};
	obj2.rightSide = function(){return ball.x + ball.width/2};
	obj2.topSide = function(){return ball.y - ball.height/2};
	obj2.bottomSide = function(){return ball.y + ball.height/2};

function hitTestObject(obj1, obj2)
	{
 		if( obj1.leftSide() < obj2.rightSide() &&
    	obj1.rightSide() > obj2.leftSide() &&
    	obj1.topSide() < obj2.bottomSide() &&
    	obj1.bottomSide() > obj2.topSide() )
    	{
      		return true;
    	}
 		return false;
	}

	if(hitTestObject(obj1, obj2))
	{
		ball.vx = -ball.vx;
		ball.vy = -ball.vy;
	}
	
	ball.drawCircle();
	player1.drawRect();
}