'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xd4)) / 0x1 * (parseInt(__DECODE_0__(0xdb)) / 0x2) + -parseInt(__DECODE_0__(0xe0)) / 0x3 + parseInt(__DECODE_0__(0xd8)) / 0x4 + -parseInt(__DECODE_0__(0xe1)) / 0x5 + parseInt(__DECODE_0__(0xd9)) / 0x6 + parseInt(__DECODE_0__(0xdf)) / 0x7 * (-parseInt(__DECODE_0__(0xde)) / 0x8) + parseInt(__DECODE_0__(0xdd)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc1fe5);
function main(input) {
  const args = input[__DECODE_0__(0xe2)]('\x0a');
  const N = parseInt(args[0x0]);
  const A = parseInt(args[0x1]);
  const B = parseInt(args[0x2]);
  const C = parseInt(args[0x3]);
  const D = parseInt(args[0x4]);
  const E = parseInt(args[0x5]);
  const station = [A, B, C, D, E];
  let max_traf = Math['min'](...station);
  console[__DECODE_0__(0xd5)](Math[__DECODE_0__(0xd7)](N / max_traf) + 0x4);
}
main(require('fs')[__DECODE_0__(0xd6)](__DECODE_0__(0xda), __DECODE_0__(0xdc)));
function __DECODE_0__(QQlyss, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd4;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QQlyss, key);
}
function __STRING_ARRAY__() {
  const _0x24e0a8 = ['log', 'readFileSync', 'ceil', '2390420IlrkMb', '4001970chRtOb', '/dev/stdin', '22QPRmDx', 'utf8', '26839503kIrfRM', '32mnhVOA', '2683366mSnJnf', '1221996yTjaES', '1593725yTcCgP', 'split', '108431GxnRuu'];
  __STRING_ARRAY__ = function () {
    return _0x24e0a8;
  };
  return __STRING_ARRAY__();
}
