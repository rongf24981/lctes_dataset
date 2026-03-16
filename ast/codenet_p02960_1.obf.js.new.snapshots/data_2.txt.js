'use strict';

function __DECODE_0__(YMLyHP, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YMLyHP, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1b7)) / 0x1 + -parseInt(__DECODE_0__(0x1be)) / 0x2 * (parseInt(__DECODE_0__(0x1b2)) / 0x3) + parseInt(__DECODE_0__(0x1bb)) / 0x4 + -parseInt(__DECODE_0__(0x1ba)) / 0x5 + parseInt(__DECODE_0__(0x1bf)) / 0x6 + parseInt(__DECODE_0__(0x1bc)) / 0x7 * (-parseInt(__DECODE_0__(0x1b9)) / 0x8) + parseInt(__DECODE_0__(0x1c1)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x594be);
function __STRING_ARRAY__() {
  const _0x4b197b = ['4zeJNMi', '2531856nQBsYH', 'fill', '7741980umQwZv', '607737uIQbmX', 'log', 'trim', '/dev/stdin', 'utf8', '137166uXIuqY', 'readFileSync', '95648DMPNso', '3293795tljjAd', '806436Zrtunu', '112BATGDp', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x4b197b;
  };
  return __STRING_ARRAY__();
}
function main(inp) {
  inp = inp[__DECODE_0__(0x1b4)]();
  const MOD = 0x3b9aca07;
  let dp = [new Array(0xd)[__DECODE_0__(0x1c0)](0x0)];
  dp[0x0][0x0] = 0x1;
  for (let i = 0x0; i < inp[__DECODE_0__(0x1bd)]; i++) {
    dp[i + 0x1] = new Array(0xd)[__DECODE_0__(0x1c0)](0x0);
    const c = inp[i] === '?' ? -0x1 : inp[i] - 0x0;
    for (let j = 0x0; j < 0xa; j++) {
      if (c !== -0x1 && c !== j) {
        continue;
      }
      for (let k = 0x0; k < 0xd; k++) {
        dp[i + 0x1][(k * 0xa + j) % 0xd] += dp[i][k];
      }
    }
    for (let j = 0x0; j < 0xd; j++) {
      dp[i + 0x1][j] %= MOD;
    }
  }
  console[__DECODE_0__(0x1b3)](dp[inp[__DECODE_0__(0x1bd)]][0x5]);
}
main(require('fs')[__DECODE_0__(0x1b8)](__DECODE_0__(0x1b5), __DECODE_0__(0x1b6)));
