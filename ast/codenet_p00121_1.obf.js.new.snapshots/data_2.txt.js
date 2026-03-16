function __DECODE_0__(Izuwfj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xff;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Izuwfj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xff)) / 0x1 * (-parseInt(__DECODE_0__(0x113)) / 0x2) + -parseInt(__DECODE_0__(0x10d)) / 0x3 * (parseInt(__DECODE_0__(0x111)) / 0x4) + parseInt(__DECODE_0__(0x100)) / 0x5 + -parseInt(__DECODE_0__(0x11b)) / 0x6 * (-parseInt(__DECODE_0__(0x108)) / 0x7) + parseInt(__DECODE_0__(0x11a)) / 0x8 * (-parseInt(__DECODE_0__(0x112)) / 0x9) + parseInt(__DECODE_0__(0x107)) / 0xa * (-parseInt(__DECODE_0__(0x116)) / 0xb) + -parseInt(__DECODE_0__(0x10f)) / 0xc * (-parseInt(__DECODE_0__(0x101)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9e6fd);
function __STRING_ARRAY__() {
  var _0x3e5ea0 = ['451qQhzQT', 'trim', 'push', 'log', '8gOhsEe', '3183018aoqCSD', 'shift', '45433kSJRiy', '3987165yTcvYC', '13daSTrm', '01234567', 'indexOf', 'length', 'concat', '/dev/stdin', '223950KTCazY', '7EFmTGQ', 'map', 'utf8', 'forEach', 'split', '3027561hVqWmD', 'join', '28913628BYJzRK', 'slice', '4VRQzaB', '5951727tQhSVN', '22LLNFGA', 'readFileSync', 'floor'];
  __STRING_ARRAY__ = function () {
    return _0x3e5ea0;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x114)](__DECODE_0__(0x106), __DECODE_0__(0x10a));
var Arr = input[__DECODE_0__(0x117)]()[__DECODE_0__(0x10c)]('\x0a');
var dy = [-0x1, 0x0, 0x0, 0x1];
var dx = [0x0, -0x1, 0x1, 0x0];
Arr[__DECODE_0__(0x10b)](function (v, I) {
  var V = v['split']('\x20')[__DECODE_0__(0x109)](Number);
  var obj = {};
  var P = [[V, 0x0]];
  while (P[__DECODE_0__(0x104)] > 0x0) {
    var A = P[__DECODE_0__(0x11c)]();
    var arr = A[0x0];
    var cnt = A[0x1];
    if (arr[__DECODE_0__(0x10e)]('') == __DECODE_0__(0x102)) {
      console[__DECODE_0__(0x119)](cnt);
      break;
    }
    var index = arr[__DECODE_0__(0x103)](0x0);
    var y = Math[__DECODE_0__(0x115)](index / 0x4);
    var x = index % 0x4;
    var yx = [arr[__DECODE_0__(0x110)](0x0, 0x4), arr[__DECODE_0__(0x110)](0x4, 0x8)];
    for (var i = 0x0; i < 0x4; i++) {
      var yy = y + dy[i];
      var xx = x + dx[i];
      if (yy < 0x0 || xx < 0x0 || yy >= 0x2 || xx >= 0x4) {
        continue;
      }
      yx[y][x] = yx[yy][xx];
      var card = yx[yy][xx];
      yx[yy][xx] = 0x0;
      var YX = yx[0x0][__DECODE_0__(0x105)](yx[0x1]);
      var str = YX[__DECODE_0__(0x10e)]('');
      if (obj['hasOwnProperty'](str) == ![]) {
        obj[str] = !![];
        P[__DECODE_0__(0x118)]([YX, cnt + 0x1]);
      }
      yx[yy][xx] = card;
      yx[y][x] = 0x0;
    }
  }
});
