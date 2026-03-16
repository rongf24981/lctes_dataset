'use strict';

function __STRING_ARRAY__() {
  const _0x20eebc = ['log', '2241dXZwoc', '63WvHxCq', '624390iFCGYU', 'map', '/dev/stdin', '3464etprws', 'readFileSync', 'utf8', '32ugtxUC', 'sort', '613944ZVMNmQ', '3001465pAdQtf', 'split', '1101160bthUkZ', '70762enZCoO', 'shift', '7662220QaseVR'];
  __STRING_ARRAY__ = function () {
    return _0x20eebc;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1d9)) / 0x1 * (-parseInt(__DECODE_0__(0x1d3)) / 0x2) + -parseInt(__DECODE_0__(0x1df)) / 0x3 + -parseInt(__DECODE_0__(0x1d8)) / 0x4 + parseInt(__DECODE_0__(0x1d6)) / 0x5 + -parseInt(__DECODE_0__(0x1d5)) / 0x6 * (-parseInt(__DECODE_0__(0x1de)) / 0x7) + -parseInt(__DECODE_0__(0x1d0)) / 0x8 * (-parseInt(__DECODE_0__(0x1dd)) / 0x9) + parseInt(__DECODE_0__(0x1db)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbe574);
function __DECODE_0__(ZQsIcU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ce;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZQsIcU, key);
}
function main(input) {
  const lines = input[__DECODE_0__(0x1d7)]('\x0a');
  const N = parseInt(lines[__DECODE_0__(0x1da)]());
  const A = lines['shift']()['split']('\x20')[__DECODE_0__(0x1ce)](x => parseInt(x))[__DECODE_0__(0x1d4)]((a, b) => a - b);
  const B = lines['shift']()[__DECODE_0__(0x1d7)]('\x20')[__DECODE_0__(0x1ce)](x => parseInt(x))[__DECODE_0__(0x1d4)]((a, b) => a - b);
  const C = lines[__DECODE_0__(0x1da)]()[__DECODE_0__(0x1d7)]('\x20')[__DECODE_0__(0x1ce)](x => parseInt(x))[__DECODE_0__(0x1d4)]((a, b) => a - b);
  let result = 0x0;
  for (let b = 0x0; b < N; b++) {
    let current_b = B[b];
    let count_a = N;
    for (let a = 0x0; a < N; a++) {
      if (current_b <= A[a]) {
        count_a--;
      }
    }
    let count_c = N;
    for (let c = 0x0; c < N; c++) {
      if (current_b >= C[c]) {
        count_c--;
      }
    }
    result += count_a * count_c;
  }
  console[__DECODE_0__(0x1dc)](result);
}
main(require('fs')[__DECODE_0__(0x1d1)](__DECODE_0__(0x1cf), __DECODE_0__(0x1d2)));
