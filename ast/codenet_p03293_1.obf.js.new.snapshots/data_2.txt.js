function __DECODE_0__(GyUlLX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xec;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GyUlLX, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xf7)) / 0x1 * (-parseInt(__DECODE_0__(0xf3)) / 0x2) + -parseInt(__DECODE_0__(0xf6)) / 0x3 * (-parseInt(__DECODE_0__(0xee)) / 0x4) + -parseInt(__DECODE_0__(0xf1)) / 0x5 + -parseInt(__DECODE_0__(0xf4)) / 0x6 * (parseInt(__DECODE_0__(0xf8)) / 0x7) + -parseInt(__DECODE_0__(0xec)) / 0x8 * (parseInt(__DECODE_0__(0xfe)) / 0x9) + -parseInt(__DECODE_0__(0xfb)) / 0xa * (-parseInt(__DECODE_0__(0xef)) / 0xb) + parseInt(__DECODE_0__(0xf2)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x65f6c);
function Main(input) {
  ans = 'No';
  input = input['trim']()[__DECODE_0__(0xfa)]('\x0a');
  rotate = input[0x0];
  for (i = 0x0; i <= input[0x0][__DECODE_0__(0xf5)]; i++) {
    head = rotate[__DECODE_0__(0xfd)](0x0, 0x1);
    str = rotate[__DECODE_0__(0xfc)](0x1) + head;
    if (input[0x1] === str) {
      ans = __DECODE_0__(0xf9);
      break;
    }
    rotate = str;
  }
  console[__DECODE_0__(0xf0)](ans);
}
function __STRING_ARRAY__() {
  var _0x4b77b6 = ['split', '10OwpGlc', 'slice', 'substr', '37998hPxkWb', '880dtHBxx', 'utf8', '28tQaSuF', '2118259Nicgnq', 'log', '79920uPTAGL', '8701440joIIsa', '58962ArzmST', '705972HtYUkv', 'length', '281844bxFTCD', '11GmPOtM', '21pFgktP', 'Yes'];
  __STRING_ARRAY__ = function () {
    return _0x4b77b6;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0xed)));
