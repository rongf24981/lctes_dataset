function __DECODE_0__(eVPcJA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eVPcJA, key);
}
function __STRING_ARRAY__() {
  var _0x584d99 = ['6DmaQpK', 'shift', '1429286ayxOsV', '482015CjlnJe', 'readFileSync', '70habhRX', '18mFMSkO', 'push', '4416305cboYPc', 'log', '2696APCWDu', '345XUQMXq', '39142169vjjDOF', '/dev/stdin', 'trim', 'utf8', '5519750cslhGJ', 'forEach', 'split', '912536kMCNhq'];
  __STRING_ARRAY__ = function () {
    return _0x584d99;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1e0)) / 0x1 + parseInt(__DECODE_0__(0x1df)) / 0x2 + parseInt(__DECODE_0__(0x1d4)) / 0x3 * (-parseInt(__DECODE_0__(0x1d3)) / 0x4) + -parseInt(__DECODE_0__(0x1d1)) / 0x5 * (parseInt(__DECODE_0__(0x1dd)) / 0x6) + -parseInt(__DECODE_0__(0x1e2)) / 0x7 * (parseInt(__DECODE_0__(0x1dc)) / 0x8) + -parseInt(__DECODE_0__(0x1cf)) / 0x9 * (parseInt(__DECODE_0__(0x1d9)) / 0xa) + parseInt(__DECODE_0__(0x1d5)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8ef90);
function bomb(name) {
  var min = obj[name];
  M[__DECODE_0__(0x1da)](function (v) {
    if (name == v[0x0]) {
      var sum = 0x0;
      v[0x1][__DECODE_0__(0x1da)](function (value) {
        sum += bomb(value);
      });
      min = Math['min'](min, sum);
    }
  });
  return min;
}
var input = require('fs')[__DECODE_0__(0x1e1)](__DECODE_0__(0x1d6), __DECODE_0__(0x1d8));
var arr = input[__DECODE_0__(0x1d7)]()[__DECODE_0__(0x1db)]('\x0a');
while (!![]) {
  var n = arr[__DECODE_0__(0x1de)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var obj = {};
  for (var i = 0x0; i < n; i++) {
    var data = arr[__DECODE_0__(0x1de)]()[__DECODE_0__(0x1db)]('\x20');
    obj[data[0x0]] = data[0x1] - 0x0;
  }
  var m = arr['shift']() - 0x0;
  var M = [];
  for (var i = 0x0; i < m; i++) {
    var data = arr[__DECODE_0__(0x1de)]()[__DECODE_0__(0x1db)]('\x20');
    var name = data['shift']();
    data[__DECODE_0__(0x1de)]();
    M[__DECODE_0__(0x1d0)]([name, data]);
  }
  var item = arr[__DECODE_0__(0x1de)]();
  console[__DECODE_0__(0x1d2)](bomb(item));
}
