'use strict';

const a0_0x3efd40 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x171a66 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x171a66(0x1d8)) / 0x1 + -parseInt(_0x171a66(0x1dd)) / 0x2 * (parseInt(_0x171a66(0x1e4)) / 0x3) + -parseInt(_0x171a66(0x1da)) / 0x4 * (-parseInt(_0x171a66(0x1de)) / 0x5) + parseInt(_0x171a66(0x1e1)) / 0x6 * (parseInt(_0x171a66(0x1db)) / 0x7) + -parseInt(_0x171a66(0x1d9)) / 0x8 * (-parseInt(_0x171a66(0x1d7)) / 0x9) + parseInt(_0x171a66(0x1e8)) / 0xa * (parseInt(_0x171a66(0x1e2)) / 0xb) + -parseInt(_0x171a66(0x1e6)) / 0xc * (parseInt(_0x171a66(0x1df)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x99d9e);
function __STRING_ARRAY__() {
  const _0x1f1bdb = ['8wqsOrH', '4697428aVkwRy', '14EawmfO', 'readFileSync', '204AEkwYc', '5BnDscU', '13TMwcEx', 'split', '274344nckgBo', '44pIcVll', 'utf8', '3714Rpvkci', 'log', '30303396EnvMyu', '/dev/stdin', '2582900HYrIaa', '1971153ZVdnXw', '763751qKAfrJ'];
  __STRING_ARRAY__ = function () {
    return _0x1f1bdb;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(CmEJLb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d7;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CmEJLb, key);
}
function Main(INPUT) {
  const _0x2556e0 = __DECODE_0__;
  const N = INPUT[_0x2556e0(0x1e0)]('\x0a')[0x0];
  if (N == 0x7 || N == 0x5 || N == 0x3) {
    console[_0x2556e0(0x1e5)]('YES');
  } else {
    console['log']('NO');
  }
}
Main(require('fs')[a0_0x3efd40(0x1dc)](a0_0x3efd40(0x1e7), a0_0x3efd40(0x1e3)));
