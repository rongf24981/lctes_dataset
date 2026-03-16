function __DECODE_0__(iQpVHc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x140;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iQpVHc, key);
}
function __STRING_ARRAY__() {
  var _0x3edeed = ['3392664gjwrxM', '1058934bYEvKd', '20koqBFg', '22292982aVOGzo', 'trim', 'readFileSync', 'add', 'log', 'size', '2466778WWyosE', '/dev/stdin', '2331350pRmaDn', '12PlhYAY', 'map', 'shift', 'split', '669042MjOssp', '3642290lGcMFc'];
  __STRING_ARRAY__ = function () {
    return _0x3edeed;
  };
  return __STRING_ARRAY__();
}
var a0_0x54f225 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x3a41bd = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x3a41bd(0x151)) / 0x1 + -parseInt(_0x3a41bd(0x14a)) / 0x2 + -parseInt(_0x3a41bd(0x142)) / 0x3 * (-parseInt(_0x3a41bd(0x143)) / 0x4) + parseInt(_0x3a41bd(0x140)) / 0x5 * (parseInt(_0x3a41bd(0x14d)) / 0x6) + parseInt(_0x3a41bd(0x14c)) / 0x7 + parseInt(_0x3a41bd(0x141)) / 0x8 + -parseInt(_0x3a41bd(0x144)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe4e7a);
var input = require('fs')[a0_0x54f225(0x146)](a0_0x54f225(0x14b), 'utf8');
var arr = input[a0_0x54f225(0x145)]()[a0_0x54f225(0x150)]('\x0a');
var n = arr['shift']() - 0x0;
var a = arr[a0_0x54f225(0x14f)]()[a0_0x54f225(0x150)]('\x20')[a0_0x54f225(0x14e)](Number);
var s = new Set();
a['forEach'](v => s[a0_0x54f225(0x147)](v));
console[a0_0x54f225(0x148)](s[a0_0x54f225(0x149)]);
