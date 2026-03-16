function __DECODE_0__(yTDtKc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yTDtKc, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xcd)) / 0x1 + parseInt(__DECODE_0__(0xd1)) / 0x2 * (parseInt(__DECODE_0__(0xc9)) / 0x3) + parseInt(__DECODE_0__(0xcf)) / 0x4 + parseInt(__DECODE_0__(0xd3)) / 0x5 + parseInt(__DECODE_0__(0xd2)) / 0x6 + -parseInt(__DECODE_0__(0xd0)) / 0x7 + -parseInt(__DECODE_0__(0xcc)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8b9a7);
function __STRING_ARRAY__() {
  var _0x1d8dc1 = ['77104TRIsFK', '3181908PUUbdb', '3303410bXralb', '78LUclBS', 'utf8', '/dev/stdin', '20417192GixCqX', '838301TCnFDa', 'split', '2497404yZrHsV', '3724280DYydQY'];
  __STRING_ARRAY__ = function () {
    return _0x1d8dc1;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0xce)]('\x0a');
  input[0x0] = Number(input[0x0]);
  input[0x1] = Number(input[0x1]);
  input[0x2] = Number(input[0x2]);
  console['log']((input[0x0] + input[0x1]) * input[0x2] / 0x2);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xcb), __DECODE_0__(0xca)));
