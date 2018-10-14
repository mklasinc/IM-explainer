import {size} from './sketch.js';

export default [

    {
        index  : 0,
        height : 0.45,
        offset : {
            base : {
                y : 0.2
            },
            perlin : {
                x : 0.5,
                y : 0
            }
        },
        oscillation : {
            function  : 'sine',
            increment : 0.05
        },
        color : [240],
        flag  : false
    },

    {
        index  : 1,
        height : 0.5,
        offset : {
            base : {
                y : 0.15
            },
            perlin : {
                x : 0.5,
                y : 0
            }
        },
        oscillation : {
            function  : 'cosine',
            increment : 0.05
        },
        color : [240],
        flag  : false
    },

    {
        index  : 2,
        height : 0.05,
        offset : {
            base : {
                y : 0.35
            },
            perlin : {
                x : 0,
                y : 0
            }
        },
        oscillation : {
            function  : 'sine',
            increment : 0.05
        },
        color : [255, 0, 143, 70],
        flag  : false
    },

    {
        index  : 3,
        height : 0.35,
        offset : {
            base : {
                y : 0.2
            },
            perlin : {
                x : 1,
                y : 0
            }
        },
        oscillation : {
            function  : 'cosine',
            increment : 0.05
        },
        color : [255, 215, 119, 180],
        flag  : false
    },

    {
        index  : 4,
        height : 0.4,
        offset : {
            base : {
                y : 0.01
            },
            perlin : {
                x : 0,
                y : 0
            }
        },
        oscillation : {
            function  : 'cosine',
            increment : 0.05
        },
        color : [255, 0, 77, 255],
        flag  : true
    }

];
