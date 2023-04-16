var canvas;
var context;

timer = setInterval(animate, interval);

var player1 = new GameObject();

new GameObject()
{
    this.drawRect = function()
	{
		context.save();
		context.fillStyle = this.color;
		context.translate(this.x, this.y);
		context.fillRect((this.width/2), (this.height/2), this.width, this.height);
		context.fill();
		context.restore();	
	}
}