'use strict';

function __STRING_ARRAY__() {
  const _0x5c39d7 = ['9065511qnftOu', '1sVIaHv', 'trim', 'length', '48ZECzzu', '6rHwQDu', '1081904piZawg', '70827OLVQzb', '3766625VvPtIQ', 'split', 'utf8', '4655230sbxuNk', 'filter', '14030847dOXDZg', 'YES', '610294mXelXO'];
  __STRING_ARRAY__ = function () {
    return _0x5c39d7;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xdf)) / 0x1 * (-parseInt(__DECODE_0__(0xdd)) / 0x2) + -parseInt(__DECODE_0__(0xe5)) / 0x3 * (-parseInt(__DECODE_0__(0xe2)) / 0x4) + -parseInt(__DECODE_0__(0xe6)) / 0x5 * (-parseInt(__DECODE_0__(0xe3)) / 0x6) + parseInt(__DECODE_0__(0xde)) / 0x7 + -parseInt(__DECODE_0__(0xe4)) / 0x8 + -parseInt(__DECODE_0__(0xeb)) / 0x9 + parseInt(__DECODE_0__(0xe9)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc2ca5);
const main = arg => {
  arg = arg[__DECODE_0__(0xe0)]()[__DECODE_0__(0xe7)]('\x0a');
  const S = arg[0x0][__DECODE_0__(0xe7)]('');
  const win = S[__DECODE_0__(0xea)](n => n === 'o')[__DECODE_0__(0xe1)];
  const rest = 0xf - S[__DECODE_0__(0xe1)];
  console['log'](rest + win >= 0x8 ? __DECODE_0__(0xec) : 'NO');
};
function __DECODE_0__(uvYqUx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdd;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uvYqUx, key);
}
main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0xe8)));
