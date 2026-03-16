(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xda)) / 0x1 + parseInt(__DECODE_0__(0xdd)) / 0x2 + parseInt(__DECODE_0__(0xe1)) / 0x3 + parseInt(__DECODE_0__(0xd8)) / 0x4 + -parseInt(__DECODE_0__(0xe7)) / 0x5 * (parseInt(__DECODE_0__(0xde)) / 0x6) + parseInt(__DECODE_0__(0xe9)) / 0x7 + -parseInt(__DECODE_0__(0xe3)) / 0x8 * (parseInt(__DECODE_0__(0xdb)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9067a);
function __DECODE_0__(uaFnri, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uaFnri, key);
}
var input = require('fs')[__DECODE_0__(0xe0)](__DECODE_0__(0xdc), __DECODE_0__(0xe4));
var Arr = input[__DECODE_0__(0xd9)]()[__DECODE_0__(0xe6)]('\x0a')[__DECODE_0__(0xdf)](Number);
for (var i = 0x0; i < Arr[__DECODE_0__(0xe2)]; i++) {
  if (Arr[i] == -0x1) {
    break;
  }
  console[__DECODE_0__(0xe8)](Arr[i][__DECODE_0__(0xe5)](0x4));
}
function __STRING_ARRAY__() {
  var _0x15a55c = ['2742wiyaIo', 'map', 'readFileSync', '659175QPZMGD', 'length', '392IpamLI', 'utf8', 'toString', 'split', '8180FkyKyk', 'log', '2300998jxMNPu', '3447124TpIyKf', 'trim', '128292bUuaxh', '153558HcsiWg', '/dev/stdin', '1273320YTbNWI'];
  __STRING_ARRAY__ = function () {
    return _0x15a55c;
  };
  return __STRING_ARRAY__();
}
