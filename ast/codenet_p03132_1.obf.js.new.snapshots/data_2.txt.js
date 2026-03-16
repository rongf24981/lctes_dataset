'use strict';

function __DECODE_0__(xaapwE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xde;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xaapwE, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xe3)) / 0x1 * (-parseInt(__DECODE_0__(0xe9)) / 0x2) + parseInt(__DECODE_0__(0xe8)) / 0x3 + -parseInt(__DECODE_0__(0xec)) / 0x4 * (parseInt(__DECODE_0__(0xde)) / 0x5) + parseInt(__DECODE_0__(0xe7)) / 0x6 + -parseInt(__DECODE_0__(0xe1)) / 0x7 + parseInt(__DECODE_0__(0xed)) / 0x8 * (-parseInt(__DECODE_0__(0xdf)) / 0x9) + parseInt(__DECODE_0__(0xea)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7f4c2);
function __STRING_ARRAY__() {
  const _0x422186 = ['1257057GEWSTJ', '502HOuIjW', '20090160rdlifJ', 'min', '516dAbktU', '632NnUaQr', '7945PddMJH', '16362NcEpux', 'utf8', '5521026TckTJh', 'fill', '4049JImjVr', 'readFileSync', 'push', 'split', '1481970QvXRCS'];
  __STRING_ARRAY__ = function () {
    return _0x422186;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const inputs = input[__DECODE_0__(0xe6)]('\x0a');
  const L = Number(inputs[0x0]);
  const A = [];
  for (let i = 0x0; i < L; i++) {
    A[__DECODE_0__(0xe5)](Number(inputs[i + 0x1]));
  }
  const dp = Array(L + 0x1)[__DECODE_0__(0xe2)]()['map'](() => Array(0x5)['fill']());
  dp[0x0] = [0x0, 0x0, 0x0, 0x0, 0x0];
  for (let i = 0x1; i <= L; i++) {
    let cur = A[i - 0x1];
    let curEven = A[i - 0x1] === 0x0 ? 0x2 : cur % 0x2;
    let curOdd = (cur + 0x1) % 0x2;
    dp[i][0x0] = dp[i - 0x1][0x0] + cur;
    dp[i][0x1] = Math[__DECODE_0__(0xeb)](dp[i - 0x1][0x0], dp[i - 0x1][0x1]) + curEven;
    dp[i][0x2] = Math['min'](dp[i - 0x1][0x0], dp[i - 0x1][0x1], dp[i - 0x1][0x2]) + curOdd;
    dp[i][0x3] = Math[__DECODE_0__(0xeb)](dp[i - 0x1][0x2], dp[i - 0x1][0x3]) + curEven;
    dp[i][0x4] = Math['min'](dp[i - 0x1][0x2], dp[i - 0x1][0x3], dp[i - 0x1][0x4]) + cur;
  }
  console['log'](Math['min'](...dp[L]));
}
main(require('fs')[__DECODE_0__(0xe4)]('/dev/stdin', __DECODE_0__(0xe0)));
