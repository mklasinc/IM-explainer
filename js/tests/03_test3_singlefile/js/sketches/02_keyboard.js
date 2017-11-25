var sketch_02 = {

  mouse_trace: false,
  transition: false,



  draw: function(){
    console.log(this.mouse_trace);
    //transition
    if(!this.transition){
      background(g_background_color);
      g_background_color += 6;
      if(g_background_color >= 255){
        g_background_color = 255;
        this.mouse_trace = true;
        this.transition = true;
      }
    };

    //line trace
    if(mouseIsPressed && this.mouse_trace){
      line(mouseX, mouseY, pmouseX, pmouseY);
    };
  },

  run: function(){
    this.draw();
  },

  reset: function(){
    this.mouse_trace = false;
    this.transition = false;
  }

}
