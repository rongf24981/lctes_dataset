'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1d0)) / 0x1 + -parseInt(__DECODE_0__(0x1c3)) / 0x2 * (-parseInt(__DECODE_0__(0x1cb)) / 0x3) + parseInt(__DECODE_0__(0x1c6)) / 0x4 + parseInt(__DECODE_0__(0x1c9)) / 0x5 + parseInt(__DECODE_0__(0x1cc)) / 0x6 + -parseInt(__DECODE_0__(0x1c7)) / 0x7 + -parseInt(__DECODE_0__(0x1cd)) / 0x8 * (-parseInt(__DECODE_0__(0x1d1)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6a83b);
const input = require('fs')['readFileSync'](__DECODE_0__(0x1d3), __DECODE_0__(0x1ca))[__DECODE_0__(0x1ce)]()[__DECODE_0__(0x1c4)]('\x0a');
function __STRING_ARRAY__() {
  const _0x3f6402 = ['log', '31888GMYiXc', '39519TNmjyb', 'map', '/dev/stdin', 'exit', '34bYwZSw', 'split', 'slice', '724492tjSjnn', '3201751WOoEMX', 'Yes', '286200uSeXVl', 'utf8', '46719oRaqoT', '1849764WXAyoN', '208cTjPjk', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x3f6402;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QBwPSl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QBwPSl, key);
}
const NM = input[0x0]['split']('\x20')[__DECODE_0__(0x1d2)](Number);
const N = NM[0x0];
const M = NM[0x1];
const As = input[__DECODE_0__(0x1c5)](0x1, N + 0x1);
const Bs = input[__DECODE_0__(0x1c5)](N + 0x1, N + M + 0x1);
for (let ax = 0x0; ax < N - M; ax++) {
  for (let ay = 0x0; ay < N - M; ay++) {
    let flag = !![];
    for (let bx = 0x0; bx < M; bx++) {
      for (let by = 0x0; by < M; by++) {
        if (As[ax + bx][ay + by] !== Bs[bx][by]) {
          flag = ![];
          break;
        }
      }
      if (!flag) {
        break;
      }
    }
    if (flag) {
      console[__DECODE_0__(0x1cf)](__DECODE_0__(0x1c8));
      process[__DECODE_0__(0x1c2)](0x0);
    }
  }
}
console[__DECODE_0__(0x1cf)]('No');
