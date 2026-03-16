'use strict';

function __STRING_ARRAY__() {
  const _0x4d65d5 = ['10TcBNFk', '5464gjmlxX', '607664oKNjIT', '/dev/stdin', 'readFileSync', '930408rOOdNf', '9rXpcQF', '141053QueZqk', '204XZVdrY', '1BShOqi', '999429nRQrCH', 'utf8', '2458340hywqXL', '3549uEbiPs', 'split', '2267814MzIjqE'];
  __STRING_ARRAY__ = function () {
    return _0x4d65d5;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QCAoGa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d9;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QCAoGa, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1e5)) / 0x1 * (-parseInt(__DECODE_0__(0x1de)) / 0x2) + -parseInt(__DECODE_0__(0x1e6)) / 0x3 + -parseInt(__DECODE_0__(0x1e1)) / 0x4 * (-parseInt(__DECODE_0__(0x1dc)) / 0x5) + -parseInt(__DECODE_0__(0x1db)) / 0x6 + -parseInt(__DECODE_0__(0x1d9)) / 0x7 * (-parseInt(__DECODE_0__(0x1dd)) / 0x8) + -parseInt(__DECODE_0__(0x1e2)) / 0x9 * (-parseInt(__DECODE_0__(0x1e8)) / 0xa) + -parseInt(__DECODE_0__(0x1e3)) / 0xb * (-parseInt(__DECODE_0__(0x1e4)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3f90e);
function main(input) {
  let line = input[__DECODE_0__(0x1da)](/\r?\n/g);
  let arr = line[0x0][__DECODE_0__(0x1da)]('\x20');
  const N = parseInt(arr[0x0]);
  const K = parseInt(arr[0x1]);
  let cnt = 0x1;
  while (K ** cnt < N) {
    cnt++;
  }
  console['log'](cnt);
}
main(require('fs')[__DECODE_0__(0x1e0)](__DECODE_0__(0x1df), __DECODE_0__(0x1e7)));
