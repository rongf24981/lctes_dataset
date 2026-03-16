function __STRING_ARRAY__() {
  const _0x2a1ae5 = ['push', '10fGajZd', 'map', '1148516HQUOfz', 'log', 'readFileSync', '85dczBrl', '8xuMSmY', '585666onIXob', 'split', 'utf8', '2404846vweZET', '68322bzPRFd', '1027326xYwyxN', '/dev/stdin', '8609524DmaOeu', 'abs', '152gdSZmB', '473494HjSvNx'];
  __STRING_ARRAY__ = function () {
    return _0x2a1ae5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xe1)) / 0x1 + -parseInt(__DECODE_0__(0xe9)) / 0x2 + -parseInt(__DECODE_0__(0xeb)) / 0x3 * (-parseInt(__DECODE_0__(0xe5)) / 0x4) + parseInt(__DECODE_0__(0xe4)) / 0x5 * (-parseInt(__DECODE_0__(0xea)) / 0x6) + parseInt(__DECODE_0__(0xf0)) / 0x7 * (parseInt(__DECODE_0__(0xef)) / 0x8) + parseInt(__DECODE_0__(0xe6)) / 0x9 * (-parseInt(__DECODE_0__(0xf2)) / 0xa) + -parseInt(__DECODE_0__(0xed)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd5956);
function Main(input) {
  input = input[__DECODE_0__(0xe7)]('\x0a');
  const [N, K] = input[0x0]['split']('\x20')[__DECODE_0__(0xe0)](n => {
    return parseInt(n, 0xa);
  });
  const hn = input[0x1][__DECODE_0__(0xe7)]('\x20')[__DECODE_0__(0xe0)](n => {
    return parseInt(n, 0xa);
  });
  const h_max = Math['pow'](0xa, 0x9);
  console[__DECODE_0__(0xe2)](dp(N, K, hn, h_max));
}
function __DECODE_0__(KuAjoV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KuAjoV, key);
}
Main(require('fs')[__DECODE_0__(0xe3)](__DECODE_0__(0xec), __DECODE_0__(0xe8)));
function dp(N, K, hn, h_max) {
  const dp = [];
  let dp_work = [];
  dp[0x0] = 0x0;
  for (var i = 0x1; i < N; i++) {
    dp['push'](h_max);
    dp_work = [];
    dp_work[__DECODE_0__(0xf1)](dp[i]);
    for (var dp_work_i = 0x1; dp_work_i <= K; dp_work_i++) {
      if (i - dp_work_i < 0x0) {
        continue;
      }
      dp_work['push'](dp[i - dp_work_i] + Math[__DECODE_0__(0xee)](hn[i - dp_work_i] - hn[i]));
    }
    dp[i] = Math['min'](...dp_work);
  }
  return dp[N - 0x1];
}
