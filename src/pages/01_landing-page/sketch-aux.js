var radius;
var noise_start = 0;
// var ridge_base_y = canvas_height/2 + 100; //option 1: perspective lines
var ridge_base_y = canvas_height * 0.75; //option 1: perspective lines
// var ridge_base_y = canvas_height - 50; // option 2: mountains
var horizon_y_offset = 100;
var inc = 0.005;

// perlin noise ridge variables
var c1;
var c2;
var c3;
var r1_c,r1_inc,r1_yoff,r2_c,r2_inc,r3_c,r4_c,r5_c;


var yoff = 0.0;

//gradient variables
var c_white;
var c_transparent;
var Y_AXIS = 1;
var X_AXIS = 2;

// setup

function setup() {

	// if(canvas_width > 1500){
	// 	r1_inc = 0.03;
	// 	r2_inc = 0.04;
	// 	r3_yoff =
	// 	r3_y =
	// 	r4_yoff =
	// 	r4_y =
	// }else{
	// 	r1_inc = 0.05;
	// 	r2_inc = 0.05;
	// 	r3_yoff =
	// 	r3_y =
	// 	r4_yoff =
	// 	r4_y =
	// };

	// c1 = color(79,239,157);
	// c2 = color(79,239,157,150);
	// c3 = color(79,239,157,100);
	// c2 = color('#ffd777');
	// c3 = color('#ff008f');
	// c1 = color('#ff004d');
	c2 = color(255, 215, 119,180);
	c3 = color(255, 0, 143,70);
	c1 = color(255, 0, 77, 255);

	// c_white = color(255,255,255,255);
	// c_transparent = color(0,0,0,0);
	myCanvas = createCanvas(canvas_width , canvas_height);
  myCanvas.parent('canvas-container');
  radius = int(dist(canvas_width/2,canvas_height/2,0,0));

	// setGradient(0, ridge_base_y + 100, width, height/2, c_white, c_transparent, Y_AXIS);
  // rectMode(CENTER);
	fill(color('#2e3192'));
  rect(0,ridge_base_y,canvas_width,canvas_height-ridge_base_y);
	// setGradient(0, ridge_base_y + horizon_y_offset, width, height - ridge_base_y + horizon_y_offset, c_white, c_transparent, Y_AXIS);

	//draw perspective lines
	draw_perspective_lines(ridge_base_y + 10,20);
	// draw_perlin_noise(ridge_y_off, ridge_height, ridge_color,ridge_func,)
	draw_perlin_noise(canvas_height*0.2,canvas_height * 0.45,240,sin,noise_start,0.5); // furthest ridge
	draw_perlin_noise(canvas_height*0.15,canvas_height * 0.5,240,cos,noise_start,0.5); // furthest ridge
	draw_perlin_noise(canvas_height*0.35,canvas_height * 0.05,c3,sin,noise_start); // back ridge
	draw_perlin_noise(canvas_height*0.2,canvas_height * 0.35,c2,cos,noise_start, 1,false,r2_inc); // middle ridges
	draw_perlin_noise(canvas_height*0.01,canvas_height * 0.4,c1,cos,noise_start,0,true,r1_inc); // front ridge
	fill(0);
	// noLoop();

}

// draw

function draw() {
	noise_start += inc;
}


function draw_perspective_lines(base_y,num){
	// stroke(color(0,255,0));
	stroke(255);
	strokeWeight(1);
  let step = PI/num;
  let a = 0.0;
  for(let i = 0; i < num+1;i++){
    line(canvas_width/2, base_y, canvas_width/2 + cos(a) * radius, base_y + sin(a) * radius);
    a += step;
  };

	for(var i = base_y; i < canvas_height; i += 15){
		line(0, i, canvas_width,i);
	}

	//draw horizontal lines
};



// this function draws perlin noise

function draw_perlin_noise(ridge_y_offset,ridge_height,col,sine_func,n_start = 0,start_offset = 0, ridge_flag = false,sine_inc = 0.05){
  beginShape();
  fill(col);
  noStroke();

	var xoff = start_offset
  // Iterate over horizontal pixels
  for (var x = 0; x <= canvas_width + 10; x += 10) {

    var n = map(noise(xoff, n_start), 0, 1, -40,40);
		var s = map(sine_func(xoff),-1,1,0,ridge_height);
		var y = ridge_base_y  - ridge_y_offset - n - s;
    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += sine_inc;
  };

	vertex(canvas_width, ridge_base_y + 30);

	if(ridge_flag){
		console.log("we are called!");
		var xbase_off = 0;
		for (var x = canvas_width; x >= -15; x -= 10) {

			var n = map(noise(xbase_off, n_start), 0, 1, -10,10);
			var newy = ridge_base_y + n + 50;
			// Set the vertex
			vertex(x, newy);
			//console.log(x,newy);
			// Increment x dimension for noise
			xbase_off += 0.05;
		};

	}
  // increment y dimension for noise
  yoff += 0.01;
  // vertex(canvas_width, ridge_base_y + 30);
  vertex(0, ridge_base_y + 30);
	// vertex(canvas_width, canvas_height);
	// vertex(0, canvas_height);
  endShape(CLOSE);
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}
