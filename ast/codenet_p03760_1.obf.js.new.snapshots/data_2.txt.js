'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1f4)) / 0x1 * (-parseInt(__DECODE_0__(0x1fa)) / 0x2) + -parseInt(__DECODE_0__(0x1f2)) / 0x3 + parseInt(__DECODE_0__(0x1ff)) / 0x4 + parseInt(__DECODE_0__(0x1f7)) / 0x5 * (parseInt(__DECODE_0__(0x1f8)) / 0x6) + -parseInt(__DECODE_0__(0x1f6)) / 0x7 * (parseInt(__DECODE_0__(0x1fb)) / 0x8) + -parseInt(__DECODE_0__(0x1f5)) / 0x9 + parseInt(__DECODE_0__(0x1fd)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2569f);
function __STRING_ARRAY__() {
  const _0x342f8d = ['/dev/stdin', '3847960FQzRxQ', 'split', '306512zlXTBd', 'readFileSync', '279498faFIVv', 'log', '94QQScJR', '444222IWZgkk', '857836wOTaPy', '1313245QhtHwb', '6PKpDLi', 'utf8', '3898dDBrma', '16VONexQ'];
  __STRING_ARRAY__ = function () {
    return _0x342f8d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jmaPty, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1f1;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jmaPty, key);
}
function main(s) {
  s = s[__DECODE_0__(0x1fe)]('\x0a');
  const o = s[0x0][__DECODE_0__(0x1fe)]('');
  const e = s[0x1]['split']('');
  let ans = '';
  for (let i = 0x0; i < o['length'] + e['length']; i++) {
    if (o[i]) {
      ans += o[i];
    }
    if (e[i]) {
      ans += e[i];
    }
  }
  console[__DECODE_0__(0x1f3)](ans);
}
main(require('fs')[__DECODE_0__(0x1f1)](__DECODE_0__(0x1fc), __DECODE_0__(0x1f9)));
