'use strict';

function __STRING_ARRAY__() {
  const _0x464b3e = ['520290VyWWhz', '1059612JJobaK', 'utf8', '242690mAFbLS', 'fill', '1349744EbpiDH', 'split', '12FIVExy', 'reduce', '157668NsvtTE', '/dev/stdin', '36463kkNawq', '10EpUfUV', '63iTYzRg', '433140ZqvIxl'];
  __STRING_ARRAY__ = function () {
    return _0x464b3e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x136)) / 0x1 * (-parseInt(__DECODE_0__(0x128)) / 0x2) + -parseInt(__DECODE_0__(0x12c)) / 0x3 + parseInt(__DECODE_0__(0x132)) / 0x4 * (parseInt(__DECODE_0__(0x12b)) / 0x5) + parseInt(__DECODE_0__(0x12a)) / 0x6 + -parseInt(__DECODE_0__(0x134)) / 0x7 + -parseInt(__DECODE_0__(0x130)) / 0x8 + parseInt(__DECODE_0__(0x129)) / 0x9 * (parseInt(__DECODE_0__(0x12e)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2ee74);
function __DECODE_0__(yfZifD, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x128;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yfZifD, key);
}
function Main(input) {
  const N = input[__DECODE_0__(0x131)]('\x0a')[0x0] - 0x0;
  let e = new Array(N + 0x1)[__DECODE_0__(0x12f)](0x0);
  for (let i = 0x2; i <= N; i++) {
    let cur = i;
    for (let j = 0x2; j <= i; j++) {
      while (cur % j == 0x0) {
        e[j] += 0x1;
        cur /= j;
      }
    }
  }
  const num = m => e[__DECODE_0__(0x133)]((ac, x) => ac + (x >= m - 0x1 ? 0x1 : 0x0), 0x0);
  let l75 = num(0x4b);
  let l25 = num(0x19);
  let l15 = num(0xf);
  let l5 = num(0x5);
  let l3 = num(0x3);
  let r5x5x3 = l5 * (l5 - 0x1) * (l3 - 0x2) / 0x2;
  let r15x5 = l15 * (l5 - 0x1);
  let r25x3 = l25 * (l3 - 0x1);
  let r75 = l75;
  console['log'](r75 + r25x3 + r15x5 + r5x5x3);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x135), __DECODE_0__(0x12d)));
