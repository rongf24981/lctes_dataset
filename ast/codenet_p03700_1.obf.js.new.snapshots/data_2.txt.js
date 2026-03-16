(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x83)) / 0x1 + parseInt(__DECODE_0__(0x77)) / 0x2 + -parseInt(__DECODE_0__(0x7b)) / 0x3 * (parseInt(__DECODE_0__(0x78)) / 0x4) + -parseInt(__DECODE_0__(0x7c)) / 0x5 * (-parseInt(__DECODE_0__(0x76)) / 0x6) + parseInt(__DECODE_0__(0x80)) / 0x7 * (parseInt(__DECODE_0__(0x79)) / 0x8) + -parseInt(__DECODE_0__(0x81)) / 0x9 + parseInt(__DECODE_0__(0x7e)) / 0xa * (-parseInt(__DECODE_0__(0x82)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2bfba);
function __DECODE_0__(euTFdx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x74;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(euTFdx, key);
}
console['log']((args => {
  const [[N, A, B], ...h] = args['trim']()[__DECODE_0__(0x75)]`\n`[__DECODE_0__(0x74)](r => r['split']` `[__DECODE_0__(0x74)](v => v | 0x0));
  let ok = Math[__DECODE_0__(0x7a)](0x3b9aca00 / B);
  let ng = 0x0;
  bisect: while (ok > ng + 0x1) {
    let m = ok + ng >> 0x1;
    let k = m;
    for (let i = 0x0; i < N; i++) {
      let r = h[i] - m * B;
      if (r <= 0x0) {
        continue;
      }
      k -= Math[__DECODE_0__(0x7a)](r / (A - B));
    }
    if (k >= 0x0) {
      ok = m;
    } else {
      ng = m;
    }
  }
  return '' + ok;
})(require('fs')['readFileSync'](__DECODE_0__(0x7d), __DECODE_0__(0x7f))));
function __STRING_ARRAY__() {
  const _0x462788 = ['3nNqJKW', '7400dYaAEF', '/dev/stdin', '729580MYEaoA', 'utf8', '14IiWchs', '2748285jJRyxj', '33cLnKuB', '57586WTsNiR', 'map', 'split', '978FqlWtG', '334244FyozEZ', '455788TaJYot', '1409568atyUZn', 'ceil'];
  __STRING_ARRAY__ = function () {
    return _0x462788;
  };
  return __STRING_ARRAY__();
}
