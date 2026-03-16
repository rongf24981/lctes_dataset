'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("463833npKCUg") / 1 + -parseInt("80hDrqpC") / 2 * (-parseInt("33582VrfJck") / 3) + parseInt("1424180WPALdx") / 4 + parseInt("1945370JIUyNE") / 5 + -parseInt("139014gbXXjv") / 6 * (-parseInt("63HBsLbc") / 7) + parseInt("3613224lrYASH") / 8 + -parseInt("18726804JaoUWB") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 236130);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var cin = input.split(/ |\n/);
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
      r["push"](cin.slice(cid, cid += w)["map"](a => +a));
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
function __STRING_ARRAY__() {
  var _0xa233b6 = ["463833npKCUg", "length", "18726804JaoUWB", "3613224lrYASH", "1945370JIUyNE", "map", "139014gbXXjv", "63HBsLbc", "log", "]).fill().map(x=>", "33582VrfJck", "slice", "/dev/stdin", "push", "80hDrqpC", "1424180WPALdx"];
  __STRING_ARRAY__ = function () {
    return _0xa233b6;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(DssHcP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 359;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DssHcP, key);
}
if (myOut !== undefined) {
  console["log"](String(myOut));
}
function main() {
  var [q, h, s, d] = nexts(4);
  var n = next();
  if (q * 2 < h) {
    h = q * 2;
  }
  if (h * 2 < s) {
    s = h * 2;
  }
  if (s * 2 < d) {
    d = s * 2;
  }
  return BigInt(n / 2 | 0) * BigInt(d) + BigInt((n & 1) * s);
}
