function __STRING_ARRAY__() {
  const _0x3bb3a0 = ['1204971plFEBb', '447480aiEHNZ', '5691826SSzTRp', '4iyWbiW', 'map', '45565HPhSnG', 'sort', 'join', 'split', 'push', 'log', '232488ldGoSt', 'readFileSync', '5342670bfUOgy', '509376kzdlqf'];
  __STRING_ARRAY__ = function () {
    return _0x3bb3a0;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xda)) / 0x1 + parseInt(__DECODE_0__(0xd8)) / 0x2 * (parseInt(__DECODE_0__(0xe4)) / 0x3) + -parseInt(__DECODE_0__(0xe0)) / 0x4 + -parseInt(__DECODE_0__(0xe5)) / 0x5 + -parseInt(__DECODE_0__(0xe2)) / 0x6 + parseInt(__DECODE_0__(0xd7)) / 0x7 + -parseInt(__DECODE_0__(0xe3)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x88c86);
function Main(input) {
  'use strict';

  const temp = input[__DECODE_0__(0xdd)]('\x0a');
  const n = parseInt(temp['shift'](), 0xa);
  for (let i = 0x0; i < n; i++) {
    temp[i] = temp[i]['split']('\x20');
    temp[i][__DECODE_0__(0xde)](i + 0x1);
    temp[i][0x1] = parseInt(temp[i][0x1], 0xa);
  }
  temp[__DECODE_0__(0xdb)]((a, b) => b[0x1] - a[0x1]);
  temp[__DECODE_0__(0xdb)]((a, b) => {
    if (a[0x0] < b[0x0]) {
      return -0x1;
    } else {
      if (a[0x0] > b[0x0]) {
        return 0x1;
      } else {
        0x0;
      }
    }
  });
  const ans = temp[__DECODE_0__(0xd9)](e => e[0x2]);
  console[__DECODE_0__(0xdf)](ans[__DECODE_0__(0xdc)]('\x0a'));
  return ![];
}
function __DECODE_0__(UaPckx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd7;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UaPckx, key);
}
Main(require('fs')[__DECODE_0__(0xe1)]('/dev/stdin', 'utf8'));
