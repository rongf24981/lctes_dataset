function __DECODE_0__(BLYSGH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x103;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BLYSGH, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x108)) / 0x1 * (-parseInt(__DECODE_0__(0x103)) / 0x2) + -parseInt(__DECODE_0__(0x104)) / 0x3 * (-parseInt(__DECODE_0__(0x10b)) / 0x4) + parseInt(__DECODE_0__(0x110)) / 0x5 * (parseInt(__DECODE_0__(0x107)) / 0x6) + -parseInt(__DECODE_0__(0x106)) / 0x7 + parseInt(__DECODE_0__(0x10a)) / 0x8 + parseInt(__DECODE_0__(0x10d)) / 0x9 + -parseInt(__DECODE_0__(0x10f)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2d1b2);
function Main(input) {
  var a;
  var b;
  var c;
  a = Number(input[__DECODE_0__(0x10e)]('\x0a')[0x0]['split']('\x20')[0x0]);
  b = Number(input[__DECODE_0__(0x10e)]('\x0a')[0x0][__DECODE_0__(0x10e)]('\x20')[0x1]);
  c = Number(input[__DECODE_0__(0x10e)]('\x0a')[0x0][__DECODE_0__(0x10e)]('\x20')[0x2]);
  console['log'](c - (a - b) > 0x0 ? c - (a - b) : 0x0);
}
Main(require('fs')[__DECODE_0__(0x105)](__DECODE_0__(0x10c), __DECODE_0__(0x109)));
function __STRING_ARRAY__() {
  var _0x1df4a0 = ['489223YSeNYW', '54xwrPcu', '1PwNBmC', 'utf8', '1526104sqsYSN', '4ppmvKL', '/dev/stdin', '1226799mbakrT', 'split', '4066650TnOpqq', '1115QgKJZS', '45280ZGChzc', '928761MIbPHs', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x1df4a0;
  };
  return __STRING_ARRAY__();
}
