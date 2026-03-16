'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x8a)) / 0x1 + parseInt(__DECODE_0__(0x8f)) / 0x2 + -parseInt(__DECODE_0__(0x8e)) / 0x3 * (parseInt(__DECODE_0__(0x95)) / 0x4) + parseInt(__DECODE_0__(0x93)) / 0x5 + parseInt(__DECODE_0__(0x99)) / 0x6 + parseInt(__DECODE_0__(0x91)) / 0x7 + -parseInt(__DECODE_0__(0x96)) / 0x8 * (parseInt(__DECODE_0__(0x9a)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x24916);
function __DECODE_0__(YCGefG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x88;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YCGefG, key);
}
const main = arg => {
  const input = arg[__DECODE_0__(0x90)]()[__DECODE_0__(0x98)]('\x0a');
  const n = parseInt(input[0x0]);
  const arr = input[0x1][__DECODE_0__(0x98)]('\x20')[__DECODE_0__(0x92)](n => parseInt(n));
  function cal(i, dst) {
    if (i === -0x1) {
      return 0x0;
    }
    const results = [];
    for (const j of dst) {
      const next_dst = dst[__DECODE_0__(0x97)](v => v !== j);
      const abs = i > j ? i - j : j - i;
      const val = arr[i] * abs + cal(i - 0x1, next_dst);
      results[__DECODE_0__(0x89)](val);
    }
    return Math[__DECODE_0__(0x94)](...results);
  }
  console['log'](cal(n - 0x1, [...Array(n)[__DECODE_0__(0x88)]()]));
};
function __STRING_ARRAY__() {
  const _0x23e38a = ['keys', 'push', '47221JVnFGJ', 'readFileSync', '/dev/stdin', 'utf8', '5433zegYjv', '385510BrIOxQ', 'trim', '1195516kLOcgf', 'map', '1370815frGeMa', 'max', '92zkByBq', '13408nYeoyN', 'filter', 'split', '367584nNbjwZ', '2979XHwiKw'];
  __STRING_ARRAY__ = function () {
    return _0x23e38a;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x8b)](__DECODE_0__(0x8c), __DECODE_0__(0x8d)));
