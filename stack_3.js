/*
 *    stack_3.js
 *    Copyright 2016 by Dustin Pfister (GPL v3)
 *
 *    A module for working with a stack of 2d grids (3d like)
 *
 */
var stack = (function () {

    var api = {

        w : 4,
        h : 4,
		d : 4,
        points : [],

        clearGrid : function () {

            var i = 0,
            len = this.w * this.h * this.d;

            this.points = [];
            while (i < len) {

                this.points[i] = {

                    i : i,
                    x : i % this.w,
                    y : Math.floor(   (i - (   Math.floor(i / (this.w * this.h)) * (this.w * this.h)    ))       / this.w),
					z : Math.floor(i / (this.w * this.h)),
                    val : 0

                };

                i += 1;

            }

        },
		
		countVal : function(theVal){
			
			var i = 0,
            len = this.w * this.h * this.d,
			count = 0;
			
            while (i < len) {

			    if(this.points[i].val === theVal){
					
					count += 1;
					
				}

                i += 1;

            }
			
			return count;
			
		},
		
		getPoint : function(ix, y, z){
			
			if(y === undefined){
				
				return this.points[ix];
				
			}else{
				
				//return this.points[y * this.w + ix];
				
				if(z === undefined){ z = 0;}
				
				return this.points[z * (this.w * this.h) + y * this.w + ix  ];
				
			}
			
		}
		
    };

    api.clearGrid();
	
    return api;

}());
