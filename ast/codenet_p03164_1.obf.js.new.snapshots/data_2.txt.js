(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x111)) / 0x1 * (parseInt(__DECODE_0__(0x113)) / 0x2) + -parseInt(__DECODE_0__(0x112)) / 0x3 * (parseInt(__DECODE_0__(0x117)) / 0x4) + -parseInt(__DECODE_0__(0x10d)) / 0x5 * (parseInt(__DECODE_0__(0x110)) / 0x6) + -parseInt(__DECODE_0__(0x10b)) / 0x7 * (parseInt(__DECODE_0__(0x116)) / 0x8) + parseInt(__DECODE_0__(0x114)) / 0x9 + -parseInt(__DECODE_0__(0x109)) / 0xa * (parseInt(__DECODE_0__(0x11a)) / 0xb) + parseInt(__DECODE_0__(0x108)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x82f19);
var MAX_VALUE = 0x3e8;
var inputRaw = require('fs')[__DECODE_0__(0x11c)]('/dev/stdin', __DECODE_0__(0x118));
var rows = inputRaw[__DECODE_0__(0x119)]()[__DECODE_0__(0x11b)]('\x0a');
var row1 = rows[0x0][__DECODE_0__(0x11b)]('\x20')[__DECODE_0__(0x10c)](Number);
var N = row1[0x0];
var W = row1[0x1];
var list = rows[__DECODE_0__(0x10a)](0x1)[__DECODE_0__(0x10c)](r => r[__DECODE_0__(0x11b)]('\x20')[__DECODE_0__(0x10c)](Number));
var dp = Array[__DECODE_0__(0x10e)]({
  'length': N + 0x1
}, _ => Array(N * MAX_VALUE + 0x1)['fill'](0x0));
function __STRING_ARRAY__() {
  var _0x1b7f26 = ['map', '103240nMhasU', 'from', 'min', '42TyQVdx', '215762kCVEXb', '3bZwrSi', '2yZQfnY', '5678460OlZwXb', 'log', '8MXKklH', '555136bJuKWP', 'utf8', 'trim', '11zuftwN', 'split', 'readFileSync', 'fill', '15278892BWdDBt', '8191130SbEENZ', 'slice', '3368155NGltZi'];
  __STRING_ARRAY__ = function () {
    return _0x1b7f26;
  };
  return __STRING_ARRAY__();
}
dp[0x0] = Array(N * MAX_VALUE + 0x1)[__DECODE_0__(0x11d)](Infinity);
function __DECODE_0__(KAxUuv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x108;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KAxUuv, key);
}
dp[0x0][0x0] = 0x0;
function solve() {
  for (var i = 0x0; i < N; i++) {
    for (var j = 0x0; j <= N * MAX_VALUE; j++) {
      if (list[i][0x1] <= j) {
        var a = dp[i][j - list[i][0x1]] + list[i][0x0];
        var b = dp[i][j];
        dp[i + 0x1][j] = Math[__DECODE_0__(0x10f)](a, b);
      } else {
        dp[i + 0x1][j] = dp[i][j];
      }
    }
  }
  var result = 0x0;
  for (var i = 0x0; i <= N * MAX_VALUE; i++) {
    if (dp[N][i] <= W) {
      result = i;
    }
  }
  return result;
}
console[__DECODE_0__(0x115)](solve());
