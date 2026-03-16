var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var x = input["trim"]() - 0;
var time = x * 2;
var h = (time - time % 60) / 60;
var m = time % 60;
console["log"](h + " " + m);
