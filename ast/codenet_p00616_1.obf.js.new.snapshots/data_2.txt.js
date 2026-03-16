(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xfd)) / 0x1 * (parseInt(__DECODE_0__(0xff)) / 0x2) + parseInt(__DECODE_0__(0x105)) / 0x3 * (parseInt(__DECODE_0__(0xfe)) / 0x4) + -parseInt(__DECODE_0__(0x10e)) / 0x5 + parseInt(__DECODE_0__(0x109)) / 0x6 + parseInt(__DECODE_0__(0x10d)) / 0x7 * (-parseInt(__DECODE_0__(0x100)) / 0x8) + parseInt(__DECODE_0__(0x10b)) / 0x9 * (parseInt(__DECODE_0__(0x108)) / 0xa) + -parseInt(__DECODE_0__(0x10a)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x35547);
var input = require('fs')[__DECODE_0__(0x103)](__DECODE_0__(0x10f), __DECODE_0__(0x10c));
function __STRING_ARRAY__() {
  var _0x3347e8 = ['trim', 'split', 'readFileSync', 'map', '6XRwbnz', 'shift', 'log', '8710NeyBdB', '1835874xOeJwA', '1168376XTuino', '720qZjAeo', 'utf8', '2387693mrnWPR', '953500gfRFEA', '/dev/stdin', '3HTUbly', '571944uOsCzl', '129882uWsPat', '8zXBhLM'];
  __STRING_ARRAY__ = function () {
    return _0x3347e8;
  };
  return __STRING_ARRAY__();
}
var arr = input[__DECODE_0__(0x101)]()[__DECODE_0__(0x102)]('\x0a');
function __DECODE_0__(uumJNR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfd;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uumJNR, key);
}
while (!![]) {
  var nh = arr['shift']();
  if (nh == '0\x200') {
    break;
  }
  nh = nh['split']('\x20')[__DECODE_0__(0x104)](Number);
  var n = nh[0x0];
  var h = nh[0x1];
  var xyz = [];
  for (var i = 0x0; i < n; i++) {
    xyz[i] = [];
    for (var j = 0x0; j < n; j++) {
      xyz[i][j] = [];
      for (var k = 0x0; k < n; k++) {
        xyz[i][j][k] = 0x0;
      }
    }
  }
  for (var I = 0x0; I < h; I++) {
    var ary = arr['shift']()[__DECODE_0__(0x102)]('\x20');
    var c = ary[__DECODE_0__(0x106)]();
    ary = ary[__DECODE_0__(0x104)](function (v) {
      return v - 0x1;
    });
    if (c == 'xy') {
      for (var i = 0x0; i < n; i++) {
        xyz[ary[0x0]][ary[0x1]][i] = 0x1;
      }
    } else {
      if (c == 'xz') {
        for (var i = 0x0; i < n; i++) {
          xyz[ary[0x0]][i][ary[0x1]] = 0x1;
        }
      } else {
        if (c == 'yz') {
          for (var i = 0x0; i < n; i++) {
            xyz[i][ary[0x0]][ary[0x1]] = 0x1;
          }
        }
      }
    }
  }
  var cnt = 0x0;
  for (var i = 0x0; i < n; i++) {
    for (var j = 0x0; j < n; j++) {
      for (var k = 0x0; k < n; k++) {
        if (xyz[i][j][k] == 0x0) {
          cnt++;
        }
        ;
      }
    }
  }
  console[__DECODE_0__(0x107)](cnt);
}
