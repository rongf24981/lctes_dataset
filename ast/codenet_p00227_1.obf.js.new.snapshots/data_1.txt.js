var a0_0x151526 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x3233d6 = ['183939jbhkGb', '2518928sNXLFa', '5399397zzYTCT', 'log', '13560kNVlrM', '287532pgzbiH', '1638770KOTzpy', 'readFileSync', 'utf8', 'shift', '/dev/stdin', 'length', 'map', '852BjBMmA', '10GIZacW', 'split', '586cbIHLx', '497DJMdGQ', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x3233d6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x352e09 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x352e09(0x1c0)) / 0x1 * (-parseInt(_0x352e09(0x1bd)) / 0x2) + parseInt(_0x352e09(0x1c3)) / 0x3 + -parseInt(_0x352e09(0x1c8)) / 0x4 + -parseInt(_0x352e09(0x1c9)) / 0x5 + parseInt(_0x352e09(0x1c7)) / 0x6 * (-parseInt(_0x352e09(0x1c1)) / 0x7) + parseInt(_0x352e09(0x1c4)) / 0x8 + -parseInt(_0x352e09(0x1c5)) / 0x9 * (-parseInt(_0x352e09(0x1be)) / 0xa);
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
var input = require('fs')[a0_0x151526(0x1ca)](a0_0x151526(0x1cd), a0_0x151526(0x1cb));
var Arr = input[a0_0x151526(0x1c2)]()['split']('\x0a');
while (!![]) {
  var NM = Arr[a0_0x151526(0x1cc)]();
  if (NM == '0\x200') {
    break;
  }
  var nm = NM[a0_0x151526(0x1bf)]('\x20')[a0_0x151526(0x1bc)](Number);
  var m = nm[0x1];
  var arr = Arr[a0_0x151526(0x1cc)]()[a0_0x151526(0x1bf)]('\x20')[a0_0x151526(0x1bc)](Number);
  arr['sort'](function (a, b) {
    return b - a;
  });
  var sum = 0x0;
  for (var i = 0x0; i < arr[a0_0x151526(0x1ce)]; i++) {
    if ((i + 0x1) % m != 0x0) {
      sum += arr[i];
    }
  }
  console[a0_0x151526(0x1c6)](sum);
}
