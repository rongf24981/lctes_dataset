'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xce)) / 0x1 * (-parseInt(__DECODE_0__(0xcf)) / 0x2) + parseInt(__DECODE_0__(0xca)) / 0x3 * (parseInt(__DECODE_0__(0xc0)) / 0x4) + -parseInt(__DECODE_0__(0xc5)) / 0x5 * (parseInt(__DECODE_0__(0xc2)) / 0x6) + parseInt(__DECODE_0__(0xcc)) / 0x7 * (-parseInt(__DECODE_0__(0xc6)) / 0x8) + parseInt(__DECODE_0__(0xbf)) / 0x9 + -parseInt(__DECODE_0__(0xc3)) / 0xa * (-parseInt(__DECODE_0__(0xd0)) / 0xb) + parseInt(__DECODE_0__(0xcd)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x19f77);
function __STRING_ARRAY__() {
  const _0x4c29bb = ['590ZBtQOK', '1264840cAYgQo', 'YES', 'log', 'split', '48018LTQtPv', '/dev/stdin', '7hiHwWs', '5805780rkFHYA', '38807ZtIdsi', '6JVZILK', '110xFsYOc', '597402eZWqhP', '4DTVhGZ', 'readFileSync', '9498sSuvue', '1480matNlo', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x4c29bb;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  let Nums = arg['split']('\x0a')[0x0][__DECODE_0__(0xc9)]('\x20')[__DECODE_0__(0xc4)](n => Number(n));
  let A = Nums[0x0];
  let B = Nums[0x1];
  let C = Nums[0x2];
  let ans = 'NO';
  for (let i = 0x1; i <= B; i++) {
    if (A * i % B == C) {
      ans = __DECODE_0__(0xc7);
    }
  }
  console[__DECODE_0__(0xc8)](ans);
};
function __DECODE_0__(JoHekw, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbf;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JoHekw, key);
}
main(require('fs')[__DECODE_0__(0xc1)](__DECODE_0__(0xcb), 'utf8'));
