function __DECODE_0__(dHlNId, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfd;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dHlNId, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x10d)) / 0x1 + -parseInt(__DECODE_0__(0x101)) / 0x2 * (-parseInt(__DECODE_0__(0x104)) / 0x3) + -parseInt(__DECODE_0__(0xfe)) / 0x4 * (parseInt(__DECODE_0__(0x10b)) / 0x5) + parseInt(__DECODE_0__(0x106)) / 0x6 * (-parseInt(__DECODE_0__(0x10c)) / 0x7) + -parseInt(__DECODE_0__(0xfd)) / 0x8 * (parseInt(__DECODE_0__(0x10f)) / 0x9) + -parseInt(__DECODE_0__(0x109)) / 0xa + parseInt(__DECODE_0__(0x10a)) / 0xb * (parseInt(__DECODE_0__(0x103)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe637e);
console[__DECODE_0__(0x100)]((args => {
  const [[N], D, [M], T] = args[__DECODE_0__(0x107)]()[__DECODE_0__(0xff)]('\x0a')[__DECODE_0__(0x105)](r => r['split']('\x20')[__DECODE_0__(0x105)](v => v | 0x0));
  D[__DECODE_0__(0x108)]((a, b) => a - b);
  T['sort']((a, b) => a - b);
  let j = -0x1;
  Q: for (let i = 0x0; i < M; i++) {
    while (++j < N) {
      if (D[j] > T[i]) {
        return 'NO';
      }
      if (D[j] === T[i]) {
        continue Q;
      }
    }
    return 'NO';
  }
  return __DECODE_0__(0x102);
})(require('fs')['readFileSync'](__DECODE_0__(0x10e), 'utf8')));
function __STRING_ARRAY__() {
  const _0x4b95e8 = ['4451679ipLNQa', 'map', '12gykjUO', 'trim', 'sort', '8401190edJGlD', '93731tSaPiw', '6416810zoerHu', '376117sfkqoM', '1325716uuScqM', '/dev/stdin', '315szxFru', '312104XAJBdJ', '4WhcOlk', 'split', 'log', '2fTPlpq', 'YES', '2436FCYokk'];
  __STRING_ARRAY__ = function () {
    return _0x4b95e8;
  };
  return __STRING_ARRAY__();
}
