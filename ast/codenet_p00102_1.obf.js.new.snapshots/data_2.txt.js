(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xa6)) / 0x1 * (parseInt(__DECODE_0__(0xab)) / 0x2) + -parseInt(__DECODE_0__(0x9e)) / 0x3 + -parseInt(__DECODE_0__(0xa2)) / 0x4 * (parseInt(__DECODE_0__(0xb1)) / 0x5) + parseInt(__DECODE_0__(0xb3)) / 0x6 + parseInt(__DECODE_0__(0xae)) / 0x7 * (-parseInt(__DECODE_0__(0xb2)) / 0x8) + -parseInt(__DECODE_0__(0xad)) / 0x9 * (parseInt(__DECODE_0__(0x9f)) / 0xa) + -parseInt(__DECODE_0__(0xb5)) / 0xb * (-parseInt(__DECODE_0__(0x9d)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe3d35);
var input = require('fs')[__DECODE_0__(0xb4)](__DECODE_0__(0xa1), __DECODE_0__(0xa8));
var Arr = input[__DECODE_0__(0xa5)]()[__DECODE_0__(0xb0)]('\x0a');
var data = [];
function __DECODE_0__(cWdMts, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cWdMts, key);
}
var N;
function __STRING_ARRAY__() {
  var _0x120a63 = ['477140ItmnBf', 'push', 'reduce', 'trim', '321XEsjJb', 'length', 'utf8', 'map', 'join', '10470eLcAyy', 'slice', '18zhzsAp', '995183ZEqqma', '\x20\x20\x20\x20\x20', 'split', '70DJnBaa', '24mmXYBc', '2130204BPKBAr', 'readFileSync', '30226559lDVcRP', '12YQeoWt', '2558082vCBBLt', '4504870NrTffV', 'log', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x120a63;
  };
  return __STRING_ARRAY__();
}
for (var i = 0x0; i < Arr[__DECODE_0__(0xa7)]; i++) {
  var arr = Arr[i][__DECODE_0__(0xb0)]('\x20')[__DECODE_0__(0xa9)](Number);
  if (arr[__DECODE_0__(0xa7)] == 0x1) {
    if (i == 0x0) {
      N = arr[0x0];
      continue;
    }
    var DATA = [];
    for (var j = 0x0; j < N + 0x1; j++) {
      DATA[__DECODE_0__(0xa3)](0x0);
    }
    for (var k = 0x0; k < N; k++) {
      var v = data[k];
      for (var l = 0x0; l < N + 0x1; l++) {
        DATA[l] += v[l];
      }
      v = v[__DECODE_0__(0xa9)](function (val) {
        return (__DECODE_0__(0xaf) + val)[__DECODE_0__(0xac)](-0x5);
      });
      console[__DECODE_0__(0xa0)](v[__DECODE_0__(0xaa)](''));
    }
    DATA = DATA[__DECODE_0__(0xa9)](function (val) {
      return (__DECODE_0__(0xaf) + val)[__DECODE_0__(0xac)](-0x5);
    });
    console[__DECODE_0__(0xa0)](DATA[__DECODE_0__(0xaa)](''));
    if (arr[0x0] == 0x0) {
      break;
    }
    data = [];
    N = arr[0x0];
  } else {
    var sum = arr[__DECODE_0__(0xa4)](function (a, b) {
      return a + b;
    });
    arr['push'](sum);
    data[__DECODE_0__(0xa3)](arr);
  }
}
