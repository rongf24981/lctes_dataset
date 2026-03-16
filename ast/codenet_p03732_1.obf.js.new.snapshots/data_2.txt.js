'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x116)) / 0x1 + parseInt(__DECODE_0__(0x113)) / 0x2 * (-parseInt(__DECODE_0__(0x10c)) / 0x3) + parseInt(__DECODE_0__(0x10e)) / 0x4 * (parseInt(__DECODE_0__(0x117)) / 0x5) + parseInt(__DECODE_0__(0x111)) / 0x6 * (parseInt(__DECODE_0__(0x11a)) / 0x7) + -parseInt(__DECODE_0__(0x114)) / 0x8 + parseInt(__DECODE_0__(0x11b)) / 0x9 * (-parseInt(__DECODE_0__(0x118)) / 0xa) + parseInt(__DECODE_0__(0x11c)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xeb205);
function __STRING_ARRAY__() {
  const _0x3bbea5 = ['258MzbuKF', 'trim', '1228ZXeyvt', '789032KjqjUo', 'split', '813460hbNqRw', '5GvzNOq', '20gJIbwI', '/dev/stdin', '120799IHAvvw', '2918070NvFNMn', '27000611yDGxeA', 'fill', '3846EwKfYM', 'utf8', '456488zTuBFH', 'readFileSync', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x3bbea5;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(tgTjNK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tgTjNK, key);
}
const main = arg => {
  arg = arg[__DECODE_0__(0x112)]()['split']('\x0a');
  const N = parseInt(arg[0x0][__DECODE_0__(0x115)]('\x20')[0x0]);
  const W = parseInt(arg[0x0]['split']('\x20')[0x1]);
  const wv = arg['slice'](0x1, N + 0x1)[__DECODE_0__(0x110)](n => n['split']('\x20')[__DECODE_0__(0x110)](l => parseInt(l)));
  let dp = [...Array(N + 0x1)]['map'](n => [...Array(W + 0x1)][__DECODE_0__(0x11d)](0x0));
  let answer = 0x0;
  for (let i = 0x1; i < N + 0x1; i++) {
    const w = wv[i - 0x1][0x0];
    const v = wv[i - 0x1][0x1];
    for (let j = 0x0; j < W + 0x1; j++) {
      if (w > j) {
        dp[i][j] = dp[i - 0x1][j];
      } else {
        dp[i][j] = Math['max'](dp[i - 0x1][j], v + dp[i - 0x1][j - w]);
      }
      if (dp[i][j] > answer) {
        answer = dp[i][j];
      }
    }
  }
  console['log'](answer);
};
main(require('fs')[__DECODE_0__(0x10f)](__DECODE_0__(0x119), __DECODE_0__(0x10d)));
