function __STRING_ARRAY__() {
  var _0x3233d6 = ['183939jbhkGb', '2518928sNXLFa', '5399397zzYTCT', 'log', '13560kNVlrM', '287532pgzbiH', '1638770KOTzpy', 'readFileSync', 'utf8', 'shift', '/dev/stdin', 'length', 'map', '852BjBMmA', '10GIZacW', 'split', '586cbIHLx', '497DJMdGQ', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x3233d6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1c0)) / 0x1 * (-parseInt(__DECODE_0__(0x1bd)) / 0x2) + parseInt(__DECODE_0__(0x1c3)) / 0x3 + -parseInt(__DECODE_0__(0x1c8)) / 0x4 + -parseInt(__DECODE_0__(0x1c9)) / 0x5 + parseInt(__DECODE_0__(0x1c7)) / 0x6 * (-parseInt(__DECODE_0__(0x1c1)) / 0x7) + parseInt(__DECODE_0__(0x1c4)) / 0x8 + -parseInt(__DECODE_0__(0x1c5)) / 0x9 * (-parseInt(__DECODE_0__(0x1be)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x289eb);
function __DECODE_0__(KLYVWr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1bc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KLYVWr, key);
}
var input = require('fs')[__DECODE_0__(0x1ca)](__DECODE_0__(0x1cd), __DECODE_0__(0x1cb));
var Arr = input[__DECODE_0__(0x1c2)]()['split']('\x0a');
while (!![]) {
  var NM = Arr[__DECODE_0__(0x1cc)]();
  if (NM == '0\x200') {
    break;
  }
  var nm = NM[__DECODE_0__(0x1bf)]('\x20')[__DECODE_0__(0x1bc)](Number);
  var m = nm[0x1];
  var arr = Arr[__DECODE_0__(0x1cc)]()[__DECODE_0__(0x1bf)]('\x20')[__DECODE_0__(0x1bc)](Number);
  arr['sort'](function (a, b) {
    return b - a;
  });
  var sum = 0x0;
  for (var i = 0x0; i < arr[__DECODE_0__(0x1ce)]; i++) {
    if ((i + 0x1) % m != 0x0) {
      sum += arr[i];
    }
  }
  console[__DECODE_0__(0x1c6)](sum);
}
