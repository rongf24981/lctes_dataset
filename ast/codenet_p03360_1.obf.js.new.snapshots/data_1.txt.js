'use strict';

const a0_0x206934 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x11f833 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x11f833(0x136)) / 0x1 * (parseInt(_0x11f833(0x143)) / 0x2) + -parseInt(_0x11f833(0x133)) / 0x3 * (-parseInt(_0x11f833(0x134)) / 0x4) + -parseInt(_0x11f833(0x131)) / 0x5 * (-parseInt(_0x11f833(0x132)) / 0x6) + parseInt(_0x11f833(0x13c)) / 0x7 + -parseInt(_0x11f833(0x138)) / 0x8 + -parseInt(_0x11f833(0x139)) / 0x9 * (parseInt(_0x11f833(0x137)) / 0xa) + -parseInt(_0x11f833(0x13f)) / 0xb * (parseInt(_0x11f833(0x140)) / 0xc);
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
  const _0x529801 = __DECODE_0__;
  input = input[_0x529801(0x13e)]('\x0a');
  const nums = input[0x0][_0x529801(0x13e)]('\x20')[_0x529801(0x13b)](i => parseInt(i));
  const K = parseInt(input[0x1]);
  nums['sort']((a, b) => a - b);
  let n = nums[_0x529801(0x130)]();
  n = n * Math[_0x529801(0x142)](0x2, K);
  nums[_0x529801(0x13a)](n);
  console[_0x529801(0x12e)](nums[_0x529801(0x12f)]((p, c) => p + c));
};
function __STRING_ARRAY__() {
  const _0x4d1579 = ['log', 'reduce', 'pop', '70vKdNXC', '408588kPteRJ', '105ABbvrj', '111168zkpNhi', 'readFileSync', '42drbnao', '2754650BsyCtJ', '11463072qeMtdi', '9wACoxz', 'push', 'map', '6032586lyvHFa', 'utf-8', 'split', '16296181IHkxdV', '12cvntfS', '/dev/stdin', 'pow', '55914kTETeh'];
  __STRING_ARRAY__ = function () {
    return _0x4d1579;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[a0_0x206934(0x135)](a0_0x206934(0x141), a0_0x206934(0x13d)));
