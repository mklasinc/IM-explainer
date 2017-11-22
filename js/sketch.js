var blocksArray = [];
var value = 0;
//Called once when the page is ready
function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 10; i++){
		var aBlock = new Blocks();
		blocksArray.push(aBlock);
	}
}

//Called every frame after setup is called
function draw() {
	background(value);
	for (var i = 0; i < blocksArray.length; i++){
		blocksArray[i].run();
	}
}

function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
