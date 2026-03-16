(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x159)) / 0x1 * (parseInt(__DECODE_0__(0x15e)) / 0x2) + -parseInt(__DECODE_0__(0x163)) / 0x3 * (parseInt(__DECODE_0__(0x15f)) / 0x4) + parseInt(__DECODE_0__(0x160)) / 0x5 + -parseInt(__DECODE_0__(0x156)) / 0x6 * (parseInt(__DECODE_0__(0x15c)) / 0x7) + parseInt(__DECODE_0__(0x164)) / 0x8 * (parseInt(__DECODE_0__(0x161)) / 0x9) + parseInt(__DECODE_0__(0x155)) / 0xa + -parseInt(__DECODE_0__(0x158)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7756e);
function __DECODE_0__(encvGK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x154;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(encvGK, key);
}
console[__DECODE_0__(0x168)](function (args) {
  const tmp = args[__DECODE_0__(0x169)]()[__DECODE_0__(0x162)]('\x0a')[__DECODE_0__(0x166)](r => r[__DECODE_0__(0x162)]('\x20'));
  const N = tmp[__DECODE_0__(0x15a)]()[0x0] | 0x0;
  const p = tmp[0x0][__DECODE_0__(0x166)](parseFloat);
  const dp = Array(N)[__DECODE_0__(0x15d)](0x0)[__DECODE_0__(0x166)](r => Array(N + 0x1)['fill'](0x0));
  dp[0x0][0x0] = 0x1 - p[0x0];
  dp[0x0][0x1] = p[0x0];
  for (let i = 0x0; i < N - 0x1; i++) {
    for (let j = 0x0; j <= i + 0x1; j++) {
      dp[i + 0x1][j + 0x1] += dp[i][j] * p[i + 0x1];
      dp[i + 0x1][j] += dp[i][j] * (0x1 - p[i + 0x1]);
    }
  }
  return dp[N - 0x1][__DECODE_0__(0x157)]((N + 0x1) / 0x2)[__DECODE_0__(0x167)]((a, b) => a + b)['toString']();
}(require('fs')[__DECODE_0__(0x165)](__DECODE_0__(0x154), __DECODE_0__(0x15b))));
function __STRING_ARRAY__() {
  const _0x3916c9 = ['/dev/stdin', '4269520SFQUHu', '6pGLFDt', 'slice', '2334123UtkItL', '1271CeVySz', 'shift', 'utf8', '4541453bNeSup', 'fill', '1174heqgld', '3808XnjeRE', '1188290auFDfA', '11331PSXybx', 'split', '2862AFLMFz', '5384vtTurj', 'readFileSync', 'map', 'reduce', 'log', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x3916c9;
  };
  return __STRING_ARRAY__();
}
