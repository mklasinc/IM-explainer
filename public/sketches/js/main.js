var instructions_array;
var $instructions;
var g_width; // used in the master p5 sketch
var g_height; // used in the master p5 sketch


function counter_update(up){
  //console.log('update sketch!');
  var old_counter = g_sketch_array_counter;
  if(up){
    g_sketch_array_counter++;
    if(g_sketch_array_counter == g_num_of_sketches){
      g_sketch_array_counter = 0;
    }
  }else{
    g_sketch_array_counter--;
    if(g_sketch_array_counter < 0){
      g_sketch_array_counter = g_num_of_sketches-1;
    }
  }
  var new_counter = g_sketch_array_counter;
  instructions_update(old_counter,new_counter);
}

function instructions_setup(){

  $.get("js/assets/instructions/instructions.txt",function(data){
    console.log(data);
    instructions_array = data.trim().split('\n');
    $instructions = $('.instructions_text');
    $instructions.text(instructions_array[0]);
    setTimeout(function(){
      $instructions.fadeOut();
    },3000);
  });

}

function instructions_update(prev_counter,new_counter){

  //hide old instructions
  $instructions.hide();
  // fade in new instructions
  setTimeout(function(){
    new_counter === 1 ? $instructions.css({"color":"white","background-color":"black"}) : $instructions.css({"color":"black","background-color":"none"});
    $instructions.text(instructions_array[new_counter]).fadeIn();
    setTimeout(function(){
      $instructions.fadeOut();
    },3000);
  },1000);

};

// document on load

$(document).ready(function(){

  console.log('we have loaded!');
  g_width = $( window ).width();
  g_height = $( window ).height();

  instructions_setup();

  $('.update_button').click(function(e){
    var move_on = e.target.id === "forward_button" ? true : false;
    counter_update(move_on);
  });

});
