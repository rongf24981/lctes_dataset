'use strict';

function __STRING_ARRAY__() {
  const _0x39e847 = ['1783572KEjFbI', '387924YVpaUN', '8AIDcwE', '444217MnGvEv', '2543772uoWSGG', '209342gybGgP', '40PkiIUI', '8828100GbzqPo', '834195PhOvpm', '/dev/stdin', 'utf8', 'trunc'];
  __STRING_ARRAY__ = function () {
    return _0x39e847;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x175)) / 0x1 + -parseInt(__DECODE_0__(0x173)) / 0x2 + -parseInt(__DECODE_0__(0x172)) / 0x3 + -parseInt(__DECODE_0__(0x174)) / 0x4 * (-parseInt(__DECODE_0__(0x16e)) / 0x5) + parseInt(__DECODE_0__(0x176)) / 0x6 + parseInt(__DECODE_0__(0x177)) / 0x7 * (-parseInt(__DECODE_0__(0x16c)) / 0x8) + parseInt(__DECODE_0__(0x16d)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x56fd3);
function __DECODE_0__(FmdEdD, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FmdEdD, key);
}
function Main(input) {
  const N = parseInt(input);
  let ret = 0x0;
  for (let i = 0x1; i * i < N; i++) {
    const ic = i - 0x1;
    if (ic !== 0x0 && N % ic === Math[__DECODE_0__(0x171)](N / ic)) {
      ret += ic;
    }
    const j = Math['trunc'](N / i) - 0x1;
    if (N % j === i) {
      ret += j;
    }
  }
  console['log'](ret);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x16f), __DECODE_0__(0x170)));
