(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x7c)) / 0x1 + parseInt(__DECODE_0__(0x7b)) / 0x2 + parseInt(__DECODE_0__(0x6e)) / 0x3 * (parseInt(__DECODE_0__(0x78)) / 0x4) + parseInt(__DECODE_0__(0x6f)) / 0x5 + -parseInt(__DECODE_0__(0x7d)) / 0x6 * (parseInt(__DECODE_0__(0x70)) / 0x7) + -parseInt(__DECODE_0__(0x79)) / 0x8 * (-parseInt(__DECODE_0__(0x77)) / 0x9) + -parseInt(__DECODE_0__(0x6d)) / 0xa * (parseInt(__DECODE_0__(0x6c)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x29648);
function __STRING_ARRAY__() {
  var _0x2999bc = ['2950407hQOlfY', '615108uquiYs', '8dpBtmF', 'shift', '326728tbaYha', '208104gtOmTq', '78OTLCfL', '1298TFeKrf', '38660Jmifqb', '3kQDykH', '1588575FdJNFy', '69377ResbGt', 'readFileSync', 'sort', 'utf8', 'split', 'log', 'push'];
  __STRING_ARRAY__ = function () {
    return _0x2999bc;
  };
  return __STRING_ARRAY__();
}
inp = require('fs')[__DECODE_0__(0x71)]('/dev/stdin', __DECODE_0__(0x73))[__DECODE_0__(0x74)]('\x0a');
N = inp[__DECODE_0__(0x7a)]() * 0x1;
A = inp[__DECODE_0__(0x7a)]()['split']('\x20');
function __DECODE_0__(UzHqIW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UzHqIW, key);
}
B = inp[__DECODE_0__(0x7a)]()[__DECODE_0__(0x74)]('\x20');
sumA = 0x0;
sumB = 0x0;
s = 0x0;
t = [];
cnt = 0x0;
for (i = 0x0; i < N; i++) {
  a = A[i] * 0x1;
  b = B[i] * 0x1;
  d = a - b;
  if (d < 0x0) {
    cnt++;
    s += d;
  } else {
    t[__DECODE_0__(0x76)](d);
  }
  sumA += a;
  sumB += b;
}
if (sumA >= sumB) {
  t[__DECODE_0__(0x72)]((a, b) => b - a);
  j = 0x0;
  while (s < 0x0) {
    s += t[j];
    j++;
  }
  console[__DECODE_0__(0x75)](cnt + j);
} else {
  console[__DECODE_0__(0x75)](-0x1);
}
