function __STRING_ARRAY__() {
  var _0x4ef1da = ['trim', '7255930ZAvSCf', '9UlSUxL', '1490262dUhOZp', 'split', '1527040crlkrk', 'shift', '189RfLHXI', '1KZvBzG', '47732axqZjg', '9475760uiKfHR', 'map', 'utf8', '838925ymWBTh', '975066uKhkLr', 'sort', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x4ef1da;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x13d)) / 0x1 * (parseInt(__DECODE_0__(0x143)) / 0x2) + parseInt(__DECODE_0__(0x13c)) / 0x3 * (parseInt(__DECODE_0__(0x13e)) / 0x4) + parseInt(__DECODE_0__(0x142)) / 0x5 + -parseInt(__DECODE_0__(0x149)) / 0x6 + -parseInt(__DECODE_0__(0x13f)) / 0x7 + parseInt(__DECODE_0__(0x14b)) / 0x8 + parseInt(__DECODE_0__(0x148)) / 0x9 * (parseInt(__DECODE_0__(0x147)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb0269);
function __DECODE_0__(MyzSww, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MyzSww, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x146)]()[__DECODE_0__(0x14a)]('\x0a')[__DECODE_0__(0x140)](input => Number(input));
  var len = input[0x0];
  input[__DECODE_0__(0x13b)]();
  input[__DECODE_0__(0x144)](function (a, b) {
    return a - b;
  });
  var sum = 0x0;
  for (var i = 0x0; i < input['length']; i++) {
    sum += input[i];
  }
  var count = 0x0;
  while (sum % 0xa == 0x0 && sum != 0x0) {
    sum -= input[count];
    count++;
  }
  console['log'](sum);
}
Main(require('fs')[__DECODE_0__(0x145)]('/dev/stdin', __DECODE_0__(0x141)));
