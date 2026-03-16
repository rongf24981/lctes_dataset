(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x17f)) / 0x1 + parseInt(__DECODE_0__(0x188)) / 0x2 * (parseInt(__DECODE_0__(0x18b)) / 0x3) + -parseInt(__DECODE_0__(0x187)) / 0x4 + parseInt(__DECODE_0__(0x184)) / 0x5 * (parseInt(__DECODE_0__(0x191)) / 0x6) + parseInt(__DECODE_0__(0x185)) / 0x7 + -parseInt(__DECODE_0__(0x18e)) / 0x8 + -parseInt(__DECODE_0__(0x183)) / 0x9 * (-parseInt(__DECODE_0__(0x186)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x69568);
var input = require('fs')[__DECODE_0__(0x18d)]('/dev/stdin', __DECODE_0__(0x180));
function __STRING_ARRAY__() {
  var _0x18fa76 = ['utf8', 'indexOf', 'split', '3123DUklhG', '4885hMgTMz', '3084074AFMiRF', '6630HzDNhE', '195444ezATeT', '4634hOLudF', 'every', 'log', '717FFohMx', 'trim', 'readFileSync', '1068392JvvIHl', 'Yes', 'shift', '882yARvbn', 'push', '754151qmdlRm'];
  __STRING_ARRAY__ = function () {
    return _0x18fa76;
  };
  return __STRING_ARRAY__();
}
var Arr = input[__DECODE_0__(0x18c)]()[__DECODE_0__(0x182)]('\x0a');
function __DECODE_0__(clPSQl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(clPSQl, key);
}
while (!![]) {
  var a = Arr[__DECODE_0__(0x190)]();
  if (a == '0') {
    break;
  }
  var xy = [];
  for (var i = 0x0; i < a; i++) {
    xy['push'](Arr[__DECODE_0__(0x190)]());
  }
  var b = Arr[__DECODE_0__(0x190)]();
  var news = [];
  for (var i = 0x0; i < b; i++) {
    news[__DECODE_0__(0x17e)](Arr['shift']());
  }
  var X = 0xa;
  var Y = 0xa;
  var XY = [];
  news['forEach'](function (v) {
    var arr = v[__DECODE_0__(0x182)]('\x20');
    for (var i = 0x0; i < arr[0x1] - 0x0; i++) {
      if (arr[0x0] == 'N') {
        Y++;
      }
      if (arr[0x0] == 'E') {
        X++;
      }
      if (arr[0x0] == 'W') {
        X--;
      }
      if (arr[0x0] == 'S') {
        Y--;
      }
      XY[__DECODE_0__(0x17e)](X + '\x20' + Y);
    }
  });
  var flag = xy[__DECODE_0__(0x189)](function (v) {
    return XY[__DECODE_0__(0x181)](v) != -0x1;
  });
  console[__DECODE_0__(0x18a)](flag ? __DECODE_0__(0x18f) : 'No');
}
