'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("15fyZRhK") / 1 * (parseInt("92762ecufLM") / 2) + -parseInt("4480089EgNpvF") / 3 + -parseInt("40kUlTKR") / 4 * (-parseInt("165515AajcjR") / 5) + -parseInt("4754460ZnrCIc") / 6 + parseInt("785092fAjRxH") / 7 * (parseInt("8EquJyC") / 8) + -parseInt("13875210TYXXru") / 9 + -parseInt("36657420wXbHJL") / 10 * (-parseInt("11IDZdOP") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 977180);
function __STRING_ARRAY__() {
  var _0x51e371 = ["40kUlTKR", "4480089EgNpvF", "split", "map", "utf8", "92762ecufLM", "fill", "785092fAjRxH", "4754460ZnrCIc", "/dev/stdin", "8EquJyC", "11IDZdOP", "36657420wXbHJL", "13875210TYXXru", "15fyZRhK", "log", "readFileSync", "165515AajcjR"];
  __STRING_ARRAY__ = function () {
    return _0x51e371;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(kJiwBz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 423;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kJiwBz, key);
}
const mod = 1000000007;
function solve(N, K, A) {
  if (K === 0) {
    return 1;
  }
  var dp = new Array(K + 1)["fill"](0);
  var prefix = new Array(N)["fill"](0)["map"](e => new Array(K + 1)["fill"](0));
  for (var i = N - 1; i >= 0; i--) {
    for (var j = 0; j <= K; j++) {
      if (i === N - 1) {
        dp[j] = j <= A[i] ? 1 : 0;
        prefix[i][j] = j - 1 >= 0 ? prefix[i][j - 1] % mod + dp[j] % mod : dp[j] % mod;
      } else {
        dp[j] = j <= A[i] ? prefix[i + 1][j] % mod : prefix[i + 1][j] % mod - prefix[i + 1][j - A[i] - 1] % mod;
        prefix[i][j] = j - 1 >= 0 ? prefix[i][j - 1] % mod + dp[j] % mod : dp[j] % mod;
      }
    }
  }
  return dp[K] % mod;
}
function main(input) {
  var lines = input["split"]("\n");
  var NK = lines[0]["split"](" ")["map"](l => parseInt(l));
  var N = NK[0];
  var K = NK[1];
  var A = lines[1]["split"](" ")["map"](l => parseInt(l));
  var ans = solve(N, K, A);
  console["log"](ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
