const a0_0x3fbbf8 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x19bf9e = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x19bf9e(0x134)) / 0x1 * (-parseInt(_0x19bf9e(0x13e)) / 0x2) + -parseInt(_0x19bf9e(0x13b)) / 0x3 * (-parseInt(_0x19bf9e(0x138)) / 0x4) + -parseInt(_0x19bf9e(0x13c)) / 0x5 * (-parseInt(_0x19bf9e(0x133)) / 0x6) + parseInt(_0x19bf9e(0x12f)) / 0x7 + -parseInt(_0x19bf9e(0x130)) / 0x8 * (-parseInt(_0x19bf9e(0x137)) / 0x9) + parseInt(_0x19bf9e(0x131)) / 0xa + -parseInt(_0x19bf9e(0x13d)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdbd2d);
const input = require('fs')[a0_0x3fbbf8(0x139)]('/dev/stdin', a0_0x3fbbf8(0x132));
const numbers = input[a0_0x3fbbf8(0x135)]('\x20');
function __DECODE_0__(LYmzlH, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LYmzlH, key);
}
let sum = 0x0;
function __STRING_ARRAY__() {
  const _0x1f42fd = ['readFileSync', 'forEach', '15903JUEzcl', '8752340EpLEZw', '64269117FyhuLY', '614zsTmei', '10489514AnsrZZ', '16oRJNJx', '7007130LkNcGb', 'utf8', '6iVYWrR', '5189CjaXDQ', 'split', 'length', '2729817MSnTaA', '448EKIUQc'];
  __STRING_ARRAY__ = function () {
    return _0x1f42fd;
  };
  return __STRING_ARRAY__();
}
numbers[a0_0x3fbbf8(0x13a)](function (number) {
  sum += Number(number);
});
console['log'](Math['ceil'](sum / numbers[a0_0x3fbbf8(0x136)]));
