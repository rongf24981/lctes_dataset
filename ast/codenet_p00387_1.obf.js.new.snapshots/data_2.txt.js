function __STRING_ARRAY__() {
  var _0x431f54 = ['1981kGQHsV', 'split', '132355imiYLd', '5453808JwLRLD', '7266hEsIlG', 'readFileSync', '280725lFvXSy', '/dev/stdin', 'utf8', '172194lOayrY', '869445miyqTn', 'trim', 'log', '422532dCbKRm'];
  __STRING_ARRAY__ = function () {
    return _0x431f54;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WIbNXT, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xff;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WIbNXT, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x10a)) / 0x1 + -parseInt(__DECODE_0__(0xff)) / 0x2 + -parseInt(__DECODE_0__(0x100)) / 0x3 + -parseInt(__DECODE_0__(0x103)) / 0x4 + parseInt(__DECODE_0__(0x106)) / 0x5 + parseInt(__DECODE_0__(0x108)) / 0x6 * (parseInt(__DECODE_0__(0x104)) / 0x7) + parseInt(__DECODE_0__(0x107)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x46780);
var input = require('fs')[__DECODE_0__(0x109)](__DECODE_0__(0x10b), __DECODE_0__(0x10c));
var [a, b] = input[__DECODE_0__(0x101)]()[__DECODE_0__(0x105)]('\x20')['map'](Number);
console[__DECODE_0__(0x102)](Math['ceil'](b / a));
