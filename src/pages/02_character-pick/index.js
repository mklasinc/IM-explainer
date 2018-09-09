import BaseStyles from '../../main.scss';
import CharacterPickStyles from './character-pick.scss';
import CharacterPick from './character_pick.js';
import barbaSetup from '../../js/barba-script-2.js';
// import Barba from 'barba.js';
import 'jquery';

window.onload = function(){
  $('a').click(function(e){
    console.log('again, link was clicked');
    setTimeout(function(){
      console.log('nothing');
    }, 1000);
    // e.preventDefault();
    // e.stopPropagation();
  });
  barbaSetup();
  CharacterPick();


};

document.addEventListener('click',function(e){
  const $clicked_el = $(e.target);
  if ($clicked_el.hasClass('trigger-transition')){
    console.log("trigger the transition!");
    // console.log(barbaSetup.log_click);
  }
});
