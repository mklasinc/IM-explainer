function change_to_black(){

  if(transition){
    background(value);
    value += 6;
    if(value >= 255){
      value = 255;
      mouse_trace = true;
      transition = false;
    }
  }

 if (mouseIsPressed){
   console.log('mouse is dragged!');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
