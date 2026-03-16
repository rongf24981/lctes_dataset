function __DECODE_0__(bbQiAd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x83;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bbQiAd, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x83)) / 0x1 + -parseInt(__DECODE_0__(0x89)) / 0x2 * (parseInt(__DECODE_0__(0x8e)) / 0x3) + -parseInt(__DECODE_0__(0x87)) / 0x4 * (-parseInt(__DECODE_0__(0x8c)) / 0x5) + parseInt(__DECODE_0__(0x8d)) / 0x6 + parseInt(__DECODE_0__(0x8f)) / 0x7 + -parseInt(__DECODE_0__(0x86)) / 0x8 + parseInt(__DECODE_0__(0x90)) / 0x9 * (-parseInt(__DECODE_0__(0x84)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa16b5);
function Main(input) {
  input = input['split']('\x0a')[0x0][__DECODE_0__(0x88)]('\x20');
  if (Math[__DECODE_0__(0x91)](input[0x0] - input[0x1]) < Math[__DECODE_0__(0x91)](input[0x0] - input[0x2])) {
    console['log']('A');
  } else {
    console[__DECODE_0__(0x85)]('B');
  }
}
Main(require('fs')[__DECODE_0__(0x92)](__DECODE_0__(0x8a), __DECODE_0__(0x8b)));
function __STRING_ARRAY__() {
  var _0x3d8b7a = ['8918014jfhFJV', '1059543eOTTHp', 'abs', 'readFileSync', '1087571IRjGfx', '120gsQTkA', 'log', '5427408CtNMJb', '676708udmayB', 'split', '1874EJOtDp', '/dev/stdin', 'utf8', '5IVAegY', '3696300WqOjrf', '1263HwVFqX'];
  __STRING_ARRAY__ = function () {
    return _0x3d8b7a;
  };
  return __STRING_ARRAY__();
}
