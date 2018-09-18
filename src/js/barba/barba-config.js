import 'jquery';
import Barba from 'barba.js';
import { LandingPageView } from '../../pages/01_landing-page/barba-view-landing.js';
import { CharacterPage } from '../../pages/02_character-pick/barba-view-character.js';
import { ArticlePage } from '../../pages/03_article/barba-view-article.js';

let tourGuide = null;

export default function () {
  LandingPageView.init();
  CharacterPage.init();
  ArticlePage.init();

  // capture the right click event and pass it to the last page
  Barba.Dispatcher.on('linkClicked', function(el,e) {
    console.log('we got clicked and our tourguide is!', $(el).data('tourguide'));
    var $clickedItem = $(el);
    if($clickedItem.hasClass('tourGuide')){
      tourGuide = $(el).data('tourguide');
    };
  });

  Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
    console.log('new container is', container);
    $(container).data("tourguide", tourGuide);
  });

  var transEffect = Barba.BaseTransition.extend({
    start: function () {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },
    fadeOut: function () {
      return $(this.oldContainer).animate({ opacity: 0 }, 400).promise();
    },
    fadeIn: function () {
      var self = this;
      var $el = $(this.newContainer);
      $(this.oldContainer).hide();

      $el.css({
        visibility: 'visible',
        opacity: 0
      });

      $el.animate({ opacity: 1 }, 400, function () {
        self.done();
      });
    }
  });
  Barba.Pjax.getTransition = function () {
    return transEffect;
  };
  Barba.Pjax.start();
};
