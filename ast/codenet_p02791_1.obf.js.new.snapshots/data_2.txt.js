'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1c3)) / 0x1 * (parseInt(__DECODE_0__(0x1b8)) / 0x2) + parseInt(__DECODE_0__(0x1c2)) / 0x3 + -parseInt(__DECODE_0__(0x1b6)) / 0x4 + -parseInt(__DECODE_0__(0x1b9)) / 0x5 * (-parseInt(__DECODE_0__(0x1c4)) / 0x6) + parseInt(__DECODE_0__(0x1c1)) / 0x7 * (-parseInt(__DECODE_0__(0x1c6)) / 0x8) + -parseInt(__DECODE_0__(0x1c0)) / 0x9 * (parseInt(__DECODE_0__(0x1b5)) / 0xa) + parseInt(__DECODE_0__(0x1bb)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6778c);
function Main(s) {
  s = s['trim']()[__DECODE_0__(0x1c5)]('\x0a');
  const n = Number(s[0x0]);
  const p = s[0x1][__DECODE_0__(0x1bf)]()[__DECODE_0__(0x1c5)]('\x20')['map'](Number);
  let cnt = 0x0;
  for (let i = 0x1; i <= n; i++) {
    let flg = !![];
    let t = p[__DECODE_0__(0x1b7)](0x0, i);
    let x = 0x0;
    while (x < t[__DECODE_0__(0x1bd)] - 0x1) {
      if (t[x] < p[i - 0x1]) {
        flg = ![];
      }
      x++;
    }
    if (flg) {
      cnt++;
    }
  }
  console[__DECODE_0__(0x1be)](cnt);
}
Main(require('fs')[__DECODE_0__(0x1ba)]('/dev/stdin', __DECODE_0__(0x1bc)));
function __DECODE_0__(uBATma, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b5;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uBATma, key);
}
function __STRING_ARRAY__() {
  const _0x57696a = ['readFileSync', '5136868EpdNBC', 'utf8', 'length', 'log', 'trim', '1103850cZRIjJ', '543032pcbaMR', '600402LVDRTv', '117479Yaaurr', '6msqNOP', 'split', '40BrQCYM', '50rAYhOB', '2158892AeSSLe', 'slice', '12UllYrY', '2963385fIrjod'];
  __STRING_ARRAY__ = function () {
    return _0x57696a;
  };
  return __STRING_ARRAY__();
}
