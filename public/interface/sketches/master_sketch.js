// global variables

var g_num_of_sketches = 3; //number of sketches
var g_sketch_array_counter = 0; // counter used to loop through the sketches
var g_background_color = 0;
var g_transition = true;

// canvas variables
var canvas_width = $('#canvas-container').width();
var canvas_height = $('#canvas-container').height();
var draw_on_canvas = false;


// setup

function setup() {

	myCanvas = createCanvas(canvas_width , canvas_height);
  myCanvas.parent('canvas-container');

}

// draw

function draw() {
	if(draw_on_canvas){
		// draw_active_sketch();
		// sketch_04.run();
		sketch_02.run();
	}

}

function draw_active_sketch(){

	if(g_chapter_counter === 1){
    sketch_02.run();
		sketch_01.reset();
  }else if(g_chapter_counter === 2){
		sketch_01.reset();
    sketch_03.run();

  }else if(g_chapter_counter === 3){
    sketch_01.run();
  }

}

function set_draw_status(status_bool){
	draw_on_canvas = status_bool;
}

function get_draw_status(){
	return draw_on_canvas;
}

// key presses

function keyPressed() {

  if(g_sketch_array_counter === 2){
    sketch_03.key_press();
  }

}
