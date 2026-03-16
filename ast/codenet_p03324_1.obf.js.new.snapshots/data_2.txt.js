'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xe9)) / 0x1 + parseInt(__DECODE_0__(0xec)) / 0x2 + -parseInt(__DECODE_0__(0xf7)) / 0x3 * (-parseInt(__DECODE_0__(0xed)) / 0x4) + parseInt(__DECODE_0__(0xf4)) / 0x5 + parseInt(__DECODE_0__(0xf8)) / 0x6 * (-parseInt(__DECODE_0__(0xee)) / 0x7) + parseInt(__DECODE_0__(0xf6)) / 0x8 + parseInt(__DECODE_0__(0xeb)) / 0x9 * (parseInt(__DECODE_0__(0xea)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x26d5e);
function __DECODE_0__(Tdjxoq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe9;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Tdjxoq, key);
}
const main = arg => {
  arg = arg[__DECODE_0__(0xf3)]()[__DECODE_0__(0xef)]('\x0a');
  const D = parseInt(arg[0x0]['split']('\x20')[0x0]);
  const N = parseInt(arg[0x0][__DECODE_0__(0xef)]('\x20')[0x1]);
  let temp = [...Array(D * 0x2)][__DECODE_0__(0xf0)](0x0);
  let answer = parseInt(N + String(temp[__DECODE_0__(0xf1)]('')));
  let plus = parseInt(0x1 + String(temp[__DECODE_0__(0xf1)]('')));
  console['log'](N !== 0x64 ? answer : answer + plus);
};
main(require('fs')[__DECODE_0__(0xf2)](__DECODE_0__(0xf5), 'utf8'));
function __STRING_ARRAY__() {
  const _0xf89187 = ['readFileSync', 'trim', '1227425zVeZzi', '/dev/stdin', '1712360evAgjb', '3MwyEsO', '770274BZaTtu', '236612OUJzHB', '130JOFogg', '27801ZUYRre', '18414KmaGsA', '574184gMrClc', '14ItxJfI', 'split', 'fill', 'join'];
  __STRING_ARRAY__ = function () {
    return _0xf89187;
  };
  return __STRING_ARRAY__();
}
