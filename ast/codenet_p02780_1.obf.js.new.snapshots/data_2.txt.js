'use strict';

function __DECODE_0__(rssypR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcb;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rssypR, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xd2)) / 0x1 + -parseInt(__DECODE_0__(0xcd)) / 0x2 * (parseInt(__DECODE_0__(0xcc)) / 0x3) + -parseInt(__DECODE_0__(0xd1)) / 0x4 + -parseInt(__DECODE_0__(0xd8)) / 0x5 + -parseInt(__DECODE_0__(0xd3)) / 0x6 + -parseInt(__DECODE_0__(0xd6)) / 0x7 + parseInt(__DECODE_0__(0xd7)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x416d1);
const fact = n => {
  if (n === 0x1) {
    0x1;
  }
  return n + fact(n - 0x1);
};
function Main(input) {
  input = input[__DECODE_0__(0xd5)]()['split']('\x0a');
  const array = input[0x0][__DECODE_0__(0xcf)]('\x20')[__DECODE_0__(0xd0)](s => parseInt(s));
  const N = array[0x0];
  const K = array[0x1];
  let A = input[0x1]['split']('\x20')[__DECODE_0__(0xd0)](s => parseInt(s));
  let dp = {};
  for (let i = 0x0; i < N; ++i) {
    const a = A[i];
    if (dp[a]) {
      continue;
    }
    let tmp = 0x0;
    for (let j = a; j > 0x0; --j) {
      tmp += j;
    }
    dp[a] = tmp;
  }
  let result = 0x0;
  for (let i = 0x0; i < N - (K - 0x1); ++i) {
    let total = 0x0;
    for (let j = i; j < i + K; ++j) {
      total += dp[A[j]] * 0x1 / A[j];
    }
    result = Math[__DECODE_0__(0xce)](total, result);
  }
  console['log'](result[__DECODE_0__(0xcb)](0xc));
}
function __STRING_ARRAY__() {
  const _0x42b174 = ['1644902PaOnya', '9217576oMDrLN', '531900oaKxiu', 'readFileSync', 'toFixed', '5997gvoZSS', '466oRZZKI', 'max', 'split', 'map', '43808FMZgaY', '185102gnCMmx', '1507374EWuepP', 'utf8', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x42b174;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0xd9)]('/dev/stdin', __DECODE_0__(0xd4)));
