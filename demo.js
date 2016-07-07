/*
 *    demo.js
 *    Copyright 2016 by Dustin Pfister (GPL v3)
 *
 *    A demo for stack_3.js
 *
 */
 
stack.set({

    w: 8,
	h: 4,
	d: 6,
	val : 0

});

// stack.getPoint(2,2,0).val = 1;

var pointer = {

    x:0,y:0,z:0

},


get = function(id){

    return document.getElementById(id);

},

htmlLayer = function(z){

    var html = '<table class=\"stack\"><tr>', i = (stack.w * stack.h) * z, len = i + stack.w * stack.h;
	
    while(i < len){
   
        if(stack.getPoint(i).x === pointer.x && stack.getPoint(i).y === pointer.y && z === pointer.z){
		
		    html += '<td class="pointer">'
		
		}else{
   
            html += '<td>';
		
		}
		
		html += stack.getPoint(i).val+'<\/td>';
		
		if(stack.getPoint(i).x === stack.w-1){
		
		    html += '<\/tr><tr>';
		
		}
   
        i += 1;
   
    }
   
    html += '<td colspan=\"' + stack.w + '\";>layer '+z+'<\/td>';
   
    return html + '<\/tr><\/table>';

},


htmlStack = function(){

    var html = '', i=0, len = stack.d;
	
	while(i < len){
	
	    html += htmlLayer(i);
	
	    i += 1;
	
	}
	
	return html;

},

draw = function(){

    get('out').innerHTML = htmlStack();

},

onPosChange = function(){

    //console.log(get('in_x').value);

	/*
    console.log(stack.getPoint(
	
	    pointer.x,
		pointer.y,
		pointer.z
	
	));
	*/
	
	draw();

};

draw();



get('in_x').addEventListener('input', function(e){

    var inVal = Number(e.target.value);
	
	if(inVal + '' === 'NaN'){e.target.value = 0;}
	if(inVal >= stack.w){e.target.value = stack.w-1;}

	inVal = Number(e.target.value);
	e.target.value = inVal;
	
	pointer.x = inVal;
	
	onPosChange();
	
});

get('in_y').addEventListener('input', function(e){

    var inVal = Number(e.target.value);
	
	if(inVal + '' === 'NaN'){e.target.value = 0;}
	if(inVal >= stack.h){e.target.value = stack.h-1;}

	inVal = Number(e.target.value);
	e.target.value = inVal;
	
	pointer.y = inVal;
	
	onPosChange();
	
});

get('in_z').addEventListener('input', function(e){

    var inVal = Number(e.target.value);
    
	
	if(inVal + '' === 'NaN'){e.target.value = 0;}
	if(inVal >= stack.d){e.target.value = stack.d-1;}

	inVal = Number(e.target.value);
	e.target.value = inVal;
	
	pointer.z = inVal;
	
	onPosChange();
	
});

get('in_val').addEventListener('input', function(e){

    console.log(pointer);

    stack.getPoint(
	
	    pointer.x,pointer.y,pointer.z
	
	).val = e.target.value;

	onPosChange();
	
});
