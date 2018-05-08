// sketch variables
  var run_setup = true, // setup boolean
      formResolution = 15,
      stepSize = 2,
      distortionFactor = 1,
      initRadius = 150,
      centerX = 0,
      centerY = 0,
      x = new Array(formResolution),
      y = new Array(formResolution),
      filled = false,
      freeze = false,
      myCanvas;

  // setup function

  function setup(){
      myCanvas = createCanvas(640,480);
      myCanvas.parent('canvas-container');
      smooth();
      centerX = width/2;
      centerY = height/2;
      var angle = radians(360/formResolution);
      for (var i=0; i<formResolution; i++){
        x[i] = cos(angle*i) * initRadius;
        y[i] = sin(angle*i) * initRadius;
      }
      stroke(0, 50);
      background(255);
  };

  //draw function

  function draw(){
    // background(255);
    if (mouseX != 0 || mouseY != 0) {
      centerX += (mouseX-centerX) * 0.01;
      centerY += (mouseY-centerY) * 0.01;
    }

    // calculate new povars
    for (var i=0; i<formResolution; i++){
      x[i] += random(-stepSize,stepSize);
      y[i] += random(-stepSize,stepSize);
      // ellipse(x[i], y[i], 5, 5);
    }

    strokeWeight(0.75);
    if (filled) fill(random(255));
    else noFill();

    beginShape();

    // start controlpovar
    curveVertex(x[formResolution-1]+centerX, y[formResolution-1]+centerY);
    // only these povars are drawn
    for (var i=0; i<formResolution; i++){
      curveVertex(x[i]+centerX, y[i]+centerY);
    }
    curveVertex(x[0]+centerX, y[0]+centerY);

    // end controlpovar
    curveVertex(x[1]+centerX, y[1]+centerY);
    endShape();
    //this.check_mouse_press();
  }
