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
    width: "120px",
    opacity:0.5,
    // backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1,
    top: "48%",
    left: "20%"
  },
  // main
  {
    height: "250px",
    width: "200px",
    // backgroundColor: "rgba(0,0,0,1)",
    opacity:1,
    zIndex: 2,
    top: "50%",
    left: "50%",
    onCompleteParams: ['.character.active',1,0.1],
    onComplete: animate_character_speech_bubble

  },
  {
    height: "150px",
    width: "120px",
    // backgroundColor: "rgba(0,0,0,0.7)",
    opacity:0.5,
    zIndex: 1,
    top: "48%",
    left: "80%"
  }
];

function animate_character_speech_bubble(el,new_opacity,new_delay = 0){
  console.log("called!");
  let $speech_bubble = $(el).find('.speech-bubble');
  TweenLite.to($speech_bubble,0.1,{opacity:new_opacity,delay:new_delay});
}

function animate_character_positions(obj){
  let anim_duration = 0.3;
  animate_character_speech_bubble('.character',0,0);
  obj.forEach(function(d,i){
    console.log("animate!", d.index);
    $(d.el).removeClass('active');
    $(d.el).addClass('inactive');
    TweenLite.to(d.el,anim_duration,character_css_properties[d.index]);
    if(d.index == 1){
      $(d.el).removeClass('inactive');
      $(d.el).addClass('active');
    }
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

    }else if($(e.target).hasClass('carousel-nav__arrow--character-pick-right')){
      // console.log("right!");
      rotate_characters('right');
    };

  });

  // character click handlers

  $('.character').click(function(e){
    // if the character you click on is currently active you have picked it as your guide

    if($(e.target).parent().hasClass('active')){
        // find the chosen character and its corresponding speech bubble
        let $guide = $(e.target).parent();
        let $speech_bubble = $guide.find('.speech-bubble');
        console.log("you've picked your guide!");
        // update the character's speech bubble attribute
        $speech_bubble.attr('data-chat',"Yes! You picked the right one!");
        // fade out the other two characters
        TweenLite.to($('.character.inactive'),0.5,{opacity:0});
        // fade out the arrows
        TweenLite.to($('.carousel-nav--character-pick'),0.3, {opacity:0});
        //fade out the title
        TweenLite.to($('.title-container'),0.3, {opacity:0});
        // make the current character bigger;
        TweenLite.to($guide, 0.5, {scale:1.2});
        // show the guide's speech bubble
        TweenLite.to($speech_bubble, 0.5, {opacity:1});
    }
    // if(){
    //   console.log("you picked your guide!");
    // }

  });



});
