'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xee)) / 0x1 * (-parseInt(__DECODE_0__(0xe3)) / 0x2) + -parseInt(__DECODE_0__(0xed)) / 0x3 * (-parseInt(__DECODE_0__(0xe0)) / 0x4) + parseInt(__DECODE_0__(0xe1)) / 0x5 * (-parseInt(__DECODE_0__(0xe9)) / 0x6) + -parseInt(__DECODE_0__(0xe4)) / 0x7 * (parseInt(__DECODE_0__(0xec)) / 0x8) + -parseInt(__DECODE_0__(0xe2)) / 0x9 + -parseInt(__DECODE_0__(0xe8)) / 0xa + parseInt(__DECODE_0__(0xea)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbfad7);
function main(input) {
  const inputRows = input[__DECODE_0__(0xeb)]('\x0a');
  const d = parseInt(inputRows[0x0]);
  let cStrArray = inputRows[0x1][__DECODE_0__(0xeb)]('\x20');
  const c = cStrArray[__DECODE_0__(0xe7)](str => parseInt(str));
  let s = [];
  for (let i = 0x2; i < inputRows[__DECODE_0__(0xe6)]; i++) {
    s[__DECODE_0__(0xe5)]([]);
    const tmpRow = inputRows[i]['split']('\x20');
    for (let j = 0x0; j < tmpRow[__DECODE_0__(0xe6)]; j++) {
      s[i - 0x2][__DECODE_0__(0xe5)](parseInt(tmpRow[j]));
    }
  }
  let t = [];
  for (let i = 0x0; i < s['length']; i++) {
    let tmpMax = s[i][0x0];
    let index = 0x0;
    for (let j = 0x1; j < s[i][__DECODE_0__(0xe6)]; j++) {
      if (s[i][j] > tmpMax) {
        index = j;
        tmpMax = s[i][j];
      }
    }
    t['push'](index + 0x1);
  }
  for (let i = 0x0; i < t[__DECODE_0__(0xe6)]; i++) {
    console['log'](t[i]);
  }
}
function __STRING_ARRAY__() {
  const _0x13866f = ['500494rsnoLR', '49bvIVbv', 'push', 'length', 'map', '872540ZMnADe', '6XQtVIs', '36857040JhWCpv', 'split', '1763896yrPZfU', '3IpDXAe', '6oXXgie', '4489196YTyPUD', '216645zYMPKI', '4611186pRBVWV'];
  __STRING_ARRAY__ = function () {
    return _0x13866f;
  };
  return __STRING_ARRAY__();
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function __DECODE_0__(rmXjgW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rmXjgW, key);
}
main(input);
