function __DECODE_0__(CoMYqW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x71;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CoMYqW, key);
}
function __STRING_ARRAY__() {
  var _0x39c70d = ['867650MRQcxu', '10572zuBZfL', '753764AyMvzh', '5787SzIKxI', 'utf8', 'split', '676323xwghwb', '25iWMBPm', 'log', '206pxefLu', 'readFileSync', '656fHDwlI', '2282840NJUpKS', '2519ftlcMU', 'length', 'fill'];
  __STRING_ARRAY__ = function () {
    return _0x39c70d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x7d)) / 0x1 * (-parseInt(__DECODE_0__(0x79)) / 0x2) + -parseInt(__DECODE_0__(0x76)) / 0x3 + -parseInt(__DECODE_0__(0x72)) / 0x4 + -parseInt(__DECODE_0__(0x77)) / 0x5 * (parseInt(__DECODE_0__(0x71)) / 0x6) + parseInt(__DECODE_0__(0x80)) / 0x7 + -parseInt(__DECODE_0__(0x7b)) / 0x8 * (parseInt(__DECODE_0__(0x73)) / 0x9) + parseInt(__DECODE_0__(0x7c)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x21451);
var mod = 0x3b9aca00 + 0x7;
function Main(s) {
  var n = parseInt(s[0x0]);
  var sl = s[0x1][__DECODE_0__(0x7e)];
  var a = Array(n + 0x1)[__DECODE_0__(0x7f)](0x0)['map'](a => Array(n + 0x2)[__DECODE_0__(0x7f)](0x0));
  a[0x0][0x0] = 0x1;
  for (var i = 0x1; i <= n; i++) {
    a[i][0x0] = a[i - 0x1][0x0] + a[i - 0x1][0x1];
    a[i][0x0] %= mod;
    for (var j = 0x1; j <= i; j++) {
      a[i][j] = a[i - 0x1][j - 0x1] * 0x2 + a[i - 0x1][j + 0x1];
      a[i][j] %= mod;
    }
  }
  console[__DECODE_0__(0x78)](permod(a[n][sl], powmod(0x2, sl)));
}
function abmod() {
  var rt = arguments[0x0];
  for (var i = 0x1; i < arguments[__DECODE_0__(0x7e)]; i++) {
    rt = (rt >>> 0x10) * arguments[i] % mod * 0x10000 + (rt & 0xffff) * arguments[i];
    rt %= mod;
  }
  return rt;
}
function powmod(a, n) {
  var rt = 0x1;
  while (n) {
    if (n & 0x1) {
      rt = abmod(a, rt);
    }
    a = abmod(a, a);
    n >>>= 0x1;
  }
  return rt;
}
function permod(a, n) {
  var rt = powmod(n, mod - 0x2);
  rt = abmod(rt, a);
  return rt;
}
Main(require('fs')[__DECODE_0__(0x7a)]('/dev/stdin', __DECODE_0__(0x74))[__DECODE_0__(0x75)]('\x0a'));
