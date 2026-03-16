function __STRING_ARRAY__() {
  var _0x198901 = ['276SgSBkT', '/dev/stdin', '2UqJIIg', 'utf8', 'split', 'shift', '3349626GeIleg', '1614840wYRTqp', 'readFileSync', 'log', 'trim', '4093232BqrnAa', '24YZceEZ', '7620790FLGJoE', '206731aEratj', '8886123xYEcZr', 'floor', 'map', '78252udhhvh', '8phqVna', '14qWVrHh'];
  __STRING_ARRAY__ = function () {
    return _0x198901;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x9c)) / 0x1 * (-parseInt(__DECODE_0__(0xa5)) / 0x2) + parseInt(__DECODE_0__(0xa0)) / 0x3 * (-parseInt(__DECODE_0__(0xa3)) / 0x4) + parseInt(__DECODE_0__(0x9b)) / 0x5 + -parseInt(__DECODE_0__(0xa9)) / 0x6 * (-parseInt(__DECODE_0__(0xa2)) / 0x7) + -parseInt(__DECODE_0__(0xa1)) / 0x8 * (parseInt(__DECODE_0__(0x9d)) / 0x9) + parseInt(__DECODE_0__(0xaa)) / 0xa + -parseInt(__DECODE_0__(0x99)) / 0xb * (-parseInt(__DECODE_0__(0x9a)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xebd6c);
var input = require('fs')[__DECODE_0__(0xab)](__DECODE_0__(0xa4), __DECODE_0__(0xa6));
function __DECODE_0__(BLPsIS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x97;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BLPsIS, key);
}
var Arr = input[__DECODE_0__(0x98)]()[__DECODE_0__(0xa7)]('\x0a');
while (!![]) {
  var xys = Arr[__DECODE_0__(0xa8)]()['split']('\x20')[__DECODE_0__(0x9f)](Number);
  var x = xys[0x0];
  var y = xys[0x1];
  var s = xys[0x2];
  if (x == 0x0 && y == 0x0 && s == 0x0) {
    break;
  }
  var max = 0x0;
  for (var i = 0x1; i <= s - 0x1; i++) {
    for (var j = 0x1; j <= s - 0x1; j++) {
      var a = Math[__DECODE_0__(0x9e)](i * (0x64 + x) / 0x64) + Math[__DECODE_0__(0x9e)](j * (0x64 + x) / 0x64);
      if (a > s) {
        break;
      }
      if (a == s) {
        var b = Math[__DECODE_0__(0x9e)](i * (0x64 + y) / 0x64) + Math[__DECODE_0__(0x9e)](j * (0x64 + y) / 0x64);
        max = Math['max'](max, b);
        break;
      }
    }
  }
  console[__DECODE_0__(0x97)](max);
}
