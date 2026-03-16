(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x74)) / 0x1 * (-parseInt(__DECODE_0__(0x6c)) / 0x2) + -parseInt(__DECODE_0__(0x6e)) / 0x3 * (-parseInt(__DECODE_0__(0x7c)) / 0x4) + -parseInt(__DECODE_0__(0x6f)) / 0x5 * (-parseInt(__DECODE_0__(0x76)) / 0x6) + -parseInt(__DECODE_0__(0x70)) / 0x7 + parseInt(__DECODE_0__(0x71)) / 0x8 + -parseInt(__DECODE_0__(0x7d)) / 0x9 + parseInt(__DECODE_0__(0x78)) / 0xa * (-parseInt(__DECODE_0__(0x72)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x50509);
function __STRING_ARRAY__() {
  const _0x40de45 = ['reverse', '34fElkHT', 'join', '1577724wEysFI', 'utf8', '10QOkBVw', 'split', 'log', 'map', '2028gbuKKo', '222552jrnYQC', '/dev/stdin', '10766yBgtXT', 'readFileSync', '288yUXYBT', '10XluOPd', '2410548cqVGcY', '870824juqgXs', '1852334qbiNms'];
  __STRING_ARRAY__ = function () {
    return _0x40de45;
  };
  return __STRING_ARRAY__();
}
const input = require('fs')[__DECODE_0__(0x6d)](__DECODE_0__(0x7e), __DECODE_0__(0x77))[__DECODE_0__(0x79)](/\n/);
let num = input[0x1][__DECODE_0__(0x79)]('\x20')[__DECODE_0__(0x7b)](Number);
num[__DECODE_0__(0x73)]();
function __DECODE_0__(YorfpT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YorfpT, key);
}
console[__DECODE_0__(0x7a)](num[__DECODE_0__(0x75)]('\x20'));
