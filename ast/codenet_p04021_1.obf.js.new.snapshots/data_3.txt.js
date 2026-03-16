'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1PGJSVq") / 1 * (-parseInt("3345468dMRPZR") / 2) + parseInt("3AtdbUw") / 3 * (-parseInt("7136392DJQiuI") / 4) + -parseInt("3689735CsrLTS") / 5 + parseInt("10930530hcsmRj") / 6 * (-parseInt("7rhiWeH") / 7) + -parseInt("4037728VkRIKW") / 8 + parseInt("16262163JsbAEF") / 9 + parseInt("56463070enFEhy") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 931964);
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
function __DECODE_0__(wkVJfk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 102;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wkVJfk, key);
}
var myOut = main();
function __STRING_ARRAY__() {
  var _0x90d72a = ["push", "10930530hcsmRj", "split", "3345468dMRPZR", "sort", "3AtdbUw", "1PGJSVq", "56463070enFEhy", "16262163JsbAEF", "readFileSync", "7136392DJQiuI", "slice", "4037728VkRIKW", "map", "Array(a[", "length", "log", ";})", "3689735CsrLTS", "7rhiWeH", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x90d72a;
  };
  return __STRING_ARRAY__();
}
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
