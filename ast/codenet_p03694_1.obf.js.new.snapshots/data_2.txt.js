'use strict';

function __DECODE_0__(KfYdvk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KfYdvk, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x12b)) / 0x1 * (-parseInt(__DECODE_0__(0x12d)) / 0x2) + parseInt(__DECODE_0__(0x12c)) / 0x3 * (parseInt(__DECODE_0__(0x123)) / 0x4) + parseInt(__DECODE_0__(0x12a)) / 0x5 + -parseInt(__DECODE_0__(0x121)) / 0x6 + parseInt(__DECODE_0__(0x12e)) / 0x7 * (-parseInt(__DECODE_0__(0x11f)) / 0x8) + -parseInt(__DECODE_0__(0x120)) / 0x9 + parseInt(__DECODE_0__(0x122)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x81db1);
function main(s) {
  const houses = s[__DECODE_0__(0x127)]('\x0a')[0x1][__DECODE_0__(0x127)]('\x20')[__DECODE_0__(0x129)](n => Number(n));
  const min = Math[__DECODE_0__(0x124)](...houses);
  const max = Math[__DECODE_0__(0x12f)](...houses);
  const answer = max - min;
  console[__DECODE_0__(0x125)](answer);
}
function __STRING_ARRAY__() {
  const _0x3da472 = ['readFileSync', '944QrBBUv', '2190924gFxfFL', '6362442mMxfQg', '11300620WflGXP', '58868KmbnSd', 'min', 'log', '/dev/stdin', 'split', 'utf8', 'map', '2059370tjRyOF', '39787iQKrsH', '42mimNKo', '8xJaeaa', '4235oZmEvW', 'max'];
  __STRING_ARRAY__ = function () {
    return _0x3da472;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x11e)](__DECODE_0__(0x126), __DECODE_0__(0x128)));
