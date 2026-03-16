(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x102)) / 0x1 * (parseInt(__DECODE_0__(0x10b)) / 0x2) + -parseInt(__DECODE_0__(0x103)) / 0x3 * (parseInt(__DECODE_0__(0x110)) / 0x4) + parseInt(__DECODE_0__(0x108)) / 0x5 + -parseInt(__DECODE_0__(0x107)) / 0x6 + -parseInt(__DECODE_0__(0x111)) / 0x7 * (-parseInt(__DECODE_0__(0x106)) / 0x8) + -parseInt(__DECODE_0__(0x109)) / 0x9 * (parseInt(__DECODE_0__(0x10f)) / 0xa) + parseInt(__DECODE_0__(0x112)) / 0xb * (parseInt(__DECODE_0__(0x10c)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf2659);
var input = require('fs')[__DECODE_0__(0x10d)](__DECODE_0__(0x101), __DECODE_0__(0x105));
var arr = input[__DECODE_0__(0x10e)]()[__DECODE_0__(0x113)]('\x0a');
var str = arr[0x0];
var n = arr[0x1] - 0x0 + 0x2;
var ans = '';
function __DECODE_0__(ktFpLJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x101;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ktFpLJ, key);
}
for (var i = 0x2; i < n; i++) {
  ans += (str[__DECODE_0__(0x104)](arr[i]) ? 0x1 : 0x0) + '\x0a';
}
function __STRING_ARRAY__() {
  var _0x2a57a0 = ['trim', '20GgDfRW', '176zSsMUm', '52381cCpSGG', '715ciijVc', 'split', '/dev/stdin', '1kwkMBt', '15765IYpeeJ', 'includes', 'utf8', '24ABecMZ', '4541532gjOVXo', '7159790RFjupq', '7054155WkeyCR', 'log', '2128596PQhrfb', '583104urHDrm', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x2a57a0;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0x10a)](ans[__DECODE_0__(0x10e)]());
