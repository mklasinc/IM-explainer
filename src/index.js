// const css = require('./main.css');
import scss from './main.scss';
import landingPageStyles from './pages/01_landing-page/landing-page.scss';
import CharacterPickStyles from './pages/02_character-pick/character-pick.scss';
import ArticleStyles from './pages/03_article/article.scss';
import {TweenMax, CSSPlugin, TimelineLite, TweenLite} from "gsap/all";


// barba
import barbaBase from './js/barba/barba-config.js';
// import barbaView from './pages/01_landing-page/barba-view-landing.js';

import * as p5 from './js/vendor/p5.js';
import sketch from './pages/01_landing-page/sketch.js';
new p5(sketch, 'canvas-container');

window.onload = function () {
  console.log('hey');
  barbaBase();
};
