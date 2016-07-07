/*
 *    demo.js
 *    Copyright 2016 by Dustin Pfister (GPL v3)
 *
 *    A demo for stack_3.js
 *
 */

stack.set({

    w : 4,
    h : 4,
    d : 1,
    val : 0

});

// stack.getPoint(2,2,0).val = 1;

var pointer = {

    x : 0,
    y : 0,
    z : 0

},

get = function (id) {

    return document.getElementById(id);

},

htmlLayer = function (z) {

    var html = '<div class=\"layer\"><tr>',
    i = (stack.w * stack.h) * z,
    len = i + stack.w * stack.h;
    while (i < len) {

        if (stack.getPoint(i).x === pointer.x && stack.getPoint(i).y === pointer.y && z === pointer.z) {

            html += '<div>'

        } else {

            html += '<div>';

        }

        html += stack.getPoint(i).val + '<\/div>';

        if (stack.getPoint(i).x === stack.w - 1) {

            html += '<\/div><div>';

        }

        i += 1;

    }

    return html + '<\/div>';

},

htmlStack = function () {

    var html = '', z=0, zLen = stack.d,x,y,xLen = stack.w, yLen = stack.h,
    
    pxWidth = 200 / xLen,
    pxHeight = 200 / yLen;
    
    while(z < zLen){
        
        html += '<div class=\"layer\">';
        
        y = 0;
        while(y < yLen){
            
            x=0;
            while(x < xLen){
                
                html += '<div class="px" style=\"left:' +Math.floor(x * pxWidth)+ 'px;top:' +Math.floor(y * pxHeight)+ 'px;\"><\/div>'
                
                x += 1;
                
            }
            
            y += 1;
            
        }
        
        html += '<\/div>';
        
        z += 1;
    }

    return html;

},

draw = function () {

    get('out').innerHTML = htmlStack();

},

onPosChange = function () {

    draw();

};

draw();
