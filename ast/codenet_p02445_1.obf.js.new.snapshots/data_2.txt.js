function __DECODE_0__(VAqyUo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x115;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VAqyUo, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x11f)) / 0x1 * (-parseInt(__DECODE_0__(0x11d)) / 0x2) + parseInt(__DECODE_0__(0x124)) / 0x3 * (parseInt(__DECODE_0__(0x118)) / 0x4) + parseInt(__DECODE_0__(0x128)) / 0x5 + parseInt(__DECODE_0__(0x127)) / 0x6 * (parseInt(__DECODE_0__(0x11e)) / 0x7) + parseInt(__DECODE_0__(0x116)) / 0x8 * (parseInt(__DECODE_0__(0x125)) / 0x9) + parseInt(__DECODE_0__(0x11b)) / 0xa * (parseInt(__DECODE_0__(0x119)) / 0xb) + -parseInt(__DECODE_0__(0x11a)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbab8e);
var input = require('fs')[__DECODE_0__(0x115)](__DECODE_0__(0x121), __DECODE_0__(0x11c));
var arr = input[__DECODE_0__(0x126)]()[__DECODE_0__(0x120)]('\x0a');
var n = arr[__DECODE_0__(0x117)]() - 0x0;
var a = arr[__DECODE_0__(0x117)]()['split']('\x20')['map'](Number);
var q = arr[__DECODE_0__(0x117)]() - 0x0;
for (var i = 0x0; i < q; i++) {
  var [b, e, t] = arr[i][__DECODE_0__(0x120)]('\x20')[__DECODE_0__(0x129)](Number);
  var k = e - b;
  for (var j = 0x0; j < k; j++) {
    [a[b + j], a[t + j]] = [a[t + j], a[b + j]];
  }
}
console[__DECODE_0__(0x122)](a[__DECODE_0__(0x123)]('\x20'));
function __STRING_ARRAY__() {
  var _0x2d74c2 = ['6VCIpYK', '864245BqFyld', 'map', 'readFileSync', '16yAEkbi', 'shift', '615460uRbGHZ', '253SZgHLc', '17761380cAwHDX', '282870GgywDI', 'utf8', '53386NyoqQO', '6953247GoZpbv', '3AlwXeS', 'split', '/dev/stdin', 'log', 'join', '3zbXqFe', '873963snZcLI', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x2d74c2;
  };
  return __STRING_ARRAY__();
}
