'use strict';

const a0_0x279e23 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x1855ea = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x1855ea(0xdc)) / 0x1 * (parseInt(_0x1855ea(0xd3)) / 0x2) + -parseInt(_0x1855ea(0xcc)) / 0x3 + -parseInt(_0x1855ea(0xdb)) / 0x4 + -parseInt(_0x1855ea(0xd8)) / 0x5 + parseInt(_0x1855ea(0xce)) / 0x6 * (-parseInt(_0x1855ea(0xda)) / 0x7) + -parseInt(_0x1855ea(0xd0)) / 0x8 + -parseInt(_0x1855ea(0xcb)) / 0x9 * (-parseInt(_0x1855ea(0xd6)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x29c31);
let input = require('fs')['readFileSync'](a0_0x279e23(0xd4), a0_0x279e23(0xcd));
const info = input[a0_0x279e23(0xd7)]()[a0_0x279e23(0xd1)]('\x0a');
function __STRING_ARRAY__() {
  const _0x53d40c = ['utf8', '6MoYZLB', 'log', '2462344UrxNBE', 'split', 'round', '417206RZmZMR', '/dev/stdin', 'pow', '6270wTrpJh', 'trim', '105780MUHvbY', 'map', '85393YZzaRM', '1265132rJtpEb', '1YkJEXk', '13167LwtAof', '892248yOsgqn'];
  __STRING_ARRAY__ = function () {
    return _0x53d40c;
  };
  return __STRING_ARRAY__();
}
const nums = info[0x1]['split']('\x20')[a0_0x279e23(0xd9)](x => x * 0x1);
const ave = Math[a0_0x279e23(0xd2)](nums['reduce']((x, a) => {
  return a += x;
}) / info[0x0]);
let sum = 0x0;
for (let i = 0x0; i < info[0x0]; i++) {
  sum += Math[a0_0x279e23(0xd5)](nums[i] - ave, 0x2);
}
function __DECODE_0__(iBzkVU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcb;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iBzkVU, key);
}
console[a0_0x279e23(0xcf)](sum);
