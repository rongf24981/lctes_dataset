'use strict';

const a0_0x25ff83 = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x4151f3 = ['utf8', 'max', '/dev/stdin', '1930272wOBdHg', '9237jQVctf', '232dtPYgx', '95190LyYXlh', '35OonPbV', 'log', 'split', '8472141wuiXvi', '11984126SJwmvN', '142311ZGyYIQ', 'readFileSync', '13172384FMUHGF'];
  __STRING_ARRAY__ = function () {
    return _0x4151f3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const _0x25698a = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x25698a(0x1e3)) / 0x1 + parseInt(_0x25698a(0x1eb)) / 0x2 * (-parseInt(_0x25698a(0x1ea)) / 0x3) + parseInt(_0x25698a(0x1e9)) / 0x4 + -parseInt(_0x25698a(0x1ed)) / 0x5 * (-parseInt(_0x25698a(0x1ec)) / 0x6) + -parseInt(_0x25698a(0x1e2)) / 0x7 + parseInt(_0x25698a(0x1e5)) / 0x8 + parseInt(_0x25698a(0x1e1)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xecd2b);
function __DECODE_0__(EgFUxs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1df;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EgFUxs, key);
}
function Main(input) {
  const _0x26323a = __DECODE_0__;
  const P = Number(input[_0x26323a(0x1e0)]('\x0a')[0x0][_0x26323a(0x1e0)]('\x20')[0x0]);
  const Q = Number(input[_0x26323a(0x1e0)]('\x0a')[0x0]['split']('\x20')[0x1]);
  const R = Number(input['split']('\x0a')[0x0][_0x26323a(0x1e0)]('\x20')[0x2]);
  const max = Math[_0x26323a(0x1e7)](P, Q, R);
  console[_0x26323a(0x1df)](P + Q + R - max);
}
Main(require('fs')[a0_0x25ff83(0x1e4)](a0_0x25ff83(0x1e8), a0_0x25ff83(0x1e6))['trim']());
