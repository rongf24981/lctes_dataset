(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf5)) / 0x1 + -parseInt(__DECODE_0__(0xed)) / 0x2 * (-parseInt(__DECODE_0__(0xf0)) / 0x3) + parseInt(__DECODE_0__(0xf6)) / 0x4 * (-parseInt(__DECODE_0__(0xf8)) / 0x5) + -parseInt(__DECODE_0__(0xe9)) / 0x6 + -parseInt(__DECODE_0__(0xea)) / 0x7 + parseInt(__DECODE_0__(0xf2)) / 0x8 + parseInt(__DECODE_0__(0xf7)) / 0x9;
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
var input = require('fs')[__DECODE_0__(0xef)](__DECODE_0__(0xf3), 'utf8');
function __DECODE_0__(LrgZFL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LrgZFL, key);
}
var arr = input[__DECODE_0__(0xec)]()[__DECODE_0__(0xf1)]('\x0a');
function __STRING_ARRAY__() {
  var _0x4821f9 = ['158176fCXKtM', '10263366JAojOo', '105mrkOXU', 'shift', '1565868Gbgmgs', '960876sECYPC', 'log', 'trim', '908PmojRd', 'filter', 'readFileSync', '1731FEwtyS', 'split', '5409712XswTcu', '/dev/stdin', 'reduce', '383661fpmByF'];
  __STRING_ARRAY__ = function () {
    return _0x4821f9;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var n = arr[__DECODE_0__(0xf9)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var a = arr['shift']()[__DECODE_0__(0xf1)]('\x20')['map'](Number);
  var sum = a[__DECODE_0__(0xf4)]((a, b) => a + b);
  console[__DECODE_0__(0xeb)](a[__DECODE_0__(0xee)](v => v <= sum / n)['length']);
}
