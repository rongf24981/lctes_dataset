'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2143QTzORw") / 1 * (-parseInt("4BFcMOj") / 2) + parseInt("3pLwEal") / 3 * (parseInt("1155204doKivt") / 4) + parseInt("275285lJGZlP") / 5 * (-parseInt("6iKNDqD") / 6) + parseInt("1253XRAdxl") / 7 * (parseInt("11912pEjppK") / 8) + parseInt("782748SDPrLw") / 9 + -parseInt("70brIyvq") / 10 * (parseInt("280412IUkxSb") / 11) + -parseInt("36CoELve") / 12 * (parseInt("1108913rqZOSu") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 148614);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var cin = input["split"](/ |\n/);
var cid = 0;
function __DECODE_0__(Ygadhn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 279;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Ygadhn, key);
}
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
function __STRING_ARRAY__() {
  var _0x4f695f = ["1253XRAdxl", "split", "1155204doKivt", "70brIyvq", "slice", "280412IUkxSb", "readFileSync", "utf8", "2143QTzORw", "length", "782748SDPrLw", "log", "36CoELve", "map", "1108913rqZOSu", "11912pEjppK", "6iKNDqD", "]).fill().map(x=>", "4BFcMOj", "/dev/stdin", "275285lJGZlP", "3pLwEal", "]).fill().map(x=>{return "];
  __STRING_ARRAY__ = function () {
    return _0x4f695f;
  };
  return __STRING_ARRAY__();
}
var tm = +new Date() + 900;
var myOut = main();
if (myOut !== undefined) {
  console["log"](String(myOut));
}
function main() {
  var [a, b, c] = nexts(3);
  var cnt = 0;
  while (new Date() < tm) {
    if (a % 2 || b % 2 || c % 2) {
      return cnt;
    }
    var a2 = b + c >> 1;
    var b2 = a + c >> 1;
    var c2 = a + b >> 1;
    a = a2;
    b = b2;
    c = c2;
    cnt++;
  }
  return -1;
}
