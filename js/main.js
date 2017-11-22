var sketch_array = ['js/sketches/02_loadAnimation/index.html','js/sketches/02_loadAnimation/index.html','js/sketches/01_intro/index.html'];

var sketch_array_counter = 0;
var my_iframe;

function sketch_update(){
  sketch_array_counter++;
  if(sketch_array_counter == sketch_array.length){
    sketch_array_counter = 0;
  };
  console.log('we are displaying sketch with the index', sketch_array_counter);
  $('#myIframe').attr('src',sketch_array[sketch_array_counter]);
};

$(document).ready(function(){
  $('iframe').load(function(){
    console.log('we have also loaded!');
  });

  console.log('we have loaded!');
  my_iframe = '<iframe src="js/sketches/02_loadAnimation/index.html" id="myIframe" scrolling="no" frameborder="0" style="position: relative; height: 100%; width: 100%">';
  $(my_iframe).appendTo('#p5_container').focus();

  $('#forward_button').click(function(){
    //console.log('forward button is pressed!');
    sketch_update();
  });

});

/*<iframe src="./myPage.aspx" id="myIframe" scrolling="no" frameborder="0"
    style="position: relative; height: 100%; width: 100%;">
...
</iframe>*/
