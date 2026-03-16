'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x93)) / 0x1 * (parseInt(__DECODE_0__(0x9b)) / 0x2) + parseInt(__DECODE_0__(0x98)) / 0x3 + parseInt(__DECODE_0__(0x94)) / 0x4 * (parseInt(__DECODE_0__(0x99)) / 0x5) + parseInt(__DECODE_0__(0x8d)) / 0x6 + parseInt(__DECODE_0__(0x97)) / 0x7 + parseInt(__DECODE_0__(0x9c)) / 0x8 * (-parseInt(__DECODE_0__(0x91)) / 0x9) + -parseInt(__DECODE_0__(0x95)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xeaa0b);
function Main(input) {
  input = input[__DECODE_0__(0x8f)]('\x0a');
  const line0 = input[0x0][__DECODE_0__(0x8f)]('\x20');
  let N = parseInt(line0[0x0]);
  let K = parseInt(line0[0x1]);
  if (K % 0x2 === 0x0) {
    console[__DECODE_0__(0x96)](Math[__DECODE_0__(0x90)](N / K) ** 0x3 + Math['floor']((N + K / 0x2) / K) ** 0x3);
  } else {
    console[__DECODE_0__(0x96)](Math[__DECODE_0__(0x90)](N / K) ** 0x3);
  }
}
function __STRING_ARRAY__() {
  const _0x46493d = ['log', '1618582GTCVvy', '2619951WQftsj', '5bjiKpD', 'utf8', '865286mAumlX', '2032LAaMyN', '7746324lxTWXt', 'readFileSync', 'split', 'floor', '43677wcUtKK', '/dev/stdin', '1EClxrI', '495828uoxSeC', '7585000FYDnPL'];
  __STRING_ARRAY__ = function () {
    return _0x46493d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(KfyztO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KfyztO, key);
}
Main(require('fs')[__DECODE_0__(0x8e)](__DECODE_0__(0x92), __DECODE_0__(0x9a)));
