var a0_0x1e132a = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x57b53b = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x57b53b(0xfb)) / 0x1 + -parseInt(_0x57b53b(0xfa)) / 0x2 + -parseInt(_0x57b53b(0xff)) / 0x3 + -parseInt(_0x57b53b(0xf3)) / 0x4 + parseInt(_0x57b53b(0xf8)) / 0x5 * (parseInt(_0x57b53b(0xf9)) / 0x6) + parseInt(_0x57b53b(0x100)) / 0x7 * (-parseInt(_0x57b53b(0xf6)) / 0x8) + parseInt(_0x57b53b(0xf7)) / 0x9;
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
  var _0x15c288 = __DECODE_0__;
  s = s[_0x15c288(0x101)]('\x0a');
  var n = +s[0x0];
  for (var i = 0x0; i < n; i++) {
    s[i] = s[i + 0x1][_0x15c288(0x101)]('\x20')[_0x15c288(0xfe)](a => +a);
  }
  var ans = 0x0;
  for (i = n - 0x1; i >= 0x0; i--) {
    var x = (s[i][0x0] + ans) % s[i][0x1];
    if (x) {
      ans += s[i][0x1] - x;
    }
  }
  console[_0x15c288(0xf4)](ans);
}
Main(require('fs')[a0_0x1e132a(0xf5)](a0_0x1e132a(0xfc), a0_0x1e132a(0xfd)));
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
