(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1d2)) / 0x1 + -parseInt(__DECODE_0__(0x1dc)) / 0x2 * (-parseInt(__DECODE_0__(0x1d0)) / 0x3) + parseInt(__DECODE_0__(0x1d6)) / 0x4 * (-parseInt(__DECODE_0__(0x1db)) / 0x5) + -parseInt(__DECODE_0__(0x1cf)) / 0x6 + parseInt(__DECODE_0__(0x1d7)) / 0x7 * (-parseInt(__DECODE_0__(0x1d3)) / 0x8) + parseInt(__DECODE_0__(0x1d4)) / 0x9 + parseInt(__DECODE_0__(0x1d8)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x657dc);
function __DECODE_0__(kHPYqo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kHPYqo, key);
}
function __STRING_ARRAY__() {
  var _0xfeee04 = ['385604gCqNuC', '2165754tTNcQX', '3oQfimN', 'utf8', '630225FSPCdl', '596784QPoZzt', '4408785GDwkuU', 'split', '176CDmron', '7EeUibf', '2428130aNuiZf', '/dev/stdin', 'readFileSync', '80050PTLNDF'];
  __STRING_ARRAY__ = function () {
    return _0xfeee04;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0x1d5)]('\x20');
  tmp = input[0x1][0x0];
  console['log']('A' + tmp + 'C');
}
Main(require('fs')[__DECODE_0__(0x1da)](__DECODE_0__(0x1d9), __DECODE_0__(0x1d1)));
