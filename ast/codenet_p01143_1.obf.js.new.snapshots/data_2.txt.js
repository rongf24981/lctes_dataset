function __DECODE_0__(XzgwmZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xef;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XzgwmZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf7)) / 0x1 * (parseInt(__DECODE_0__(0xfd)) / 0x2) + parseInt(__DECODE_0__(0xef)) / 0x3 * (parseInt(__DECODE_0__(0xfc)) / 0x4) + parseInt(__DECODE_0__(0xf2)) / 0x5 * (parseInt(__DECODE_0__(0xf6)) / 0x6) + parseInt(__DECODE_0__(0x100)) / 0x7 * (-parseInt(__DECODE_0__(0xf9)) / 0x8) + -parseInt(__DECODE_0__(0xfa)) / 0x9 + -parseInt(__DECODE_0__(0xfe)) / 0xa + parseInt(__DECODE_0__(0xff)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x52672);
var input = require('fs')[__DECODE_0__(0xfb)]('/dev/stdin', __DECODE_0__(0xf4));
function __STRING_ARRAY__() {
  var _0x16a053 = ['2fSFDmh', 'log', '2072lzziOZ', '5459454laOXVw', 'readFileSync', '60eRcsdC', '148992YBHlKW', '2176090yvGxrE', '11024871spkVZd', '7126xFuBtl', 'map', 'trim', '18195JsYjFv', 'floor', 'push', '25DYYBNw', 'shift', 'utf8', 'split', '577386JMuwMv'];
  __STRING_ARRAY__ = function () {
    return _0x16a053;
  };
  return __STRING_ARRAY__();
}
var Arr = input[__DECODE_0__(0x102)]()[__DECODE_0__(0xf5)]('\x0a');
while (!![]) {
  var nmp = Arr[__DECODE_0__(0xf3)]()[__DECODE_0__(0xf5)]('\x20')[__DECODE_0__(0x101)](Number);
  if (nmp[0x0] == 0x0 && nmp[0x1] == 0x0 && nmp[0x2] == 0x0) {
    break;
  }
  var n = nmp[0x0];
  var m = nmp[0x1] - 0x1;
  var p = nmp[0x2];
  var arr = [];
  var sum = 0x0;
  for (var i = 0x0; i < n; i++) {
    var v = Arr[__DECODE_0__(0xf3)]() - 0x0;
    arr[__DECODE_0__(0xf1)](v);
    sum += v * 0x64;
  }
  sum = sum * (0x64 - p) / 0x64;
  var ans = 0x0;
  if (arr[m] != 0x0) {
    ans = Math[__DECODE_0__(0xf0)](sum / arr[m]);
  }
  console[__DECODE_0__(0xf8)](ans);
}
