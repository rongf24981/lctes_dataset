'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("712186CgExHU") / 1 * (-parseInt("2KMYiEF") / 2) + parseInt("162273ezjQBZ") / 3 * (-parseInt("28UUVfEx") / 4) + parseInt("7339030dwQBiP") / 5 + -parseInt("4486740VDsHqS") / 6 + parseInt("6048392UmNamd") / 7 + parseInt("112ajwmgH") / 8 * (-parseInt("29115MOxKLT") / 9) + parseInt("10pNgnMw") / 10 * (-parseInt("10035575yMMJXx") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 960006);
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
    return cin["slice"](cid, cid += n);
  } else {
    return cin.slice(cid, cid += n).map(a => +a);
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
      r["push"](cin["slice"](cid, cid += w)["map"](a => +a));
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
  console.log(String(myOut));
}
function __DECODE_0__(YJdooN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 224;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YJdooN, key);
}
function __STRING_ARRAY__() {
  var _0x5a7d3c = ["10035575yMMJXx", "]).fill().map(x=>{return ", "Array(a[", "map", "712186CgExHU", "slice", "push", "2KMYiEF", "7339030dwQBiP", "utf8", "]).fill().map(x=>", "162273ezjQBZ", "charCodeAt", "split", "length", "112ajwmgH", ";})", "28UUVfEx", "4486740VDsHqS", "/dev/stdin", "29115MOxKLT", "10pNgnMw", "6048392UmNamd"];
  __STRING_ARRAY__ = function () {
    return _0x5a7d3c;
  };
  return __STRING_ARRAY__();
}
function main() {
  var a = nextstr();
  var ans = 1;
  var c = xArray(0, 26);
  for (var i = 0; i < a["length"]; i++) {
    var t = a[i]["charCodeAt"]() - 97;
    ans += i - c[t];
    c[t]++;
  }
  return ans;
}
