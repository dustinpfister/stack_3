/*
 *    demo.js
 *    Copyright 2016 by Dustin Pfister (GPL v3)
 *
 *    A demo for stack_3.js for three.js
 *
 */

stack.set({

    w : 4,
    h : 4,
    d : 3,
    val : 0

});



// I need a three.js scene
var scene = new THREE.Scene(),

camera = new THREE.PerspectiveCamera(100, 640 / 480, 0.1, 100);
