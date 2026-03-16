'use strict';

function __STRING_ARRAY__() {
  const _0x4627c7 = ['log', '31218836yFpmqn', '9MXYfnD', 'split', '3Olitcy', 'readFileSync', '7360816fGTHwc', '5483725TiAfcu', 'trim', '14021rsJZiT', '17432650dBPFsL', '492124aTzDhG', '4rGSXVJ', '/dev/stdin', '4632eBEjrq', '2707600oFRKLl'];
  __STRING_ARRAY__ = function () {
    return _0x4627c7;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(vPmwrR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e3;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vPmwrR, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1ec)) / 0x1 * (-parseInt(__DECODE_0__(0x1eb)) / 0x2) + -parseInt(__DECODE_0__(0x1e4)) / 0x3 * (parseInt(__DECODE_0__(0x1ef)) / 0x4) + parseInt(__DECODE_0__(0x1e7)) / 0x5 + -parseInt(__DECODE_0__(0x1ee)) / 0x6 * (-parseInt(__DECODE_0__(0x1e9)) / 0x7) + -parseInt(__DECODE_0__(0x1e6)) / 0x8 + parseInt(__DECODE_0__(0x1f2)) / 0x9 * (parseInt(__DECODE_0__(0x1ea)) / 0xa) + -parseInt(__DECODE_0__(0x1f1)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe4648);
const main = arg => {
  arg = arg[__DECODE_0__(0x1e8)]()[__DECODE_0__(0x1e3)]('\x0a');
  const N = parseInt(arg[0x0]['split']('\x20')[0x0]);
  const K = parseInt(arg[0x0][__DECODE_0__(0x1e3)]('\x20')[0x1]);
  console[__DECODE_0__(0x1f0)](K === 0x1 ? 0x0 : N - K);
};
main(require('fs')[__DECODE_0__(0x1e5)](__DECODE_0__(0x1ed), 'utf8'));
