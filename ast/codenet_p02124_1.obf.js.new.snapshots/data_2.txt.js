(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x104)) / 0x1 * (parseInt(__DECODE_0__(0x108)) / 0x2) + -parseInt(__DECODE_0__(0x107)) / 0x3 * (parseInt(__DECODE_0__(0x105)) / 0x4) + -parseInt(__DECODE_0__(0x109)) / 0x5 + parseInt(__DECODE_0__(0x106)) / 0x6 * (parseInt(__DECODE_0__(0x10d)) / 0x7) + parseInt(__DECODE_0__(0x112)) / 0x8 + parseInt(__DECODE_0__(0x101)) / 0x9 * (-parseInt(__DECODE_0__(0x102)) / 0xa) + parseInt(__DECODE_0__(0x111)) / 0xb * (parseInt(__DECODE_0__(0x110)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf2b5b);
function __DECODE_0__(BTlIaR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x101;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BTlIaR, key);
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x10a), __DECODE_0__(0x10f));
var arr = input[__DECODE_0__(0x10b)]()[__DECODE_0__(0x10e)]('\x0a');
var x = arr['shift']() - 0x0;
function __STRING_ARRAY__() {
  var _0x5759ad = ['160668pLceFq', '21ZNPwEs', '599902GqLByz', '2773690BZdaKj', '/dev/stdin', 'trim', 'ai1333', '7FHJQQY', 'split', 'utf8', '1788FAkWQr', '294822iQoHxB', '4510288ShxEdA', '783kbmNot', '63660UysojJ', 'log', '4bnWHci', '732308OyASWq'];
  __STRING_ARRAY__ = function () {
    return _0x5759ad;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0x103)](__DECODE_0__(0x10c) + '3'['repeat'](x / 0x64));
