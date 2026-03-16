function __STRING_ARRAY__() {
  var _0x128610 = ['3522CcLHjx', '3694688ZXYVYU', '/dev/stdin', '101800FVXBuW', '15nApwLk', '5245ORxskW', '17890INaJFc', '427416nwFZXu', 'log', '3612870qIPbQP', 'utf8', 'trim', 'split', '2736762zilpmj'];
  __STRING_ARRAY__ = function () {
    return _0x128610;
  };
  return __STRING_ARRAY__();
}
var a0_0x3b33a2 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x15825e = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x15825e(0x1a7)) / 0x1 + -parseInt(_0x15825e(0x1a6)) / 0x2 + parseInt(_0x15825e(0x1a4)) / 0x3 * (parseInt(_0x15825e(0x1a3)) / 0x4) + parseInt(_0x15825e(0x1a5)) / 0x5 * (-parseInt(_0x15825e(0x1a0)) / 0x6) + parseInt(_0x15825e(0x19f)) / 0x7 + parseInt(_0x15825e(0x1a1)) / 0x8 + parseInt(_0x15825e(0x19b)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5068e);
var input = require('fs')['readFileSync'](a0_0x3b33a2(0x1a2), a0_0x3b33a2(0x19c));
function __DECODE_0__(xymlJQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xymlJQ, key);
}
var [D, L] = input[a0_0x3b33a2(0x19d)]()[a0_0x3b33a2(0x19e)]('\x20')['map'](Number);
var amari = D % L;
var yakusuu = (D - amari) / L;
console[a0_0x3b33a2(0x1a8)](yakusuu + amari);
