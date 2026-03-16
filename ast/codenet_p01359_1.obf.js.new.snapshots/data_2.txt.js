function __DECODE_0__(YbWdvy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YbWdvy, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x140)) / 0x1 + parseInt(__DECODE_0__(0x134)) / 0x2 * (-parseInt(__DECODE_0__(0x133)) / 0x3) + parseInt(__DECODE_0__(0x12f)) / 0x4 + parseInt(__DECODE_0__(0x143)) / 0x5 * (parseInt(__DECODE_0__(0x130)) / 0x6) + parseInt(__DECODE_0__(0x135)) / 0x7 + -parseInt(__DECODE_0__(0x136)) / 0x8 * (parseInt(__DECODE_0__(0x13c)) / 0x9) + parseInt(__DECODE_0__(0x139)) / 0xa * (parseInt(__DECODE_0__(0x137)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x19dd0);
var input = require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x132));
var arr = input[__DECODE_0__(0x141)]()[__DECODE_0__(0x13e)]('\x0a');
while (!![]) {
  var [n, q] = arr[__DECODE_0__(0x138)]()[__DECODE_0__(0x13e)]('\x20')[__DECODE_0__(0x142)](Number);
  if (n == 0x0 && q == 0x0) {
    break;
  }
  var g = [];
  for (var i = 0x0; i < n; i++) {
    var [e, ey, wy] = arr[__DECODE_0__(0x138)]()[__DECODE_0__(0x13e)]('\x20');
    [ey, wy] = [ey - 0x0, wy - 0x0];
    g[__DECODE_0__(0x13a)]([e, wy - ey, wy]);
  }
  for (var i = 0x0; i < q; i++) {
    var n = arr[__DECODE_0__(0x138)]() - 0x0;
    var ans = __DECODE_0__(0x13b);
    for (var j = 0x0; j < g[__DECODE_0__(0x13f)]; j++) {
      var a = g[j][0x1];
      var b = g[j][0x2];
      if (a < n && n <= b) {
        ans = [g[j][0x0], n - a][__DECODE_0__(0x13d)]('\x20');
      }
    }
    console[__DECODE_0__(0x131)](ans);
  }
}
function __STRING_ARRAY__() {
  var _0x13a1bb = ['trim', 'map', '39830zmsDhv', '133528nlZASY', '18HbcSYz', 'log', 'utf8', '48tLPlyo', '9562KLRSjJ', '754950pepqBr', '394952phrCGA', '11ceKMQc', 'shift', '1706790NnTeOl', 'push', 'Unknown', '9bwAPCq', 'join', 'split', 'length', '104008rmNIGx'];
  __STRING_ARRAY__ = function () {
    return _0x13a1bb;
  };
  return __STRING_ARRAY__();
}
