function __STRING_ARRAY__() {
  var _0x316b7f = ['33015ATfHVC', '/dev/stdin', 'utf8', '308535SPoXcC', 'log', '378HbAcLi', 'split', '272975BsjYDQ', '14sqzqQW', '2003448bWdpIm', '11006073ZRUIMJ', '4465560vnRTEa', '2744gFWYOd'];
  __STRING_ARRAY__ = function () {
    return _0x316b7f;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(Fclelx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Fclelx, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xf2)) / 0x1 + -parseInt(__DECODE_0__(0xf7)) / 0x2 * (parseInt(__DECODE_0__(0xfc)) / 0x3) + -parseInt(__DECODE_0__(0xf8)) / 0x4 + -parseInt(__DECODE_0__(0xf6)) / 0x5 + parseInt(__DECODE_0__(0xf4)) / 0x6 * (parseInt(__DECODE_0__(0xfb)) / 0x7) + -parseInt(__DECODE_0__(0xfa)) / 0x8 + parseInt(__DECODE_0__(0xf9)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x59381);
function Main(input) {
  var input = input[__DECODE_0__(0xf5)]('\x0a');
  var tmp = input[0x0][__DECODE_0__(0xf5)]('\x20');
  var N = tmp[0x0];
  var K = tmp[0x1];
  var pattern = K;
  for (i = 0x1; i < N; i++) {
    pattern *= K - 0x1;
  }
  console[__DECODE_0__(0xf3)](pattern);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xfd), __DECODE_0__(0xfe)));
