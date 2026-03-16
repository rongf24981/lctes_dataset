(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x98)) / 0x1 + -parseInt(__DECODE_0__(0x91)) / 0x2 * (-parseInt(__DECODE_0__(0x99)) / 0x3) + parseInt(__DECODE_0__(0x96)) / 0x4 * (parseInt(__DECODE_0__(0x9e)) / 0x5) + -parseInt(__DECODE_0__(0x95)) / 0x6 * (-parseInt(__DECODE_0__(0x9c)) / 0x7) + -parseInt(__DECODE_0__(0x93)) / 0x8 + parseInt(__DECODE_0__(0x9a)) / 0x9 * (-parseInt(__DECODE_0__(0x90)) / 0xa) + -parseInt(__DECODE_0__(0x9b)) / 0xb * (-parseInt(__DECODE_0__(0x97)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1b43f);
function __DECODE_0__(UDvKwJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UDvKwJ, key);
}
function Main(s) {
  s = s['split']('\x0a');
  var n = s[0x0][__DECODE_0__(0x9d)]('\x20')[__DECODE_0__(0x9f)](a => +a);
  var m = n[0x1];
  n = n[0x0];
  var x;
  var a = Array(0x4)['fill'](0x0)[__DECODE_0__(0x9f)](a => Array(n));
  for (var i = 0x0; i < n; i++) {
    x = s[i + 0x1][__DECODE_0__(0x9d)]('\x20')['map'](a => +a);
    a[0x0][i] = x[0x0] + x[0x1] + x[0x2];
    a[0x1][i] = x[0x0] + x[0x1] - x[0x2];
    a[0x2][i] = x[0x0] - x[0x1] + x[0x2];
    a[0x3][i] = -x[0x0] + x[0x1] + x[0x2];
  }
  var ans = 0x0;
  for (i = 0x0; i < 0x4; i++) {
    a[i][__DECODE_0__(0x94)]((a, b) => a - b);
    var t = 0x0;
    for (var j = 0x0; j < m; j++) {
      t += a[i][j];
    }
    ans = Math[__DECODE_0__(0x8f)](ans, Math[__DECODE_0__(0x8e)](t));
    t = 0x0;
    for (j = n; j > n - m;) {
      t += a[i][--j];
    }
    ans = Math['max'](ans, Math[__DECODE_0__(0x8e)](t));
  }
  console[__DECODE_0__(0x92)](ans);
}
function __STRING_ARRAY__() {
  var _0x37b2da = ['1960512oVnAKf', '168992oQiikc', '3DIbqWf', '9zkWnGz', '11CrlUFl', '111937rIdODo', 'split', '15udITTj', 'map', 'readFileSync', '/dev/stdin', 'abs', 'max', '247300HsXGbN', '393186HAsAYK', 'log', '1571680BkAzFZ', 'sort', '6qXbRtO', '167868qrUtgD'];
  __STRING_ARRAY__ = function () {
    return _0x37b2da;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x8c)](__DECODE_0__(0x8d), 'utf8'));
