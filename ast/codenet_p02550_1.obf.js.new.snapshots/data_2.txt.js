(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1d0)) / 0x1 + -parseInt(__DECODE_0__(0x1c4)) / 0x2 + -parseInt(__DECODE_0__(0x1c2)) / 0x3 * (-parseInt(__DECODE_0__(0x1c5)) / 0x4) + parseInt(__DECODE_0__(0x1cb)) / 0x5 + parseInt(__DECODE_0__(0x1d4)) / 0x6 * (parseInt(__DECODE_0__(0x1cc)) / 0x7) + parseInt(__DECODE_0__(0x1c9)) / 0x8 * (parseInt(__DECODE_0__(0x1c7)) / 0x9) + -parseInt(__DECODE_0__(0x1ca)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x34e3c);
const input = require('fs')[__DECODE_0__(0x1cf)](__DECODE_0__(0x1c6), 'utf8');
function __DECODE_0__(WCrFTl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WCrFTl, key);
}
const lines = input[__DECODE_0__(0x1c8)]('\x0a');
const [N, X, M] = lines[0x0][__DECODE_0__(0x1c8)]('\x20')[__DECODE_0__(0x1d1)](Number);
let a = X;
const map = {};
const loop = [];
const pre = [a];
for (let i = 0x1; i < N; i++) {
  a = a * a % M;
  if (map[a] === 0x2) {
    break;
  } else {
    if (map[a]) {
      loop['push'](a);
      pre[__DECODE_0__(0x1d3)]();
    } else {
      pre['push'](a);
    }
  }
  map[a] = (map[a] || 0x0) + 0x1;
}
function __STRING_ARRAY__() {
  const _0x36be30 = ['7BctaVd', 'reduce', 'length', 'readFileSync', '226946nctVgW', 'map', 'push', 'pop', '744456pvmgxU', 'floor', '211215mdeqTj', 'log', '22090RgOZuM', '20PBmWJB', '/dev/stdin', '18AKbZEn', 'split', '1710056oIwDqn', '5068170HGVSKB', '289145xuuzFw'];
  __STRING_ARRAY__ = function () {
    return _0x36be30;
  };
  return __STRING_ARRAY__();
}
const suf = [];
for (let i = 0x0; i < (N - pre[__DECODE_0__(0x1ce)]) % (loop[__DECODE_0__(0x1ce)] || 0x1); i++) {
  suf[__DECODE_0__(0x1d2)](loop[i]);
}
const sum = loop['reduce']((a, b) => a + b, 0x0);
const lt = loop[__DECODE_0__(0x1ce)] ? Math[__DECODE_0__(0x1d5)]((N - pre[__DECODE_0__(0x1ce)]) / loop[__DECODE_0__(0x1ce)]) : 0x0;
console[__DECODE_0__(0x1c3)](pre[__DECODE_0__(0x1cd)]((a, b) => a + b, 0x0) + sum * lt + suf[__DECODE_0__(0x1cd)]((a, b) => a + b, 0x0));
