import 'jquery';
import Barba from 'barba.js';

export const ArticlePage = Barba.BaseView.extend({
  namespace: 'article',
  onEnter: function () {
    // The new Container is ready and attached to the DOM.
    console.log(this.namespace, ' is attached');
  },
  onEnterCompleted: function () {
    // The Transition has just finished.
    console.log(this.namespace, ' is loaded and ready to go');
    const tourGuide = $('.barba-container').data('tourguide');
    console.log('our tourguide is', tourGuide);
    const images = $('.lesson__article__image');
    // console.log(typeof images);
    for(let i of images){
      // console.log(i.src);
      if(tourGuide){
        i.src = i.src.replace('$1', tourGuide);
      } else {
        i.src = i.src.replace('$1', 'grace');
      }

    };
    // images.forEach(img => {
    //   console.log(img.src);
    // });
  },
  onLeave: function () {
    // A new Transition toward a new page has just started.
    console.log(this.namespace, ' is leaving');
  },
  onLeaveCompleted: function () {
    // The Container has just been removed from the DOM.
    console.log(this.namespace, ' leave is completed');
  }
});
