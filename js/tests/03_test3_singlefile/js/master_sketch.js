
var g_background_color = 0;

var g_transition = true;

//sketch array global vars
var g_sketch_array = ["draw_blocks","sketch_02.transition","sketch_03","sketch_04"];
var g_sketch_array_counter = 0;

// setup

function setup() {

  // create create
  //
	myCanvas = createCanvas(g_width , g_height*0.95);
  myCanvas.parent('p5_container');

  // instantiate sketches

  instantiate_blocks();

}

// draw

function draw() {

  // call functions
  //console.log('testing if i can access the trace variable: ', sketch_02.mouse_trace);
  //sketch_02["transition"]();

  if(g_sketch_array_counter === 0){
    draw_blocks();
  }else if(g_sketch_array_counter === 1){
    sketch_02.run();
  }else if(g_sketch_array_counter === 2){
    sketch_03.run();
    sketch_02.reset();
  }else if(g_sketch_array_counter === 3){
    sketch_04.run();
  }
  //console.log('we are running');

}
