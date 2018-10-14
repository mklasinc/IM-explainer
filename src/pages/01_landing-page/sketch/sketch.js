import $ from 'jquery';
import ridges from './ridges.js';
import drawPerspectiveLines from './perspective-lines.js';
import drawRidge from './perlin-noise-ridge.js';

// console.log(ridges[0]);

export const size = {
    width  : $('#canvas-container').width(),
    height : $('#canvas-container').height()
};

export default function (p) {

    const mountains = {
        base : size.height * 0.75
    };

    var y = 100;

    p.setup = function () {
        const canvas = p.createCanvas(size.width, size.height);
    };

    p.draw = function () {
        p.fill(46, 46, 146);
        p.rect(0, size.height * 0.75, size.width, size.height - (size.height * 0.75));
        drawPerspectiveLines(p, mountains.base + 10, 20);

        ridges.forEach(r => drawRidge(p, r));
    };

    p.windowResized = function () {
        // console.log('resizing!');
        size.width = window.innerWidth;
        size.height = window.innerHeight;
        mountains.base = size.height * 0.75;
        p.resizeCanvas(size.width, size.height);
    };
};
