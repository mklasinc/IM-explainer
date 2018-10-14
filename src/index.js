// STYLES
import scss from './main.scss';

// BARBA CONFIG
import barbaBase from './js/barba/barba-config.js';

// LANDING PAGE SKETCH
import * as p5 from './js/vendor/p5.js';
import sketch from './pages/01_landing-page/sketch/sketch.js';
const LandingPageSketch = new p5(sketch, 'canvas-container');

window.onload = function () {
    barbaBase(); // initialize barba view
};
