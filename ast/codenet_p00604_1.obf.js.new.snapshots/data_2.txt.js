function __STRING_ARRAY__() {
  var _0x418045 = ['2149995iEgjLZ', 'length', 'utf8', '1022249mzNGKH', 'log', '180jxvZXJ', '/dev/stdin', '1864751vmpKYh', '6906365UUPEWZ', '4TXdBvi', 'trim', 'sort', '85327CJhkFo', 'split', '1666845dYXTTo', '8dejSqe', 'forEach', '5377980ecORtz', '2qkkiQc', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x418045;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf9)) / 0x1 * (-parseInt(__DECODE_0__(0x108)) / 0x2) + -parseInt(__DECODE_0__(0x10a)) / 0x3 + parseInt(__DECODE_0__(0xff)) / 0x4 * (parseInt(__DECODE_0__(0xfe)) / 0x5) + -parseInt(__DECODE_0__(0x107)) / 0x6 + -parseInt(__DECODE_0__(0xfd)) / 0x7 + parseInt(__DECODE_0__(0x105)) / 0x8 * (parseInt(__DECODE_0__(0x104)) / 0x9) + parseInt(__DECODE_0__(0xfb)) / 0xa * (parseInt(__DECODE_0__(0x102)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcf445);
var input = require('fs')[__DECODE_0__(0x109)](__DECODE_0__(0xfc), __DECODE_0__(0xf8));
var Arr = input[__DECODE_0__(0x100)]()['split']('\x0a');
function __DECODE_0__(FlLqKd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FlLqKd, key);
}
while (!![]) {
  if (Arr[__DECODE_0__(0x10b)] == 0x0) {
    break;
  }
  var n = Arr['shift']();
  var arr = Arr['shift']()[__DECODE_0__(0x103)]('\x20')['map'](Number);
  arr[__DECODE_0__(0x101)](function (a, b) {
    return a - b;
  });
  var sum = 0x0;
  var time = 0x0;
  arr[__DECODE_0__(0x106)](function (v) {
    sum += v + time;
    time += v;
  });
  console[__DECODE_0__(0xfa)](sum);
}
