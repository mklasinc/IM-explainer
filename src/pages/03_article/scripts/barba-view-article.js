import $ from 'jquery';
import Barba from 'barba.js';
import Article from './article.js';

export const ArticlePage = Barba.BaseView.extend({
    namespace : 'article',
    onEnter   : function () {
    // The new Container is ready and attached to the DOM.
        console.log(this.namespace, ' is attached');
    },
    onEnterCompleted : function () {

        // The Transition has just finished.
        // console.log(this.namespace, ' is loaded and ready to go');
        // console.log('our tourguide is', tourGuide);

        // fetch tourguide data and update image links
        const tourGuide = $('.barba-container').data('tourguide');
        const images = $('.lesson__article__image');
        for (const i of images) {
            i.src = tourGuide !== null ? i.src.replace('$1', tourGuide) : i.src.replace('$1', 'grace');
        };

        Article();

    },
    onLeave : function () {
    // A new Transition toward a new page has just started.
        console.log(this.namespace, ' is leaving');
    },
    onLeaveCompleted : function () {
    // The Container has just been removed from the DOM.
        console.log(this.namespace, ' leave is completed');
    }
});
