'use strict';

var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var cin = input["split"](/ |\n/);
var cid = 0;
function next() {
  return +cin[cid++];
}
function nextstr() {
  return cin[cid++];
}
function nextbig() {
  return BigInt(cin[cid++]);
}
function nexts(n, a) {
  if (a) {
    return cin["slice"](cid, cid += n);
  } else {
    return cin["slice"](cid, cid += n)["map"](a => +a);
  }
}
function nextm(h, w, a) {
  var r = [];
  var i = 0;
  if (a) {
    for (; i < h; i++) {
      r.push(cin["slice"](cid, cid += w));
    }
  } else {
    for (; i < h; i++) {
      r.push(cin["slice"](cid, cid += w)["map"](a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a["length"];
  var r = "Array(a[" + --l + "]).fill().map(x=>{return " + v + ";})";
  while (--l) {
    r = "Array(a[" + l + "]).fill().map(x=>" + r + ")";
  }
  return eval(r);
}
var tm = +new Date() + 900;
var myOut = main();
if (myOut !== undefined) {
  console["log"](String(myOut));
}
function main() {
  var [a, b, c] = nexts(3);
  var cnt = 0;
  while (new Date() < tm) {
    if (a % 2 || b % 2 || c % 2) {
      return cnt;
    }
    var a2 = b + c >> 1;
    var b2 = a + c >> 1;
    var c2 = a + b >> 1;
    a = a2;
    b = b2;
    c = c2;
    cnt++;
  }
  return -1;
}
