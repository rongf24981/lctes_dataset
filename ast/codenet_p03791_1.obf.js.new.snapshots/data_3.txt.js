'use strict';

function __DECODE_0__(XldbWP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 454;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XldbWP, key);
}
function __STRING_ARRAY__() {
  var _0x1c02ad = ["length", "112ZjVrKK", "5697qUPSjv", "readFileSync", ";})", "]).fill().map(x=>", "]).fill().map(x=>{return ", "1754694AkBvds", "/dev/stdin", "3577975WHKNzA", "72KMLZbA", "Array(a[", "push", "split", "849981YFIHZk", "3460ztMJVZ", "utf8", "12581160gWasQd", "slice", "497903fTDGbF", "map", "710370oUrsKe", "log"];
  __STRING_ARRAY__ = function () {
    return _0x1c02ad;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("849981YFIHZk") / 1 + parseInt("1754694AkBvds") / 2 + parseInt("5697qUPSjv") / 3 * (-parseInt("3460ztMJVZ") / 4) + -parseInt("3577975WHKNzA") / 5 + parseInt("72KMLZbA") / 6 * (parseInt("497903fTDGbF") / 7) + -parseInt("112ZjVrKK") / 8 * (-parseInt("710370oUrsKe") / 9) + parseInt("12581160gWasQd") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 885820);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var cin = input["split"](/ |\n/);
var cid = 0;
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
var mod = 1000000007;
function mul() {
  var a = arguments;
  var r = a[0];
  for (var i = a["length"]; --i;) {
    r = ((r >> 16) * a[i] % mod * 65536 + (r & 65535) * a[i]) % mod;
  }
  return r;
}
var myOut = main();
if (myOut !== undefined) {
  console["log"](myOut);
}
function main() {
  var n = next();
  var x = nexts(n);
  var ans = 1;
  var id = 1;
  var rem = 0;
  for (var i = 0; i < n; i++) {
    rem++;
    ans = mul(ans, rem);
    if (x[i] < id) {
      rem--;
    } else {
      id += 2;
    }
  }
  return ans;
}
