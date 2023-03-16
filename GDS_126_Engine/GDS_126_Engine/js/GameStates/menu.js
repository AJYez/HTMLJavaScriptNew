/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:298, height:102, spriteData:buttonData}).makeSprite(buttonData);
startButton.x = 750;
startButton.y = 370;

//startButton.img.src="imagesNew/Button.png"
startButton.width=298;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "imagesNew/MainMenu.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play(`music`,1)
		}

		//Hover Effect Graffic
		startButton.changeState('hover')
	}
	else
	{
		//Default Button Graphic
		startButton.changeState('idle')
	}
	
	menuBackground.drawStaticImage();
	startButton.render('drawSprite')
}
	
	
