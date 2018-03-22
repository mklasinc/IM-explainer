function Chapter(d,i){
  console.log("hello!");
  // extract arguments
  const chapter_title = d.chapter_title,
        chapter_number = d.chapter_number,
        chapter_description = d.chapter_description;
        navbar_items = $(".navbar__item");

  // create html string
  $(".lesson__sidebar__number").text(chapter_number);
  $(".lesson__article__title").text(chapter_title);
  $(".lesson__article__description").text(chapter_description);
  // $navbar_items[i].text('hello');
  $(".navbar__item").removeClass('navbar__item--active');
  $(navbar_items[i]).addClass('navbar__item--active');
  $(navbar_items[i]).data( "index", i );

}
