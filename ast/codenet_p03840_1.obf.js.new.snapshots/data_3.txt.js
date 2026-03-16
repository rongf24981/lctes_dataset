'use strict';

function __STRING_ARRAY__() {
  var _0x1adec5 = ["length", "1146vdjFlN", "utf8", "4826874vfQXiz", "]).fill().map(x=>{return ", "1850265oERWKr", "split", "log", "6293691XOXMsx", "Array(a[", "readFileSync", "push", "slice", "]).fill().map(x=>", "1321qAEiLs", "3915100ULGqMf", "46905tQZDhd", "map", "6955000RRREIp", "32TkuhpG", ";})", "10yYgLhH"];
  __STRING_ARRAY__ = function () {
    return _0x1adec5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1321qAEiLs") / 1 * (-parseInt("1146vdjFlN") / 2) + parseInt("46905tQZDhd") / 3 * (parseInt("32TkuhpG") / 4) + -parseInt("1850265oERWKr") / 5 + parseInt("4826874vfQXiz") / 6 + -parseInt("3915100ULGqMf") / 7 + parseInt("6955000RRREIp") / 8 + -parseInt("6293691XOXMsx") / 9 * (-parseInt("10yYgLhH") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 811947);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var cin = input["split"](/ |\n/);
var cid = 0;
function __DECODE_0__(RLIRPI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 153;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RLIRPI, key);
}
function next(a) {
  if (a) {
    return cin[cid++];
  } else {
    return +cin[cid++];
  }
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
if (myOut !== undefined) {
  console["log"](myOut);
}
function main() {
  var a = nexts(7);
  var ans = a[1] + ((a[0] / 2 | 0) + (a[3] / 2 | 0) + (a[4] / 2 | 0)) * 2;
  switch (a[0] % 2 + a[3] % 2 + a[4] % 2) {
    case 3:
      ans += 3;
      break;
    case 2:
      if (a[0] * a[3] * a[4]) {
        ans += 1;
      }
      break;
  }
  return ans;
}
