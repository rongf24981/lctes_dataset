function __STRING_ARRAY__() {
  var _0x33ad7b = ['8HYehpH', 'readFileSync', '50OKoGOo', '80uOXVKQ', 'log', 'map', 'sort', '/dev/stdin', 'shift', '1562589nsADxA', '1492505eBnrso', '61860tIJNFJ', 'length', 'split', '50610rVvqAv', '2030DtEdJw', '1193687axzhBo', 'push', '48UPGSPn', 'trim', '15418728ogNAla', '558tRwuMc'];
  __STRING_ARRAY__ = function () {
    return _0x33ad7b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xeb)) / 0x1 * (-parseInt(__DECODE_0__(0xe5)) / 0x2) + -parseInt(__DECODE_0__(0xe1)) / 0x3 * (-parseInt(__DECODE_0__(0xd9)) / 0x4) + parseInt(__DECODE_0__(0xe4)) / 0x5 * (parseInt(__DECODE_0__(0xe8)) / 0x6) + -parseInt(__DECODE_0__(0xe0)) / 0x7 * (-parseInt(__DECODE_0__(0xec)) / 0x8) + -parseInt(__DECODE_0__(0xdf)) / 0x9 + parseInt(__DECODE_0__(0xd8)) / 0xa * (parseInt(__DECODE_0__(0xe6)) / 0xb) + -parseInt(__DECODE_0__(0xea)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x572a7);
var input = require('fs')[__DECODE_0__(0xed)](__DECODE_0__(0xdd), 'utf8');
function __DECODE_0__(bZgbOZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bZgbOZ, key);
}
var Arr = input[__DECODE_0__(0xe9)]()[__DECODE_0__(0xe3)]('\x0a');
while (!![]) {
  var n = Arr['shift']() - 0x0;
  if (n == 0x0) {
    break;
  }
  var team = [];
  for (var i = 0x0; i < n; i++) {
    var arr = Arr[__DECODE_0__(0xde)]()[__DECODE_0__(0xe3)]('\x20')[__DECODE_0__(0xdb)](Number);
    var a = arr[0x1] * 0x3c + arr[0x2];
    var b = arr[0x3] * 0x3c + arr[0x4];
    var c = arr[0x5] * 0x3c + arr[0x6];
    var d = arr[0x7] * 0x3c + arr[0x8];
    team[__DECODE_0__(0xe7)]([arr[0x0], a + b + c + d]);
  }
  team[__DECODE_0__(0xdc)](function (a, b) {
    a = a[0x1];
    b = b[0x1];
    return a - b;
  });
  console[__DECODE_0__(0xda)](team[0x0][0x0]);
  console[__DECODE_0__(0xda)](team[0x1][0x0]);
  console[__DECODE_0__(0xda)](team[team[__DECODE_0__(0xe2)] - 0x2][0x0]);
}
