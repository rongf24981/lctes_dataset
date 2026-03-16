'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("422621cBHEdF") / 1 * (-parseInt("2DYWxkF") / 2) + parseInt("743991eZUYpQ") / 3 + parseInt("1471876sOwxOc") / 4 + -parseInt("360455aheufJ") / 5 + -parseInt("1996644nSPsQq") / 6 + -parseInt("7xFJqmB") / 7 * (-parseInt("2069832Uhihlb") / 8) + -parseInt("5896521vALrpc") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 237282);
function __DECODE_0__(GQWQOw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 486;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GQWQOw, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var cin = input["split"](/ |\n/);
var cid = 0;
function next() {
  return +cin[cid++];
}
function __STRING_ARRAY__() {
  var _0x28b96a = ["7xFJqmB", "5896521vALrpc", "log", "map", "/dev/stdin", "1471876sOwxOc", "Array(a[", "1996644nSPsQq", "2069832Uhihlb", "readFileSync", "push", "]).fill().map(x=>{return ", "2DYWxkF", "]).fill().map(x=>", "743991eZUYpQ", "length", "422621cBHEdF", "split", "slice", "360455aheufJ"];
  __STRING_ARRAY__ = function () {
    return _0x28b96a;
  };
  return __STRING_ARRAY__();
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
      r["push"](cin.slice(cid, cid += w));
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
  var a = [0].concat(nexts(n));
  for (var i = n; i >= 1; i--) {
    var sum = 0;
    for (var j = i; j <= n; j += i) {
      sum += a[j];
    }
    if (sum < 0) {
      for (var j = i; j <= n; j += i) {
        a[j] = 0;
      }
    }
  }
  return a.reduce((a, b) => a + b);
}
