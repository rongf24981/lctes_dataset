'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1ee)) / 0x1 + -parseInt(__DECODE_0__(0x1eb)) / 0x2 * (parseInt(__DECODE_0__(0x1ef)) / 0x3) + -parseInt(__DECODE_0__(0x1f5)) / 0x4 + parseInt(__DECODE_0__(0x1f0)) / 0x5 + parseInt(__DECODE_0__(0x1f2)) / 0x6 + -parseInt(__DECODE_0__(0x1f8)) / 0x7 + parseInt(__DECODE_0__(0x1f7)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa0b7e);
function __DECODE_0__(rxkYvL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1eb;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rxkYvL, key);
}
function main(input) {
  const args = input[__DECODE_0__(0x1f3)]('\x0a');
  const num = args[__DECODE_0__(0x1f6)](el => parseInt(el));
  const ans = [0x1, 0x2, 0x3];
  let out = ans[__DECODE_0__(0x1ed)](el => el !== num[0x0]);
  out = out['find'](el => el !== num[0x1]);
  console[__DECODE_0__(0x1f4)](out);
}
function __STRING_ARRAY__() {
  const _0x2b07c5 = ['18419776mWNILo', '316540rmtaeg', 'readFileSync', '54654IdMMMp', 'utf8', 'filter', '1260203eNsUDj', '117BDJVkv', '6066340UWfJMQ', '/dev/stdin', '987018PzkVaI', 'split', 'log', '2603060teRJBK', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x2b07c5;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x1f9)](__DECODE_0__(0x1f1), __DECODE_0__(0x1ec)));
