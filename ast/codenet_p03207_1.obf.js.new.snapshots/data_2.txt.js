'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xbd)) / 0x1 * (parseInt(__DECODE_0__(0xbe)) / 0x2) + -parseInt(__DECODE_0__(0xbc)) / 0x3 * (-parseInt(__DECODE_0__(0xb1)) / 0x4) + parseInt(__DECODE_0__(0xb4)) / 0x5 * (-parseInt(__DECODE_0__(0xc2)) / 0x6) + parseInt(__DECODE_0__(0xb3)) / 0x7 * (parseInt(__DECODE_0__(0xbf)) / 0x8) + -parseInt(__DECODE_0__(0xb6)) / 0x9 * (-parseInt(__DECODE_0__(0xbb)) / 0xa) + -parseInt(__DECODE_0__(0xc1)) / 0xb * (-parseInt(__DECODE_0__(0xb5)) / 0xc) + parseInt(__DECODE_0__(0xae)) / 0xd * (-parseInt(__DECODE_0__(0xba)) / 0xe);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x614d3);
const main = input => {
  const args = input[__DECODE_0__(0xb8)]('\x0a')['map'](arg => arg[__DECODE_0__(0xb8)]('\x20'));
  const N = parseInt(args[0x0][0x0], 0xa);
  const p = args[__DECODE_0__(0xb9)](0x1, N + 0x1)['map'](arg => parseInt(arg[0x0], 0xa))[__DECODE_0__(0xb0)]((a, b) => b - a);
  let sum = p[0x0] / 0x2;
  for (let i = 0x1; i < N; i++) {
    sum += p[i];
  }
  console[__DECODE_0__(0xb2)](sum);
};
function __DECODE_0__(rtukVh, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xae;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rtukVh, key);
}
function __STRING_ARRAY__() {
  const _0x12391c = ['slice', '14laXOCh', '3490FAaYxF', '6VOUeep', '353558WRjAZP', '2jiCTVj', '32zgrXDW', 'utf8', '99dxCELj', '2043222WGZlac', '8219458kpbtRZ', '/dev/stdin', 'sort', '52324nuWOgP', 'log', '1190301azeCJH', '5QiiNdn', '895092wdEFIU', '8955hlqCZb', 'readFileSync', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x12391c;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0xb7)](__DECODE_0__(0xaf), __DECODE_0__(0xc0)));
