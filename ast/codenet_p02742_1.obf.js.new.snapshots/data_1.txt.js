'use strict';

const a0_0x416e05 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x54c329 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x54c329(0x1a8)) / 0x1 + -parseInt(_0x54c329(0x1a7)) / 0x2 * (-parseInt(_0x54c329(0x1a2)) / 0x3) + -parseInt(_0x54c329(0x1a6)) / 0x4 * (parseInt(_0x54c329(0x1a0)) / 0x5) + parseInt(_0x54c329(0x1af)) / 0x6 + -parseInt(_0x54c329(0x1ad)) / 0x7 * (parseInt(_0x54c329(0x1a1)) / 0x8) + parseInt(_0x54c329(0x1ac)) / 0x9 * (parseInt(_0x54c329(0x1a5)) / 0xa) + parseInt(_0x54c329(0x1ab)) / 0xb;
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
  const _0x21d271 = __DECODE_0__;
  const tmp = input[_0x21d271(0x1aa)]()[_0x21d271(0x1ae)]('\x20');
  const H = parseInt(tmp[0x0]);
  const W = parseInt(tmp[0x1]);
  let result = 0x0;
  if (H % 0x2 != 0x0 && W % 0x2 != 0x0) {
    result = Math[_0x21d271(0x19f)](H * W / 0x2);
  } else {
    result = H * W / 0x2;
  }
  console[_0x21d271(0x1a4)](result);
  return result;
};
Main(require('fs')[a0_0x416e05(0x1a9)](a0_0x416e05(0x1a3), 'utf8'));
