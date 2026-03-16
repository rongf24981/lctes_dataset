(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x154)) / 0x1 + -parseInt(__DECODE_0__(0x151)) / 0x2 * (parseInt(__DECODE_0__(0x156)) / 0x3) + parseInt(__DECODE_0__(0x14f)) / 0x4 + -parseInt(__DECODE_0__(0x155)) / 0x5 * (-parseInt(__DECODE_0__(0x150)) / 0x6) + -parseInt(__DECODE_0__(0x157)) / 0x7 + parseInt(__DECODE_0__(0x158)) / 0x8 + -parseInt(__DECODE_0__(0x153)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x72a88);
function __DECODE_0__(rcOwPX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rcOwPX, key);
}
function Main(input) {
  var k = parseInt(input[__DECODE_0__(0x14d)]('\x0a')[0x0], 0xa);
  var a = 0x0;
  var b = 0x0;
  for (i = 0x1; i <= k; i++) {
    if (i % 0x2 == 0x0) {
      a++;
    } else {
      b++;
    }
  }
  console[__DECODE_0__(0x152)](a * b);
}
Main(require('fs')[__DECODE_0__(0x14e)](__DECODE_0__(0x14c), 'utf8'));
function __STRING_ARRAY__() {
  var _0xc68cb4 = ['25Isovxp', '13962BlyKhJ', '1321341SbASCE', '7017328Rsirud', '/dev/stdin', 'split', 'readFileSync', '1221236QMJczF', '448482JXEPBv', '326fNRRRy', 'log', '1939725aYOfNj', '76320CUIrtA'];
  __STRING_ARRAY__ = function () {
    return _0xc68cb4;
  };
  return __STRING_ARRAY__();
}
