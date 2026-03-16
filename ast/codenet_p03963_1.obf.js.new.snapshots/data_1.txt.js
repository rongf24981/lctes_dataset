function __STRING_ARRAY__() {
  var _0x316b7f = ['33015ATfHVC', '/dev/stdin', 'utf8', '308535SPoXcC', 'log', '378HbAcLi', 'split', '272975BsjYDQ', '14sqzqQW', '2003448bWdpIm', '11006073ZRUIMJ', '4465560vnRTEa', '2744gFWYOd'];
  __STRING_ARRAY__ = function () {
    return _0x316b7f;
  };
  return __STRING_ARRAY__();
}
var a0_0x528945 = __DECODE_0__;
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
  var _0x5daa86 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x5daa86(0xf2)) / 0x1 + -parseInt(_0x5daa86(0xf7)) / 0x2 * (parseInt(_0x5daa86(0xfc)) / 0x3) + -parseInt(_0x5daa86(0xf8)) / 0x4 + -parseInt(_0x5daa86(0xf6)) / 0x5 + parseInt(_0x5daa86(0xf4)) / 0x6 * (parseInt(_0x5daa86(0xfb)) / 0x7) + -parseInt(_0x5daa86(0xfa)) / 0x8 + parseInt(_0x5daa86(0xf9)) / 0x9;
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
  var _0xa062fd = __DECODE_0__;
  var input = input[_0xa062fd(0xf5)]('\x0a');
  var tmp = input[0x0][_0xa062fd(0xf5)]('\x20');
  var N = tmp[0x0];
  var K = tmp[0x1];
  var pattern = K;
  for (i = 0x1; i < N; i++) {
    pattern *= K - 0x1;
  }
  console[_0xa062fd(0xf3)](pattern);
}
Main(require('fs')['readFileSync'](a0_0x528945(0xfd), a0_0x528945(0xfe)));
