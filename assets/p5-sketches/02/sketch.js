// sketch variables

  var run_setup = true, // setup boolean
      computer_score = 0,
      player_score = 0,
      myCanvas;

  // setup function, called once

  function setup(){
      myCanvas = createCanvas(540,300);
      myCanvas.parent('canvas-container');
      puck = new Puck();
      computer_paddle = new ComputerPaddle(true);
      player_paddle = new Paddle(false);
      puck.reset();
  };

  // draw function

  function draw(){
    background(0);

    puck.checkPaddleRight(player_paddle);
    puck.checkPaddleLeft(computer_paddle);

    computer_paddle.show();
    player_paddle.show();
    computer_paddle.update();
    computer_paddle.move_to_puck(puck.y);
    player_paddle.update();

    puck.update();
    puck.edges();
    puck.show();


    // fill(255);
    // textSize(50);
    // textAlign(CENTER);
    // text("YOU", width-300, 60);
    // text("COMPUTER", 300, 60);
    // textSize(32);
    // text(computer_score, 32, 40);
    // text(computer_score, 32, 40);
    // text(player_score, width-64, 40);

    if (keyIsPressed === true) {
      if (keyCode == UP_ARROW) {
          player_paddle.move(-10);
      } else if (keyCode == DOWN_ARROW) {
          player_paddle.move(10);
      }
    }else{
      player_paddle.move(0);
    }
  };
