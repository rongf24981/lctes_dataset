'use strict';

function __STRING_ARRAY__() {
  const _0x3fd7bb = ['91449KvUhoa', '20418mvXbGo', 'utf8', 'split', '59NMkzUW', 'map', '3187162fdvpCw', '/dev/stdin', '600114mRSMoJ', '930rOTWQd', '48PnnMub', '63wBHHFC', 'readFileSync', 'log', '11192JedyfQ', '5155738JlcInz', '13672744edkwih', '55rRdoEq'];
  __STRING_ARRAY__ = function () {
    return _0x3fd7bb;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1ef)) / 0x1 * (-parseInt(__DECODE_0__(0x1ec)) / 0x2) + parseInt(__DECODE_0__(0x1e4)) / 0x3 * (parseInt(__DECODE_0__(0x1e7)) / 0x4) + parseInt(__DECODE_0__(0x1ea)) / 0x5 * (parseInt(__DECODE_0__(0x1e1)) / 0x6) + parseInt(__DECODE_0__(0x1e8)) / 0x7 + parseInt(__DECODE_0__(0x1e9)) / 0x8 + -parseInt(__DECODE_0__(0x1eb)) / 0x9 * (parseInt(__DECODE_0__(0x1e2)) / 0xa) + -parseInt(__DECODE_0__(0x1f1)) / 0xb * (parseInt(__DECODE_0__(0x1e3)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdb512);
function main(input) {
  input = input[__DECODE_0__(0x1ee)]('\x20')[__DECODE_0__(0x1f0)](v => ~~v);
  const n = input[0x0];
  const m = input[0x1];
  const limit = 0x3b9aca00 + 0x7;
  if (Math['abs'](n - m) >= 0x2) {
    console[__DECODE_0__(0x1e6)](0x0);
    return;
  }
  let nn = 0x1;
  for (let i = 0x2; i <= n; i++) {
    nn *= i;
    if (nn >= limit) {
      nn = nn % limit;
    }
  }
  for (let i = 0x2; i <= m; i++) {
    nn *= i;
    if (nn >= limit) {
      nn = nn % limit;
    }
  }
  let tmp = nn % limit;
  if (n == m) {
    tmp = 0x2 * tmp;
  }
  const ans = tmp % limit;
  console[__DECODE_0__(0x1e6)](ans);
}
function __DECODE_0__(Srrepq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Srrepq, key);
}
main(require('fs')[__DECODE_0__(0x1e5)](__DECODE_0__(0x1e0), __DECODE_0__(0x1ed)));
