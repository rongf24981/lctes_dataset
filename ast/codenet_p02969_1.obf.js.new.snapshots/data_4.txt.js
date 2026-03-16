'use strict';

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var r = parseInt(input, 10);
console["log"](r * 3 * r);
