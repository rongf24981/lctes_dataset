'use strict';

const a0_0x256cb4 = __DECODE_0__;
function __DECODE_0__(RrRpxe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcc;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RrRpxe, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x15a14a = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x15a14a(0xce)) / 0x1 + parseInt(_0x15a14a(0xe0)) / 0x2 + -parseInt(_0x15a14a(0xd0)) / 0x3 + parseInt(_0x15a14a(0xd4)) / 0x4 + parseInt(_0x15a14a(0xd8)) / 0x5 * (-parseInt(_0x15a14a(0xd5)) / 0x6) + -parseInt(_0x15a14a(0xde)) / 0x7 * (-parseInt(_0x15a14a(0xcd)) / 0x8) + parseInt(_0x15a14a(0xdb)) / 0x9 * (parseInt(_0x15a14a(0xd6)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x69a80);
function Main(input) {
  const _0xf3eb3 = __DECODE_0__;
  input = input[_0xf3eb3(0xd1)]()['split']('\x0a');
  const array = input[0x0][_0xf3eb3(0xcc)]('\x20')[_0xf3eb3(0xd9)](s => parseInt(s));
  const rest = input['slice'](0x1);
  const H = array[0x0];
  const N = array[0x1];
  const magic = [];
  for (let i = 0x0; i < rest[_0xf3eb3(0xdd)]; ++i) {
    const a = rest[i][_0xf3eb3(0xcc)]('\x20')[_0xf3eb3(0xd9)](s => parseInt(s));
    magic[_0xf3eb3(0xd7)]([a[0x0], a[0x1]]);
  }
  magic['sort']((a, b) => a[0x0] - b[0x0]);
  let dp = Array(H + 0x1)[_0xf3eb3(0xdc)](Infinity);
  dp[0x0] = 0x0;
  for (let i = 0x0; i < N; ++i) {
    const w = magic[i][0x0];
    const v = magic[i][0x1];
    for (let j = 0x0; j <= H; ++j) {
      const min = Math['min'](j + w, H);
      dp[min] = Math[_0xf3eb3(0xdf)](dp[min], dp[j] + v);
    }
  }
  console[_0xf3eb3(0xd2)](dp[H]);
}
function __STRING_ARRAY__() {
  const _0x2cd053 = ['1068026rbmSyb', 'split', '54744MhfkqI', '250426LAubuP', '/dev/stdin', '1635186BNjlYs', 'trim', 'log', 'readFileSync', '2713232VkFXqb', '824214ecYSvK', '494990FDEixE', 'push', '25JEVyjf', 'map', 'utf8', '27pqDAYZ', 'fill', 'length', '567Iygaoy', 'min'];
  __STRING_ARRAY__ = function () {
    return _0x2cd053;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[a0_0x256cb4(0xd3)](a0_0x256cb4(0xcf), a0_0x256cb4(0xda)));
