'use strict';

const a0_0x55a1a7 = __DECODE_0__;
function __DECODE_0__(ansjjx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x126;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ansjjx, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x1d431a = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x1d431a(0x12d)) / 0x1 * (-parseInt(_0x1d431a(0x130)) / 0x2) + parseInt(_0x1d431a(0x12a)) / 0x3 + parseInt(_0x1d431a(0x12f)) / 0x4 + -parseInt(_0x1d431a(0x135)) / 0x5 * (-parseInt(_0x1d431a(0x131)) / 0x6) + parseInt(_0x1d431a(0x128)) / 0x7 * (parseInt(_0x1d431a(0x129)) / 0x8) + parseInt(_0x1d431a(0x12e)) / 0x9 + -parseInt(_0x1d431a(0x132)) / 0xa * (parseInt(_0x1d431a(0x126)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6531d);
let input = require('fs')[a0_0x55a1a7(0x133)](a0_0x55a1a7(0x127), a0_0x55a1a7(0x12c));
const Nums = input[a0_0x55a1a7(0x12b)]('\x0a');
function __STRING_ARRAY__() {
  const _0x4a0324 = ['10yMPfoa', 'readFileSync', 'log', '2758715DsaTIF', '31157599MiAOCE', '/dev/stdin', '2758BVXRzB', '15528kVZQxd', '1452618NtEAIw', 'split', 'utf8', '154FFOwFl', '5205051IkvhXB', '264944lOJOcP', '10412IqTNkH', '6Hkpyur'];
  __STRING_ARRAY__ = function () {
    return _0x4a0324;
  };
  return __STRING_ARRAY__();
}
const S = Nums[0x0][a0_0x55a1a7(0x12b)]('');
const T = Nums[0x1][a0_0x55a1a7(0x12b)]('');
let ans = 0x0;
S['forEach']((x, i) => {
  if (x == T[i]) {
    ans++;
  }
});
console[a0_0x55a1a7(0x134)](ans);
