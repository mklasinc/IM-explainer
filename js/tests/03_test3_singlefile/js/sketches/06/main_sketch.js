var sketch_06 = {

  song_array: [],
  active_key: 0,
  show_keys: false,

  run_setup: true,
  setup: function(){
    for(var i = 0; i < 10; i++){
      this.song_array[i] = loadSound("assets/sound" + (i+1) + ".wav");
    };
    textSize(250);
    this.run_setup = false;
  },

  draw: function(){
    background(255);

    fill(245, 123, 158);

    if(this.show_keys){
      textAlign(CENTER);
      text(this.active_key, width/2,height/2)
    };
  },

  key_press: function(){
    this.show_keys = true;
    var ascii_adj_index = keyCode - 48;
    if(ascii_adj_index >= 0 && ascii_adj_index < 10){
      this.active_key = ascii_adj_index;
      this.song_array[ascii_adj_index].play();
    }

  },

  run: function(){
    if(this.run_setup){
      this.setup()
    };
    this.draw();
  }

}
