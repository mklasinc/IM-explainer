import BaseStyles from '../../main.scss';
import CharacterPickStyles from './character-pick.scss';
import CharacterPick from './character-pick.js';
import barbaSetup from '../../js/barba/barba-config.js';
import Barba from 'barba.js';
import 'jquery';

// CharacterPick();

window.onload = barbaSetup;

// document.addEventListener('click',function(e){
//   const $clicked_el = $(e.target);
//   if ($clicked_el.hasClass('trigger-transition')){
//     // console.log(barbaSetup.log_click);
//   }
// });
