function __STRING_ARRAY__() {
  var _0x51bebc = ['367074NRGpKh', 'floor', 'log', 'map', '1011736QnSVmS', 'reduce', 'split', '10pufFnv', 'readFileSync', '570942YFQFuV', 'trim', '3426460VxTlrh', 'utf8', '14gknaPc', '471925ZOvWQP', '104UfJkix', '146244tHSLZn', '8FLvzDC', '7415276XEviSu'];
  __STRING_ARRAY__ = function () {
    return _0x51bebc;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe3)) / 0x1 + parseInt(__DECODE_0__(0xec)) / 0x2 + parseInt(__DECODE_0__(0xe5)) / 0x3 * (parseInt(__DECODE_0__(0xe6)) / 0x4) + -parseInt(__DECODE_0__(0xe0)) / 0x5 + -parseInt(__DECODE_0__(0xde)) / 0x6 * (parseInt(__DECODE_0__(0xe2)) / 0x7) + -parseInt(__DECODE_0__(0xe4)) / 0x8 * (-parseInt(__DECODE_0__(0xe8)) / 0x9) + parseInt(__DECODE_0__(0xdc)) / 0xa * (parseInt(__DECODE_0__(0xe7)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x70587);
var input = require('fs')[__DECODE_0__(0xdd)]('/dev/stdin', __DECODE_0__(0xe1));
var arr = input[__DECODE_0__(0xdf)]()['split']('\x0a');
var [n, c] = arr[0x0][__DECODE_0__(0xdb)]('\x20')[__DECODE_0__(0xeb)](Number);
var p = arr[0x1][__DECODE_0__(0xdb)]('\x20')['map'](Number);
function __DECODE_0__(ysFcmm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ysFcmm, key);
}
var sum = p[__DECODE_0__(0xed)]((a, b) => a + b);
var x = sum % (n + 0x1) == 0x0 ? 0x0 : 0x1;
console[__DECODE_0__(0xea)](Math[__DECODE_0__(0xe9)](sum / (n + 0x1)) + x);
