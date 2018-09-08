import 'jquery';
import Barba from 'barba.js';

export default function (){
    var transEffect = Barba.BaseTransition.extend({
        start: function(){
          Promise
            .all([this.newContainerLoading,this.fadeOut()])
            .then(this.fadeIn.bind(this))
        },
        fadeOut: function(){
          return $(this.oldContainer).animate({opacity: 0}, 800).promise();
        },
        fadeIn: function(){
          var self = this;
          var $el = $(this.newContainer);
          $(this.oldContainer).hide();

          $el.css({
            visibility: 'visible',
            opacity: 0
          });

          $el.animate({opacity: 1}, 500, function(){
            _this.done();
          })
        }
    });

    Barba.Dispatcher.on('linkClicked', function(el, e) {
        // ShowOverlay(e.clientX, e.clientY);
        e.stopPropagation();
        e.preventDefault();
        console.log("link was clicked!");
    });
    Barba.Pjax.getTransition = function() {
      // document.addEventListener('click',function(e){
      //   const $clicked_el = $(e.target);
      //   if ($clicked_el.hasClass('trigger-transition')){
      //     console.log("trigger the transition!");
      //   }
      // });
      return transEffect;
    }
    Barba.Pjax.start();
}
