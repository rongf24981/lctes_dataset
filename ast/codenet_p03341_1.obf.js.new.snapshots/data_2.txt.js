'use strict';

function __DECODE_0__(vYfPEu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x102;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vYfPEu, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x10a)) / 0x1 + parseInt(__DECODE_0__(0x106)) / 0x2 + parseInt(__DECODE_0__(0x10f)) / 0x3 + -parseInt(__DECODE_0__(0x107)) / 0x4 + parseInt(__DECODE_0__(0x108)) / 0x5 + parseInt(__DECODE_0__(0x10e)) / 0x6 * (parseInt(__DECODE_0__(0x10c)) / 0x7) + -parseInt(__DECODE_0__(0x105)) / 0x8 * (-parseInt(__DECODE_0__(0x10b)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa878a);
function __STRING_ARRAY__() {
  const _0x3ad3b2 = ['433526vkigiz', '3760456nyGxSd', '6179800uKqpfJ', 'readFileSync', '1144416QJseLi', '18tYjstM', '110621MPwqHT', 'utf8', '438dBnpob', '225048EWptis', 'log', 'trim', 'split', '/dev/stdin', '372920WnqnhO'];
  __STRING_ARRAY__ = function () {
    return _0x3ad3b2;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg[__DECODE_0__(0x102)]()[__DECODE_0__(0x103)]('\x0a');
  const N = parseInt(arg[0x0]['split']('\x20')[0x0]);
  const A = arg[0x1][__DECODE_0__(0x103)]('');
  const Rsum = A['filter'](n => n === 'E')['length'];
  const Lsum = N - Rsum;
  let Rcnt = 0x0;
  let Lcnt = 0x0;
  let answer = Infinity;
  for (let i = 0x0; i < N; i++) {
    const needMoveLeft = Lcnt;
    let needMoveRight = Rsum - Rcnt;
    if (A[i] === 'E') {
      needMoveRight--;
    }
    answer = Math['min'](answer, needMoveLeft + needMoveRight);
    if (A[i] === 'W') {
      Lcnt++;
    } else {
      Rcnt++;
    }
  }
  console[__DECODE_0__(0x110)](answer);
};
main(require('fs')[__DECODE_0__(0x109)](__DECODE_0__(0x104), __DECODE_0__(0x10d)));
