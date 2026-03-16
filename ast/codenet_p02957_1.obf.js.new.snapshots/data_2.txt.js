'use strict';

function __DECODE_0__(yFWXki, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x166;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yFWXki, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x16d)) / 0x1 * (-parseInt(__DECODE_0__(0x170)) / 0x2) + parseInt(__DECODE_0__(0x175)) / 0x3 + -parseInt(__DECODE_0__(0x16a)) / 0x4 + -parseInt(__DECODE_0__(0x168)) / 0x5 + parseInt(__DECODE_0__(0x16b)) / 0x6 * (parseInt(__DECODE_0__(0x166)) / 0x7) + parseInt(__DECODE_0__(0x174)) / 0x8 + -parseInt(__DECODE_0__(0x173)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x34b5d);
function __STRING_ARRAY__() {
  const _0x9d0ebe = ['/dev/stdin', 'IMPOSSIBLE', '89944JbxwxY', 'utf8', 'split', '2448369ACoOlq', '190248PlQqQm', '825615ObHPZy', '1123710tMpxzb', 'log', '162220hqQysP', 'map', '116296ZUKePh', '6tZwZru', 'readFileSync', '2QOdXqN'];
  __STRING_ARRAY__ = function () {
    return _0x9d0ebe;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const args = input[__DECODE_0__(0x172)]('\x0a')[__DECODE_0__(0x169)](arg => arg[__DECODE_0__(0x172)]('\x20'));
  const a = parseInt(args[0x0][0x0], 0xa);
  const b = parseInt(args[0x0][0x1], 0xa);
  const t1 = a + b;
  const t2 = t1 / 0x2;
  if (t2 % 0x1 === 0x0) {
    console['log'](t2);
  } else {
    console[__DECODE_0__(0x167)](__DECODE_0__(0x16f));
  }
};
main(require('fs')[__DECODE_0__(0x16c)](__DECODE_0__(0x16e), __DECODE_0__(0x171)));
