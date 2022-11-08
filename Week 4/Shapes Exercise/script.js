var canvas = document.getElementById("canvas");

var ctx = canvas.getContext('2d');

//Square
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = "5";

ctx.fillRect(85,301,100,100);
ctx.strokeRect(85,301,100,100);

//Circle
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.arc(385,441,67,0,(2*Math.PI),true);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Line
ctx.strokeStyle = "rgb(255,0,0)";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.lineTo(86,680);
ctx.lineTo(279,549);
ctx.stroke();

//Pentagon
ctx.fillStyle = "#ff00ff";
ctx.strokeStyle = "#00ffff";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.lineTo(558,309);
ctx.lineTo(666,283);
ctx.lineTo(724,379);
ctx.lineTo(651,463);
ctx.lineTo(548,419);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Star
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "rgb(32,32,32)";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.lineTo(635,496);
ctx.lineTo(669,552);
ctx.lineTo(731,567);
ctx.lineTo(689,614);
ctx.lineTo(694,680);
ctx.lineTo(637,654);
ctx.lineTo(578,679);
ctx.lineTo(583,616);
ctx.lineTo(541,569);
ctx.lineTo(603,555);
ctx.lineTo(635,496);
ctx.closePath();
ctx.fill();
ctx.stroke();