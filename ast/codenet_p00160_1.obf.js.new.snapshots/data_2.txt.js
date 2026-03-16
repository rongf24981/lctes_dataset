function __DECODE_0__(fzmRXj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fzmRXj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xd3)) / 0x1 + parseInt(__DECODE_0__(0xd6)) / 0x2 + -parseInt(__DECODE_0__(0xdf)) / 0x3 * (parseInt(__DECODE_0__(0xd9)) / 0x4) + -parseInt(__DECODE_0__(0xde)) / 0x5 * (parseInt(__DECODE_0__(0xd8)) / 0x6) + parseInt(__DECODE_0__(0xe0)) / 0x7 + -parseInt(__DECODE_0__(0xda)) / 0x8 * (parseInt(__DECODE_0__(0xd5)) / 0x9) + -parseInt(__DECODE_0__(0xd2)) / 0xa * (-parseInt(__DECODE_0__(0xd4)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x55c86);
var input = require('fs')[__DECODE_0__(0xd7)]('/dev/stdin', 'utf8');
var Arr = input[__DECODE_0__(0xe2)]()[__DECODE_0__(0xdc)]('\x0a');
function __STRING_ARRAY__() {
  var _0x20a3ec = ['1418791YwyJfi', '9dOVmtw', '653250qUFKED', 'readFileSync', '3512322FKpuLR', '1304ersCsA', '2800456QdEjye', 'map', 'split', 'shift', '5XSNkQt', '3351ImGxLr', '3437301HVnxXA', 'log', 'trim', 'max', '20rewYpe', '575322iQsluF'];
  __STRING_ARRAY__ = function () {
    return _0x20a3ec;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var n = Arr[__DECODE_0__(0xdd)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var sum = 0x0;
  for (var i = 0x0; i < n; i++) {
    var arr = Arr['shift']()[__DECODE_0__(0xdc)]('\x20')[__DECODE_0__(0xdb)](Number);
    var L = arr[0x0] + arr[0x1] + arr[0x2];
    var W = arr[0x3];
    var x;
    if (L > 0xa0) {
      x = 0x0;
    }
    if (L <= 0xa0) {
      x = 0x640;
    }
    if (L <= 0x8c) {
      x = 0x578;
    }
    if (L <= 0x78) {
      x = 0x4b0;
    }
    if (L <= 0x64) {
      x = 0x3e8;
    }
    if (L <= 0x50) {
      x = 0x320;
    }
    if (L <= 0x3c) {
      x = 0x258;
    }
    var y;
    if (W > 0x19) {
      y = 0x0;
    }
    if (W <= 0x19) {
      y = 0x640;
    }
    if (W <= 0x14) {
      y = 0x578;
    }
    if (W <= 0xf) {
      y = 0x4b0;
    }
    if (W <= 0xa) {
      y = 0x3e8;
    }
    if (W <= 0x5) {
      y = 0x320;
    }
    if (W <= 0x2) {
      y = 0x258;
    }
    if (x != 0x0 && y != 0x0) {
      sum += Math[__DECODE_0__(0xe3)](x, y);
    }
  }
  console[__DECODE_0__(0xe1)](sum);
}
