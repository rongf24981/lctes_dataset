var a0_0x2ac6ea = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x3c783d = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x3c783d(0xf1)) / 0x1 + parseInt(_0x3c783d(0xeb)) / 0x2 * (parseInt(_0x3c783d(0xf5)) / 0x3) + parseInt(_0x3c783d(0xf4)) / 0x4 * (-parseInt(_0x3c783d(0xe6)) / 0x5) + parseInt(_0x3c783d(0xe7)) / 0x6 * (parseInt(_0x3c783d(0xf3)) / 0x7) + -parseInt(_0x3c783d(0xec)) / 0x8 + parseInt(_0x3c783d(0xf8)) / 0x9 * (-parseInt(_0x3c783d(0xe5)) / 0xa) + parseInt(_0x3c783d(0xed)) / 0xb;
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
inp = require('fs')[a0_0x2ac6ea(0xe9)](a0_0x2ac6ea(0xf2), a0_0x2ac6ea(0xf7))[a0_0x2ac6ea(0xea)]('\x0a');
function __DECODE_0__(IGaZYb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IGaZYb, key);
}
l = inp[a0_0x2ac6ea(0xf6)]()[a0_0x2ac6ea(0xea)]('\x20');
N = l[0x0];
K = l[0x1];
A = inp[a0_0x2ac6ea(0xf6)]()['split']('\x20');
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
keys = Object[a0_0x2ac6ea(0xe8)](o);
c = keys[a0_0x2ac6ea(0xef)] - K;
if (c > 0x0) {
  a[a0_0x2ac6ea(0xf0)]();
  cnt = 0x0;
  for (k of a) {
    cnt += k;
    c--;
    if (c === 0x0) {
      break;
    }
  }
  console[a0_0x2ac6ea(0xee)](cnt);
} else {
  console[a0_0x2ac6ea(0xee)](0x0);
}
