function __DECODE_0__(jKBohM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jKBohM, key);
}
function __STRING_ARRAY__() {
  var _0x30af8a = ['utf8', '10LqEzos', 'map', 'length', 'push', '54320sZqMGZ', 'log', 'shift', '220991pBnfcr', 'readFileSync', '44dLAYxt', '48vurXGp', '6TooLLj', '/dev/stdin', '38937YZLydF', '794968pdBzBH', 'trim', '334745DOREmw', 'split', '3493827ADwhTo', '0\x200', '398618jVUxXI', 'sort'];
  __STRING_ARRAY__ = function () {
    return _0x30af8a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d6)) / 0x1 + parseInt(__DECODE_0__(0x1c6)) / 0x2 + -parseInt(__DECODE_0__(0x1c5)) / 0x3 * (parseInt(__DECODE_0__(0x1d8)) / 0x4) + parseInt(__DECODE_0__(0x1c8)) / 0x5 * (-parseInt(__DECODE_0__(0x1c3)) / 0x6) + parseInt(__DECODE_0__(0x1d3)) / 0x7 * (-parseInt(__DECODE_0__(0x1c2)) / 0x8) + parseInt(__DECODE_0__(0x1ca)) / 0x9 * (parseInt(__DECODE_0__(0x1cf)) / 0xa) + -parseInt(__DECODE_0__(0x1cc)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x42734);
var input = require('fs')[__DECODE_0__(0x1d7)](__DECODE_0__(0x1c4), __DECODE_0__(0x1ce));
var Arr = input[__DECODE_0__(0x1c7)]()[__DECODE_0__(0x1c9)]('\x0a');
while (!![]) {
  var nm = Arr[__DECODE_0__(0x1d5)]();
  if (nm == __DECODE_0__(0x1cb)) {
    break;
  }
  nm = nm[__DECODE_0__(0x1c9)]('\x20')[__DECODE_0__(0x1d0)](Number);
  var n = nm[0x0];
  var m = nm[0x1];
  var N = [];
  var M = [];
  for (var i = 0x0; i < n; i++) {
    N[__DECODE_0__(0x1d2)](Arr[__DECODE_0__(0x1d5)]() - 0x0);
  }
  for (var i = 0x0; i < m; i++) {
    M[__DECODE_0__(0x1d2)](Arr[__DECODE_0__(0x1d5)]() - 0x0);
  }
  var sumN = N['reduce'](function (a, b) {
    return a + b;
  });
  var sumM = M['reduce'](function (a, b) {
    return a + b;
  });
  var arr = [];
  for (var i = 0x0; i < n; i++) {
    for (var j = 0x0; j < m; j++) {
      var a = sumN - N[i] + M[j];
      var b = sumM + N[i] - M[j];
      if (a == b) {
        arr[__DECODE_0__(0x1d2)]([N[i] + M[j], N[i], M[j]]);
      }
    }
  }
  if (arr[__DECODE_0__(0x1d1)] == 0x0) {
    console[__DECODE_0__(0x1d4)](-0x1);
    continue;
  }
  arr[__DECODE_0__(0x1cd)](function (a, b) {
    return a[0x0] - b[0x0];
  });
  console['log'](arr[0x0][0x1] + '\x20' + arr[0x0][0x2]);
}
