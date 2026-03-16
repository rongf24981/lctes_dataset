function __DECODE_0__(dVDLLq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x73;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dVDLLq, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x7b)) / 0x1 + parseInt(__DECODE_0__(0x81)) / 0x2 + -parseInt(__DECODE_0__(0x77)) / 0x3 * (-parseInt(__DECODE_0__(0x7d)) / 0x4) + parseInt(__DECODE_0__(0x76)) / 0x5 + -parseInt(__DECODE_0__(0x7c)) / 0x6 + parseInt(__DECODE_0__(0x75)) / 0x7 + -parseInt(__DECODE_0__(0x79)) / 0x8;
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
  input = input[__DECODE_0__(0x7a)]('\x20')[__DECODE_0__(0x78)](Number);
  if (input[0x0] % 0x2 == 0x0 && input[0x1] % 0x2 == 0x0 && input[0x2] % 0x2 == 0x0) {
    console[__DECODE_0__(0x74)](0x0);
  } else {
    input = input[__DECODE_0__(0x7f)](function (a, b) {
      return a - b;
    });
    console[__DECODE_0__(0x74)](input[0x1] * input[0x0]);
  }
}
Main(require('fs')[__DECODE_0__(0x80)]('/dev/stdin', __DECODE_0__(0x7e))[__DECODE_0__(0x73)]());
