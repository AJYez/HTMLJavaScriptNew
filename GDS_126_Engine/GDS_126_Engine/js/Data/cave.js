var x=false;
var caveData ={
	info:{
		layout:[
			[3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5],
			[2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2,x,x,x,x,2,x,x,x,x,x,x,x,x,x,2],
			[1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1,x,x,x,x,1,x,x,x,x,x,x,x,x,x,1],
			[1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1,x,x,x,x,1,x,x,x,x,x,x,x,x,x,1],
			[1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1,x,x,x,x,1,x,x,x,x,x,x,x,x,x,1],
			[1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1,x,x,x,x,1,x,x,x,x,x,x,x,x,x,1],
			[0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0,x,x,x,x,0,x,x,x,x,x,x,x,x,x,0],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
			
			
		],
		src:`imagesNew/caveTiles.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,7],
			[6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,7,x,x,x,x,6,8,8,8,8,8,8,8,8,8,7],
			[6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,7,x,x,x,x,6,8,8,8,8,8,8,8,8,8,7],
			[6,8,8,8,8,4,4,4,4,4,8,8,8,8,8,8,8,8,8,7,x,x,x,x,6,8,8,8,8,8,8,8,8,8,7],
			[6,8,8,8,8,4,x,x,x,4,8,8,8,8,8,8,8,8,8,7,x,x,x,x,6,8,8,8,8,8,8,8,8,8,7],
			[6,8,8,8,8,4,4,4,4,4,8,8,8,8,8,8,8,8,8,7,x,x,x,x,6,8,8,8,8,8,8,8,8,8,7],
			[6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,7,x,x,x,x,6,8,8,8,8,8,8,8,8,8,7],
			],
			src:`imagesNew/caveTiles.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2,x,x,x,x,2,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
					
					
				],
				src:`images/bg2.png`,
			},
			states:caveData.states
			
			}