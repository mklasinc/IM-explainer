var sketch_03 = {
  
  run_setup: true,
  setup: function(){
    if(this.run_setup){
      //do setup
      console.log("setting up!");
      //console.log(this.run_setup);

      this.run_setup = false;
    };

  },
  draw: function(){
    var r = random(255);
    var g = random(255);
    var b = random(255);
    background(r,g,b);
  },

  run: function(){
    if(this.run_setup){this.setup()};
    this.draw();
  }



}
