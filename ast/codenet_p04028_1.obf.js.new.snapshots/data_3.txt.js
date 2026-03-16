function __DECODE_0__(CoMYqW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 113;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CoMYqW, key);
}
function __STRING_ARRAY__() {
  var _0x39c70d = ["867650MRQcxu", "10572zuBZfL", "753764AyMvzh", "5787SzIKxI", "utf8", "split", "676323xwghwb", "25iWMBPm", "log", "206pxefLu", "readFileSync", "656fHDwlI", "2282840NJUpKS", "2519ftlcMU", "length", "fill"];
  __STRING_ARRAY__ = function () {
    return _0x39c70d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2519ftlcMU") / 1 * (-parseInt("206pxefLu") / 2) + -parseInt("676323xwghwb") / 3 + -parseInt("753764AyMvzh") / 4 + -parseInt("25iWMBPm") / 5 * (parseInt("10572zuBZfL") / 6) + parseInt("867650MRQcxu") / 7 + -parseInt("656fHDwlI") / 8 * (parseInt("5787SzIKxI") / 9) + parseInt("2282840NJUpKS") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 136273);
var mod = 1000000007;
function Main(s) {
  var n = parseInt(s[0]);
  var sl = s[1]["length"];
  var a = Array(n + 1)["fill"](0).map(a => Array(n + 2)["fill"](0));
  a[0][0] = 1;
  for (var i = 1; i <= n; i++) {
    a[i][0] = a[i - 1][0] + a[i - 1][1];
    a[i][0] %= mod;
    for (var j = 1; j <= i; j++) {
      a[i][j] = a[i - 1][j - 1] * 2 + a[i - 1][j + 1];
      a[i][j] %= mod;
    }
  }
  console["log"](permod(a[n][sl], powmod(2, sl)));
}
function abmod() {
  var rt = arguments[0];
  for (var i = 1; i < arguments["length"]; i++) {
    rt = (rt >>> 16) * arguments[i] % mod * 65536 + (rt & 65535) * arguments[i];
    rt %= mod;
  }
  return rt;
}
function powmod(a, n) {
  var rt = 1;
  while (n) {
    if (n & 1) {
      rt = abmod(a, rt);
    }
    a = abmod(a, a);
    n >>>= 1;
  }
  return rt;
}
function permod(a, n) {
  var rt = powmod(n, mod - 2);
  rt = abmod(rt, a);
  return rt;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n"));
