'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x127)) / 0x1 * (-parseInt(__DECODE_0__(0x128)) / 0x2) + parseInt(__DECODE_0__(0x123)) / 0x3 + -parseInt(__DECODE_0__(0x11d)) / 0x4 + -parseInt(__DECODE_0__(0x120)) / 0x5 * (parseInt(__DECODE_0__(0x122)) / 0x6) + -parseInt(__DECODE_0__(0x125)) / 0x7 * (parseInt(__DECODE_0__(0x11f)) / 0x8) + parseInt(__DECODE_0__(0x129)) / 0x9 + parseInt(__DECODE_0__(0x126)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xca298);
function __DECODE_0__(CNfIQv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CNfIQv, key);
}
function __STRING_ARRAY__() {
  const _0x2f7be8 = ['301FJlKLq', '30658080fgOyip', '1SbjsWa', '912712zcBDaA', '4411161uXvvRX', 'ARC', '4096752KvsGRw', 'readFileSync', '139064JMoRKx', '5tbYKzx', '/dev/stdin', '3519462xbeBrP', '260127AefFkp', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x2f7be8;
  };
  return __STRING_ARRAY__();
}
function main(s) {
  const x = Number(s);
  const ans = x >= 0x4b0 ? __DECODE_0__(0x11c) : 'ABC';
  console['log'](ans);
}
main(require('fs')[__DECODE_0__(0x11e)](__DECODE_0__(0x121), __DECODE_0__(0x124)));
