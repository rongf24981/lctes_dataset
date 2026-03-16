function __DECODE_0__(rJBbgJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rJBbgJ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xea)) / 0x1 + -parseInt(__DECODE_0__(0xe2)) / 0x2 * (-parseInt(__DECODE_0__(0xee)) / 0x3) + parseInt(__DECODE_0__(0xe9)) / 0x4 + parseInt(__DECODE_0__(0xe8)) / 0x5 + parseInt(__DECODE_0__(0xe7)) / 0x6 * (-parseInt(__DECODE_0__(0xeb)) / 0x7) + -parseInt(__DECODE_0__(0xe3)) / 0x8 * (parseInt(__DECODE_0__(0xef)) / 0x9) + -parseInt(__DECODE_0__(0xec)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1fa42);
var input = require('fs')[__DECODE_0__(0xe4)](__DECODE_0__(0xe5), __DECODE_0__(0xe6));
var p = input[__DECODE_0__(0xed)]() - 0x0;
console['log'](p - p % 0x1f4);
function __STRING_ARRAY__() {
  var _0x93e00a = ['/dev/stdin', 'utf8', '102aNPJjY', '23895qHGyUR', '504604qbQVrU', '75255uzxEEy', '63ghCgCq', '655300TafvRt', 'trim', '88509urUTzE', '27QOPdPS', '16GdxynM', '257104envuvE', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x93e00a;
  };
  return __STRING_ARRAY__();
}
