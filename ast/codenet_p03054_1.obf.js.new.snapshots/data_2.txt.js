'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1a2)) / 0x1 + -parseInt(__DECODE_0__(0x19e)) / 0x2 * (parseInt(__DECODE_0__(0x1a6)) / 0x3) + parseInt(__DECODE_0__(0x1a1)) / 0x4 * (parseInt(__DECODE_0__(0x1ab)) / 0x5) + parseInt(__DECODE_0__(0x1a0)) / 0x6 + -parseInt(__DECODE_0__(0x1a5)) / 0x7 * (-parseInt(__DECODE_0__(0x1a9)) / 0x8) + parseInt(__DECODE_0__(0x19f)) / 0x9 * (parseInt(__DECODE_0__(0x19b)) / 0xa) + -parseInt(__DECODE_0__(0x19d)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc2d02);
function __DECODE_0__(cXGCKK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cXGCKK, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x1a3)](/\s+/);
  var H = input[__DECODE_0__(0x1a7)]() - 0x0;
  var W = input[__DECODE_0__(0x1a7)]() - 0x0;
  var N = input[__DECODE_0__(0x1a7)]() - 0x0;
  var sr = input['shift']() - 0x0;
  var sc = input[__DECODE_0__(0x1a7)]() - 0x0;
  var S = input['shift']();
  var T = input[__DECODE_0__(0x1a7)]();
  var dp = [[sc, sc, sr, sr]];
  for (let i = 0x0; i < N; i++) {
    dp[i + 0x1] = [];
    dp[i + 0x1][0x0] = dp[i][0x0] - (S[i] === 'L' ? 0x1 : 0x0);
    dp[i + 0x1][0x1] = dp[i][0x1] + (S[i] === 'R' ? 0x1 : 0x0);
    dp[i + 0x1][0x2] = dp[i][0x2] - (S[i] === 'U' ? 0x1 : 0x0);
    dp[i + 0x1][0x3] = dp[i][0x3] + (S[i] === 'D' ? 0x1 : 0x0);
    if (dp[i + 0x1][0x0] === 0x0 || dp[i + 0x1][0x1] === W + 0x1 || dp[i + 0x1][0x2] === 0x0 || dp[i + 0x1][0x3] === H + 0x1) {
      console[__DECODE_0__(0x19c)]('NO');
      return;
    }
    dp[i + 0x1][0x0] = Math[__DECODE_0__(0x1a8)](dp[i + 0x1][0x0] + (T[i] === 'R' ? 0x1 : 0x0), W);
    dp[i + 0x1][0x1] = Math[__DECODE_0__(0x19a)](dp[i + 0x1][0x1] - (T[i] === 'L' ? 0x1 : 0x0), 0x1);
    dp[i + 0x1][0x2] = Math[__DECODE_0__(0x1a8)](dp[i + 0x1][0x2] + (T[i] === 'D' ? 0x1 : 0x0), H);
    dp[i + 0x1][0x3] = Math['max'](dp[i + 0x1][0x3] - (T[i] === 'U' ? 0x1 : 0x0), 0x1);
  }
  console[__DECODE_0__(0x19c)](__DECODE_0__(0x1a4));
}
function __STRING_ARRAY__() {
  var _0x16c9c5 = ['40GAODdL', 'readFileSync', '5dpDICg', 'max', '3580hlVXHn', 'log', '24903318CUkuWQ', '16MSTIeN', '25227ACwjjG', '9465522CCnoSy', '3326116VHWgnC', '419589kmcSXR', 'split', 'YES', '1213233rKwUWy', '299139OtibDr', 'shift', 'min'];
  __STRING_ARRAY__ = function () {
    return _0x16c9c5;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x1aa)]('/dev/stdin', 'utf8'));
