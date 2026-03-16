'use strict';

function __DECODE_0__(dtUaoQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x143;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dtUaoQ, key);
}
function __STRING_ARRAY__() {
  const _0x656575 = ['7007DyYKDF', 'split', '3092665uCgSPZ', '886827dYNxMb', '4269844nemQsp', '4wiaomw', '3642328KDMkNo', 'log', '/dev/stdin', 'trim', '6873696ssYhah', '1968wcGXjW', '417325VVezqv', 'Hello\x20World'];
  __STRING_ARRAY__ = function () {
    return _0x656575;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x150)) / 0x1 + -parseInt(__DECODE_0__(0x149)) / 0x2 * (parseInt(__DECODE_0__(0x147)) / 0x3) + parseInt(__DECODE_0__(0x148)) / 0x4 + parseInt(__DECODE_0__(0x146)) / 0x5 + parseInt(__DECODE_0__(0x14f)) / 0x6 * (parseInt(__DECODE_0__(0x144)) / 0x7) + -parseInt(__DECODE_0__(0x14a)) / 0x8 + -parseInt(__DECODE_0__(0x14e)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x97b52);
const main = input => {
  const args = input[__DECODE_0__(0x14d)]()[__DECODE_0__(0x145)]('\x0a');
  const n = parseInt(args[0x0], 0xa);
  if (n === 0x1) {
    console[__DECODE_0__(0x14b)](__DECODE_0__(0x143));
  } else {
    const a = parseInt(args[0x1], 0xa);
    const b = parseInt(args[0x2], 0xa);
    console[__DECODE_0__(0x14b)](a + b);
  }
};
main(require('fs')['readFileSync'](__DECODE_0__(0x14c), 'utf8'));
