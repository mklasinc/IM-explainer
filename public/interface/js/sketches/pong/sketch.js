// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var computer_score = 0;
var player_score = 0;
var my_canvas;

function setup() {
  createCanvas(640,640);
  // my_canvas = createCanvas(window.innerWidth, window.innerHeight*0.95);
  // myCanvas = createCanvas(canvas_width , canvas_height);
  // my_canvas = createCanvas(1000, 800);
  // my_canvas.parent('canvas-container');
  puck = new Puck();
  computer_paddle = new ComputerPaddle(true);
  player_paddle = new Paddle(false);
  puck.reset();
  background(127);
}

function draw() {
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


  fill(255);
  textSize(50);
  textAlign(CENTER);
  text("YOU", width-300, 60);
  text("COMPUTER", 300, 60);
  textSize(32);
  text(this.computer_score, 32, 40);
  text(this.computer_score, 32, 40);
  text(this.player_score, width-64, 40);

}

function keyPressed() {
  console.log("key is pressed!");
  // if (keyCode == UP_ARROW) {
  //     player_paddle.move(-10);
  // } else if (keyCode == DOWN_ARROW) {
  //     player_paddle.move(10);
  // }else{
  //   player_paddle.move(0);
  // }
}
