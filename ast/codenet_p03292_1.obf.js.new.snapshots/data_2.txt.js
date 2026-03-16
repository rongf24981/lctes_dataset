'use strict';

function __DECODE_0__(uCHpgm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uCHpgm, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x110)) / 0x1 * (parseInt(__DECODE_0__(0x117)) / 0x2) + parseInt(__DECODE_0__(0x10f)) / 0x3 * (parseInt(__DECODE_0__(0x11a)) / 0x4) + parseInt(__DECODE_0__(0x11b)) / 0x5 + parseInt(__DECODE_0__(0x11c)) / 0x6 + parseInt(__DECODE_0__(0x118)) / 0x7 * (-parseInt(__DECODE_0__(0x112)) / 0x8) + -parseInt(__DECODE_0__(0x111)) / 0x9 + -parseInt(__DECODE_0__(0x115)) / 0xa * (-parseInt(__DECODE_0__(0x11d)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe624d);
function main(s) {
  const nums = s[__DECODE_0__(0x113)]('\x0a')[0x0]['split']('\x20')[__DECODE_0__(0x11e)](n => Number(n));
  const ans = Math['max'](...nums) - Math[__DECODE_0__(0x119)](...nums);
  console[__DECODE_0__(0x116)](ans);
}
function __STRING_ARRAY__() {
  const _0x4d8f12 = ['min', '1417268zDUIxn', '123905iczCmj', '11297136KqwjVr', '14542FYSTJu', 'map', '3njgEiH', '1jFhyjq', '13026465vshXyN', '104iYkJXm', 'split', 'readFileSync', '10740fAwLSO', 'log', '258890pyUiEa', '765247XvbrVR'];
  __STRING_ARRAY__ = function () {
    return _0x4d8f12;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x114)]('/dev/stdin', 'utf8'));
