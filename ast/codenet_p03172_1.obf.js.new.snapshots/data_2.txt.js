'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1a9)) / 0x1 * (parseInt(__DECODE_0__(0x1b2)) / 0x2) + -parseInt(__DECODE_0__(0x1ae)) / 0x3 + -parseInt(__DECODE_0__(0x1ad)) / 0x4 * (-parseInt(__DECODE_0__(0x1ac)) / 0x5) + -parseInt(__DECODE_0__(0x1b5)) / 0x6 + parseInt(__DECODE_0__(0x1b4)) / 0x7 * (parseInt(__DECODE_0__(0x1b7)) / 0x8) + -parseInt(__DECODE_0__(0x1a8)) / 0x9 + -parseInt(__DECODE_0__(0x1a7)) / 0xa * (-parseInt(__DECODE_0__(0x1b8)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xee91c);
function __STRING_ARRAY__() {
  var _0x51e371 = ['40kUlTKR', '4480089EgNpvF', 'split', 'map', 'utf8', '92762ecufLM', 'fill', '785092fAjRxH', '4754460ZnrCIc', '/dev/stdin', '8EquJyC', '11IDZdOP', '36657420wXbHJL', '13875210TYXXru', '15fyZRhK', 'log', 'readFileSync', '165515AajcjR'];
  __STRING_ARRAY__ = function () {
    return _0x51e371;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(kJiwBz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kJiwBz, key);
}
const mod = 0x3b9aca00 + 0x7;
function solve(N, K, A) {
  if (K === 0x0) {
    return 0x1;
  }
  var dp = new Array(K + 0x1)[__DECODE_0__(0x1b3)](0x0);
  var prefix = new Array(N)[__DECODE_0__(0x1b3)](0x0)[__DECODE_0__(0x1b0)](e => new Array(K + 0x1)[__DECODE_0__(0x1b3)](0x0));
  for (var i = N - 0x1; i >= 0x0; i--) {
    for (var j = 0x0; j <= K; j++) {
      if (i === N - 0x1) {
        dp[j] = j <= A[i] ? 0x1 : 0x0;
        prefix[i][j] = j - 0x1 >= 0x0 ? prefix[i][j - 0x1] % mod + dp[j] % mod : dp[j] % mod;
      } else {
        dp[j] = j <= A[i] ? prefix[i + 0x1][j] % mod : prefix[i + 0x1][j] % mod - prefix[i + 0x1][j - A[i] - 0x1] % mod;
        prefix[i][j] = j - 0x1 >= 0x0 ? prefix[i][j - 0x1] % mod + dp[j] % mod : dp[j] % mod;
      }
    }
  }
  return dp[K] % mod;
}
function main(input) {
  var lines = input[__DECODE_0__(0x1af)]('\x0a');
  var NK = lines[0x0][__DECODE_0__(0x1af)]('\x20')[__DECODE_0__(0x1b0)](l => parseInt(l));
  var N = NK[0x0];
  var K = NK[0x1];
  var A = lines[0x1][__DECODE_0__(0x1af)]('\x20')[__DECODE_0__(0x1b0)](l => parseInt(l));
  var ans = solve(N, K, A);
  console[__DECODE_0__(0x1aa)](ans);
}
main(require('fs')[__DECODE_0__(0x1ab)](__DECODE_0__(0x1b6), __DECODE_0__(0x1b1)));
