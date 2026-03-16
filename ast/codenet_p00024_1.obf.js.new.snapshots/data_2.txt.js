'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xbc)) / 0x1 * (parseInt(__DECODE_0__(0xb8)) / 0x2) + parseInt(__DECODE_0__(0xb9)) / 0x3 + parseInt(__DECODE_0__(0xb6)) / 0x4 + -parseInt(__DECODE_0__(0xbf)) / 0x5 + parseInt(__DECODE_0__(0xbe)) / 0x6 * (-parseInt(__DECODE_0__(0xbb)) / 0x7) + -parseInt(__DECODE_0__(0xc0)) / 0x8 * (parseInt(__DECODE_0__(0xbd)) / 0x9) + parseInt(__DECODE_0__(0xc2)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3820f);
function __STRING_ARRAY__() {
  var _0x1ba247 = ['1vOfYfR', '117PlDDcZ', '247398tcoRMr', '1195095dNWccC', '53816vPXRqp', 'log', '2942660LpvCKD', 'pow', '113956tNiNsg', 'readFileSync', '393394NHQOCf', '481860SqQoCx', 'trim', '21HMKeFl'];
  __STRING_ARRAY__ = function () {
    return _0x1ba247;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QbkyYj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QbkyYj, key);
}
var input = require('fs')[__DECODE_0__(0xb7)]('/dev/stdin', 'utf8');
var minvs = input[__DECODE_0__(0xba)]()['split']('\x0a');
var minv;
while (minv = minvs['shift']()) {
  var floor = Math['ceil'](Math[__DECODE_0__(0xc3)](parseFloat(minv), 0x2) / 0x62 + 0x1);
  console[__DECODE_0__(0xc1)](floor);
}
