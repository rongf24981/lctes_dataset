'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x121)) / 0x1 + -parseInt(__DECODE_0__(0x119)) / 0x2 + parseInt(__DECODE_0__(0x11e)) / 0x3 + parseInt(__DECODE_0__(0x11f)) / 0x4 + parseInt(__DECODE_0__(0x11d)) / 0x5 * (-parseInt(__DECODE_0__(0x115)) / 0x6) + parseInt(__DECODE_0__(0x123)) / 0x7 * (parseInt(__DECODE_0__(0x116)) / 0x8) + -parseInt(__DECODE_0__(0x122)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8284d);
function __DECODE_0__(LRoaOY, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x115;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LRoaOY, key);
}
function __STRING_ARRAY__() {
  const _0x282116 = ['469NoVALA', '654nRSblY', '47544dwEZPK', 'utf8', '/dev/stdin', '525354ljlujU', 'log', 'readFileSync', 'ABC', '5305UuIfRc', '2750658xLrMXf', '1338340BFuyCQ', 'ARC', '58132LoQSmZ', '6107301BjXJZa'];
  __STRING_ARRAY__ = function () {
    return _0x282116;
  };
  return __STRING_ARRAY__();
}
const Main = input => {
  if (input === __DECODE_0__(0x11c)) {
    console['log'](__DECODE_0__(0x120));
  } else {
    console[__DECODE_0__(0x11a)](__DECODE_0__(0x11c));
  }
};
Main(require('fs')[__DECODE_0__(0x11b)](__DECODE_0__(0x118), __DECODE_0__(0x117)));
