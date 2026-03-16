'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x87)) / 0x1 * (-parseInt(__DECODE_0__(0x95)) / 0x2) + parseInt(__DECODE_0__(0x89)) / 0x3 * (-parseInt(__DECODE_0__(0x91)) / 0x4) + -parseInt(__DECODE_0__(0x90)) / 0x5 + -parseInt(__DECODE_0__(0x88)) / 0x6 + -parseInt(__DECODE_0__(0x8f)) / 0x7 * (-parseInt(__DECODE_0__(0x8b)) / 0x8) + parseInt(__DECODE_0__(0x8a)) / 0x9 + -parseInt(__DECODE_0__(0x93)) / 0xa * (-parseInt(__DECODE_0__(0x85)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x55108);
function __STRING_ARRAY__() {
  var _0xfdd891 = ['7McVzrl', '1203895zmJIar', '292rgTANG', 'readFileSync', '696400PvnpCF', 'split', '78JoFGaX', '110IggjqF', '/dev/stdin', '8791RGqooV', '2547546cEoehA', '4197UCQZzz', '2406807psDjwb', '3959576XSSrzS', 'utf8', 'log', 'toFixed'];
  __STRING_ARRAY__ = function () {
    return _0xfdd891;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(MSiFAc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x85;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MSiFAc, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x94)]('\x0a');
  var volume = input / 0x3 * input / 0x3 * input / 0x3;
  console[__DECODE_0__(0x8d)](volume[__DECODE_0__(0x8e)](0xc));
}
Main(require('fs')[__DECODE_0__(0x92)](__DECODE_0__(0x86), __DECODE_0__(0x8c)));
