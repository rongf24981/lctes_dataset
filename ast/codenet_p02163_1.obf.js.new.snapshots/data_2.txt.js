function __DECODE_0__(igfqjb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x112;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(igfqjb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x11c)) / 0x1 * (parseInt(__DECODE_0__(0x11e)) / 0x2) + -parseInt(__DECODE_0__(0x117)) / 0x3 * (-parseInt(__DECODE_0__(0x123)) / 0x4) + -parseInt(__DECODE_0__(0x124)) / 0x5 * (-parseInt(__DECODE_0__(0x118)) / 0x6) + -parseInt(__DECODE_0__(0x11d)) / 0x7 + -parseInt(__DECODE_0__(0x113)) / 0x8 * (-parseInt(__DECODE_0__(0x120)) / 0x9) + parseInt(__DECODE_0__(0x121)) / 0xa + -parseInt(__DECODE_0__(0x114)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6b31f);
var input = require('fs')[__DECODE_0__(0x112)](__DECODE_0__(0x115), __DECODE_0__(0x119));
var arr = input[__DECODE_0__(0x11f)]()[__DECODE_0__(0x11b)]('\x0a');
var n = arr[__DECODE_0__(0x122)]() - 0x0;
var [a, b] = [0x0, 0x1];
arr['forEach'](v => {
  var [q, x] = v[__DECODE_0__(0x11b)]('\x20')[__DECODE_0__(0x11a)](Number);
  if (q == 0x1) {
    b *= x;
    a *= x;
  } else {
    if (q == 0x2) {
      a -= x;
    } else {
      if (q == 0x3) {
        a += x;
      }
    }
  }
});
console[__DECODE_0__(0x116)](a + '\x20' + b);
function __STRING_ARRAY__() {
  var _0x422d14 = ['shift', '165492CplmKG', '51465Iqnhez', 'readFileSync', '1776xgWdaJ', '15875607NYRbFx', '/dev/stdin', 'log', '27VCYRsY', '306sLJRwh', 'utf8', 'map', 'split', '28057eykQbw', '3171189aRlrxH', '52wdJpST', 'trim', '24363EDlcBD', '1075990WKCgJv'];
  __STRING_ARRAY__ = function () {
    return _0x422d14;
  };
  return __STRING_ARRAY__();
}
