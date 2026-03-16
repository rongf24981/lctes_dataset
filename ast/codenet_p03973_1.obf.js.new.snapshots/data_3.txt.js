'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("471253xOozLG") / 1 + parseInt("2nlEyDM") / 2 * (parseInt("3601833bOLamp") / 3) + parseInt("819880GfKvux") / 4 + -parseInt("1247695NLmieP") / 5 * (parseInt("12iDAuEb") / 6) + -parseInt("6778373egKBXj") / 7 + parseInt("7472PgMKKy") / 8 * (parseInt("7002sEUKPQ") / 9) + parseInt("6759020ThHiXl") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 869465);
function __DECODE_0__(CdIVvt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 175;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CdIVvt, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var cin = input["split"](/ |\n/);
var cid = 0;
function next() {
  return +cin[cid++];
}
function nextstr() {
  return cin[cid++];
}
function __STRING_ARRAY__() {
  var _0xca6082 = ["]).fill().map(x=>{return ", "map", "2nlEyDM", ";})", "]).fill().map(x=>", "12iDAuEb", "471253xOozLG", "push", "/dev/stdin", "6778373egKBXj", "log", "6759020ThHiXl", "max", "split", "utf8", "3601833bOLamp", "Array(a[", "7472PgMKKy", "819880GfKvux", "slice", "readFileSync", "1247695NLmieP", "7002sEUKPQ"];
  __STRING_ARRAY__ = function () {
    return _0xca6082;
  };
  return __STRING_ARRAY__();
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
function main() {
  var n = next();
  var ans = 0;
  var mn = 1;
  for (var i = 0; i < n; i++) {
    var t = next() - 1;
    if (t < mn) {
      mn = Math.max(mn, t + 2);
    } else {
      ans += t / mn | 0;
      mn = Math["max"](2, mn);
    }
  }
  return ans;
}
