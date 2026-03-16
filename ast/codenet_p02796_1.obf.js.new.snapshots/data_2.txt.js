'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xfb)) / 0x1 + parseInt(__DECODE_0__(0xfa)) / 0x2 + -parseInt(__DECODE_0__(0xf9)) / 0x3 + parseInt(__DECODE_0__(0xf7)) / 0x4 + parseInt(__DECODE_0__(0xf5)) / 0x5 * (-parseInt(__DECODE_0__(0xf8)) / 0x6) + -parseInt(__DECODE_0__(0xfe)) / 0x7 + -parseInt(__DECODE_0__(0xf0)) / 0x8 * (parseInt(__DECODE_0__(0xf3)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x18e76);
function __STRING_ARRAY__() {
  const _0x4325fb = ['133799iWzFkO', '/dev/stdin', 'MIN_SAFE_INTEGER', '34062ybQGuI', 'trim', 'shift', 'readFileSync', 'length', '389384GMpMyO', 'map', 'log', '9IDMZHw', 'sort', '2855YpbmAw', 'split', '417856nhrgxE', '822IopvSp', '188649kSIgsR', '116784cNgwUW'];
  __STRING_ARRAY__ = function () {
    return _0x4325fb;
  };
  return __STRING_ARRAY__();
}
let a = require('fs')[__DECODE_0__(0x101)](__DECODE_0__(0xfc), 'utf8')[__DECODE_0__(0xff)]()[__DECODE_0__(0xf6)]('\x0a');
a[__DECODE_0__(0x100)]();
function __DECODE_0__(ENRdcA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xef;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ENRdcA, key);
}
let d = a[__DECODE_0__(0xf1)](e => {
  let r = e[__DECODE_0__(0xf6)]('\x20')[__DECODE_0__(0xf1)](Number);
  return [r[0x0] - r[0x1], r[0x1] + r[0x0]];
})[__DECODE_0__(0xf4)]((a, b) => {
  return a[0x1] - b[0x1];
});
let s = 0x0;
let P = Number[__DECODE_0__(0xfd)];
for (let i = 0x0; i < d[__DECODE_0__(0xef)]; i++) {
  if (P <= d[i][0x0]) {
    s++;
    P = d[i][0x1];
  }
}
console[__DECODE_0__(0xf2)](s);
