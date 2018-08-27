import {size} from './sketch.js';

// export default function (ridge_y_offset,ridge_height,col,sine_func,n_start = 0,start_offset = 0, ridge_flag = false,sine_inc = 0.05){
export default function (sketch, ridge) {

  // fill
  sketch.fill(...ridge.color);
  sketch.noStroke();

  //shape
  sketch.beginShape();
  // params
	let perlinXoff = ridge.offset.perlin.x;
  let perlinYoff = ridge.offset.perlin.y;
  const ridgeBase = size.height * 0.75;
  const ridgeHeight = size.height * ridge.height;
  const ridgeYoff = size.height * ridge.offset.base.y;


  // Iterate over horizontal pixels
  for (let x = 0; x <= size.width + 10; x += 10) {
    let noise = sketch.map(sketch.noise(perlinXoff, perlinYoff), 0, 1, -40,40);
    let oscillation = ridge.oscillation.function == 'sine' ? sketch.sin(perlinXoff) : sketch.cos(perlinXoff);
		oscillation = sketch.map(oscillation,-1,1,0,ridgeHeight);
		let y = ridgeBase  - ridgeYoff - noise - oscillation;
    // Set the vertex
    sketch.vertex(x, y);
    // Increment x dimension for noise
    perlinXoff += ridge.oscillation.increment;
  };

	sketch.vertex(size.width, ridgeBase + 30);

	if(ridge.flag){
		let xBaseOff = 0;
		for (let x = size.width; x >= -15; x -= 10) {

			let n = sketch.map(sketch.noise(xBaseOff, perlinYoff), 0, 1, -10,10);
			let newy = ridgeBase + n + 50;
			// Set the vertex
			sketch.vertex(x, newy);
			// Increment x dimension for noise
			xBaseOff += 0.05;
		};

	};

  // increment y dimension for noise
  perlinYoff += 0.01;
  // vertex(canvas_width, ridge_base_y + 30);
  sketch.vertex(0, ridgeBase + 30);
	// vertex(canvas_width, canvas_height);
	// vertex(0, canvas_height);
  sketch.endShape();
}
