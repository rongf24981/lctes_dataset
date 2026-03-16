function __DECODE_0__(OAMmyE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1f0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OAMmyE, key);
}
function __STRING_ARRAY__() {
  const _0xe5801 = ['max', 'push', 'fill', '4462434WLggfy', 'readFileSync', 'trim', '2991190KQJegF', '82zmCvvl', '7jMMrOP', 'join', 'log', 'split', '1212715XkTXxU', '2093176BeQdtH', '1051560gpkrMl', '778456pUvGbG', 'map', 'utf8', '46533NaalwO', '18MLyzBU'];
  __STRING_ARRAY__ = function () {
    return _0xe5801;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1f3)) / 0x1 + parseInt(__DECODE_0__(0x1ff)) / 0x2 * (parseInt(__DECODE_0__(0x1f6)) / 0x3) + parseInt(__DECODE_0__(0x1f2)) / 0x4 + -parseInt(__DECODE_0__(0x1f0)) / 0x5 + -parseInt(__DECODE_0__(0x1fb)) / 0x6 * (parseInt(__DECODE_0__(0x200)) / 0x7) + parseInt(__DECODE_0__(0x1f1)) / 0x8 * (-parseInt(__DECODE_0__(0x1f7)) / 0x9) + parseInt(__DECODE_0__(0x1fe)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x71f98);
console[__DECODE_0__(0x202)](function (args) {
  const tmp = args[__DECODE_0__(0x1fd)]()[__DECODE_0__(0x203)]('\x0a')[__DECODE_0__(0x1f4)](r => r[__DECODE_0__(0x203)]('\x20')[__DECODE_0__(0x1f4)](v => v | 0x0));
  const N = tmp[0x0][0x0];
  const Q = tmp[N + 0x1][0x0];
  const V = [0x0];
  const W = [0x0];
  const v = [];
  const L = [];
  for (let i = 0x1; i <= N; i++) {
    V[__DECODE_0__(0x1f9)](tmp[i][0x0]);
    W[__DECODE_0__(0x1f9)](tmp[i][0x1]);
  }
  let Lmax = 0x0;
  for (let i = 0x1; i <= Q; i++) {
    v[__DECODE_0__(0x1f9)](tmp[N + 0x1 + i][0x0]);
    L[__DECODE_0__(0x1f9)](tmp[N + 0x1 + i][0x1]);
    if (L[i - 0x1] > Lmax) {
      Lmax = L[i - 0x1];
    }
  }
  const dp = [Array(Lmax + 0x1)[__DECODE_0__(0x1fa)](0x0)];
  for (let i = 0x1; i <= N; i++) {
    dp[i] = [];
    for (let w = 0x0; w <= Lmax; w++) {
      if (w >= W[i]) {
        dp[i][w] = Math[__DECODE_0__(0x1f8)](dp[i >> 0x1][w - W[i]] + V[i], dp[i >> 0x1][w]);
      } else {
        dp[i][w] = dp[i >> 0x1][w];
      }
    }
  }
  const max = [];
  for (let i = 0x0; i < Q; i++) {
    max['push'](dp[v[i]][L[i]]);
  }
  return max[__DECODE_0__(0x201)]('\x0a');
}(require('fs')[__DECODE_0__(0x1fc)]('/dev/stdin', __DECODE_0__(0x1f5))));
