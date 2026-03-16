var a0_0x3421e8 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x2a8e7e = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x2a8e7e(0x1d5)) / 0x1 + -parseInt(_0x2a8e7e(0x1e3)) / 0x2 + -parseInt(_0x2a8e7e(0x1d4)) / 0x3 * (parseInt(_0x2a8e7e(0x1da)) / 0x4) + -parseInt(_0x2a8e7e(0x1d7)) / 0x5 + -parseInt(_0x2a8e7e(0x1e2)) / 0x6 + parseInt(_0x2a8e7e(0x1df)) / 0x7 * (-parseInt(_0x2a8e7e(0x1de)) / 0x8) + parseInt(_0x2a8e7e(0x1d3)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc2e92);
function __DECODE_0__(ixvrGH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ixvrGH, key);
}
var input = require('fs')[a0_0x3421e8(0x1dc)](a0_0x3421e8(0x1d8), a0_0x3421e8(0x1e4));
function __STRING_ARRAY__() {
  var _0x5c2c23 = ['1066532becqWc', 'shift', 'readFileSync', 'map', '3065064pFSugr', '21BXjcNk', 'forEach', 'trim', '7950336DarUuu', '2518588YESFPg', 'utf8', 'log', 'push', '42910470sGsDgN', '3CvrgBF', '674048LHnvtr', 'split', '3215710XexyaG', '/dev/stdin', 'sort'];
  __STRING_ARRAY__ = function () {
    return _0x5c2c23;
  };
  return __STRING_ARRAY__();
}
var Arr = input[a0_0x3421e8(0x1e1)]()[a0_0x3421e8(0x1d6)]('\x0a');
while (!![]) {
  var nm = Arr[a0_0x3421e8(0x1db)]()['split']('\x20')[a0_0x3421e8(0x1dd)](Number);
  if (nm[0x0] == 0x0 && nm[0x1] == 0x0) {
    break;
  }
  var M = nm[0x1];
  var DP = [];
  for (var i = 0x0; i < nm[0x0]; i++) {
    var dp = Arr[a0_0x3421e8(0x1db)]()['split']('\x20')['map'](Number);
    DP[a0_0x3421e8(0x1d2)](dp);
  }
  DP[a0_0x3421e8(0x1d9)](function (a, b) {
    return b[0x1] - a[0x1];
  });
  var sum = 0x0;
  DP[a0_0x3421e8(0x1e0)](function (v) {
    var d = v[0x0];
    var p = v[0x1];
    while (!![]) {
      if (M == 0x0 || d == 0x0) {
        break;
      }
      M--;
      d--;
    }
    sum += d * p;
  });
  console[a0_0x3421e8(0x1e5)](sum);
}
