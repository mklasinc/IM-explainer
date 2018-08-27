// const css = require('./main.css');
import scss from './main.scss';
import landingPageStyles from './pages/01_landing-page/landing-page.scss';


import barbaSetup from './js/barba-script.js';

import * as p5 from './js/vendor/p5.js';
import sketch from './pages/01_landing-page/sketch.js';
new p5(sketch,'canvas-container');

window.onload = barbaSetup;
