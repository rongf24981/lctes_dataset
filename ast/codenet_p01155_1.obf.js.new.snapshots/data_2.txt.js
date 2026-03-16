function __STRING_ARRAY__() {
  var _0x24a62d = ['0\x200', 'log', 'join', 'forEach', '8532IGGmAp', '2524KUgYgE', '85HYWLlA', '300345unNguI', '168984xIUTte', '72FPOgYL', 'push', '3262938jMhyoD', 'shift', 'min', 'trim', 'utf8', '2841CfucWi', 'sort', '830115sqyTNK', 'pow', '15538030NASqei', 'split', 'sqrt'];
  __STRING_ARRAY__ = function () {
    return _0x24a62d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x90)) / 0x1 * (-parseInt(__DECODE_0__(0x8e)) / 0x2) + parseInt(__DECODE_0__(0x9a)) / 0x3 * (-parseInt(__DECODE_0__(0x8f)) / 0x4) + -parseInt(__DECODE_0__(0x91)) / 0x5 * (parseInt(__DECODE_0__(0x93)) / 0x6) + parseInt(__DECODE_0__(0x95)) / 0x7 + parseInt(__DECODE_0__(0x92)) / 0x8 + parseInt(__DECODE_0__(0x9c)) / 0x9 + parseInt(__DECODE_0__(0x9e)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6e6cc);
var input = require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x99));
var arr = input[__DECODE_0__(0x98)]()[__DECODE_0__(0x88)]('\x0a');
function __DECODE_0__(FmRhRq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x88;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FmRhRq, key);
}
while (!![]) {
  var ab = arr[__DECODE_0__(0x96)]()[__DECODE_0__(0x88)]('\x20')['map'](Number);
  if (ab[__DECODE_0__(0x8c)]('\x20') == __DECODE_0__(0x8a)) {
    break;
  }
  var a = ab[0x0];
  var b = ab[0x1];
  var A = [];
  var B = [];
  for (i = 0x1; i <= Math[__DECODE_0__(0x89)](a); i++) {
    if (a % i == 0x0) {
      A['push']([a / i, i]);
    }
  }
  for (i = 0x1; i <= Math[__DECODE_0__(0x89)](b); i++) {
    if (b % i == 0x0) {
      B[__DECODE_0__(0x94)]([b / i, i]);
    }
  }
  var min = Infinity;
  A['forEach'](function (va) {
    B[__DECODE_0__(0x8d)](function (vb) {
      var c = [va[0x0], va[0x1], vb[0x0], vb[0x1]];
      c[__DECODE_0__(0x9b)](function (a, b) {
        return a - b;
      });
      min = Math[__DECODE_0__(0x97)](min, Math[__DECODE_0__(0x9d)](c[0x0] - c[0x1], 0x2) + Math['pow'](c[0x1] - c[0x2], 0x2) + Math[__DECODE_0__(0x9d)](c[0x2] - c[0x3], 0x2));
    });
  });
  console[__DECODE_0__(0x8b)](min);
}
