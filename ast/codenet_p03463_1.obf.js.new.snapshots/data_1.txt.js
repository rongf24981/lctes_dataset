'use strict';

const a0_0x27e231 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x2b68d4 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x2b68d4(0x1eb)) / 0x1 + parseInt(_0x2b68d4(0x1df)) / 0x2 + parseInt(_0x2b68d4(0x1e6)) / 0x3 * (parseInt(_0x2b68d4(0x1e1)) / 0x4) + -parseInt(_0x2b68d4(0x1e2)) / 0x5 + -parseInt(_0x2b68d4(0x1e4)) / 0x6 + parseInt(_0x2b68d4(0x1e3)) / 0x7 * (parseInt(_0x2b68d4(0x1ed)) / 0x8) + -parseInt(_0x2b68d4(0x1e5)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9f3e2);
function __STRING_ARRAY__() {
  const _0x211d9e = ['/dev/stdin', 'split', '838768yxUGjU', 'Borys', '1544BRPgZq', 'utf8', '987582iYKZQE', 'abs', '4ziQKHZ', '2380120SIYHzD', '11746tWkSVr', '228342DUwvWZ', '4444254xmGVbL', '11196FXCTeI', 'log', 'Alice'];
  __STRING_ARRAY__ = function () {
    return _0x211d9e;
  };
  return __STRING_ARRAY__();
}
let input = require('fs')['readFileSync'](a0_0x27e231(0x1e9), a0_0x27e231(0x1ee));
let N = input[a0_0x27e231(0x1ea)]('\x20')[0x0] * 0x1;
let A = input[a0_0x27e231(0x1ea)]('\x20')[0x1] * 0x1;
let B = input[a0_0x27e231(0x1ea)]('\x20')[0x2] * 0x1;
function __DECODE_0__(CwcbAW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1df;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CwcbAW, key);
}
let dist = Math[a0_0x27e231(0x1e0)](A - B) % 0x2;
let ans = dist == 0x0 ? a0_0x27e231(0x1e8) : a0_0x27e231(0x1ec);
console[a0_0x27e231(0x1e7)](ans);
