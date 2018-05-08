
  var song_array = [],
  active_key = "",
  show_keys = false,
  myCanvas;

  function setup(){
    myCanvas = createCanvas(640,480);
    myCanvas.parent('canvas-container');
    for(var i = 0; i < 10; i++){
      song_array[i] = loadSound("sounds/sound" + (i+1) + ".wav");
    };
    textSize(500);
  }

  // draw function

  function draw(){
    background(105);

    fill(245, 123, 158);

    if(show_keys){
      noStroke();
      textSize(300);
      textAlign(CENTER,CENTER);
      text(active_key, width/2,height/2)
    };
  }

  // key press functionality

  function keyPressed(){
    // console.log("key is pressed");
    show_keys = true;
    var ascii_adj_index = keyCode - 48;
    if(ascii_adj_index >= 0 && ascii_adj_index < 10){
      active_key = ascii_adj_index;
      song_array[ascii_adj_index].play();
    }
  }
