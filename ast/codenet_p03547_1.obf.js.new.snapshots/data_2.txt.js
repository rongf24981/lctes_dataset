(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xa7)) / 0x1 + -parseInt(__DECODE_0__(0xa9)) / 0x2 + -parseInt(__DECODE_0__(0x9f)) / 0x3 + -parseInt(__DECODE_0__(0xa4)) / 0x4 + -parseInt(__DECODE_0__(0xac)) / 0x5 * (-parseInt(__DECODE_0__(0xa0)) / 0x6) + -parseInt(__DECODE_0__(0xa2)) / 0x7 * (parseInt(__DECODE_0__(0xa6)) / 0x8) + parseInt(__DECODE_0__(0xab)) / 0x9 * (parseInt(__DECODE_0__(0xa5)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb4117);
inp = require('fs')[__DECODE_0__(0xad)](__DECODE_0__(0xaa), __DECODE_0__(0xa3))['split']('\x0a');
l = inp[__DECODE_0__(0x9e)]()[__DECODE_0__(0xa8)]('\x20');
x = l[0x0];
function __DECODE_0__(DIqsrb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DIqsrb, key);
}
y = l[0x1];
console[__DECODE_0__(0xa1)](x == y ? '=' : x[__DECODE_0__(0xae)]() < y['charCodeAt']() ? '<' : '>');
function __STRING_ARRAY__() {
  var _0x3a5ddc = ['log', '879046alRJXO', 'utf8', '3276832LmxHNO', '1780gYpATF', '24MSDUws', '410178CWZCVn', 'split', '2844738FnwoyF', '/dev/stdin', '186426cxRBwZ', '1610GdYhRs', 'readFileSync', 'charCodeAt', 'shift', '2918754dagCAy', '4314ypDpBq'];
  __STRING_ARRAY__ = function () {
    return _0x3a5ddc;
  };
  return __STRING_ARRAY__();
}
