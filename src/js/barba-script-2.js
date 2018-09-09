import 'jquery';
import Barba from 'barba.js';

export default function(){
    var transEffect = Barba.BaseTransition.extend({
        start: function(){
          Promise
            .all([this.newContainerLoading,this.fadeOut()])
            .then(this.fadeIn.bind(this))
        },
        fadeOut: function(){
          return $(this.oldContainer).animate({opacity: 0}, 400).promise();
        },
        fadeIn: function(){
          var self = this;
          var $el = $(this.newContainer);
          $(this.oldContainer).hide();

          $el.css({
            visibility: 'visible',
            opacity: 0
          });

          $el.animate({opacity: 1}, 400, function(){
            self.done();
          })
        }
    });
    Barba.Pjax.getTransition = function() {
      return transEffect;
    }
    Barba.Pjax.start();
  };
