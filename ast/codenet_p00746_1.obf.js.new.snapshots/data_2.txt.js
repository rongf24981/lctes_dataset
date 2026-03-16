function __DECODE_0__(cHCfCu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x143;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cHCfCu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x149)) / 0x1 + -parseInt(__DECODE_0__(0x151)) / 0x2 + parseInt(__DECODE_0__(0x148)) / 0x3 * (parseInt(__DECODE_0__(0x145)) / 0x4) + -parseInt(__DECODE_0__(0x143)) / 0x5 * (-parseInt(__DECODE_0__(0x158)) / 0x6) + -parseInt(__DECODE_0__(0x14b)) / 0x7 + parseInt(__DECODE_0__(0x156)) / 0x8 * (-parseInt(__DECODE_0__(0x153)) / 0x9) + -parseInt(__DECODE_0__(0x155)) / 0xa * (-parseInt(__DECODE_0__(0x146)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x91ac7);
function __STRING_ARRAY__() {
  var _0x39c0b6 = ['1124354CXeNlD', 'max', 'utf8', 'map', 'min', '/dev/stdin', '956238xqycsR', 'length', '195444OifzjT', '1\x201', '3170kgdUlP', '424dXURzL', 'trim', '3590934PzCAig', '5ooCtKQ', 'split', '34024hDApoZ', '52283AUVtdV', 'readFileSync', '75sSEIZU', '68528oRwxnk', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x39c0b6;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x147)](__DECODE_0__(0x150), __DECODE_0__(0x14d));
var Arr = input[__DECODE_0__(0x157)]()[__DECODE_0__(0x144)]('\x0a');
while (!![]) {
  var N = Arr['shift']() - 0x0;
  if (N == 0x0) {
    break;
  }
  if (N == 0x1) {
    console[__DECODE_0__(0x14a)](__DECODE_0__(0x154));
    continue;
  }
  var arr = [];
  arr[0x0] = [0x0, 0x0];
  for (var i = 0x0; i < N - 0x1; i++) {
    var nm = Arr['shift']()[__DECODE_0__(0x144)]('\x20')[__DECODE_0__(0x14e)](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var x = 0x0;
    var y = 0x0;
    if (m == 0x0) {
      x = -0x1;
    }
    if (m == 0x1) {
      y = -0x1;
    }
    if (m == 0x2) {
      x = 0x1;
    }
    if (m == 0x3) {
      y = 0x1;
    }
    arr[i + 0x1] = [arr[n][0x0] + x, arr[n][0x1] + y];
  }
  var xA = 0x0;
  var xZ = 0x0;
  var yA = 0x0;
  var yZ = 0x0;
  for (var i = 0x0; i < arr[__DECODE_0__(0x152)]; i++) {
    xA = Math[__DECODE_0__(0x14f)](xA, arr[i][0x0]);
    xZ = Math[__DECODE_0__(0x14c)](xZ, arr[i][0x0]);
    yA = Math[__DECODE_0__(0x14f)](yA, arr[i][0x1]);
    yZ = Math['max'](yZ, arr[i][0x1]);
  }
  console[__DECODE_0__(0x14a)](xZ - xA + 0x1 + '\x20' + (yZ - yA + 0x1));
}
