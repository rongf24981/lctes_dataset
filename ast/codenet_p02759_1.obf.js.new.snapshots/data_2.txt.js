'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1ce)) / 0x1 * (-parseInt(__DECODE_0__(0x1cb)) / 0x2) + parseInt(__DECODE_0__(0x1d6)) / 0x3 + parseInt(__DECODE_0__(0x1cd)) / 0x4 * (parseInt(__DECODE_0__(0x1d1)) / 0x5) + parseInt(__DECODE_0__(0x1d4)) / 0x6 * (parseInt(__DECODE_0__(0x1c8)) / 0x7) + -parseInt(__DECODE_0__(0x1d7)) / 0x8 * (-parseInt(__DECODE_0__(0x1d2)) / 0x9) + parseInt(__DECODE_0__(0x1cf)) / 0xa * (-parseInt(__DECODE_0__(0x1d0)) / 0xb) + parseInt(__DECODE_0__(0x1ca)) / 0xc * (parseInt(__DECODE_0__(0x1cc)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x78c19);
function __DECODE_0__(rKfpXn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c8;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rKfpXn, key);
}
function main(input) {
  input = input[__DECODE_0__(0x1d5)]('\x0a');
  const a = parseInt(input[0x0], 0xa);
  console['log'](Math['round'](a / 0x2));
}
main(require('fs')['readFileSync'](__DECODE_0__(0x1c9), __DECODE_0__(0x1d3)));
function __STRING_ARRAY__() {
  const _0x529911 = ['172nOSiuT', '381CwXYbn', '50gWVtzm', '984137UEUHmy', '27305fhqEfW', '341973bOfvyf', 'utf8', '12WXFbkN', 'split', '319524cyewtA', '8hrlcSc', '2139655eDHaxG', '/dev/stdin', '51420xUzUmH', '4282XBmPoQ', '2327iUZsNG'];
  __STRING_ARRAY__ = function () {
    return _0x529911;
  };
  return __STRING_ARRAY__();
}
