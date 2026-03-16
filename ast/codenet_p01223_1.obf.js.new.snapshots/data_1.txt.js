var a0_0x5322d6 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x783f0a = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x783f0a(0x197)) / 0x1 * (parseInt(_0x783f0a(0x18d)) / 0x2) + parseInt(_0x783f0a(0x194)) / 0x3 + -parseInt(_0x783f0a(0x19e)) / 0x4 * (-parseInt(_0x783f0a(0x191)) / 0x5) + -parseInt(_0x783f0a(0x19c)) / 0x6 * (-parseInt(_0x783f0a(0x190)) / 0x7) + parseInt(_0x783f0a(0x19d)) / 0x8 + -parseInt(_0x783f0a(0x19b)) / 0x9 + -parseInt(_0x783f0a(0x18e)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc6140);
var input = require('fs')[a0_0x5322d6(0x195)](a0_0x5322d6(0x18f), a0_0x5322d6(0x18b));
function __STRING_ARRAY__() {
  var _0x29c06b = ['max', '4539309eNGrhh', 'readFileSync', 'min', '7dgCnCV', 'trim', 'log', 'split', '1902798PmmQpF', '12AMwuWD', '10959088EqLRxM', '68gVdWuZ', 'utf8', 'abs', '145502fztZId', '37602430fDOQxW', '/dev/stdin', '4828761RmXlBr', '3265AoUGmS', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x29c06b;
  };
  return __STRING_ARRAY__();
}
var Arr = input[a0_0x5322d6(0x198)]()['split']('\x0a');
var t = Arr[a0_0x5322d6(0x192)]() - 0x0;
function __DECODE_0__(tuURmE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tuURmE, key);
}
for (var i = 0x0; i < t; i++) {
  var n = Arr['shift']() - 0x0;
  var arr = Arr[a0_0x5322d6(0x192)]()[a0_0x5322d6(0x19a)]('\x20')['map'](Number);
  var max = 0x0;
  var min = 0x0;
  var m = arr[0x0];
  for (var j = 0x1; j < n; j++) {
    max = Math[a0_0x5322d6(0x193)](arr[j] - m, max);
    min = Math[a0_0x5322d6(0x196)](arr[j] - m, min);
    m = arr[j];
  }
  console[a0_0x5322d6(0x199)](max + '\x20' + Math[a0_0x5322d6(0x18c)](min));
}
