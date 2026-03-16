'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("4343JtVcOG") / 1 * (parseInt("190bkYPvx") / 2) + -parseInt("1242381lBzMyW") / 3 + parseInt("406136dNseRE") / 4 + -parseInt("64115KSsWJA") / 5 * (-parseInt("138xhjing") / 6) + -parseInt("2085146lmFjkv") / 7 + -parseInt("3198072VZAuAp") / 8 + parseInt("4983939UTrNUt") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 251055);
function __STRING_ARRAY__() {
  var _0x519bed = ["3198072VZAuAp", "push", "4983939UTrNUt", "readFileSync", "1242381lBzMyW", "slice", "/dev/stdin", "split", "]).fill().map(x=>{return ", "4343JtVcOG", "sort", "406136dNseRE", "]).fill().map(x=>", "map", "2085146lmFjkv", "log", "utf8", "190bkYPvx", "64115KSsWJA", "138xhjing", "Array(a["];
  __STRING_ARRAY__ = function () {
    return _0x519bed;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var cin = input["split"](/ |\n/);
var cid = 0;
function next() {
  return +cin[cid++];
}
function __DECODE_0__(SMzdqQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 405;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SMzdqQ, key);
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
    return cin.slice(cid, cid += n)["map"](a => +a);
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
      r.push(cin.slice(cid, cid += w)["map"](a => +a));
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
  var l = nexts(n)["sort"]((a, b) => a - b);
  var ans = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      for (var k = j + 1; k < n; k++) {
        if (l[i] === l[j] || l[j] === l[k]) {
          continue;
        }
        if (l[i] + l[j] > l[k]) {
          ans++;
        }
      }
    }
  }
  return ans;
}
