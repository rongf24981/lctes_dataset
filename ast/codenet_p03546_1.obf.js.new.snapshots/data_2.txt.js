function __STRING_ARRAY__() {
  const _0x5bbf3f = ['map', '378554MskntG', 'split', '/dev/stdin', '12HMEqwH', '20TYEgAQ', '26109NuEyTy', '1311496NYvfGy', '28celKBO', '724716BHqxoA', 'log', 'slice', '62674byLgTW', '63Tyufzn', '964734rTVjAs', 'trim', '10VVYuIU', '446634ruwyff', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x5bbf3f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x75)) / 0x1 * (-parseInt(__DECODE_0__(0x7d)) / 0x2) + -parseInt(__DECODE_0__(0x77)) / 0x3 * (parseInt(__DECODE_0__(0x79)) / 0x4) + -parseInt(__DECODE_0__(0x6e)) / 0x5 * (parseInt(__DECODE_0__(0x6c)) / 0x6) + parseInt(__DECODE_0__(0x6b)) / 0x7 * (parseInt(__DECODE_0__(0x78)) / 0x8) + -parseInt(__DECODE_0__(0x6f)) / 0x9 + -parseInt(__DECODE_0__(0x76)) / 0xa * (-parseInt(__DECODE_0__(0x72)) / 0xb) + parseInt(__DECODE_0__(0x7a)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc2745);
function __DECODE_0__(YOBhec, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YOBhec, key);
}
console[__DECODE_0__(0x7b)]((args => {
  const [[H, W], ...tmp] = args[__DECODE_0__(0x6d)]()[__DECODE_0__(0x73)]`\n`['map'](r => r['split']` `[__DECODE_0__(0x71)](v => v | 0x0));
  const A = tmp['slice'](0xa);
  const dp = tmp[__DECODE_0__(0x7c)](0x0, 0xa);
  for (let k = 0x0; k < 0xa; k++) {
    for (let i = 0x0; i < 0xa; i++) {
      for (let j = 0x0; j < 0xa; j++) {
        dp[i][j] = Math['min'](dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }
  let cost = 0x0;
  for (let i = 0x0; i < H; i++) {
    for (let j = 0x0; j < W; j++) {
      if (A[i][j] === -0x1 || A[i][j] === 0x1) {
        continue;
      }
      cost += dp[A[i][j]][0x1];
    }
  }
  return '' + cost;
})(require('fs')[__DECODE_0__(0x70)](__DECODE_0__(0x74), 'utf8')));
