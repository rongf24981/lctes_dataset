'use strict';

function __STRING_ARRAY__() {
  const _0x246db6 = ['242qbFPxu', '643313GkQgKB', '2607690gnBdeo', 'shift', '35FVzLev', '1344qAuvrJ', 'log', 'sort', 'trim', 'readFileSync', '549663eWdvhp', '208146kPmSPs', '96Iseqvr', '1497850verRHB', '56200DpdVIR', '4FMUwHc', 'length', '45FhiDuV', 'split', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x246db6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x10e)) / 0x1 * (parseInt(__DECODE_0__(0x11d)) / 0x2) + -parseInt(__DECODE_0__(0x113)) / 0x3 * (-parseInt(__DECODE_0__(0x118)) / 0x4) + -parseInt(__DECODE_0__(0x10b)) / 0x5 + -parseInt(__DECODE_0__(0x114)) / 0x6 * (-parseInt(__DECODE_0__(0x10d)) / 0x7) + parseInt(__DECODE_0__(0x117)) / 0x8 * (-parseInt(__DECODE_0__(0x11a)) / 0x9) + -parseInt(__DECODE_0__(0x116)) / 0xa + parseInt(__DECODE_0__(0x10a)) / 0xb * (parseInt(__DECODE_0__(0x115)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4488c);
const lines = require('fs')[__DECODE_0__(0x112)](__DECODE_0__(0x11c), 'utf8')[__DECODE_0__(0x111)]()[__DECODE_0__(0x11b)]('\x0a');
const N = +lines[0x0];
const A = lines[0x1][__DECODE_0__(0x11b)]('\x20');
let indices = [];
for (let i = 0x0; i < N; i++) {
  A[i] = +A[i];
  indices[indices['length']] = i;
}
indices = indices[__DECODE_0__(0x110)]((a, b) => A[a] - A[b]);
let sum = 0x0;
let que = [[0x0, N - 0x1, 0x0]];
function __DECODE_0__(mYUBLj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10a;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mYUBLj, key);
}
while (que['length'] > 0x0) {
  let lri = que[__DECODE_0__(0x10c)]();
  let left = lri[0x0];
  let right = lri[0x1];
  let index = lri[0x2];
  if (left > right) {
    continue;
  }
  let i = index;
  while (indices[i] < left || indices[i] > right) {
    i++;
  }
  let ind = indices[i];
  sum += A[ind] * (ind - left + 0x1) * (right - ind + 0x1);
  if (left <= ind - 0x1) {
    que[que[__DECODE_0__(0x119)]] = [left, ind - 0x1, i + 0x1];
  }
  if (ind + 0x1 <= right) {
    que[que[__DECODE_0__(0x119)]] = [ind + 0x1, right, i + 0x1];
  }
}
console[__DECODE_0__(0x10f)](sum);
