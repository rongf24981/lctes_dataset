'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("17CEEhiu") / 1 * (-parseInt("19374VKlmxL") / 2) + -parseInt("1182Sejswc") / 3 * (parseInt("2596JyMWvO") / 4) + -parseInt("2533670fMfTMt") / 5 * (parseInt("6qLLysB") / 6) + -parseInt("1065967vBYwen") / 7 + -parseInt("2055000uIHscn") / 8 + parseInt("45nNgoEI") / 9 * (parseInt("407660TNoYGH") / 10) + parseInt("16062794xyrPMY") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 327809);
function __STRING_ARRAY__() {
  var _0x3a49c7 = ["1182Sejswc", "Array(a[", "map", "push", "17CEEhiu", "6qLLysB", "Brown", "]).fill().map(x=>", "utf8", "Alice", "2596JyMWvO", "45nNgoEI", "]).fill().map(x=>{return ", ";})", "1065967vBYwen", "2533670fMfTMt", "19374VKlmxL", "split", "2055000uIHscn", "16062794xyrPMY", "slice", "407660TNoYGH"];
  __STRING_ARRAY__ = function () {
    return _0x3a49c7;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(tzcorZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 302;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tzcorZ, key);
}
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
      r["push"](cin["slice"](cid, cid += w)["map"](a => +a));
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
  console.log(String(myOut));
}
function main() {
  var x = nextbig();
  var y = nextbig();
  if (x - y < 2 && y - x < 2) {
    return "Brown";
  }
  return "Alice";
}
