'use strict';

function __DECODE_0__(dXUCRS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 303;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dXUCRS, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("186RJWHHE") / 1 * (-parseInt("716OmzgKp") / 2) + -parseInt("3469242UBtCwI") / 3 + parseInt("12YdBucE") / 4 * (parseInt("2150045vJacEz") / 5) + parseInt("138UYeTpn") / 6 * (-parseInt("590499KcGLav") / 7) + parseInt("4166568kgQqbw") / 8 + -parseInt("9KwkXHa") / 9 * (parseInt("15534470FcNlTz") / 10) + -parseInt("2857701aVBMQa") / 11 * (-parseInt("180nQLxwB") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 991053);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
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
    return cin.slice(cid, cid += n);
  } else {
    return cin["slice"](cid, cid += n)["map"](a => +a);
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
      r["push"](cin["slice"](cid, cid += w).map(a => +a));
    }
  }
  return r;
}
function xArray(v) {
  var a = arguments;
  var l = a.length;
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
function __STRING_ARRAY__() {
  var _0x548431 = ["590499KcGLav", "slice", "map", "push", "12YdBucE", ";})", "]).fill().map(x=>{return ", "15534470FcNlTz", "9KwkXHa", "2857701aVBMQa", "3469242UBtCwI", "split", "log", "]).fill().map(x=>", "4166568kgQqbw", "utf8", "Array(a[", "716OmzgKp", "186RJWHHE", "138UYeTpn", "180nQLxwB", "/dev/stdin", "2150045vJacEz"];
  __STRING_ARRAY__ = function () {
    return _0x548431;
  };
  return __STRING_ARRAY__();
}
function main() {
  var n = next();
  var m = next();
  var ans = m * 1800 + n * 100;
  return ans << m;
}
