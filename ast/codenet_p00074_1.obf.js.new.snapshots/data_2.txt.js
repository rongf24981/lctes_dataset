(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xdc)) / 0x1 + parseInt(__DECODE_0__(0xd5)) / 0x2 + -parseInt(__DECODE_0__(0xd2)) / 0x3 * (-parseInt(__DECODE_0__(0xdb)) / 0x4) + parseInt(__DECODE_0__(0xd4)) / 0x5 + parseInt(__DECODE_0__(0xd3)) / 0x6 + parseInt(__DECODE_0__(0xd8)) / 0x7 + -parseInt(__DECODE_0__(0xde)) / 0x8 * (parseInt(__DECODE_0__(0xda)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7468d);
var input = require('fs')[__DECODE_0__(0xd9)](__DECODE_0__(0xcf), 'utf8')['trim']();
function __STRING_ARRAY__() {
  var _0xe8ebf9 = ['readFileSync', '155862kYamfy', '172esrtzf', '908884ZcMjiv', 'log', '1232aEasVb', 'map', '/dev/stdin', 'floor', 'split', '25812vnUNrM', '5490102ZZClIC', '3758210BNnfUy', '311370hZOBNk', 'slice', 'shift', '298095dakNGN'];
  __STRING_ARRAY__ = function () {
    return _0xe8ebf9;
  };
  return __STRING_ARRAY__();
}
var lines = input[__DECODE_0__(0xd1)]('\x0a');
function __DECODE_0__(fSzJiC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xce;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fSzJiC, key);
}
var line;
while (line = lines[__DECODE_0__(0xd7)]()) {
  var time = line[__DECODE_0__(0xd1)]('\x20')[__DECODE_0__(0xce)](function (n) {
    return +n;
  });
  if (time[0x0] == -0x1 && time[0x1] == -0x1 && time[0x2] == -0x1) {
    break;
  }
  var hour = time[0x0];
  var min = time[0x1] + hour * 0x3c;
  var sec = time[0x2] + min * 0x3c;
  var rem = 0x78 * 0x3c - sec;
  var rem3 = rem * 0x3;
  var remSec = rem % 0x3c;
  var remSec3 = rem3 % 0x3c;
  rem = Math['floor'](rem / 0x3c);
  rem3 = Math[__DECODE_0__(0xd0)](rem3 / 0x3c);
  var remMin = rem % 0x3c;
  var remMin3 = rem3 % 0x3c;
  var remHour = Math[__DECODE_0__(0xd0)](rem / 0x3c);
  var remHour3 = Math[__DECODE_0__(0xd0)](rem3 / 0x3c);
  console[__DECODE_0__(0xdd)](('0' + remHour)[__DECODE_0__(0xd6)](-0x2) + ':' + ('0' + remMin)[__DECODE_0__(0xd6)](-0x2) + ':' + ('0' + remSec)[__DECODE_0__(0xd6)](-0x2));
  console[__DECODE_0__(0xdd)](('0' + remHour3)[__DECODE_0__(0xd6)](-0x2) + ':' + ('0' + remMin3)['slice'](-0x2) + ':' + ('0' + remSec3)[__DECODE_0__(0xd6)](-0x2));
}
