'use strict';

function __DECODE_0__(SbUdPT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SbUdPT, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xaa)) / 0x1 * (-parseInt(__DECODE_0__(0xab)) / 0x2) + -parseInt(__DECODE_0__(0xa2)) / 0x3 + parseInt(__DECODE_0__(0xa1)) / 0x4 * (-parseInt(__DECODE_0__(0xa6)) / 0x5) + parseInt(__DECODE_0__(0xb0)) / 0x6 * (parseInt(__DECODE_0__(0xb2)) / 0x7) + -parseInt(__DECODE_0__(0xa0)) / 0x8 * (parseInt(__DECODE_0__(0xb1)) / 0x9) + -parseInt(__DECODE_0__(0xa9)) / 0xa * (-parseInt(__DECODE_0__(0xa7)) / 0xb) + parseInt(__DECODE_0__(0xa8)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc2072);
function main(input) {
  input = input[__DECODE_0__(0xa4)]()[__DECODE_0__(0xaf)]('\x20')['map'](Number);
  const A = input[0x0];
  const B = input[0x1];
  const ans = A % 0x2 ^ B % 0x2 ? __DECODE_0__(0xae) : __DECODE_0__(0xad);
  console[__DECODE_0__(0xa3)](ans);
}
function __STRING_ARRAY__() {
  const _0x5aabaf = ['2QtRZmW', '486474BvaxwY', '/dev/stdin', 'Odd', 'Even', 'split', '36bgwFbH', '268578nBAFJu', '335041iRpkpg', '392RURSHN', '42308DbLicJ', '874803DGwowd', 'log', 'trim', 'readFileSync', '65xdVSub', '585937bNPgzC', '15278904ZuQzrw', '120hAWBOk'];
  __STRING_ARRAY__ = function () {
    return _0x5aabaf;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0xa5)](__DECODE_0__(0xac), 'utf8'));
