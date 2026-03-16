(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xfb)) / 0x1 + -parseInt(__DECODE_0__(0xfa)) / 0x2 + -parseInt(__DECODE_0__(0xff)) / 0x3 + -parseInt(__DECODE_0__(0xf3)) / 0x4 + parseInt(__DECODE_0__(0xf8)) / 0x5 * (parseInt(__DECODE_0__(0xf9)) / 0x6) + parseInt(__DECODE_0__(0x100)) / 0x7 * (-parseInt(__DECODE_0__(0xf6)) / 0x8) + parseInt(__DECODE_0__(0xf7)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x98f92);
function Main(s) {
  s = s[__DECODE_0__(0x101)]('\x0a');
  var n = +s[0x0];
  for (var i = 0x0; i < n; i++) {
    s[i] = s[i + 0x1][__DECODE_0__(0x101)]('\x20')[__DECODE_0__(0xfe)](a => +a);
  }
  var ans = 0x0;
  for (i = n - 0x1; i >= 0x0; i--) {
    var x = (s[i][0x0] + ans) % s[i][0x1];
    if (x) {
      ans += s[i][0x1] - x;
    }
  }
  console[__DECODE_0__(0xf4)](ans);
}
Main(require('fs')[__DECODE_0__(0xf5)](__DECODE_0__(0xfc), __DECODE_0__(0xfd)));
function __DECODE_0__(imJBvK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(imJBvK, key);
}
function __STRING_ARRAY__() {
  var _0x45873d = ['17043300QFHaKH', '65GVZpNO', '26382MgyKxJ', '743398kjiSxk', '1099840MMWhux', '/dev/stdin', 'utf8', 'map', '1612584TesOXt', '5173gxuJLc', 'split', '2828676IYcjNi', 'log', 'readFileSync', '8744bNMKVJ'];
  __STRING_ARRAY__ = function () {
    return _0x45873d;
  };
  return __STRING_ARRAY__();
}
