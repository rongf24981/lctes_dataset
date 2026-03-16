'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1ca)) / 0x1 * (-parseInt(__DECODE_0__(0x1c5)) / 0x2) + -parseInt(__DECODE_0__(0x1d3)) / 0x3 + parseInt(__DECODE_0__(0x1c3)) / 0x4 * (-parseInt(__DECODE_0__(0x1d1)) / 0x5) + parseInt(__DECODE_0__(0x1c4)) / 0x6 * (-parseInt(__DECODE_0__(0x1ce)) / 0x7) + -parseInt(__DECODE_0__(0x1cf)) / 0x8 * (-parseInt(__DECODE_0__(0x1c2)) / 0x9) + parseInt(__DECODE_0__(0x1d4)) / 0xa + -parseInt(__DECODE_0__(0x1d0)) / 0xb * (-parseInt(__DECODE_0__(0x1d2)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x23531);
function __STRING_ARRAY__() {
  const _0x8a3b6d = ['255470bMVZAw', 'reduce', '/dev/stdin', 'utf8', 'sort', '1UNIJPE', 'split', 'readFileSync', 'splice', '721Rymlgo', '414728NkLaNR', '1436842rmXjGx', '5ZFqmlg', '48FeFoxH', '650763Yxsdrt', '2620150zUHVXx', 'length', '18JhRyiv', '628808DlDdii', '14076nmGqpZ'];
  __STRING_ARRAY__ = function () {
    return _0x8a3b6d;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const args = input[__DECODE_0__(0x1cb)]('\x0a');
  const K = parseInt(args[0x0][__DECODE_0__(0x1cb)]('\x20')[0x1]);
  const H = args[0x1][__DECODE_0__(0x1cb)]('\x20');
  var ans = H[__DECODE_0__(0x1c9)]()[__DECODE_0__(0x1cd)](0x0, H[__DECODE_0__(0x1c1)] - K)[__DECODE_0__(0x1c6)]((a, x) => a + parseInt(x), 0x0);
  console['log'](ans);
}
function __DECODE_0__(wsTroT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c1;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wsTroT, key);
}
main(require('fs')[__DECODE_0__(0x1cc)](__DECODE_0__(0x1c7), __DECODE_0__(0x1c8)));
