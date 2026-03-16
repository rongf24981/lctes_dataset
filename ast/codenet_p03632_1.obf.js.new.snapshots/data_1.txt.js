function __DECODE_0__(RlOduD, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RlOduD, key);
}
var a0_0x40601e = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x1b87c2 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x1b87c2(0xf3)) / 0x1 * (parseInt(_0x1b87c2(0x101)) / 0x2) + parseInt(_0x1b87c2(0x103)) / 0x3 * (-parseInt(_0x1b87c2(0x105)) / 0x4) + parseInt(_0x1b87c2(0xff)) / 0x5 + -parseInt(_0x1b87c2(0xf2)) / 0x6 * (-parseInt(_0x1b87c2(0xfc)) / 0x7) + -parseInt(_0x1b87c2(0xfe)) / 0x8 * (-parseInt(_0x1b87c2(0xf9)) / 0x9) + parseInt(_0x1b87c2(0xf6)) / 0xa * (parseInt(_0x1b87c2(0x100)) / 0xb) + -parseInt(_0x1b87c2(0xfb)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdb237);
function Main(inp) {
  var _0x387325 = __DECODE_0__;
  var input = inp[_0x387325(0xf7)]('\x0a')[0x0][_0x387325(0xf7)]('\x20')[_0x387325(0xfa)](function (n) {
    return Number(n);
  });
  var start = Math[_0x387325(0x104)](input[0x0], input[0x2]);
  var end = Math[_0x387325(0xf8)](input[0x1], input[0x3]);
  var overlap = Math[_0x387325(0x104)](0x0, end - start);
  console[_0x387325(0xf5)](overlap);
}
function __STRING_ARRAY__() {
  var _0x19469f = ['max', '596AhAIck', '30QvzgnM', '4mOkJDA', 'readFileSync', 'log', '4260AcUHdN', 'split', 'min', '45414vYWspe', 'map', '20467020UcOOFu', '849198zuvCGX', '/dev/stdin', '368NRvnXi', '6887955NFrwhQ', '41371yFkwyI', '134898bmgwkp', 'utf8', '29901vxEpgi'];
  __STRING_ARRAY__ = function () {
    return _0x19469f;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[a0_0x40601e(0xf4)](a0_0x40601e(0xfd), a0_0x40601e(0x102)));
