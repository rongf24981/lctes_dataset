(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x9c)) / 0x1 * (parseInt(__DECODE_0__(0xa7)) / 0x2) + parseInt(__DECODE_0__(0x9e)) / 0x3 * (-parseInt(__DECODE_0__(0x9b)) / 0x4) + -parseInt(__DECODE_0__(0xa0)) / 0x5 + parseInt(__DECODE_0__(0xa2)) / 0x6 * (-parseInt(__DECODE_0__(0x9a)) / 0x7) + parseInt(__DECODE_0__(0xa4)) / 0x8 + parseInt(__DECODE_0__(0xa9)) / 0x9 + parseInt(__DECODE_0__(0xa8)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2443f);
function __DECODE_0__(wsLGNO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9a;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wsLGNO, key);
}
function __STRING_ARRAY__() {
  const _0x59d47f = ['4482LTrbvD', 'readFileSync', '2162264ORBYnG', 'log', 'utf8', '4XVMUzA', '3702530tHFmNP', '126369JoOclS', '567YJJWUX', '92rdVJTj', '143263pbyQiZ', 'fill', '12759qkTQmG', '/dev/stdin', '305910vfiJdD', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x59d47f;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0xa5)]((args => {
  const [N, ...P] = args['trim']()['split']('\x0a')[__DECODE_0__(0xa1)](v => v | 0x0);
  const dp = Array(N)[__DECODE_0__(0x9d)](0x0);
  for (let i = 0x0; i < N; i++) {
    dp[P[i] + 0x1] = dp[P[i]] + 0x1;
  }
  return '' + (N - dp['reduce']((a, b) => a > b ? a : b, 0x0));
})(require('fs')[__DECODE_0__(0xa3)](__DECODE_0__(0x9f), __DECODE_0__(0xa6))));
