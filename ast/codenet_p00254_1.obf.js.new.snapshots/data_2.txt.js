function __DECODE_0__(QBHkYB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QBHkYB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x141)) / 0x1 * (parseInt(__DECODE_0__(0x147)) / 0x2) + parseInt(__DECODE_0__(0x157)) / 0x3 * (-parseInt(__DECODE_0__(0x13f)) / 0x4) + parseInt(__DECODE_0__(0x150)) / 0x5 * (-parseInt(__DECODE_0__(0x154)) / 0x6) + parseInt(__DECODE_0__(0x15d)) / 0x7 * (-parseInt(__DECODE_0__(0x152)) / 0x8) + parseInt(__DECODE_0__(0x159)) / 0x9 + parseInt(__DECODE_0__(0x15b)) / 0xa * (parseInt(__DECODE_0__(0x149)) / 0xb) + parseInt(__DECODE_0__(0x14c)) / 0xc * (parseInt(__DECODE_0__(0x15c)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8b4fb);
function __STRING_ARRAY__() {
  var _0x41f159 = ['6174', '25HfYFHE', 'sort', 'shift', 'map', '1111', '3333', '70124XgQhEl', '5555', '1148213eYYfeG', '0000', '2222', '19800aDlsjg', '4444', 'readFileSync', 'utf8', '2728945IDnTIN', '/dev/stdin', '153696acJauH', '9999', '6zfLCms', 'trim', '7777', '27LgGtwn', 'log', '4528359mjjfiq', 'split', '40irgDio', '9230zioeli', '21eHRoNE', '6666', '18484LkdMeO'];
  __STRING_ARRAY__ = function () {
    return _0x41f159;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x14e)](__DECODE_0__(0x151), __DECODE_0__(0x14f));
var Arr = input[__DECODE_0__(0x155)]()[__DECODE_0__(0x15a)]('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0x143)]();
  if (n == __DECODE_0__(0x14a)) {
    break;
  }
  if (n == __DECODE_0__(0x145) || n == __DECODE_0__(0x14b) || n == __DECODE_0__(0x146) || n == __DECODE_0__(0x14d) || n == __DECODE_0__(0x148)) {
    console[__DECODE_0__(0x158)]('NA');
    continue;
  }
  if (n == __DECODE_0__(0x13e) || n == __DECODE_0__(0x156) || n == '8888' || n == __DECODE_0__(0x153)) {
    console['log']('NA');
    continue;
  }
  var i = 0x0;
  while (!![]) {
    if (n == __DECODE_0__(0x140)) {
      break;
    }
    i++;
    var arr = n[__DECODE_0__(0x15a)]('')[__DECODE_0__(0x144)](Number);
    arr[__DECODE_0__(0x142)](function (a, b) {
      return b - a;
    });
    var L = parseInt('' + arr[0x0] + arr[0x1] + arr[0x2] + arr[0x3], 0xa);
    var S = parseInt('' + arr[0x3] + arr[0x2] + arr[0x1] + arr[0x0], 0xa);
    n = (__DECODE_0__(0x14a) + (L - S))['slice'](-0x4);
  }
  console[__DECODE_0__(0x158)](i);
}
