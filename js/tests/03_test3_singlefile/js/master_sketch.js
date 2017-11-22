var blocksArray = [];
var value = 0;
var mouse_trace = false;
var transition = true;
//Called once when the page is ready
function instantiate_blocks(){
  for (var i = 0; i < 10; i++){
		var aBlock = new Blocks();
		blocksArray.push(aBlock);
	};
};

function draw_blocks(){
  background(0);
  for (var i = 0; i < blocksArray.length; i++){
    blocksArray[i].run();
  };
};

var sketch_array = ["draw_blocks","change_to_black"];
var sketch_array_counter = 0;

function setup() {

	myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('p5_container');

  //instantiate blocks
  instantiate_blocks();

}

//Called every frame after setup is called
function draw() {
	//draw_blocks();
  window[sketch_array[sketch_array_counter]]();

}
