(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1ad)) / 0x1 * (-parseInt(__DECODE_0__(0x1a2)) / 0x2) + -parseInt(__DECODE_0__(0x1a4)) / 0x3 * (-parseInt(__DECODE_0__(0x19a)) / 0x4) + parseInt(__DECODE_0__(0x1ae)) / 0x5 + parseInt(__DECODE_0__(0x19c)) / 0x6 * (-parseInt(__DECODE_0__(0x1a7)) / 0x7) + -parseInt(__DECODE_0__(0x1aa)) / 0x8 * (parseInt(__DECODE_0__(0x19f)) / 0x9) + -parseInt(__DECODE_0__(0x1a5)) / 0xa * (parseInt(__DECODE_0__(0x19e)) / 0xb) + parseInt(__DECODE_0__(0x1a8)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9ccdb);
function __STRING_ARRAY__() {
  var _0x26b5f5 = ['1516291yWgGqs', '14533320QdpMKP', 'split', '4939984cQuGwd', 'map', 'from', '3syJbFT', '5556275SYDpae', 'sort', 'utf8', '20lNEfmw', 'max', '6TGXscf', 'log', '1307944VuDshM', '18zZxqBM', '/dev/stdin', 'trim', '20454ZHWouB', 'push', '557922yWtELS', '100bUgVus', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x26b5f5;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0x1a1)]()[__DECODE_0__(0x1a9)]('\x0a')[__DECODE_0__(0x1ab)](function (x) {
    return x[__DECODE_0__(0x1a9)]('\x20');
  });
  var N = parseInt(input[0x0][0x0], 0xa);
  var T = parseInt(input[0x0][0x1], 0xa);
  var arr_AB = [];
  for (var i = 0x0; i < N; i++) {
    arr_AB[__DECODE_0__(0x1a3)](input[i + 0x1][__DECODE_0__(0x1ab)](e => parseInt(e, 0xa)));
  }
  arr_AB[__DECODE_0__(0x1af)]((a, b) => a[0x0] - b[0x0]);
  var dp = [];
  var Ai;
  var Bi;
  dp[__DECODE_0__(0x1a3)](Array[__DECODE_0__(0x1ac)]({
    'length': T
  }, () => [0x0, 0x0]));
  for (var i = 0x0; i < N; i++) {
    dp[__DECODE_0__(0x1a3)]([]);
    Ai = arr_AB[i][0x0];
    Bi = arr_AB[i][0x1];
    for (var j = 0x0; j < T; j++) {
      dp[i + 0x1]['push']([0x0, 0x0]);
      if (Ai <= j) {
        dp[i + 0x1][j][0x0] = Math[__DECODE_0__(0x19b)](dp[i][j][0x0], dp[i][j - Ai][0x0] + Bi);
      } else {
        dp[i + 0x1][j][0x0] = dp[i][j][0x0];
      }
      dp[i + 0x1][j][0x1] = Math['max'](dp[i][j][0x1], dp[i][j][0x0] + Bi);
    }
  }
  console[__DECODE_0__(0x19d)](dp[N][T - 0x1][0x1]);
}
function __DECODE_0__(liOHbU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x199;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(liOHbU, key);
}
Main(require('fs')[__DECODE_0__(0x1a6)](__DECODE_0__(0x1a0), __DECODE_0__(0x199)));
