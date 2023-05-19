// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000 / 60;
var prevX;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
var ball = new GameObject();
var score = 0;
var gravity = 1;
var friction = 0.9;

//<----------------Ball---------------->
ball.color = "magenta";
ball.width = 80;
ball.height = 80;
ball.x = canvas.width / 2;
ball.y = canvas.height / 2;
ball.vx = 0;
ball.vy = 5;
ball.force = 5;
//<----------------Paddle---------------->
player1 = new GameObject();
player1.color = "cyan";
player1.y = 550;
player1.width = 250;
player1.height = 40;

timer = setInterval(animate, interval);

function animate() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	if (a) {
		console.log("Moving Left");
		player1.vx += player1.ax * -player1.force;
	}
	if (d) {
		console.log("Moving Right");
		player1.vx += player1.ax * player1.force;
	}
	player1.vx *= friction;
	player1.x += player1.vx;

	//<----------------Grav & Friction---------------->
	ball.vy += gravity;
	ball.vy *= friction;

	//<------------------Paddle Boundaries------------------>

	if (player1.x <= 120) {
		player1.x = 120;
	}

	if (player1.x >= 875) {
		player1.x = 875;
	}

	//<----------------Ball Boundaries---------------->

	ball.move();

	//right wall
	if (ball.x >= 960) {
		ball.vx = -ball.vx;
	}

	//left wall
	if (ball.x <= 35) {
		ball.vx = -ball.vx;
	}

	//ceiling
	if (ball.y < 0 + ball.height / 2 + 10) {
		ball.vy = -ball.vy;
	}

	//floor
	if (ball.y > canvas.height - ball.height / 2) {
		ball.vy = -ball.vy;
		ball.y = canvas.height - ball.height / 2;
		score = 0;
	}

	//<----------------------------------------------------------------------->

	//Player 1
	if (ball.hitTestObject(player1)) {
		score++;
		ball.vy = -35;

		//Left Outer Sixth---------->
		if (ball.x < player1.x - 82) {
			ball.vx = (-ball.force * 5);
		}

		//Left Inner Sixth---------->
		if (ball.x > player1.x - 82 && ball.x < player1.x - 41) {

			ball.vx = (-ball.force);
		}

		//Right Outer Sixth---------->
		if (ball.x > player1.x + 82) {
			ball.vx = (ball.force * 5);
		}

		//Right Inner Sixth---------->
		if (ball.x < player1.x + 82 && ball.x > player1.x + 41) {
			ball.vx = (ball.force);
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

	context.font = "16px Arial";
	context.fillStyle = "dark gray";
	context.fillText(("Score : " + score), 80, 25);
}