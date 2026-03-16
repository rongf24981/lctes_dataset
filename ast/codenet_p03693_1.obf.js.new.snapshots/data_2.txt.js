'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x166)) / 0x1 + -parseInt(__DECODE_0__(0x15c)) / 0x2 + -parseInt(__DECODE_0__(0x169)) / 0x3 + -parseInt(__DECODE_0__(0x15a)) / 0x4 * (-parseInt(__DECODE_0__(0x168)) / 0x5) + parseInt(__DECODE_0__(0x163)) / 0x6 * (-parseInt(__DECODE_0__(0x167)) / 0x7) + -parseInt(__DECODE_0__(0x162)) / 0x8 * (parseInt(__DECODE_0__(0x161)) / 0x9) + -parseInt(__DECODE_0__(0x15f)) / 0xa * (-parseInt(__DECODE_0__(0x159)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7dbb0);
function Main(input) {
  const param = Number(input[__DECODE_0__(0x160)]('\x20')[__DECODE_0__(0x165)](''));
  if (param % 0x4 === 0x0) {
    console[__DECODE_0__(0x15d)](__DECODE_0__(0x164));
  } else {
    console[__DECODE_0__(0x15d)]('NO');
  }
}
function __DECODE_0__(NDYAVe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x159;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NDYAVe, key);
}
Main(require('fs')[__DECODE_0__(0x15e)](__DECODE_0__(0x15b), __DECODE_0__(0x16a)));
function __STRING_ARRAY__() {
  const _0x1e5ec3 = ['join', '175829XYQqmD', '331163qpIrmH', '3884185FCBpbL', '2988141FvcOEr', 'utf8', '19588613ZZrnjL', '4kBooSh', '/dev/stdin', '276216bNuvsT', 'log', 'readFileSync', '10dVmrZc', 'split', '531grnBZq', '86512JTJvEz', '12mhuYHA', 'YES'];
  __STRING_ARRAY__ = function () {
    return _0x1e5ec3;
  };
  return __STRING_ARRAY__();
}
