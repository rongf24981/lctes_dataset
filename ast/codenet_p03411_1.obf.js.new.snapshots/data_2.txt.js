function __DECODE_0__(IyYssE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cd;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IyYssE, key);
}
function __STRING_ARRAY__() {
  const _0x50996f = ['515slkpgt', '10126776bZmqIL', 'utf8', '440077RaSeCw', '132170LHiaAM', '2330vxPoIo', '/dev/stdin', '3125451CiDtee', 'trim', '1119472nBsYDP', '7UuhkeI', 'push', 'split', 'map', '152mFmJlv', '492MwUcAW', 'splice', '151380HIBSLo', 'length', '960JMwsTR'];
  __STRING_ARRAY__ = function () {
    return _0x50996f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1d6)) / 0x1 * (-parseInt(__DECODE_0__(0x1db)) / 0x2) + -parseInt(__DECODE_0__(0x1dd)) / 0x3 + parseInt(__DECODE_0__(0x1d0)) / 0x4 * (parseInt(__DECODE_0__(0x1da)) / 0x5) + parseInt(__DECODE_0__(0x1d7)) / 0x6 * (parseInt(__DECODE_0__(0x1e0)) / 0x7) + -parseInt(__DECODE_0__(0x1df)) / 0x8 + -parseInt(__DECODE_0__(0x1d3)) / 0x9 * (-parseInt(__DECODE_0__(0x1d5)) / 0xa) + parseInt(__DECODE_0__(0x1d9)) / 0xb * (-parseInt(__DECODE_0__(0x1d1)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd8103);
console['log']((args => {
  const [[N], ...tmp] = args[__DECODE_0__(0x1de)]()[__DECODE_0__(0x1ce)]('\x0a')[__DECODE_0__(0x1cf)](r => r[__DECODE_0__(0x1ce)]('\x20')[__DECODE_0__(0x1cf)](v => v | 0x0));
  const rp = [];
  const bp = [];
  for (let i = 0x0; i < N; i++) {
    rp[__DECODE_0__(0x1cd)](tmp[i]);
    bp['push'](tmp[N + i]);
  }
  bp['sort'](([a], [b]) => a - b);
  let count = 0x0;
  const test = [];
  for (let i = 0x0; i < N; i++) {
    const [bx, by] = bp[i];
    let max = [-0x1, -0x1];
    for (let j = 0x0; j < rp[__DECODE_0__(0x1d4)]; j++) {
      const [rx, ry] = rp[j];
      if (bx < rx) {
        continue;
      }
      if (by > ry && ry > max[0x1]) {
        max = [j, ry];
      }
    }
    if (max[0x1] >= 0x0) {
      rp[__DECODE_0__(0x1d2)](max[0x0], 0x1);
      count++;
    }
  }
  return '' + count;
})(require('fs')['readFileSync'](__DECODE_0__(0x1dc), __DECODE_0__(0x1d8))));
