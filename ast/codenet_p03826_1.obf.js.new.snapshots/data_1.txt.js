var a0_0xcdba1d = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x2ee1e8 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x2ee1e8(0x1c3)) / 0x1 * (-parseInt(_0x2ee1e8(0x1bf)) / 0x2) + parseInt(_0x2ee1e8(0x1b6)) / 0x3 * (parseInt(_0x2ee1e8(0x1c4)) / 0x4) + -parseInt(_0x2ee1e8(0x1b9)) / 0x5 * (-parseInt(_0x2ee1e8(0x1bd)) / 0x6) + -parseInt(_0x2ee1e8(0x1b7)) / 0x7 * (parseInt(_0x2ee1e8(0x1be)) / 0x8) + parseInt(_0x2ee1e8(0x1bb)) / 0x9 + -parseInt(_0x2ee1e8(0x1c1)) / 0xa + parseInt(_0x2ee1e8(0x1c2)) / 0xb * (parseInt(_0x2ee1e8(0x1c0)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9056c);
var input = require('fs')['readFileSync'](a0_0xcdba1d(0x1b8), a0_0xcdba1d(0x1ba));
var inputArray = input[a0_0xcdba1d(0x1b5)]('\x20');
function __STRING_ARRAY__() {
  var _0x381eba = ['11189850mdLtmZ', '16215067CaRaOg', '373bdgWFs', '8zaIPvh', 'split', '365151AxlWtn', '1070090dxozBr', '/dev/stdin', '366250FjvnfZ', 'utf8', '8368362RbfDyr', 'log', '48jQJvie', '24AdNXMj', '5708TQMIZF', '12seZnnV'];
  __STRING_ARRAY__ = function () {
    return _0x381eba;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(XHfLYs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XHfLYs, key);
}
var a = inputArray[0x0];
var b = inputArray[0x1];
var c = inputArray[0x2];
var d = inputArray[0x3];
var result = a * b > c * d ? a * b : c * d;
console[a0_0xcdba1d(0x1bc)](result);
