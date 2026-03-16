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
    return cin["slice"](cid, cid += n).map(a => +a);
  }
}
function nextm(h, w, a) {
  var r = [];
  var i = 0;
  if (a) {
    for (; i < h; i++) {
      r["push"](cin["slice"](cid, cid += w));
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
var myOut = main();
if (myOut !== undefined) {
  console["log"](String(myOut));
}
function main() {
  var n = next();
  var a = [];
  for (var i = 0; i < n; i++) {
    a["push"]([next(), i & 1]);
  }
  a["sort"]((a, b) => a[0] - b[0]);
  var ans = 0;
  for (var i = 0; i < n; i += 2) {
    if (a[i][1] === 1) {
      ans++;
    }
  }
  return ans;
}
