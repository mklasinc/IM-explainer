var sketch_04 = {

  // sketch variables

  run_setup: true, // setup boolean
  x: 1000/2,
  y: 800/2,

  //run function, called from the master sketch

  run: function(){
    if(this.run_setup){this.setup()};
    this.draw();
  },

  // setup function

  setup: function(){

  },

  render: function(){
    stroke(0);
    point(this.x,this.y);
  },

  step: function() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,1000-1);
    this.y = constrain(this.y,0,800-1);
  },

  //draw function

  draw: function(){
    this.step();
    this.render();

  }

}
