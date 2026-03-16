'use strict';

const a0_0x40d788 = __DECODE_0__;
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
  const _0x2bb410 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x2bb410(0x1bf)) / 0x1 + parseInt(_0x2bb410(0x1cb)) / 0x2 * (-parseInt(_0x2bb410(0x1c8)) / 0x3) + -parseInt(_0x2bb410(0x1c6)) / 0x4 * (-parseInt(_0x2bb410(0x1c0)) / 0x5) + -parseInt(_0x2bb410(0x1cc)) / 0x6 + -parseInt(_0x2bb410(0x1c4)) / 0x7 + parseInt(_0x2bb410(0x1cd)) / 0x8 + -parseInt(_0x2bb410(0x1c5)) / 0x9 * (-parseInt(_0x2bb410(0x1bd)) / 0xa);
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
let input = require('fs')[a0_0x40d788(0x1c9)](a0_0x40d788(0x1bc), a0_0x40d788(0x1c2));
input = input[a0_0x40d788(0x1be)]('\x0a');
let info = input[a0_0x40d788(0x1c7)]();
let N = info[a0_0x40d788(0x1be)]('\x20')[0x0] * 0x1;
let X = info[a0_0x40d788(0x1be)]('\x20')[0x1];
let arr = input['map'](x => x * 0x1);
let min = Math['min'](...arr);
let sum = arr[a0_0x40d788(0x1ca)]((x, a) => {
  return a + x;
});
let ans = N + Math[a0_0x40d788(0x1c3)]((X - sum) / min);
console[a0_0x40d788(0x1c1)](ans);
