'use strict';

function __STRING_ARRAY__() {
  const _0x59943c = ['100vZatGX', '41739ATcbQC', '1602570KURKjc', '68488HKSSKs', '88195UvFcrE', 'length', '6111917hZsFgF', 'utf8', 'floor', 'log', '8dbcxia', 'split', '10735389VYaGmy', 'trim', '35qKHBBD', '9883140JKJlQo'];
  __STRING_ARRAY__ = function () {
    return _0x59943c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x11b)) / 0x1 * (-parseInt(__DECODE_0__(0x120)) / 0x2) + parseInt(__DECODE_0__(0x11e)) / 0x3 + parseInt(__DECODE_0__(0x11d)) / 0x4 * (parseInt(__DECODE_0__(0x121)) / 0x5) + parseInt(__DECODE_0__(0x11f)) / 0x6 + parseInt(__DECODE_0__(0x123)) / 0x7 + parseInt(__DECODE_0__(0x127)) / 0x8 * (parseInt(__DECODE_0__(0x129)) / 0x9) + -parseInt(__DECODE_0__(0x11c)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x92bf9);
function __DECODE_0__(yBfOim, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yBfOim, key);
}
const main = arg => {
  arg = arg[__DECODE_0__(0x12a)]()[__DECODE_0__(0x128)]('\x0a');
  const S = arg[0x0][__DECODE_0__(0x128)]('');
  const K = parseInt(arg[0x1]);
  let streakS = 0x0;
  for (let i = 0x1; i < S[__DECODE_0__(0x122)]; i++) {
    if (S[i] === S[i - 0x1]) {
      streakS++;
      S[i] = '@';
    }
  }
  console[__DECODE_0__(0x126)](S[__DECODE_0__(0x122)] === 0x1 ? Math[__DECODE_0__(0x125)](K / 0x2) : streakS * K);
};
main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x124)));
