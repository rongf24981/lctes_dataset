'use strict';

function __DECODE_0__(seSVvZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xca;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(seSVvZ, key);
}
function __STRING_ARRAY__() {
  const _0x2b7808 = ['111629DTDJjZ', '24TFnkxE', '14CtKrnk', 'sort', '5138276ptiUDO', '30fovTcO', 'split', '42NRIoEi', 'map', '2145378iTguvd', 'readFileSync', '5466TQzejq', 'min', '1615896AWMLAq', '/dev/stdin', 'utf8', '10KijVnv', 'log', '3010BxlRCE', 'IMPOSSIBLE', 'POSSIBLE', '1004201DEINMs', '647100kWhkHI', '4RZfptO'];
  __STRING_ARRAY__ = function () {
    return _0x2b7808;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xca)) / 0x1 * (-parseInt(__DECODE_0__(0xda)) / 0x2) + -parseInt(__DECODE_0__(0xd3)) / 0x3 * (-parseInt(__DECODE_0__(0xe1)) / 0x4) + parseInt(__DECODE_0__(0xdc)) / 0x5 * (-parseInt(__DECODE_0__(0xd5)) / 0x6) + -parseInt(__DECODE_0__(0xcc)) / 0x7 * (parseInt(__DECODE_0__(0xd7)) / 0x8) + -parseInt(__DECODE_0__(0xe0)) / 0x9 * (-parseInt(__DECODE_0__(0xcf)) / 0xa) + parseInt(__DECODE_0__(0xdf)) / 0xb * (-parseInt(__DECODE_0__(0xcb)) / 0xc) + parseInt(__DECODE_0__(0xce)) / 0xd * (parseInt(__DECODE_0__(0xd1)) / 0xe);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x67623);
const getGcd = (a, b) => {
  return a ? getGcd(b % a, a) : b;
};
const main = arg => {
  arg = arg['trim']()[__DECODE_0__(0xd0)]('\x0a');
  const N = parseInt(arg[0x0][__DECODE_0__(0xd0)]('\x20')[0x0]);
  const K = parseInt(arg[0x0]['split']('\x20')[0x1]);
  let A = arg[0x1][__DECODE_0__(0xd0)]('\x20')[__DECODE_0__(0xd2)](n => parseInt(n))[__DECODE_0__(0xcd)]((a, b) => b - a);
  const max = A[0x0];
  let gcd = Infinity;
  if (max < K) {
    console[__DECODE_0__(0xdb)](__DECODE_0__(0xdd));
    return;
  }
  for (let i = 0x0; i < N; i++) {
    for (let j = i + 0x1; j < N; j++) {
      gcd = Math[__DECODE_0__(0xd6)](gcd, getGcd(A[i], A[j]));
    }
  }
  console[__DECODE_0__(0xdb)](K % gcd === 0x0 ? __DECODE_0__(0xde) : __DECODE_0__(0xdd));
};
main(require('fs')[__DECODE_0__(0xd4)](__DECODE_0__(0xd8), __DECODE_0__(0xd9)));
