'use strict';

const a0_0x532582 = __DECODE_0__;
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
  const _0x17a58f = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x17a58f(0x1e5)) / 0x1 * (-parseInt(_0x17a58f(0x1de)) / 0x2) + -parseInt(_0x17a58f(0x1e6)) / 0x3 + -parseInt(_0x17a58f(0x1e1)) / 0x4 * (-parseInt(_0x17a58f(0x1dc)) / 0x5) + -parseInt(_0x17a58f(0x1db)) / 0x6 + -parseInt(_0x17a58f(0x1d9)) / 0x7 * (-parseInt(_0x17a58f(0x1dd)) / 0x8) + -parseInt(_0x17a58f(0x1e2)) / 0x9 * (-parseInt(_0x17a58f(0x1e8)) / 0xa) + -parseInt(_0x17a58f(0x1e3)) / 0xb * (-parseInt(_0x17a58f(0x1e4)) / 0xc);
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
  const _0x3af8d7 = __DECODE_0__;
  let line = input[_0x3af8d7(0x1da)](/\r?\n/g);
  let arr = line[0x0][_0x3af8d7(0x1da)]('\x20');
  const N = parseInt(arr[0x0]);
  const K = parseInt(arr[0x1]);
  let cnt = 0x1;
  while (K ** cnt < N) {
    cnt++;
  }
  console['log'](cnt);
}
main(require('fs')[a0_0x532582(0x1e0)](a0_0x532582(0x1df), a0_0x532582(0x1e7)));
