'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xdc)) / 0x1 * (parseInt(__DECODE_0__(0xd3)) / 0x2) + -parseInt(__DECODE_0__(0xcc)) / 0x3 + -parseInt(__DECODE_0__(0xdb)) / 0x4 + -parseInt(__DECODE_0__(0xd8)) / 0x5 + parseInt(__DECODE_0__(0xce)) / 0x6 * (-parseInt(__DECODE_0__(0xda)) / 0x7) + -parseInt(__DECODE_0__(0xd0)) / 0x8 + -parseInt(__DECODE_0__(0xcb)) / 0x9 * (-parseInt(__DECODE_0__(0xd6)) / 0xa);
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
let input = require('fs')['readFileSync'](__DECODE_0__(0xd4), __DECODE_0__(0xcd));
const info = input[__DECODE_0__(0xd7)]()[__DECODE_0__(0xd1)]('\x0a');
function __STRING_ARRAY__() {
  const _0x53d40c = ['utf8', '6MoYZLB', 'log', '2462344UrxNBE', 'split', 'round', '417206RZmZMR', '/dev/stdin', 'pow', '6270wTrpJh', 'trim', '105780MUHvbY', 'map', '85393YZzaRM', '1265132rJtpEb', '1YkJEXk', '13167LwtAof', '892248yOsgqn'];
  __STRING_ARRAY__ = function () {
    return _0x53d40c;
  };
  return __STRING_ARRAY__();
}
const nums = info[0x1]['split']('\x20')[__DECODE_0__(0xd9)](x => x * 0x1);
const ave = Math[__DECODE_0__(0xd2)](nums['reduce']((x, a) => {
  return a += x;
}) / info[0x0]);
let sum = 0x0;
for (let i = 0x0; i < info[0x0]; i++) {
  sum += Math[__DECODE_0__(0xd5)](nums[i] - ave, 0x2);
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
console[__DECODE_0__(0xcf)](sum);
