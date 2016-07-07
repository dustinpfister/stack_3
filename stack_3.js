/*
 *    stack_3.js
 *    Copyright 2016 by Dustin Pfister (GPL v3)
 *
 *    A module for working with a stack of 2d grids (3d like)
 *
 */
var stack = (function () {

    var api = {

        w : 2,
        h : 2,
        d : 2,
        points : [],

        set : function (options) {

            options = options === undefined ? {}

             : options;

            // defaults
            options.w = options.w === undefined ? 2 : options.w;
            options.h = options.h === undefined ? 2 : options.h;
            options.d = options.d === undefined ? 2 : options.d;
            options.val = options.val === undefined ? 0 : options.val;

            this.w = options.w;
            this.h = options.h;
            this.d = options.d;

            this.clearGrid(options.val);

        },

        clearGrid : function (val) {

            var i = 0,
            len = this.w * this.h * this.d;

            this.points = [];

            if (val === undefined) {
                val = 0;
            }
            while (i < len) {

                this.points[i] = {

                    i : i,
                    x : i % this.w,
                    y : Math.floor((i - (Math.floor(i / (this.w * this.h)) * (this.w * this.h))) / this.w),
                    z : Math.floor(i / (this.w * this.h)),
                    val : val

                };

                i += 1;

            }

        },

        countVal : function (theVal) {

            var i = 0,
            len = this.w * this.h * this.d,
            count = 0;
            while (i < len) {

                if (this.points[i].val === theVal) {

                    count += 1;

                }

                i += 1;

            }

            return count;

        },

        getPoint : function (ix, y, z) {

            if (y === undefined) {

                return this.points[ix];

            } else {

                //return this.points[y * this.w + ix];

                if (z === undefined) {
                    z = 0;
                }

                return this.points[z * (this.w * this.h) + y * this.w + ix];

            }

        }

    };

    api.clearGrid();

    return api;

}
    ());