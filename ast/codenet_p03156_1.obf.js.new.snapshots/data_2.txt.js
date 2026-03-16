'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x116)) / 0x1 + parseInt(__DECODE_0__(0x115)) / 0x2 + -parseInt(__DECODE_0__(0x11d)) / 0x3 + -parseInt(__DECODE_0__(0x117)) / 0x4 * (-parseInt(__DECODE_0__(0x119)) / 0x5) + -parseInt(__DECODE_0__(0x110)) / 0x6 * (-parseInt(__DECODE_0__(0x111)) / 0x7) + parseInt(__DECODE_0__(0x11b)) / 0x8 + -parseInt(__DECODE_0__(0x120)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5e9f9);
function __STRING_ARRAY__() {
  const _0x15ced0 = ['min', '45uksXMO', 'map', '4689608zFqVfr', 'push', '305211yfEktY', 'split', 'length', '7145370IqjVZK', 'utf8', '77010JRAtIq', '329xwMdgJ', '/dev/stdin', 'log', 'trim', '1093934hUmays', '694945gFPnST', '107456CxOqdK'];
  __STRING_ARRAY__ = function () {
    return _0x15ced0;
  };
  return __STRING_ARRAY__();
}
const Main = input => {
  let xs = input[__DECODE_0__(0x114)]()[__DECODE_0__(0x11e)]('\x0a');
  let N = Number(xs[0x0]);
  let A = Number(xs[0x1][__DECODE_0__(0x11e)]('\x20')[0x0]);
  let B = Number(xs[0x1][__DECODE_0__(0x11e)]('\x20')[0x1]);
  let P1 = [];
  let P2 = [];
  let P3 = [];
  let P = xs[0x2][__DECODE_0__(0x11e)]('\x20')[__DECODE_0__(0x11a)](v => parseInt(v, 0xa));
  for (let i = 0x0; i < N; i++) {
    if (P[i] <= A) {
      P1[__DECODE_0__(0x11c)](P[i]);
    } else {
      if (P[i] <= B) {
        P2[__DECODE_0__(0x11c)](P[i]);
      } else {
        P3['push'](P[i]);
      }
    }
  }
  let ans = Math[__DECODE_0__(0x118)](P1[__DECODE_0__(0x11f)], P2['length'], P3[__DECODE_0__(0x11f)]);
  console[__DECODE_0__(0x113)](ans);
};
function __DECODE_0__(JQREaZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x110;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JQREaZ, key);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x112), __DECODE_0__(0x121)));
