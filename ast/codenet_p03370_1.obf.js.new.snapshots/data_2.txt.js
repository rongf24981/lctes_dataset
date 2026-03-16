'use strict';

function __DECODE_0__(HQNSmy, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1bc;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HQNSmy, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1bf)) / 0x1 + parseInt(__DECODE_0__(0x1cb)) / 0x2 * (-parseInt(__DECODE_0__(0x1c8)) / 0x3) + -parseInt(__DECODE_0__(0x1c6)) / 0x4 * (-parseInt(__DECODE_0__(0x1c0)) / 0x5) + -parseInt(__DECODE_0__(0x1cc)) / 0x6 + -parseInt(__DECODE_0__(0x1c4)) / 0x7 + parseInt(__DECODE_0__(0x1cd)) / 0x8 + -parseInt(__DECODE_0__(0x1c5)) / 0x9 * (-parseInt(__DECODE_0__(0x1bd)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x37a04);
function __STRING_ARRAY__() {
  const _0x437812 = ['shift', '3HNNAwN', 'readFileSync', 'reduce', '442562VdqlKz', '2437914rLBJQq', '870096PafoVT', '/dev/stdin', '410IrKEHP', 'split', '96377qbFtLh', '28510IcWMAx', 'log', 'utf8', 'floor', '2618868RGuQug', '223623nANPgA', '4XYzCcM'];
  __STRING_ARRAY__ = function () {
    return _0x437812;
  };
  return __STRING_ARRAY__();
}
let input = require('fs')[__DECODE_0__(0x1c9)](__DECODE_0__(0x1bc), __DECODE_0__(0x1c2));
input = input[__DECODE_0__(0x1be)]('\x0a');
let info = input[__DECODE_0__(0x1c7)]();
let N = info[__DECODE_0__(0x1be)]('\x20')[0x0] * 0x1;
let X = info[__DECODE_0__(0x1be)]('\x20')[0x1];
let arr = input['map'](x => x * 0x1);
let min = Math['min'](...arr);
let sum = arr[__DECODE_0__(0x1ca)]((x, a) => {
  return a + x;
});
let ans = N + Math[__DECODE_0__(0x1c3)]((X - sum) / min);
console[__DECODE_0__(0x1c1)](ans);
