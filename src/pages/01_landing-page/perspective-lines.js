import {size} from './sketch.js';

export default function (sketch,base_y,numOfLines) {
  
  // fill and stroke
  sketch.stroke(0);
  sketch.strokeWeight(1);
  // math
  const radius = sketch.int(sketch.dist(size.width/2,size.height/2,0,0));
  const step = Math.PI/numOfLines;
  let angle = 0.0;
  // perspective lines
  for(let i = 0; i < numOfLines+1;i++){
    sketch.line(size.width/2, base_y, size.width/2 + sketch.cos(angle) * radius, base_y + sketch.sin(angle) * radius);
    angle += step;
  };
  // horizontal lines
	for(var i = base_y; i < size.height; i += 15){
		sketch.line(0, i, size.width,i);
	}

};
