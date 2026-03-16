'use strict';

function __DECODE_0__(dCljYc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x101;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dCljYc, key);
}
function __STRING_ARRAY__() {
  const _0x4c6e99 = ['335772bAqJPY', 'utf8', '8249087vTqjZW', '/dev/stdin', '461617cHAYXv', '898767TKhXFF', 'readFileSync', '8XBZlFe', 'log', '2667679tOaQXU', '1018630Ajyufb', '3fOoXEt', '2DJpUux', '50TOotaD', '1317654mRAUQS', 'replace'];
  __STRING_ARRAY__ = function () {
    return _0x4c6e99;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x110)) / 0x1 * (parseInt(__DECODE_0__(0x108)) / 0x2) + parseInt(__DECODE_0__(0x107)) / 0x3 * (parseInt(__DECODE_0__(0x10c)) / 0x4) + -parseInt(__DECODE_0__(0x106)) / 0x5 + -parseInt(__DECODE_0__(0x10a)) / 0x6 + -parseInt(__DECODE_0__(0x105)) / 0x7 * (-parseInt(__DECODE_0__(0x103)) / 0x8) + parseInt(__DECODE_0__(0x101)) / 0x9 * (parseInt(__DECODE_0__(0x109)) / 0xa) + -parseInt(__DECODE_0__(0x10e)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3db30);
const main = arg => {
  let X = parseInt(arg);
  let result = 0x168 / X;
  result = String(result);
  var answer = result[__DECODE_0__(0x10b)]('.', '');
  console[__DECODE_0__(0x104)](answer);
};
main(require('fs')[__DECODE_0__(0x102)](__DECODE_0__(0x10f), __DECODE_0__(0x10d)));
