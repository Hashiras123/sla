function preload() {
	mario_gameover = loadSound ("gameover.wav");
	mario_jump = loadSound ("jump.wav");
	mario_coin = loadSound ("coin.wav");
	mario_kick = loadSound ("kick.wav");
	mario_di = loadSound ("mariodi.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	instializeInSetup(mario);
	video = createCappture(VIDEO);
	video.size(800,400);
	video.parent('gameConsole');
	poseNet = ml5.poseNet (video , modelLoaded);
	poseNet.com ('pose', gotPoses);
}

function modelLoaded() {
	console.log ('modelo carregado!');
}

function gotPoses (results) {
	if (results.lenght > 0 ) {
		console.log (results);
		noseX = results [0]. pose.nose.x;
		noseY = results [0]. pose.nose.y;
	}
} 

function draw() {
	game()
}








