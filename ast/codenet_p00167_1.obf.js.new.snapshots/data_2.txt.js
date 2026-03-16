function __STRING_ARRAY__() {
  var _0x4c46bb = ['167150PQQlWB', 'readFileSync', '394139hLFLuX', '37428Apfpdu', '1288236dbgDKv', '/dev/stdin', '30vADAZk', '187vZkizc', 'split', '152slMJdn', 'utf8', 'length', '1873887QqkZpi', '215Xonfnd', 'log', 'shift', 'replace', '10171mJWXzS', '4nJELNL', '88551FdPIUl'];
  __STRING_ARRAY__ = function () {
    return _0x4c46bb;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x11a)) / 0x1 * (parseInt(__DECODE_0__(0x116)) / 0x2) + -parseInt(__DECODE_0__(0x124)) / 0x3 + -parseInt(__DECODE_0__(0x11b)) / 0x4 * (-parseInt(__DECODE_0__(0x125)) / 0x5) + parseInt(__DECODE_0__(0x11e)) / 0x6 * (-parseInt(__DECODE_0__(0x129)) / 0x7) + parseInt(__DECODE_0__(0x121)) / 0x8 * (-parseInt(__DECODE_0__(0x117)) / 0x9) + -parseInt(__DECODE_0__(0x118)) / 0xa * (-parseInt(__DECODE_0__(0x11f)) / 0xb) + -parseInt(__DECODE_0__(0x11c)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x85ef4);
var input = require('fs')[__DECODE_0__(0x119)](__DECODE_0__(0x11d), __DECODE_0__(0x122));
function __DECODE_0__(tyECga, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x116;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tyECga, key);
}
var Arr = input[__DECODE_0__(0x128)](/\n$/, '')[__DECODE_0__(0x120)]('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0x127)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var arr = [];
  for (var i = 0x0; i < n; i++) {
    var x = Arr[__DECODE_0__(0x127)]() - 0x0;
    arr['push'](x);
  }
  var L = 0x1;
  var cnt = 0x0;
  while (!![]) {
    if (arr[__DECODE_0__(0x123)] == L) {
      break;
    }
    for (var i = 0x0; i < arr[__DECODE_0__(0x123)] - L; i++) {
      var memo = arr[i];
      if (arr[i] > arr[i + 0x1]) {
        cnt++;
        arr[i] = arr[i + 0x1];
        arr[i + 0x1] = memo;
      }
    }
    L++;
  }
  console[__DECODE_0__(0x126)](cnt);
}
