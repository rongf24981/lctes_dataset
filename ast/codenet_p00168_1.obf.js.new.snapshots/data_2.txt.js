(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1a5)) / 0x1 + -parseInt(__DECODE_0__(0x1a6)) / 0x2 * (parseInt(__DECODE_0__(0x1a4)) / 0x3) + parseInt(__DECODE_0__(0x1ae)) / 0x4 * (-parseInt(__DECODE_0__(0x1ab)) / 0x5) + parseInt(__DECODE_0__(0x1a2)) / 0x6 * (parseInt(__DECODE_0__(0x1a9)) / 0x7) + -parseInt(__DECODE_0__(0x1ac)) / 0x8 * (parseInt(__DECODE_0__(0x1b2)) / 0x9) + -parseInt(__DECODE_0__(0x1a8)) / 0xa + parseInt(__DECODE_0__(0x1af)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa3b2d);
var input = require('fs')[__DECODE_0__(0x1b0)]('/dev/stdin', __DECODE_0__(0x1a7));
var Arr = input[__DECODE_0__(0x1b1)]()[__DECODE_0__(0x1aa)]('\x0a');
var dp = [0x1, 0x2, 0x4];
function __DECODE_0__(PRfNGg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PRfNGg, key);
}
for (var i = 0x3; i <= 0x1f; i++) {
  dp[i] = dp[i - 0x1] + dp[i - 0x2] + dp[i - 0x3];
}
while (!![]) {
  var n = Arr[__DECODE_0__(0x1ad)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  console[__DECODE_0__(0x1a3)](Math['ceil'](dp[n - 0x1] / 0xe42));
}
function __STRING_ARRAY__() {
  var _0x3637b1 = ['utf8', '4403150giBAVi', '583681ZbZJHN', 'split', '17285FpbZbB', '3360152ZJLlUm', 'shift', '508UYBizM', '8637310LUePaH', 'readFileSync', 'trim', '9BYaces', '84vyMrsX', 'log', '3lytgpy', '963621mbKpAd', '1892622ArqATV'];
  __STRING_ARRAY__ = function () {
    return _0x3637b1;
  };
  return __STRING_ARRAY__();
}
