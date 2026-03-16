'use strict';

const a0_0x5e7c19 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x2613a4 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x2613a4(0xb4)) / 0x1 + parseInt(_0x2613a4(0xbd)) / 0x2 * (parseInt(_0x2613a4(0xb1)) / 0x3) + parseInt(_0x2613a4(0xb0)) / 0x4 * (parseInt(_0x2613a4(0xbb)) / 0x5) + parseInt(_0x2613a4(0xb7)) / 0x6 + -parseInt(_0x2613a4(0xc0)) / 0x7 + -parseInt(_0x2613a4(0xb3)) / 0x8 * (-parseInt(_0x2613a4(0xaf)) / 0x9) + -parseInt(_0x2613a4(0xb5)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7d394);
function __DECODE_0__(zHAwvM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xaf;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zHAwvM, key);
}
let lines = require('fs')[a0_0x5e7c19(0xb9)](a0_0x5e7c19(0xb6), a0_0x5e7c19(0xb2))[a0_0x5e7c19(0xbf)]('\x0a');
let N = +lines[0x0][a0_0x5e7c19(0xbf)]('\x20')[0x0];
let ABs = lines[a0_0x5e7c19(0xba)](0x1)[a0_0x5e7c19(0xbc)](line => line[a0_0x5e7c19(0xbf)]('\x20')['map'](Number));
let res = [];
for (let i = 0x0; i < N; i++) {
  res[i] = 0x0;
}
function __STRING_ARRAY__() {
  const _0x4982a3 = ['124577amMbzX', '10794280EUEwcw', '/dev/stdin', '4979952PffUkY', 'forEach', 'readFileSync', 'slice', '2383190atIbsO', 'map', '15586YeQGjX', 'log', 'split', '2623649ovsGFA', '9OHoIoE', '8VEOKxL', '21BtxbgY', 'utf8', '38040gCuSne'];
  __STRING_ARRAY__ = function () {
    return _0x4982a3;
  };
  return __STRING_ARRAY__();
}
ABs[a0_0x5e7c19(0xb8)](ab => {
  res[ab[0x0] - 0x1]++;
  res[ab[0x1] - 0x1]++;
});
res['forEach'](n => console[a0_0x5e7c19(0xbe)](n));
