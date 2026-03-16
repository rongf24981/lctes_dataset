function __DECODE_0__(gaWLaR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gaWLaR, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xb2)) / 0x1 * (-parseInt(__DECODE_0__(0xc0)) / 0x2) + parseInt(__DECODE_0__(0xb6)) / 0x3 * (-parseInt(__DECODE_0__(0xbd)) / 0x4) + -parseInt(__DECODE_0__(0xbc)) / 0x5 + parseInt(__DECODE_0__(0xb3)) / 0x6 * (parseInt(__DECODE_0__(0xb5)) / 0x7) + -parseInt(__DECODE_0__(0xba)) / 0x8 + -parseInt(__DECODE_0__(0xb7)) / 0x9 * (-parseInt(__DECODE_0__(0xbf)) / 0xa) + parseInt(__DECODE_0__(0xb4)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x90305);
function bomb(a, b, i) {
  if (i == n) {
    min = Math['min'](min, Math['abs'](a - b));
    return;
  }
  bomb(a + arr[i], b, i + 0x1);
  bomb(a, b + arr[i], i + 0x1);
}
var input = require('fs')[__DECODE_0__(0xbe)]('/dev/stdin', __DECODE_0__(0xb1));
var Arr = input['trim']()['split']('\x0a');
function __STRING_ARRAY__() {
  var _0x448f26 = ['733215MRwtFE', '1764EWWfUD', 'readFileSync', '680jizukB', '6122iddKWF', 'utf8', '14LxHkcR', '6oFkWFI', '12051644kiSeGv', '2656122vuxxZA', '7035HkKxhL', '110664lrHCXF', 'split', 'map', '3975512NqeMCZ', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x448f26;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var n = Arr[__DECODE_0__(0xbb)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var arr = Arr[__DECODE_0__(0xbb)]()[__DECODE_0__(0xb8)]('\x20')[__DECODE_0__(0xb9)](Number);
  var min = Infinity;
  bomb(0x0, 0x0, 0x0);
  console['log'](min);
}
