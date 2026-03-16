'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x16c)) / 0x1 + -parseInt(__DECODE_0__(0x164)) / 0x2 * (-parseInt(__DECODE_0__(0x169)) / 0x3) + parseInt(__DECODE_0__(0x16b)) / 0x4 + -parseInt(__DECODE_0__(0x15f)) / 0x5 + -parseInt(__DECODE_0__(0x16a)) / 0x6 * (parseInt(__DECODE_0__(0x168)) / 0x7) + parseInt(__DECODE_0__(0x15e)) / 0x8 * (parseInt(__DECODE_0__(0x15d)) / 0x9) + parseInt(__DECODE_0__(0x162)) / 0xa * (parseInt(__DECODE_0__(0x167)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2a410);
function Main(INPUT) {
  const input = INPUT[__DECODE_0__(0x160)]('\x0a')[0x0]['split']('\x20');
  const A = parseInt(input[0x0], 0xa);
  const B = parseInt(input[0x1], 0xa);
  console[__DECODE_0__(0x165)](A + B >= 0xa ? __DECODE_0__(0x166) : A + B);
}
function __DECODE_0__(kUaRVq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kUaRVq, key);
}
Main(require('fs')[__DECODE_0__(0x161)]('/dev/stdin', __DECODE_0__(0x163)));
function __STRING_ARRAY__() {
  const _0x1aa8c7 = ['split', 'readFileSync', '10AOMEXQ', 'utf8', '2MHilTd', 'log', 'error', '3117741MInOel', '14714ulbwpA', '249636CUCLwC', '894svmKYB', '224380OhzQfL', '191958ESuJTd', '18gqSJpe', '815640SHJjFr', '1661680xzydFJ'];
  __STRING_ARRAY__ = function () {
    return _0x1aa8c7;
  };
  return __STRING_ARRAY__();
}
