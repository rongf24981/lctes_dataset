'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xe7)) / 0x1 * (-parseInt(__DECODE_0__(0xf5)) / 0x2) + parseInt(__DECODE_0__(0xeb)) / 0x3 * (-parseInt(__DECODE_0__(0xf2)) / 0x4) + -parseInt(__DECODE_0__(0xe9)) / 0x5 + -parseInt(__DECODE_0__(0xe8)) / 0x6 * (-parseInt(__DECODE_0__(0xee)) / 0x7) + -parseInt(__DECODE_0__(0xf6)) / 0x8 * (-parseInt(__DECODE_0__(0xec)) / 0x9) + -parseInt(__DECODE_0__(0xf0)) / 0xa + -parseInt(__DECODE_0__(0xf7)) / 0xb * (-parseInt(__DECODE_0__(0xed)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe89d0);
function __DECODE_0__(eQzdYd, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe7;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eQzdYd, key);
}
const INF = 0x3333333333333;
function mapint(temp) {
  return temp[__DECODE_0__(0xef)]('\x20')[__DECODE_0__(0xf4)](v => parseInt(v));
}
function Main(input) {
  let temp = input['trim']()[__DECODE_0__(0xef)]('\x0a');
  let n = parseInt(temp[0x0]);
  let w = mapint(temp[0x1]);
  let s1 = w[0x0];
  let s2 = 0x0;
  for (let i = 0x1; i < n; i++) {
    s2 += w[i];
  }
  let sa = Math[__DECODE_0__(0xf3)](s1 - s2);
  let sa2;
  for (let i = 0x1; i < n; i++) {
    s1 += w[i];
    s2 -= w[i];
    sa = Math['min'](sa, Math['abs'](s1 - s2));
  }
  console[__DECODE_0__(0xf1)](sa);
}
function __STRING_ARRAY__() {
  const _0x5353f5 = ['split', '17803310DkWsBJ', 'log', '808RxkqSj', 'abs', 'map', '4uzunCe', '3688vNSXTz', '44LWctam', '631307pKcxgA', '103182txDzwf', '2230460hrkPgy', 'utf8', '13746NJOkLv', '7848MmyvBN', '11130036syhlvX', '511otTSyw'];
  __STRING_ARRAY__ = function () {
    return _0x5353f5;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0xea)));
