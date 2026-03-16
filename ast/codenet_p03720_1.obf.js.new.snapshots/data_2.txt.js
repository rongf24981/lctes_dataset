'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xb4)) / 0x1 + parseInt(__DECODE_0__(0xbd)) / 0x2 * (parseInt(__DECODE_0__(0xb1)) / 0x3) + parseInt(__DECODE_0__(0xb0)) / 0x4 * (parseInt(__DECODE_0__(0xbb)) / 0x5) + parseInt(__DECODE_0__(0xb7)) / 0x6 + -parseInt(__DECODE_0__(0xc0)) / 0x7 + -parseInt(__DECODE_0__(0xb3)) / 0x8 * (-parseInt(__DECODE_0__(0xaf)) / 0x9) + -parseInt(__DECODE_0__(0xb5)) / 0xa;
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
let lines = require('fs')[__DECODE_0__(0xb9)](__DECODE_0__(0xb6), __DECODE_0__(0xb2))[__DECODE_0__(0xbf)]('\x0a');
let N = +lines[0x0][__DECODE_0__(0xbf)]('\x20')[0x0];
let ABs = lines[__DECODE_0__(0xba)](0x1)[__DECODE_0__(0xbc)](line => line[__DECODE_0__(0xbf)]('\x20')['map'](Number));
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
ABs[__DECODE_0__(0xb8)](ab => {
  res[ab[0x0] - 0x1]++;
  res[ab[0x1] - 0x1]++;
});
res['forEach'](n => console[__DECODE_0__(0xbe)](n));
