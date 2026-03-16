function __STRING_ARRAY__() {
  const _0x5a2d2b = ['2565120MpjGXg', '282TAsoAu', '2259513qPQBHV', '27986TLsFNe', '4168wiKAOY', '8XDjkEE', 'forEach', '1177236KNMUUo', 'readFileSync', 'map', 'utf8', '2335800VMlkwQ', '68ZBcrUs', '/dev/stdin', '1398528kpYbAv', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x5a2d2b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x139)) / 0x1 * (parseInt(__DECODE_0__(0x131)) / 0x2) + -parseInt(__DECODE_0__(0x133)) / 0x3 + -parseInt(__DECODE_0__(0x13c)) / 0x4 + parseInt(__DECODE_0__(0x135)) / 0x5 + -parseInt(__DECODE_0__(0x136)) / 0x6 * (-parseInt(__DECODE_0__(0x138)) / 0x7) + parseInt(__DECODE_0__(0x13a)) / 0x8 * (parseInt(__DECODE_0__(0x137)) / 0x9) + parseInt(__DECODE_0__(0x130)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x452ea);
const input = require('fs')[__DECODE_0__(0x13d)](__DECODE_0__(0x132), __DECODE_0__(0x13f));
const arr = input['split'](/\n/);
const numbers = arr[0x1][__DECODE_0__(0x134)]('\x20')[__DECODE_0__(0x13e)](Number);
let min = numbers[0x0];
function __DECODE_0__(XkErVX, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x130;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XkErVX, key);
}
let max = numbers[0x0];
let sum = 0x0;
numbers[__DECODE_0__(0x13b)](number => {
  if (min > number) {
    min = number;
  }
  if (max < number) {
    max = number;
  }
  sum += number;
});
console['log'](min + '\x20' + max + '\x20' + sum);
