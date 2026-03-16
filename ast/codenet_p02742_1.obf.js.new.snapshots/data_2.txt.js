'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1a8)) / 0x1 + -parseInt(__DECODE_0__(0x1a7)) / 0x2 * (-parseInt(__DECODE_0__(0x1a2)) / 0x3) + -parseInt(__DECODE_0__(0x1a6)) / 0x4 * (parseInt(__DECODE_0__(0x1a0)) / 0x5) + parseInt(__DECODE_0__(0x1af)) / 0x6 + -parseInt(__DECODE_0__(0x1ad)) / 0x7 * (parseInt(__DECODE_0__(0x1a1)) / 0x8) + parseInt(__DECODE_0__(0x1ac)) / 0x9 * (parseInt(__DECODE_0__(0x1a5)) / 0xa) + parseInt(__DECODE_0__(0x1ab)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe6fb1);
function __DECODE_0__(TlIAII, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TlIAII, key);
}
function __STRING_ARRAY__() {
  const _0xb69c34 = ['3QjVBxD', '/dev/stdin', 'log', '1257040JRpusr', '6204BvZFwS', '250782dZqyIv', '1026594cpFYzo', 'readFileSync', 'trim', '16158593tXaMhs', '36NZSrRd', '1866921jQtDgj', 'split', '8836236gzyMrv', 'ceil', '850GEUGCf', '40ybStBk'];
  __STRING_ARRAY__ = function () {
    return _0xb69c34;
  };
  return __STRING_ARRAY__();
}
const Main = input => {
  const tmp = input[__DECODE_0__(0x1aa)]()[__DECODE_0__(0x1ae)]('\x20');
  const H = parseInt(tmp[0x0]);
  const W = parseInt(tmp[0x1]);
  let result = 0x0;
  if (H % 0x2 != 0x0 && W % 0x2 != 0x0) {
    result = Math[__DECODE_0__(0x19f)](H * W / 0x2);
  } else {
    result = H * W / 0x2;
  }
  console[__DECODE_0__(0x1a4)](result);
  return result;
};
Main(require('fs')[__DECODE_0__(0x1a9)](__DECODE_0__(0x1a3), 'utf8'));
