(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1ec)) / 0x1 + -parseInt(__DECODE_0__(0x1f0)) / 0x2 * (-parseInt(__DECODE_0__(0x1e5)) / 0x3) + -parseInt(__DECODE_0__(0x1e4)) / 0x4 * (parseInt(__DECODE_0__(0x1e6)) / 0x5) + -parseInt(__DECODE_0__(0x1f1)) / 0x6 * (parseInt(__DECODE_0__(0x1eb)) / 0x7) + -parseInt(__DECODE_0__(0x1ea)) / 0x8 + -parseInt(__DECODE_0__(0x1e8)) / 0x9 * (-parseInt(__DECODE_0__(0x1f3)) / 0xa) + parseInt(__DECODE_0__(0x1ee)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5afb0);
function __DECODE_0__(LXZdup, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LXZdup, key);
}
var input = require('fs')[__DECODE_0__(0x1e3)]('/dev/stdin', 'utf8');
var arr = input[__DECODE_0__(0x1f2)]()[__DECODE_0__(0x1ef)]('\x0a');
function __STRING_ARRAY__() {
  var _0x51ac77 = ['2901006HCfbHp', 'trim', '80UAUTdP', 'readFileSync', '4xJRoTB', '3HRDAtF', '939865BUwcDw', 'map', '611334nKLFii', '0\x200', '2646304YpDRyE', '7ifSxud', '242791WhTnrS', 'shift', '5461731znXxBk', 'split', '184396EQYUCs'];
  __STRING_ARRAY__ = function () {
    return _0x51ac77;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  if (arr[0x0] == __DECODE_0__(0x1e9)) {
    break;
  }
  var nm = arr[__DECODE_0__(0x1ed)]()[__DECODE_0__(0x1ef)]('\x20')[__DECODE_0__(0x1e7)](Number);
  var n = nm[0x0];
  var m = nm[0x1];
  var max = [];
  for (var i = 0x0; i < m; i++) {
    max[i] = 0x0;
  }
  for (var i = 0x0; i < n; i++) {
    var dv = arr[__DECODE_0__(0x1ed)]()['split']('\x20')['map'](Number);
    var d = dv[0x0] - 0x1;
    var v = dv[0x1];
    if (max[d] < v) {
      max[d] = v;
    }
  }
  var sum = 0x0;
  for (var i = 0x0; i < m; i++) {
    sum += max[i];
  }
  console['log'](sum);
}
