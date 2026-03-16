'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x175)) / 0x1 + parseInt(__DECODE_0__(0x179)) / 0x2 * (-parseInt(__DECODE_0__(0x171)) / 0x3) + parseInt(__DECODE_0__(0x178)) / 0x4 * (parseInt(__DECODE_0__(0x17e)) / 0x5) + -parseInt(__DECODE_0__(0x172)) / 0x6 + parseInt(__DECODE_0__(0x176)) / 0x7 + -parseInt(__DECODE_0__(0x17c)) / 0x8 * (parseInt(__DECODE_0__(0x16f)) / 0x9) + -parseInt(__DECODE_0__(0x180)) / 0xa * (-parseInt(__DECODE_0__(0x17d)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9fdaa);
function __DECODE_0__(jwIetI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jwIetI, key);
}
function __STRING_ARRAY__() {
  const _0x178dbb = ['153qGNSLV', 'substr', '3qxNhQB', '5125224syxISx', 'length', 'log', '1227800IfDjiw', '6358233JCWyWa', '/dev/stdin', '16jZYtYg', '592436KQvNEP', 'readFileSync', 'utf8', '267144IvXbtX', '48994dnaXxR', '130715qDJSfD', 'split', '5810tMuMXF'];
  __STRING_ARRAY__ = function () {
    return _0x178dbb;
  };
  return __STRING_ARRAY__();
}
const is_palindrome = s => {
  let n = s[__DECODE_0__(0x173)];
  for (let i = 0x0; i < n; i++) {
    if (s[i] !== s[n - i - 0x1]) {
      return ![];
    }
  }
  return !![];
};
const main = input => {
  const spi = input[__DECODE_0__(0x17f)]('\x0a');
  const s = spi[0x0];
  const n = s[__DECODE_0__(0x173)];
  if (is_palindrome(s) && is_palindrome(s['substring'](0x0, (n - 0x1) / 0x2)) && is_palindrome(s[__DECODE_0__(0x170)]((n + 0x3) / 0x2 - 0x1))) {
    console['log']('Yes');
  } else {
    console[__DECODE_0__(0x174)]('No');
  }
};
main(require('fs')[__DECODE_0__(0x17a)](__DECODE_0__(0x177), __DECODE_0__(0x17b)));
