function __DECODE_0__(gcrQJu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gcrQJu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xee)) / 0x1 * (parseInt(__DECODE_0__(0xf3)) / 0x2) + parseInt(__DECODE_0__(0xef)) / 0x3 + -parseInt(__DECODE_0__(0xe4)) / 0x4 + parseInt(__DECODE_0__(0xf0)) / 0x5 * (parseInt(__DECODE_0__(0xe9)) / 0x6) + -parseInt(__DECODE_0__(0xe5)) / 0x7 * (parseInt(__DECODE_0__(0xea)) / 0x8) + -parseInt(__DECODE_0__(0xe8)) / 0x9 * (parseInt(__DECODE_0__(0xf4)) / 0xa) + parseInt(__DECODE_0__(0xe6)) / 0xb * (parseInt(__DECODE_0__(0xf5)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x800ca);
function __STRING_ARRAY__() {
  var _0x3740b0 = ['shift', 'log', '48306sACeeL', '130yVIafm', '622884NLdxia', 'readFileSync', 'trim', '955056IqmKWi', '2251690RMfCEp', '77MEQSIO', '/dev/stdin', '513027igObTO', '1905522TeGKbp', '8dkMvAt', 'utf8', 'reduce', 'split', '30LnaVAg', '308550BWQMXw', '10sIzyPJ'];
  __STRING_ARRAY__ = function () {
    return _0x3740b0;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0xf6)](__DECODE_0__(0xe7), __DECODE_0__(0xeb));
var Arr = input[__DECODE_0__(0xe3)]()[__DECODE_0__(0xed)]('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0xf1)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var arr = [];
  for (var i = 0x0; i < n; i++) {
    var v = Arr['shift']() - 0x0;
    arr['push'](v);
  }
  arr['sort'](function (a, b) {
    return a - b;
  });
  var wait = [];
  var time = 0x0;
  for (var i = 0x0; i < n; i++) {
    wait['push'](time);
    time += arr[i];
  }
  var sum = wait[__DECODE_0__(0xec)](function (a, b) {
    return a + b;
  });
  console[__DECODE_0__(0xf2)](sum);
}
