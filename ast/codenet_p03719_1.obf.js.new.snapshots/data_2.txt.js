'use strict';

function __DECODE_0__(dbgENE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa8;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dbgENE, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xac)) / 0x1 * (parseInt(__DECODE_0__(0xb5)) / 0x2) + parseInt(__DECODE_0__(0xad)) / 0x3 + -parseInt(__DECODE_0__(0xa8)) / 0x4 + -parseInt(__DECODE_0__(0xa9)) / 0x5 + -parseInt(__DECODE_0__(0xb7)) / 0x6 * (parseInt(__DECODE_0__(0xb1)) / 0x7) + -parseInt(__DECODE_0__(0xb2)) / 0x8 * (parseInt(__DECODE_0__(0xaa)) / 0x9) + parseInt(__DECODE_0__(0xb3)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x85c46);
function __STRING_ARRAY__() {
  const _0x2c08f7 = ['readFileSync', 'trim', 'Yes', '63VljCor', '740536fwPcrF', '14004780kRwZdu', 'log', '730aetKoD', '/dev/stdin', '346350sUcIXJ', '1257816PtINEr', '1012265lxQGtc', '18evmxtu', 'utf8', '225dCgHhm', '860619EcAiES'];
  __STRING_ARRAY__ = function () {
    return _0x2c08f7;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const args = input[__DECODE_0__(0xaf)]()['split']('\x20');
  const a = parseInt(args[0x0], 0xa);
  const b = parseInt(args[0x1], 0xa);
  const c = parseInt(args[0x2], 0xa);
  if (c >= a && c <= b) {
    console[__DECODE_0__(0xb4)](__DECODE_0__(0xb0));
  } else {
    console['log']('No');
  }
};
main(require('fs')[__DECODE_0__(0xae)](__DECODE_0__(0xb6), __DECODE_0__(0xab)));
