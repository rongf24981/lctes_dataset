function __STRING_ARRAY__() {
  var _0x419d23 = ['1010LFaxKX', 'split', '1700565KFrdVr', '1150752VFNZRl', '6fpQEwP', 'readFileSync', 'trim', '511290elgTcE', '12888RojFWd', '4ZBKaPU', '751668NJCefH', 'map', '1043kRKohR', '2hxDqId', '305008jrzZpz', '41371xNiVbm'];
  __STRING_ARRAY__ = function () {
    return _0x419d23;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(qsMmsv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qsMmsv, key);
}
var a0_0x43f4cf = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x74645c = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x74645c(0x143)) / 0x1 * (parseInt(_0x74645c(0x144)) / 0x2) + parseInt(_0x74645c(0x140)) / 0x3 * (-parseInt(_0x74645c(0x13f)) / 0x4) + -parseInt(_0x74645c(0x148)) / 0x5 * (-parseInt(_0x74645c(0x14a)) / 0x6) + -parseInt(_0x74645c(0x142)) / 0x7 * (-parseInt(_0x74645c(0x13e)) / 0x8) + parseInt(_0x74645c(0x14d)) / 0x9 + parseInt(_0x74645c(0x146)) / 0xa * (-parseInt(_0x74645c(0x145)) / 0xb) + -parseInt(_0x74645c(0x149)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x34a69);
var input = require('fs')[a0_0x43f4cf(0x14b)]('/dev/stdin', 'utf8');
var [w, h, c] = input[a0_0x43f4cf(0x14c)]()[a0_0x43f4cf(0x147)]('\x20')[a0_0x43f4cf(0x141)](Number);
var max = 0x1;
for (var i = 0x1; i <= 0x3e8; i++) {
  if (w % i == 0x0 && h % i == 0x0) {
    max = i;
  }
}
console['log'](w * h / (max * max) * c);
