(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x105)) / 0x1 + -parseInt(__DECODE_0__(0x10c)) / 0x2 + -parseInt(__DECODE_0__(0x10d)) / 0x3 + parseInt(__DECODE_0__(0x100)) / 0x4 + parseInt(__DECODE_0__(0x109)) / 0x5 * (-parseInt(__DECODE_0__(0x107)) / 0x6) + parseInt(__DECODE_0__(0x102)) / 0x7 + parseInt(__DECODE_0__(0x101)) / 0x8 * (parseInt(__DECODE_0__(0xfe)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3003c);
var input = require('fs')[__DECODE_0__(0x104)](__DECODE_0__(0x103), __DECODE_0__(0x106));
var [a, b, c] = input[__DECODE_0__(0xff)]()['split']('\x20')[__DECODE_0__(0x10b)](Number);
function __DECODE_0__(TorWUj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfe;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TorWUj, key);
}
console['log'](Math[__DECODE_0__(0x10a)](a, b, c) + '\x20' + Math[__DECODE_0__(0x108)](a, b, c));
function __STRING_ARRAY__() {
  var _0x56bb6d = ['1287xXUXCW', 'trim', '1547876DTSGMN', '9952dDJwNG', '464051ycguRC', '/dev/stdin', 'readFileSync', '27336oNSFPK', 'utf8', '138JzFyZS', 'max', '25055RnudwJ', 'min', 'map', '430754OGbGEz', '229560OKjAyH'];
  __STRING_ARRAY__ = function () {
    return _0x56bb6d;
  };
  return __STRING_ARRAY__();
}
