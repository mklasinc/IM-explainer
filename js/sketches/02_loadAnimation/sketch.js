var blocksArray = [];
var value = 0;

//Called once when the page is ready
function setup() {
	createCanvas(windowWidth, windowHeight);
}

//Called every frame after setup is called
function draw() {
	background(value);
  value += 0.5;
  if(value >= 255){
    background(255);
  }

}
