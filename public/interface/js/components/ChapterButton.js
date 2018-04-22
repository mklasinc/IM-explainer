function ChapterButton(d){
  console.log("hello!");

  // extract arguments from the data 
  const button_text = d.button_text;

  // create html string
  if(button_text !== null){
    $(".lesson__article__button").css("opacity",1);
    $(".lesson__article__button").text(button_text);
  }else{
    $(".lesson__article__button").css("opacity",0);
  }

}
