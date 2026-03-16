'use strict';

function __STRING_ARRAY__() {
  const _0x3e5d17 = ['log', '7iBBoQA', '1145070oZeUAj', '129486YqcgJb', '33AMSYnW', 'push', '/dev/stdin', 'split', '1542WToKEU', 'Yes', 'trim', '2Dxxklh', '3519780LfxIDk', 'join', 'readFileSync', '2274512rBYXBR', '1268960gZsZkC', '5075ElTtPE', '8488OHMsxK'];
  __STRING_ARRAY__ = function () {
    return _0x3e5d17;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(meRuhk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x137;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(meRuhk, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x13c)) / 0x1 * (parseInt(__DECODE_0__(0x144)) / 0x2) + -parseInt(__DECODE_0__(0x13d)) / 0x3 * (parseInt(__DECODE_0__(0x138)) / 0x4) + parseInt(__DECODE_0__(0x137)) / 0x5 * (parseInt(__DECODE_0__(0x141)) / 0x6) + parseInt(__DECODE_0__(0x13a)) / 0x7 * (-parseInt(__DECODE_0__(0x148)) / 0x8) + -parseInt(__DECODE_0__(0x13b)) / 0x9 + -parseInt(__DECODE_0__(0x149)) / 0xa + parseInt(__DECODE_0__(0x145)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2443b);
const Main = input => {
  const tmp = input[__DECODE_0__(0x143)]()[__DECODE_0__(0x140)]('\x0a');
  const N = parseInt(tmp[0x0][__DECODE_0__(0x140)]('\x20')[0x0]);
  const A = parseInt(tmp[0x0][__DECODE_0__(0x140)]('\x20')[0x1]);
  const B = parseInt(tmp[0x0][__DECODE_0__(0x140)]('\x20')[0x2]);
  const S = tmp[0x1];
  let result = [];
  let count = 0x0;
  let overseas = 0x0;
  for (let i = 0x0; i < N; i++) {
    const participant = S[__DECODE_0__(0x140)]('')[i];
    if (participant === 'a') {
      if (count < A + B) {
        result[__DECODE_0__(0x13e)]('Yes');
        count += 0x1;
      } else {
        result['push']('No');
      }
    } else {
      if (participant === 'b') {
        if (count < A + B && overseas < B) {
          result['push'](__DECODE_0__(0x142));
          count += 0x1;
          overseas += 0x1;
        } else {
          result[__DECODE_0__(0x13e)]('No');
        }
      } else {
        result[__DECODE_0__(0x13e)]('No');
      }
    }
  }
  result = result[__DECODE_0__(0x146)]('\x0a');
  console[__DECODE_0__(0x139)](result);
  return result;
};
Main(require('fs')[__DECODE_0__(0x147)](__DECODE_0__(0x13f), 'utf8'));
