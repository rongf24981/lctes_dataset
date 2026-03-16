'use strict';

function __STRING_ARRAY__() {
  const _0x1330e3 = ['map', '913746ZuTwin', '3894940nPGqdd', 'trim', 'max', '/dev/stdin', 'readFileSync', '1158hDCRrk', 'split', 'toString', '31493344TNPaFe', '7249515stAdRg', 'log', '2753138qtGXcz', '33885BuTnFl', 'push', 'fill', '800045YpmrUm'];
  __STRING_ARRAY__ = function () {
    return _0x1330e3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x179)) / 0x1 + -parseInt(__DECODE_0__(0x175)) / 0x2 + -parseInt(__DECODE_0__(0x17b)) / 0x3 + -parseInt(__DECODE_0__(0x17c)) / 0x4 + parseInt(__DECODE_0__(0x176)) / 0x5 * (parseInt(__DECODE_0__(0x16f)) / 0x6) + -parseInt(__DECODE_0__(0x173)) / 0x7 + parseInt(__DECODE_0__(0x172)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb8185);
function __DECODE_0__(NQSrsp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NQSrsp, key);
}
console[__DECODE_0__(0x174)](function (args) {
  const tmp = args[__DECODE_0__(0x16b)]()[__DECODE_0__(0x170)]('\x0a')['map'](r => r[__DECODE_0__(0x170)]('\x20')[__DECODE_0__(0x17a)](v => v | 0x0));
  const N = tmp[0x0][0x0];
  const M = tmp[0x0][0x1];
  const x = [];
  const y = [];
  for (let i = 0x0; i < M; i++) {
    x[__DECODE_0__(0x177)](tmp[0x1 + i][0x0]);
    y[__DECODE_0__(0x177)](tmp[0x1 + i][0x1]);
  }
  const dp = Array(M + 0x1)[__DECODE_0__(0x178)](0x0)[__DECODE_0__(0x17a)](_ => Array(N + 0x1)['fill'](0x0));
  for (let i = 0x1; i <= M; i++) {
    for (let j = 0x0; j < M; j++) {
      dp[i][y[j]] = Math[__DECODE_0__(0x16c)](dp[i][y[j]], dp[i - 0x1][x[j]] + 0x1);
    }
  }
  return Math[__DECODE_0__(0x16c)](...dp[M])[__DECODE_0__(0x171)]();
}(require('fs')[__DECODE_0__(0x16e)](__DECODE_0__(0x16d), 'utf8')));
