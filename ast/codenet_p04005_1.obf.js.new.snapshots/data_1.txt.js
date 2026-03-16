function __DECODE_0__(dVDLLq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x73;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dVDLLq, key);
}
var a0_0x37f9e3 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x3dcfff = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x3dcfff(0x7b)) / 0x1 + parseInt(_0x3dcfff(0x81)) / 0x2 + -parseInt(_0x3dcfff(0x77)) / 0x3 * (-parseInt(_0x3dcfff(0x7d)) / 0x4) + parseInt(_0x3dcfff(0x76)) / 0x5 + -parseInt(_0x3dcfff(0x7c)) / 0x6 + parseInt(_0x3dcfff(0x75)) / 0x7 + -parseInt(_0x3dcfff(0x79)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe8f95);
function __STRING_ARRAY__() {
  var _0x558550 = ['4hMuBoH', 'utf8', 'sort', 'readFileSync', '3787310zkUqQo', 'trim', 'log', '8515738bHSxFQ', '494780tqUNDq', '5677899OqHYaG', 'map', '8314032OeCgYh', 'split', '1454784pBvzvj', '9920874ZoXkWR'];
  __STRING_ARRAY__ = function () {
    return _0x558550;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var _0x3439d2 = __DECODE_0__;
  input = input[_0x3439d2(0x7a)]('\x20')[_0x3439d2(0x78)](Number);
  if (input[0x0] % 0x2 == 0x0 && input[0x1] % 0x2 == 0x0 && input[0x2] % 0x2 == 0x0) {
    console[_0x3439d2(0x74)](0x0);
  } else {
    input = input[_0x3439d2(0x7f)](function (a, b) {
      return a - b;
    });
    console[_0x3439d2(0x74)](input[0x1] * input[0x0]);
  }
}
Main(require('fs')[a0_0x37f9e3(0x80)]('/dev/stdin', a0_0x37f9e3(0x7e))[a0_0x37f9e3(0x73)]());
