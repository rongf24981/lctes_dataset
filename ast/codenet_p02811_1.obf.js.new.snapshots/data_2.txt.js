'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1f8)) / 0x1 + parseInt(__DECODE_0__(0x1f5)) / 0x2 * (parseInt(__DECODE_0__(0x1f7)) / 0x3) + parseInt(__DECODE_0__(0x1f0)) / 0x4 * (-parseInt(__DECODE_0__(0x1fb)) / 0x5) + -parseInt(__DECODE_0__(0x1f9)) / 0x6 + -parseInt(__DECODE_0__(0x1f2)) / 0x7 + -parseInt(__DECODE_0__(0x1ee)) / 0x8 + -parseInt(__DECODE_0__(0x1fa)) / 0x9 * (-parseInt(__DECODE_0__(0x1ed)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x192ab);
function __DECODE_0__(DKUsYL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ed;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DKUsYL, key);
}
const main = arg => {
  arg = arg[__DECODE_0__(0x1f3)]()[__DECODE_0__(0x1f6)]('\x0a');
  const K = parseInt(arg[0x0][__DECODE_0__(0x1f6)]('\x20')[0x0]);
  const X = parseInt(arg[0x0][__DECODE_0__(0x1f6)]('\x20')[0x1]);
  console[__DECODE_0__(0x1f4)](0x1f4 * K >= X ? 'Yes' : 'No');
};
main(require('fs')[__DECODE_0__(0x1ef)]('/dev/stdin', __DECODE_0__(0x1f1)));
function __STRING_ARRAY__() {
  const _0x5722a4 = ['205gkRbyj', '9580ekcPVS', '1378176xVvJQw', 'readFileSync', '2428PKHlLb', 'utf8', '937741CbYCLX', 'trim', 'log', '102042PZMOdv', 'split', '12WdsGak', '72518LTWGKt', '535098yItAhO', '3681epWUhU'];
  __STRING_ARRAY__ = function () {
    return _0x5722a4;
  };
  return __STRING_ARRAY__();
}
