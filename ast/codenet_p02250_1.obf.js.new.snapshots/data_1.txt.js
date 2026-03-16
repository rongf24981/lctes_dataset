var a0_0x1050f1 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x9ef4a3 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x9ef4a3(0x102)) / 0x1 * (parseInt(_0x9ef4a3(0x10b)) / 0x2) + -parseInt(_0x9ef4a3(0x103)) / 0x3 * (parseInt(_0x9ef4a3(0x110)) / 0x4) + parseInt(_0x9ef4a3(0x108)) / 0x5 + -parseInt(_0x9ef4a3(0x107)) / 0x6 + -parseInt(_0x9ef4a3(0x111)) / 0x7 * (-parseInt(_0x9ef4a3(0x106)) / 0x8) + -parseInt(_0x9ef4a3(0x109)) / 0x9 * (parseInt(_0x9ef4a3(0x10f)) / 0xa) + parseInt(_0x9ef4a3(0x112)) / 0xb * (parseInt(_0x9ef4a3(0x10c)) / 0xc);
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
var input = require('fs')[a0_0x1050f1(0x10d)](a0_0x1050f1(0x101), a0_0x1050f1(0x105));
var arr = input[a0_0x1050f1(0x10e)]()[a0_0x1050f1(0x113)]('\x0a');
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
  ans += (str[a0_0x1050f1(0x104)](arr[i]) ? 0x1 : 0x0) + '\x0a';
}
function __STRING_ARRAY__() {
  var _0x2a57a0 = ['trim', '20GgDfRW', '176zSsMUm', '52381cCpSGG', '715ciijVc', 'split', '/dev/stdin', '1kwkMBt', '15765IYpeeJ', 'includes', 'utf8', '24ABecMZ', '4541532gjOVXo', '7159790RFjupq', '7054155WkeyCR', 'log', '2128596PQhrfb', '583104urHDrm', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x2a57a0;
  };
  return __STRING_ARRAY__();
}
console[a0_0x1050f1(0x10a)](ans[a0_0x1050f1(0x10e)]());
