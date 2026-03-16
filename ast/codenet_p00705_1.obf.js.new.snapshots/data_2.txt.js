function __STRING_ARRAY__() {
  var _0x2858b6 = ['361492PnmpZw', 'map', '11206971XGSxLv', '100BdLnKt', 'max', '394513yooRUA', 'readFileSync', 'log', '546787LiWTaK', 'utf8', '4471624GAuKXW', '2235575BeoLtL', 'split', '139431DmyYIQ', 'trim', '0\x200', '6sBxZai', 'shift', '/dev/stdin', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x2858b6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x103)) / 0x1 + -parseInt(__DECODE_0__(0xfb)) / 0x2 + parseInt(__DECODE_0__(0xf4)) / 0x3 * (parseInt(__DECODE_0__(0xfe)) / 0x4) + -parseInt(__DECODE_0__(0x106)) / 0x5 + parseInt(__DECODE_0__(0xf7)) / 0x6 * (parseInt(__DECODE_0__(0x100)) / 0x7) + -parseInt(__DECODE_0__(0x105)) / 0x8 + parseInt(__DECODE_0__(0xfd)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb232e);
function __DECODE_0__(vFAidr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vFAidr, key);
}
var input = require('fs')[__DECODE_0__(0x101)](__DECODE_0__(0xf9), __DECODE_0__(0x104));
var Arr = input[__DECODE_0__(0xf5)]()[__DECODE_0__(0x107)]('\x0a');
while (!![]) {
  var v = Arr[__DECODE_0__(0xf8)]();
  if (v == __DECODE_0__(0xf6)) {
    break;
  }
  var NQ = v[__DECODE_0__(0x107)]('\x20')[__DECODE_0__(0xfc)](Number);
  var arr = [];
  for (var i = 0x0; i < 0x32; i++) {
    arr[i] = 0x0;
  }
  for (var i = 0x0; i < NQ[0x0]; i++) {
    var day = Arr['shift']()[__DECODE_0__(0x107)]('\x20')[__DECODE_0__(0xfc)](Number);
    var L = day[__DECODE_0__(0xf8)]();
    for (var j = 0x0; j < L; j++) {
      arr[day[j]]++;
    }
  }
  var result = 0x0;
  var max = Math[__DECODE_0__(0xff)]['apply'](null, arr);
  if (max >= NQ[0x1]) {
    NQ[0x1] = max;
  }
  for (var i = 0x0; i < arr[__DECODE_0__(0xfa)]; i++) {
    if (arr[i] >= NQ[0x1]) {
      result = i;
      break;
    }
  }
  console[__DECODE_0__(0x102)](result);
}
