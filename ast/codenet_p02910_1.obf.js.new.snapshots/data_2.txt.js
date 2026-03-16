'use strict';

function __STRING_ARRAY__() {
  const _0x400354 = ['94fbXzLB', '7155198REYAcy', 'map', '5904235ceVxly', 'length', 'includes', '47021EnPmPS', '/dev/stdin', '10481184EWryLv', '10925776QwGoPH', '46653eLvmuc', '4JqUQZU', 'Yes', '55HwfDJj', 'log', 'utf8', 'split', '7dOoMXr', '3348340jomkSV', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x400354;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xc8)) / 0x1 + -parseInt(__DECODE_0__(0xc2)) / 0x2 * (parseInt(__DECODE_0__(0xcc)) / 0x3) + parseInt(__DECODE_0__(0xb9)) / 0x4 * (-parseInt(__DECODE_0__(0xc5)) / 0x5) + parseInt(__DECODE_0__(0xc3)) / 0x6 + parseInt(__DECODE_0__(0xbf)) / 0x7 * (-parseInt(__DECODE_0__(0xcb)) / 0x8) + parseInt(__DECODE_0__(0xca)) / 0x9 + -parseInt(__DECODE_0__(0xc0)) / 0xa * (-parseInt(__DECODE_0__(0xbb)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xac8e8);
function __DECODE_0__(qFHBAx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb9;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qFHBAx, key);
}
const main = input => {
  const args = input[__DECODE_0__(0xbe)]('\x0a')[__DECODE_0__(0xc4)](arg => arg[__DECODE_0__(0xbe)]('\x20'));
  const S = args[0x0][0x0];
  const N = S[__DECODE_0__(0xc6)];
  let odd = !![];
  let even = !![];
  for (let i = 0x0; i < N; i++) {
    if (i % 0x2 === 0x0) {
      if (!['R', 'U', 'D'][__DECODE_0__(0xc7)](S[i])) {
        odd = ![];
      }
    } else {
      if (!['L', 'U', 'D']['includes'](S[i])) {
        even = ![];
      }
    }
  }
  if (odd && even) {
    console[__DECODE_0__(0xbc)](__DECODE_0__(0xba));
  } else {
    console[__DECODE_0__(0xbc)]('No');
  }
};
main(require('fs')[__DECODE_0__(0xc1)](__DECODE_0__(0xc9), __DECODE_0__(0xbd)));
