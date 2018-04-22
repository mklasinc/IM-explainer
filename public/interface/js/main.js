/*----------- GLOBAL VARS ---------*/

const $CHAPTER_FILEPATH = "js/data/lessons.json"; // filepath to json file containing chapter info
var g_chapters;// variable used to store the chapter data
var g_chapter_counter = 0;

/*----------- FUNCTIONS ---------*/

// load and return chapter json data

function load_json(filepath){
  // $.getJSON( filepath, function( data ) {
  //   console.log(data);
  //   return data.all_chapters;
  // });

  $.ajax({
   url: filepath,
   type: 'GET',
   dataType: 'json',
   error: function(err){
  		console.log("Something is wrong...");
  		console.log(err);
   },
  	success: function(data){
  		console.log("Woohoo!");
  		console.log(data);
      g_chapters = data.all_chapters;
   }
  });
};

// update chapter info

function chapter_update(index){
  console.log(index);
  // update lesson description
  Chapter(g_chapters[index],index);
  // update lesson button text
  ChapterButton(g_chapters[index]);
  // when we reach first or last chapter, respectively, hide corresponding arrows
  if(index === g_chapters.length - 1){
    // hide right arrow
    $('.carousel-nav__arrow--right').addClass('hidden');
  }else if(index < 1){
    // hide left arrow
    $('.carousel-nav__arrow--left').addClass('hidden');
  }else{
    // preemptively remove hide classes
    $('.carousel-nav__arrow').removeClass('hidden');
  };
}

function make_canvas_active(display_bool){
  if(display_bool){
    // show canvas container
    $('.canvas').addClass('canvas--active');
    // enable drawing to the canvas
    set_draw_status(true);
  }else{
    // hide canvas container
    $('.canvas').removeClass('canvas--active');
    // disable drawing to the canvas
    set_draw_status(false);

  }
};

function count_images(el){
  var img_array = $(el).find('img');
  console.log(img_array);
  // var img_num = im.length;
  console.log("the number of images is",img_array.length);
  // return img_array;
};

function change_img_sources(el,character){
  var img_array = $(el).find('img');
  console.log(img_array[0]);
  for(var i = 0; i < img_array.length;i++){
    console.log($(img_array[i]).attr('src'));
    var img_index = i + 1;
    var new_src = 'img/lessons/01/' + character + '-chat-0' + img_index + '.png';
    console.log(new_src);
    $(img_array[i]).attr('src',new_src);
  }

};


/*----------- WINDOW ONLOAD ---------*/

$(document).ready(function(){

  // load chapter data
  g_chapters = load_json($CHAPTER_FILEPATH);

  //
  // count_images('.lesson__article');
  change_img_sources('.lesson__article','wiz');

  // set up click handlers for arrow keys

  $('.carousel-nav__arrow').click(function(e){

    if($(e.target).hasClass('carousel-nav__arrow--left')){
      g_chapter_counter--;
      chapter_update(g_chapter_counter);
    }else if($(e.target).hasClass('carousel-nav__arrow--right')){
      g_chapter_counter++;
      chapter_update(g_chapter_counter);
    };
    // if the canvas is active make it inactive
    if(get_draw_status() === true){
      console.log("deactivate the canvas!");
      make_canvas_active(false);
    }

  });

  // click handler for the experience button

  $(".lesson__article__button").click(function(e){
    // save the index of the currently active lesson, used to active the corresponding p5 sketch
    var article_index = $(e.target).data("index");
    // make canvas active
    make_canvas_active(true);
  })

  //

});
