'use strict';

function __STRING_ARRAY__() {
  const _0x5dad5a = ['160584ONFpVo', 'map', '/dev/stdin', '6535290MLbvMI', '2JFTlnS', '31956GQCJIY', 'split', '258aIMRSz', '1265520mnvQFT', '50489iYZJZo', '4153635TgBUCF', '15pqrxPW', 'log', '56qINWri', '1892qStonp', '13196BBxNWo'];
  __STRING_ARRAY__ = function () {
    return _0x5dad5a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x11a)) / 0x1 * (-parseInt(__DECODE_0__(0x115)) / 0x2) + parseInt(__DECODE_0__(0x118)) / 0x3 * (parseInt(__DECODE_0__(0x110)) / 0x4) + -parseInt(__DECODE_0__(0x11c)) / 0x5 * (-parseInt(__DECODE_0__(0x119)) / 0x6) + -parseInt(__DECODE_0__(0x11e)) / 0x7 * (-parseInt(__DECODE_0__(0x111)) / 0x8) + -parseInt(__DECODE_0__(0x11b)) / 0x9 + -parseInt(__DECODE_0__(0x114)) / 0xa + -parseInt(__DECODE_0__(0x11f)) / 0xb * (-parseInt(__DECODE_0__(0x116)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5a399);
function __DECODE_0__(BalTYi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x110;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BalTYi, key);
}
function main(s) {
  const a = s[__DECODE_0__(0x117)]('\x0a')[0x1][__DECODE_0__(0x117)]('\x20')[__DECODE_0__(0x112)](n => Number(n));
  let ans = 0x0;
  for (let n of a) {
    while (n % 0x2 === 0x0) {
      n = n / 0x2;
      ans += 0x1;
    }
  }
  console[__DECODE_0__(0x11d)](ans);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x113), 'utf8'));
