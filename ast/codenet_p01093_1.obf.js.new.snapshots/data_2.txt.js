(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x93)) / 0x1 * (-parseInt(__DECODE_0__(0x98)) / 0x2) + -parseInt(__DECODE_0__(0x9c)) / 0x3 * (parseInt(__DECODE_0__(0x96)) / 0x4) + -parseInt(__DECODE_0__(0x9a)) / 0x5 * (parseInt(__DECODE_0__(0x94)) / 0x6) + -parseInt(__DECODE_0__(0x9d)) / 0x7 + parseInt(__DECODE_0__(0x9b)) / 0x8 + -parseInt(__DECODE_0__(0x92)) / 0x9 + -parseInt(__DECODE_0__(0x8f)) / 0xa * (-parseInt(__DECODE_0__(0x95)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x63ad1);
function __STRING_ARRAY__() {
  const _0x379b24 = ['readFileSync', 'shift', '237210dytCJO', 'trim', 'split', '5180085pFfGnW', '1756GIKvxf', '4770324ODQJAU', '506fPWpmf', '8yVhrXO', 'map', '862WRIBYX', '/dev/stdin', '5BVMrha', '2412632WwQmMI', '83670CrVKbJ', '2204363NPgHqo', 'utf8', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x379b24;
  };
  return __STRING_ARRAY__();
}
const input = require('fs')[__DECODE_0__(0x8d)](__DECODE_0__(0x99), __DECODE_0__(0x8b));
const lines = input[__DECODE_0__(0x90)]()[__DECODE_0__(0x91)]('\x0a');
function __DECODE_0__(qQuCRJ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qQuCRJ, key);
}
while (line = lines[__DECODE_0__(0x8e)]()) {
  const numbers = line[__DECODE_0__(0x91)]('\x20')['map'](Number);
  if (numbers[__DECODE_0__(0x8c)] > 0x1) {
    const diffList = [];
    numbers['map']((num1, ind1) => {
      numbers[__DECODE_0__(0x97)]((num2, ind2) => {
        if (ind1 !== ind2) {
          const diff = Math['abs'](num1 - num2);
          const pair = num1 + '\x20' + num2;
          diffList['push']([pair, diff]);
        }
      });
    });
    const sorted = diffList['sort']((p1, p2) => p1[0x1] - p2[0x1])[0x0];
    console['log'](sorted[0x1]);
  }
}
