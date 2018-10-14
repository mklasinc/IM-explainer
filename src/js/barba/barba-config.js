/*
This script uses Barba.js (http://barbajs.org/) to handle page transitions - it is used in all pages (i.e. landing page, character page, article page)
By default, the script is responsible for fade-in and fade-out transitions between pages.
Also, while the user is on the character pick page, this script captures the users choice of the tourguide and passes that data to the article page
*/

// dependencies
import $ from 'jquery';
import Barba from 'barba.js';
// page views --> see http://barbajs.org/views.html to learn more
import { LandingPageView } from '../../pages/01_landing-page/scripts/barba-view-landing.js';
import { CharacterPage } from '../../pages/02_character-pick/scripts/barba-view-character.js';
import { ArticlePage } from '../../pages/03_article/scripts/barba-view-article.js';

let tourGuideName = null; // name of the tour guide character picked by the user (used in the character page)

// barba transitions configuration --> see http://barbajs.org/transition.html to learn more
export default function () {

    // set up page views
    LandingPageView.init();
    CharacterPage.init();
    ArticlePage.init();

    // capture the click event on the "character pick" page and pass tour guide character name data to the main article page
    Barba.Dispatcher.on('linkClicked', function (el, e) {
        var $clickedItem = $(el);
        if ($clickedItem.hasClass('tourGuide')) {
            tourGuideName = $(el).data('tourguide');
        };
    });

    // when the new page is ready, pass the tourguide
    Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
        $(container).data("tourguide", tourGuideName);
    // console.log('new container is', container);
    });

    // fade-in/-out transition effect --> see http://barbajs.org/transition.html
    var transEffect = Barba.BaseTransition.extend({
        start : function () {
            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
        },
        fadeOut : function () {
            return $(this.oldContainer).animate({ opacity: 0 }, 400).promise();
        },
        fadeIn : function () {
            var self = this;
            var $el = $(this.newContainer);
            $(this.oldContainer).hide();

            $el.css({
                visibility : 'visible',
                opacity    : 0
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
