var $INSTRUCTIONS;
var g_width;
var g_height;

var INSTRUCTIONS_ARRAY = [
  'Hello there! This is the first sketch',
  'Now click on the canvas and start drawing!',
  'This is the third sketch',
  'This is the fourth sketch'
];

function counter_update(){
  console.log('update sketch!');
  var old_counter = g_sketch_array_counter;
  g_sketch_array_counter++;
  if(g_sketch_array_counter == g_sketch_array.length){
    g_sketch_array_counter = 0;
  }
  var new_counter = g_sketch_array_counter;
  text_update(old_counter,new_counter);
}

function text_update(prev_counter,new_counter){
  console.log('prev counter is',prev_counter,'new counter is', new_counter);

  //fade out old
  $INSTRUCTIONS.fadeOut();
  setTimeout(function(){
    new_counter === 0 ? $INSTRUCTIONS.css('color','white') : $INSTRUCTIONS.css('color','black');
    $INSTRUCTIONS.text(INSTRUCTIONS_ARRAY[new_counter]).fadeIn();
  },1000);


  // fade in new
};


$(document).ready(function(){
  $INSTRUCTIONS = $('.instructions_text');
  console.log('we have loaded!');
  g_width = $( window ).width();
  g_height = $( window ).height();
  //fill in text
  $INSTRUCTIONS.text(INSTRUCTIONS_ARRAY[0]);
  $INSTRUCTIONS.css('color','white');
  //setTimeout(function(){ $('.instructions_text').text(INSTRUCTIONS_ARRAY[1]);}, 3000);

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
