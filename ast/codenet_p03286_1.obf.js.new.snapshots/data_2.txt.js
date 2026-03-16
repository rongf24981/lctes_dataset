'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x96)) / 0x1 + parseInt(__DECODE_0__(0x98)) / 0x2 * (parseInt(__DECODE_0__(0x9e)) / 0x3) + parseInt(__DECODE_0__(0x95)) / 0x4 + parseInt(__DECODE_0__(0xa0)) / 0x5 * (-parseInt(__DECODE_0__(0x93)) / 0x6) + parseInt(__DECODE_0__(0x9c)) / 0x7 + parseInt(__DECODE_0__(0x9d)) / 0x8 * (parseInt(__DECODE_0__(0x97)) / 0x9) + -parseInt(__DECODE_0__(0x9a)) / 0xa * (parseInt(__DECODE_0__(0x9f)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd38d7);
function Main(input) {
  input = input[__DECODE_0__(0x99)]('\x0a');
  let N = parseInt(input[0x0]);
  let res = '';
  if (N === 0x0) {
    console['log'](0x0);
    return;
  }
  while (N !== 0x0) {
    res = String(Math['abs'](N % -0x2)) + res;
    if (N % -0x2 < 0x0) {
      N += N < 0x0 ? -0x1 : 0x1;
    }
    N = parseInt(N / -0x2);
  }
  console['log'](res);
}
Main(require('fs')[__DECODE_0__(0x9b)](__DECODE_0__(0x94), __DECODE_0__(0xa1)));
function __DECODE_0__(SbVhpi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x93;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SbVhpi, key);
}
function __STRING_ARRAY__() {
  const _0x373c8e = ['31077UiKmce', '91844OxOzRY', 'split', '1790PkubhH', 'readFileSync', '101059lzPOPK', '3232ePyEhW', '9xylWTa', '135883TkSZvv', '5tnPOWC', 'utf8', '1143666GmYtOg', '/dev/stdin', '3896528WDshDW', '746970mRWpyu'];
  __STRING_ARRAY__ = function () {
    return _0x373c8e;
  };
  return __STRING_ARRAY__();
}
