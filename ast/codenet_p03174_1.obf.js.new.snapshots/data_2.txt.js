'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x143)) / 0x1 * (-parseInt(__DECODE_0__(0x13c)) / 0x2) + -parseInt(__DECODE_0__(0x144)) / 0x3 + -parseInt(__DECODE_0__(0x13b)) / 0x4 * (parseInt(__DECODE_0__(0x13a)) / 0x5) + -parseInt(__DECODE_0__(0x147)) / 0x6 * (-parseInt(__DECODE_0__(0x13f)) / 0x7) + -parseInt(__DECODE_0__(0x14a)) / 0x8 * (-parseInt(__DECODE_0__(0x142)) / 0x9) + parseInt(__DECODE_0__(0x149)) / 0xa * (-parseInt(__DECODE_0__(0x138)) / 0xb) + parseInt(__DECODE_0__(0x145)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3982c);
function __DECODE_0__(rOckrX, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x138;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rOckrX, key);
}
function Main(input) {
  input = input['trim']()['split'](/\n/);
  const N = input[__DECODE_0__(0x13d)]() - 0x0;
  const M = Math[__DECODE_0__(0x139)](0x2, N);
  const K = Math[__DECODE_0__(0x139)](0xa, 0x9) + 0x7;
  input = input[__DECODE_0__(0x146)](str => str[__DECODE_0__(0x14b)](/\s+/)[__DECODE_0__(0x146)](x => x === '1'));
  const Match = input;
  const dp = new Array(N)[__DECODE_0__(0x141)](0x0)[__DECODE_0__(0x146)]((x, j) => new Object());
  dp[-0x1] = {
    0x0: 0x1
  };
  const p = new Array(N)[__DECODE_0__(0x141)](0x0)[__DECODE_0__(0x146)]((x, i) => 0x1 << i);
  for (let i = -0x1; i < N - 0x1; i++) {
    Object[__DECODE_0__(0x13e)](dp[i])['forEach'](function (J) {
      J = J - 0x0;
      dp[i][J] %= K;
      for (let j = 0x0; j < N; j++) {
        if ((J & p[j]) > 0x0) {
          continue;
        }
        if (Match[i + 0x1][j]) {
          dp[i + 0x1][J + p[j]] = (dp[i + 0x1][J + p[j]] || 0x0) + dp[i][J];
        }
      }
    });
  }
  console[__DECODE_0__(0x140)]((dp[N - 0x1][M - 0x1] || 0x0) % K);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x14c), __DECODE_0__(0x148)));
function __STRING_ARRAY__() {
  const _0x434c80 = ['log', 'fill', '144QgMrEf', '339001tQbqhX', '434520WejZXo', '2414184nEeaeS', 'map', '6WgXgQs', 'utf8', '2960nYFyQt', '25352symKsO', 'split', '/dev/stdin', '6666aLeFiV', 'pow', '5FDkXwI', '755348BALzly', '2IWPBXK', 'shift', 'keys', '1104110TKIyRP'];
  __STRING_ARRAY__ = function () {
    return _0x434c80;
  };
  return __STRING_ARRAY__();
}
