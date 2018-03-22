const $character_one = $('.character--one'),
      $character_two = $('.character--two'),
      $character_three = $('.character--three'),
      $characters = $('.character'),
    tl = new TimelineLite();

var characters_obj = [
  {
    index: 0,
    el: $character_one
  },
  {
    index: 1,
    el: $character_two
  },
  {
    index: 2,
    el: $character_three
    }
];

const character_css_properties = [
  {
    height: "150px",
    width: "100px",
    opacity:0.5,
    // backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1,
    top: "48%",
    left: "25%"
  },
  {
    height: "240px",
    width: "160px",
    // backgroundColor: "rgba(0,0,0,1)",
    opacity:1,
    zIndex: 2,
    top: "50%",
    left: "50%"

  },
  {
    height: "150px",
    width: "100px",
    // backgroundColor: "rgba(0,0,0,0.7)",
    opacity:0.5,
    zIndex: 1,
    top: "48%",
    left: "75%"
  }
];

// @mixin character-pick-inactive{
//     height: $character-base-height*0.7;
//     width: $character-base-width*0.7;
//     background-color: $character-base-color;
//     top: 50% - $character-inactive-yoffset;
//     z-index: 1;
// }
//
// @mixin character-pick-active{
//   background-color:  $character-active-color;
//   z-index: 2;
// }


function animate_character_test(direction_bool){
  // console.log("called!");
  // if(direction_bool){
  //   // TweenLite.to($character_one,1,character_css_properties[]);
  // }else{
  //   TweenLite.to($character_one,1,{className:"-=character--main"});
  // }

};

function animate_character_positions(obj){
  var anim_duration = 0.3;
  obj.forEach(function(d){
    console.log("animate!", d.index);
    TweenLite.to(d.el,anim_duration,character_css_properties[d.index]);
  });
}

function rotate_characters(direction){
  characters_obj.forEach(function(d,i){
    //update counters
    if(direction === 'left'){
      d.index--;
    }else if(direction === 'right'){
      d.index++;
    };
    // recalibrate indexes
    if(d.index > 2){
      d.index = 0;
    }else if(d.index < 0){
      d.index = 2;
    };
  });
  animate_character_positions(characters_obj);
  // console.log(characters_obj);
}

/*----------- WINDOW ONLOAD ---------*/

$(document).ready(function(){
    console.log("hey there!");
    // animate_character_test();

  // // load chapter data
  // g_chapters = load_json($CHAPTER_FILEPATH);

  $('.carousel-nav__arrow').click(function(e){

    if($(e.target).hasClass('carousel-nav__arrow--character-pick-left')){
      // console.log("left!");
      rotate_characters('left');
      // g_chapter_counter--;
      // chapter_update(g_chapter_counter);
    }else if($(e.target).hasClass('carousel-nav__arrow--character-pick-right')){
      // console.log("right!");
      rotate_characters('right');
      // g_chapter_counter++;
      // chapter_update(g_chapter_counter);
    };
    // if the canvas is active make it inactive
    // var canvas_is_active = get_draw_status;
    // console.log(canvas_is_active);
    // if(get_draw_status() === true){
    //   console.log("deactive the canvas!");
    //   make_canvas_active(false);
    // }

  });
  //
  // // click handler for the experience button
  //
  // $(".lesson__article__button").click(function(e){
  //   // save the index of the currently active lesson, used to active the corresponding p5 sketch
  //   var article_index = $(e.target).data("index");
  //   // console.log("clicked!");
  //   // make canvas active
  //   make_canvas_active(true);
  // });

});
