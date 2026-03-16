'use strict';

function __DECODE_0__(WfWZjl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd3;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WfWZjl, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xdc)) / 0x1 + -parseInt(__DECODE_0__(0xdb)) / 0x2 + parseInt(__DECODE_0__(0xd8)) / 0x3 * (-parseInt(__DECODE_0__(0xda)) / 0x4) + parseInt(__DECODE_0__(0xd3)) / 0x5 + parseInt(__DECODE_0__(0xe2)) / 0x6 * (-parseInt(__DECODE_0__(0xd6)) / 0x7) + parseInt(__DECODE_0__(0xe3)) / 0x8 + -parseInt(__DECODE_0__(0xde)) / 0x9 * (-parseInt(__DECODE_0__(0xe0)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xea16d);
function __STRING_ARRAY__() {
  const _0x195718 = ['4459EkfDyQ', 'split', '597bRVwGr', 'readFileSync', '32932vFIebi', '999876elfgGs', '1378671DPsstC', '/dev/stdin', '18749961kYUiCu', 'log', '20WyZbNs', 'Yes', '3522ZwjdxY', '2852952CXGVbh', '1632235ylQAxh', 'utf8', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x195718;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg[__DECODE_0__(0xd5)]()[__DECODE_0__(0xd7)]('\x0a');
  const S = arg[0x0]['split']('');
  let previous = null;
  for (let i in S) {
    if (previous === 'A' && S[i] === 'C') {
      console[__DECODE_0__(0xdf)](__DECODE_0__(0xe1));
      return;
    }
    previous = S[i];
  }
  console['log']('No');
};
main(require('fs')[__DECODE_0__(0xd9)](__DECODE_0__(0xdd), __DECODE_0__(0xd4)));
