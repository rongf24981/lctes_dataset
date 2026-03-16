var a0_0x15f9c2 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x263958 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x263958(0xf5)) / 0x1 + -parseInt(_0x263958(0xed)) / 0x2 * (-parseInt(_0x263958(0xf0)) / 0x3) + parseInt(_0x263958(0xf6)) / 0x4 * (-parseInt(_0x263958(0xf8)) / 0x5) + -parseInt(_0x263958(0xe9)) / 0x6 + -parseInt(_0x263958(0xea)) / 0x7 + parseInt(_0x263958(0xf2)) / 0x8 + parseInt(_0x263958(0xf7)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x71d27);
var input = require('fs')[a0_0x15f9c2(0xef)](a0_0x15f9c2(0xf3), 'utf8');
function __DECODE_0__(LrgZFL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LrgZFL, key);
}
var arr = input[a0_0x15f9c2(0xec)]()[a0_0x15f9c2(0xf1)]('\x0a');
function __STRING_ARRAY__() {
  var _0x4821f9 = ['158176fCXKtM', '10263366JAojOo', '105mrkOXU', 'shift', '1565868Gbgmgs', '960876sECYPC', 'log', 'trim', '908PmojRd', 'filter', 'readFileSync', '1731FEwtyS', 'split', '5409712XswTcu', '/dev/stdin', 'reduce', '383661fpmByF'];
  __STRING_ARRAY__ = function () {
    return _0x4821f9;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var n = arr[a0_0x15f9c2(0xf9)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var a = arr['shift']()[a0_0x15f9c2(0xf1)]('\x20')['map'](Number);
  var sum = a[a0_0x15f9c2(0xf4)]((a, b) => a + b);
  console[a0_0x15f9c2(0xeb)](a[a0_0x15f9c2(0xee)](v => v <= sum / n)['length']);
}
