'use strict';

const a0_0x463162 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x418891 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x418891(0x1ca)) / 0x1 * (-parseInt(_0x418891(0x1c5)) / 0x2) + -parseInt(_0x418891(0x1d3)) / 0x3 + parseInt(_0x418891(0x1c3)) / 0x4 * (-parseInt(_0x418891(0x1d1)) / 0x5) + parseInt(_0x418891(0x1c4)) / 0x6 * (-parseInt(_0x418891(0x1ce)) / 0x7) + -parseInt(_0x418891(0x1cf)) / 0x8 * (-parseInt(_0x418891(0x1c2)) / 0x9) + parseInt(_0x418891(0x1d4)) / 0xa + -parseInt(_0x418891(0x1d0)) / 0xb * (-parseInt(_0x418891(0x1d2)) / 0xc);
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
  const _0x2c482c = __DECODE_0__;
  const args = input[_0x2c482c(0x1cb)]('\x0a');
  const K = parseInt(args[0x0][_0x2c482c(0x1cb)]('\x20')[0x1]);
  const H = args[0x1][_0x2c482c(0x1cb)]('\x20');
  var ans = H[_0x2c482c(0x1c9)]()[_0x2c482c(0x1cd)](0x0, H[_0x2c482c(0x1c1)] - K)[_0x2c482c(0x1c6)]((a, x) => a + parseInt(x), 0x0);
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
main(require('fs')[a0_0x463162(0x1cc)](a0_0x463162(0x1c7), a0_0x463162(0x1c8)));
