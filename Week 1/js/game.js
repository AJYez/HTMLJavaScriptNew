var canvas;
var context;
var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	

var player1 = new GameObject();

new GameObject()
{
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	this.width = 100;
	this.height = 100;
	
	this.vx = 0;
	this.vy = 0;
	
	this.color = "#ff0000";

	this.drawRect = function()
	{
		context.save();
		context.fillStyle = this.color;
		context.translate(this.x, this.y);
		context.fillRect((this.width/2), (this.height/2), this.width, this.height);
		context.restore();	
	}
}