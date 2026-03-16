'use strict';

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
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x12d)) / 0x1 * (-parseInt(__DECODE_0__(0x130)) / 0x2) + parseInt(__DECODE_0__(0x12a)) / 0x3 + parseInt(__DECODE_0__(0x12f)) / 0x4 + -parseInt(__DECODE_0__(0x135)) / 0x5 * (-parseInt(__DECODE_0__(0x131)) / 0x6) + parseInt(__DECODE_0__(0x128)) / 0x7 * (parseInt(__DECODE_0__(0x129)) / 0x8) + parseInt(__DECODE_0__(0x12e)) / 0x9 + -parseInt(__DECODE_0__(0x132)) / 0xa * (parseInt(__DECODE_0__(0x126)) / 0xb);
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
let input = require('fs')[__DECODE_0__(0x133)](__DECODE_0__(0x127), __DECODE_0__(0x12c));
const Nums = input[__DECODE_0__(0x12b)]('\x0a');
function __STRING_ARRAY__() {
  const _0x4a0324 = ['10yMPfoa', 'readFileSync', 'log', '2758715DsaTIF', '31157599MiAOCE', '/dev/stdin', '2758BVXRzB', '15528kVZQxd', '1452618NtEAIw', 'split', 'utf8', '154FFOwFl', '5205051IkvhXB', '264944lOJOcP', '10412IqTNkH', '6Hkpyur'];
  __STRING_ARRAY__ = function () {
    return _0x4a0324;
  };
  return __STRING_ARRAY__();
}
const S = Nums[0x0][__DECODE_0__(0x12b)]('');
const T = Nums[0x1][__DECODE_0__(0x12b)]('');
let ans = 0x0;
S['forEach']((x, i) => {
  if (x == T[i]) {
    ans++;
  }
});
console[__DECODE_0__(0x134)](ans);
