var $instructions;

function counter_update(){
  console.log('update sketch!');
  var old_counter = sketch_array_counter;
  sketch_array_counter++;
  if(sketch_array_counter == sketch_array.length){
    sketch_array_counter = 0;
  }
  var new_counter = sketch_array_counter;
  text_update(old_counter,new_counter);
}

function text_update(prev_counter,new_counter){
  console.log('prev counter is',prev_counter,'new counter is', new_counter);

  //fade out old
  $instructions.fadeOut();
  setTimeout(function(){
    new_counter === 0 ? $instructions.css('color','white') : $instructions.css('color','black');
    $instructions.text(instructions_array[new_counter]).fadeIn();
  },1000);


  // fade in new
};

var instructions_array = ['Hello there! Move the mouse around and see what it does!','Now click on the canvas and start drawing!'];
$(document).ready(function(){
  $instructions = $('.instructions_text');
  console.log('we have loaded!');

  //fill in text
  $instructions.text(instructions_array[0]);
  $instructions.css('color','white');
  //setTimeout(function(){ $('.instructions_text').text(instructions_array[1]);}, 3000);

  $('#update_button').click(function(){
    //console.log('forward button is pressed!');
    counter_update();
    //text_update();
  });

});

/*<iframe src="./myPage.aspx" id="myIframe" scrolling="no" frameborder="0"
    style="position: relative; height: 100%; width: 100%;">
...
</iframe>*/
