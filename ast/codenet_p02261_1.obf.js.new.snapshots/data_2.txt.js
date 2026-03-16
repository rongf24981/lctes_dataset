'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1b6)) / 0x1 + parseInt(__DECODE_0__(0x1bc)) / 0x2 + parseInt(__DECODE_0__(0x1b4)) / 0x3 + -parseInt(__DECODE_0__(0x1c2)) / 0x4 * (parseInt(__DECODE_0__(0x1bf)) / 0x5) + -parseInt(__DECODE_0__(0x1b8)) / 0x6 * (-parseInt(__DECODE_0__(0x1b2)) / 0x7) + parseInt(__DECODE_0__(0x1b7)) / 0x8 * (-parseInt(__DECODE_0__(0x1be)) / 0x9) + parseInt(__DECODE_0__(0x1c0)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4adb2);
const main = input => {
  input = input[__DECODE_0__(0x1c3)]('\x0a');
  const N = Number(input[0x0]);
  const A1 = input[0x1][__DECODE_0__(0x1c3)]('\x20');
  const A2 = A1[__DECODE_0__(0x1b9)]();
  bubbleSort(A1, N);
  console[__DECODE_0__(0x1bb)](A1['join']('\x20'));
  console['log'](__DECODE_0__(0x1c1));
  selectionSort(A2, N);
  console[__DECODE_0__(0x1bb)](A2[__DECODE_0__(0x1b3)]('\x20'));
  console[__DECODE_0__(0x1bb)](A2['every']((v, i) => v === A1[i]) ? 'Stable' : __DECODE_0__(0x1bd));
};
function bubbleSort(A, N) {
  for (let i = 0x0; i < N - 0x1; ++i) {
    for (let j = N - 0x1; j >= i + 0x1; --j) {
      if (Number(A[j - 0x1][0x1]) > Number(A[j][0x1])) {
        const tmp = A[j];
        A[j] = A[j - 0x1];
        A[j - 0x1] = tmp;
      }
    }
  }
}
function selectionSort(A, N) {
  for (let i = 0x0; i < N - 0x1; ++i) {
    let minj = i;
    for (let j = i; j < N; ++j) {
      if (Number(A[j][0x1]) < Number(A[minj][0x1])) {
        minj = j;
      }
    }
    if (i !== minj) {
      const tmp = A[i];
      A[i] = A[minj];
      A[minj] = tmp;
    }
  }
}
function __DECODE_0__(UnpooK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UnpooK, key);
}
function __STRING_ARRAY__() {
  const _0x341b0d = ['5298tVAdQz', 'concat', '/dev/stdin', 'log', '1063224ANgQcf', 'Not\x20stable', '299637rxTgMs', '2590855ihHDWR', '3051190RysLAG', 'Stable', '4MAmASw', 'split', '1883WINNbH', 'join', '1236216ieDKCu', 'readFileSync', '428498XosqJE', '56PgsvUD'];
  __STRING_ARRAY__ = function () {
    return _0x341b0d;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x1b5)](__DECODE_0__(0x1ba), 'utf8'));
