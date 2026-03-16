'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x136)) / 0x1 * (parseInt(__DECODE_0__(0x143)) / 0x2) + -parseInt(__DECODE_0__(0x133)) / 0x3 * (-parseInt(__DECODE_0__(0x134)) / 0x4) + -parseInt(__DECODE_0__(0x131)) / 0x5 * (-parseInt(__DECODE_0__(0x132)) / 0x6) + parseInt(__DECODE_0__(0x13c)) / 0x7 + -parseInt(__DECODE_0__(0x138)) / 0x8 + -parseInt(__DECODE_0__(0x139)) / 0x9 * (parseInt(__DECODE_0__(0x137)) / 0xa) + -parseInt(__DECODE_0__(0x13f)) / 0xb * (parseInt(__DECODE_0__(0x140)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbc8a8);
function __DECODE_0__(vkFCmm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vkFCmm, key);
}
const main = input => {
  input = input[__DECODE_0__(0x13e)]('\x0a');
  const nums = input[0x0][__DECODE_0__(0x13e)]('\x20')[__DECODE_0__(0x13b)](i => parseInt(i));
  const K = parseInt(input[0x1]);
  nums['sort']((a, b) => a - b);
  let n = nums[__DECODE_0__(0x130)]();
  n = n * Math[__DECODE_0__(0x142)](0x2, K);
  nums[__DECODE_0__(0x13a)](n);
  console[__DECODE_0__(0x12e)](nums[__DECODE_0__(0x12f)]((p, c) => p + c));
};
function __STRING_ARRAY__() {
  const _0x4d1579 = ['log', 'reduce', 'pop', '70vKdNXC', '408588kPteRJ', '105ABbvrj', '111168zkpNhi', 'readFileSync', '42drbnao', '2754650BsyCtJ', '11463072qeMtdi', '9wACoxz', 'push', 'map', '6032586lyvHFa', 'utf-8', 'split', '16296181IHkxdV', '12cvntfS', '/dev/stdin', 'pow', '55914kTETeh'];
  __STRING_ARRAY__ = function () {
    return _0x4d1579;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x135)](__DECODE_0__(0x141), __DECODE_0__(0x13d)));
