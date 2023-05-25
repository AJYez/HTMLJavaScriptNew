//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var teleport;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 200;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";
		
	platform1 = new GameObject();
		platform1.width = 230;
		platform1.x = 500;
		platform1.y = 650;
		platform1.color = "#66ff33";

	platform2 = new GameObject();
		platform2.width = 200;
		platform2.x = 850;
		platform2.y = 750;
		platform2.color = "#66ff33";

	platform3 = new GameObject();
		platform3.width = 200;
		platform3.x = 220;
		platform3.y = 180;
		platform3.color = "#66ff33";

	platform4 = new GameObject();
		platform4.width = 200;
		platform4.height = 10;
		platform4.x = 550;
		platform4.y = 250;
		platform4.color = "purple";

	platform5 = new GameObject();
		platform5.width = 150;
		platform5.x = canvas.width - 50;
		platform5.y = 200;
		platform5.color = "#66ff33";

	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});

	teleport = new GameObject({width:50, height:50, x:850, y:650, color:"yellow"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}


	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}


	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}


	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}

	while(platform5.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		
	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		context.textAlign = "center";
		context.drawText("You Win!!!", canvas.width/2, canvas.height/2);
	}

	if(player.hitTestObject(teleport))
	{
		player.x = 220;
		player.y = 130;
	}

	if(player.hitTestObject(platform4))
	{
		player.x = canvas.width - 50;
		player.y = -500;
	}
	
	teleport.drawCircle();
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();
	platform5.drawRect();

	//Show hit points
	player.drawRect();
	goal.drawCircle();
}

