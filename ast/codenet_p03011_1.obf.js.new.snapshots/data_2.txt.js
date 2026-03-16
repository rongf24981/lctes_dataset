'use strict';

function __STRING_ARRAY__() {
  const _0x4151f3 = ['utf8', 'max', '/dev/stdin', '1930272wOBdHg', '9237jQVctf', '232dtPYgx', '95190LyYXlh', '35OonPbV', 'log', 'split', '8472141wuiXvi', '11984126SJwmvN', '142311ZGyYIQ', 'readFileSync', '13172384FMUHGF'];
  __STRING_ARRAY__ = function () {
    return _0x4151f3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1e3)) / 0x1 + parseInt(__DECODE_0__(0x1eb)) / 0x2 * (-parseInt(__DECODE_0__(0x1ea)) / 0x3) + parseInt(__DECODE_0__(0x1e9)) / 0x4 + -parseInt(__DECODE_0__(0x1ed)) / 0x5 * (-parseInt(__DECODE_0__(0x1ec)) / 0x6) + -parseInt(__DECODE_0__(0x1e2)) / 0x7 + parseInt(__DECODE_0__(0x1e5)) / 0x8 + parseInt(__DECODE_0__(0x1e1)) / 0x9;
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
  const P = Number(input[__DECODE_0__(0x1e0)]('\x0a')[0x0][__DECODE_0__(0x1e0)]('\x20')[0x0]);
  const Q = Number(input[__DECODE_0__(0x1e0)]('\x0a')[0x0]['split']('\x20')[0x1]);
  const R = Number(input['split']('\x0a')[0x0][__DECODE_0__(0x1e0)]('\x20')[0x2]);
  const max = Math[__DECODE_0__(0x1e7)](P, Q, R);
  console[__DECODE_0__(0x1df)](P + Q + R - max);
}
Main(require('fs')[__DECODE_0__(0x1e4)](__DECODE_0__(0x1e8), __DECODE_0__(0x1e6))['trim']());
