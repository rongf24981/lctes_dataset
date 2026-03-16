(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf1)) / 0x1 + parseInt(__DECODE_0__(0xeb)) / 0x2 * (parseInt(__DECODE_0__(0xf5)) / 0x3) + parseInt(__DECODE_0__(0xf4)) / 0x4 * (-parseInt(__DECODE_0__(0xe6)) / 0x5) + parseInt(__DECODE_0__(0xe7)) / 0x6 * (parseInt(__DECODE_0__(0xf3)) / 0x7) + -parseInt(__DECODE_0__(0xec)) / 0x8 + parseInt(__DECODE_0__(0xf8)) / 0x9 * (-parseInt(__DECODE_0__(0xe5)) / 0xa) + parseInt(__DECODE_0__(0xed)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x92d8d);
inp = require('fs')[__DECODE_0__(0xe9)](__DECODE_0__(0xf2), __DECODE_0__(0xf7))[__DECODE_0__(0xea)]('\x0a');
function __DECODE_0__(IGaZYb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IGaZYb, key);
}
l = inp[__DECODE_0__(0xf6)]()[__DECODE_0__(0xea)]('\x20');
N = l[0x0];
K = l[0x1];
A = inp[__DECODE_0__(0xf6)]()['split']('\x20');
function __STRING_ARRAY__() {
  var _0x15e966 = ['utf8', '17523EWamaw', '4930bGcoxv', '5991590osjKLE', '6RAUGrj', 'keys', 'readFileSync', 'split', '414214CZiOvQ', '3374976PKpVyx', '28256547QEvSip', 'log', 'length', 'sort', '688045qJnKKL', '/dev/stdin', '1856953WkZCGx', '4kAmZjT', '15DEcLmO', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x15e966;
  };
  return __STRING_ARRAY__();
}
o = {};
a = [];
for (i = 0x0; i < N; i++) {
  a[A[i]] = (a[A[i]] || 0x0) + 0x1;
  o[A[i]] = 0x1;
}
keys = Object[__DECODE_0__(0xe8)](o);
c = keys[__DECODE_0__(0xef)] - K;
if (c > 0x0) {
  a[__DECODE_0__(0xf0)]();
  cnt = 0x0;
  for (k of a) {
    cnt += k;
    c--;
    if (c === 0x0) {
      break;
    }
  }
  console[__DECODE_0__(0xee)](cnt);
} else {
  console[__DECODE_0__(0xee)](0x0);
}
