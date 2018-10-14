import $ from 'jquery';

// this class creates chapter descriptions
function Chapter (d, i) {
    console.log("called!");
    // extract arguments from the data object
    const chapter_title = d.chapter_title,
        chapter_number = d.chapter_number,
        chapter_description = d.chapter_description,
        navbar_items = $(".navbar__item");

    //empty the html content of the article container
    $(".lesson__article__description").html('');

    // create html string
    $(".lesson__sidebar__number").text(chapter_number);
    $(".lesson__article__title").text(chapter_title);
    $(".lesson__article__description").text(chapter_description);
    $(".navbar__item").removeClass('navbar__item--active');
    $(navbar_items[i]).addClass('navbar__item--active');
    $(navbar_items[i]).data("index", i);

}
