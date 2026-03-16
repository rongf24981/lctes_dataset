(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1vQeQxs") / 1 * (-parseInt("2782840MoEXTK") / 2) + parseInt("1603284zhLodX") / 3 + -parseInt("1388108eFpCSb") / 4 + parseInt("5155QKjOOv") / 5 * (-parseInt("2658fKDpdw") / 6) + -parseInt("5501524fBFuIW") / 7 + -parseInt("8669032pBbWYl") / 8 + parseInt("324xbKYqF") / 9 * (parseInt("1223070czEIfQ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 872739);
function GCD(a, b) {
  var m = Math["max"](a, b);
  var n = Math.min(a, b);
  while (n != 0) {
    var N = n;
    n = m % n;
    m = N;
  }
  return m;
}
function __DECODE_0__(oRUpIj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 431;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oRUpIj, key);
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0xf9c1d3 = ["max", "2658fKDpdw", "split", "push", "map", "log", "8669032pBbWYl", "1388108eFpCSb", "2782840MoEXTK", "1vQeQxs", "5155QKjOOv", "forEach", "324xbKYqF", "1603284zhLodX", "1223070czEIfQ", "5501524fBFuIW", "shift", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0xf9c1d3;
  };
  return __STRING_ARRAY__();
}
var Arr = input.trim()["split"]("\n");
while (true) {
  var n = Arr.shift() - 0;
  if (n == 0) {
    break;
  }
  var arr = [];
  for (var I = 0; I < n; I++) {
    var v = Arr["shift"]().split(" ")["map"](Number);
    var gcd = GCD(v[0], v[1]);
    arr["push"]([v[0] / gcd, v[1] / gcd]);
  }
  var lcm = 1;
  arr.forEach(function (v) {
    var gcd = GCD(v[1], lcm);
    lcm = v[1] * lcm / gcd;
  });
  arr = arr["map"](function (v, i) {
    return v[0] * (lcm / v[1]);
  });
  var lcm = 1;
  arr["forEach"](function (v) {
    var gcd = GCD(v, lcm);
    lcm = v * lcm / gcd;
  });
  arr["forEach"](function (v) {
    console["log"](lcm / v);
  });
}
