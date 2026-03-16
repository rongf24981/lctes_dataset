var a0_0x6645f6 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x18af27 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x18af27(0xb1)) / 0x1 * (parseInt(_0x18af27(0xaf)) / 0x2) + -parseInt(_0x18af27(0xa5)) / 0x3 + parseInt(_0x18af27(0xa8)) / 0x4 + -parseInt(_0x18af27(0xb3)) / 0x5 * (-parseInt(_0x18af27(0xb2)) / 0x6) + parseInt(_0x18af27(0xa3)) / 0x7 * (parseInt(_0x18af27(0xa6)) / 0x8) + parseInt(_0x18af27(0xae)) / 0x9 * (parseInt(_0x18af27(0xa4)) / 0xa) + -parseInt(_0x18af27(0xb0)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xacf2d);
var input = require('fs')[a0_0x6645f6(0xa7)](a0_0x6645f6(0xad), a0_0x6645f6(0xaa));
function __DECODE_0__(iTOeQx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iTOeQx, key);
}
function __STRING_ARRAY__() {
  var _0x2f791f = ['999806bWhvSv', '8532678YvBIFk', '2oLWfRM', '4172130dArOAQ', '5uCQjqE', '154TPNLqE', '10ddCBQV', '3517776IKEWPl', '504272XPpQcs', 'readFileSync', '1337664uwtyvc', 'log', 'utf8', 'trim', 'split', '/dev/stdin', '11159766xvpEEH'];
  __STRING_ARRAY__ = function () {
    return _0x2f791f;
  };
  return __STRING_ARRAY__();
}
var arr = input[a0_0x6645f6(0xab)]()[a0_0x6645f6(0xac)]('\x0a');
while (!![]) {
  var gymd = arr['shift']();
  if (gymd == '#') {
    break;
  }
  var [g, y, m, d] = gymd[a0_0x6645f6(0xac)]('\x20');
  [y, m, d] = [y - 0x0, m - 0x0, d - 0x0];
  if (y <= 0x1e || y == 0x1f && m <= 0x4) {
    console[a0_0x6645f6(0xa9)](gymd);
  } else {
    y = y - 0x1e;
    console[a0_0x6645f6(0xa9)]('?\x20' + y + '\x20' + m + '\x20' + d);
  }
}
