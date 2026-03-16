'use strict';

function __STRING_ARRAY__() {
  const _0x26c7a3 = ['/dev/stdin', '639Mtktev', '7ZyMxVI', '2536323sDRqiV', 'map', '217478ukFxEP', '109644Ushgne', '5103978YJQVYD', 'fill', '1229080mkIxLs', '21YZkNhF', 'split', 'shift', 'utf8', '981343SuctIf', '123260NslyLn', 'readFileSync', '70eFfyPB'];
  __STRING_ARRAY__ = function () {
    return _0x26c7a3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1c4)) / 0x1 * (-parseInt(__DECODE_0__(0x1c7)) / 0x2) + -parseInt(__DECODE_0__(0x1c5)) / 0x3 + -parseInt(__DECODE_0__(0x1c8)) / 0x4 * (-parseInt(__DECODE_0__(0x1d3)) / 0x5) + parseInt(__DECODE_0__(0x1c9)) / 0x6 + parseInt(__DECODE_0__(0x1cc)) / 0x7 * (parseInt(__DECODE_0__(0x1cb)) / 0x8) + parseInt(__DECODE_0__(0x1c3)) / 0x9 * (-parseInt(__DECODE_0__(0x1d1)) / 0xa) + parseInt(__DECODE_0__(0x1d0)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc9721);
function Main(input) {
  let lines = input[__DECODE_0__(0x1cd)]('\x0a');
  let nmq = lines['shift']()[__DECODE_0__(0x1cd)](/\s/)[__DECODE_0__(0x1c6)](v => v - 0x0);
  let N = nmq[0x0];
  let M = nmq[0x1];
  let Q = nmq[0x2];
  let T = new Array(N + 0x1)['fill'](0x0)[__DECODE_0__(0x1c6)](() => new Array(N + 0x1)[__DECODE_0__(0x1ca)](0x0));
  for (let m = 0x0; m < M; m++) {
    let lr = lines[__DECODE_0__(0x1ce)]()[__DECODE_0__(0x1cd)](/\s/)[__DECODE_0__(0x1c6)](v => v - 0x0);
    T[lr[0x0]][lr[0x1]] += 0x1;
  }
  for (let p = 0x1; p <= N; p++) {
    for (let q = 0x1; q <= N; q++) {
      T[p][q] += T[p - 0x1][q];
      T[p][q] += T[p][q - 0x1];
      T[p][q] -= T[p - 0x1][q - 0x1];
    }
  }
  for (let n = 0x0; n < Q; n++) {
    let pq = lines['shift']()['split'](/\s/)[__DECODE_0__(0x1c6)](v => v - 0x0);
    let p = pq[0x0];
    let q = pq[0x1];
    console['log'](T[q][q] - T[p - 0x1][q]);
  }
}
function __DECODE_0__(JAeMJc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JAeMJc, key);
}
Main(require('fs')[__DECODE_0__(0x1d2)](__DECODE_0__(0x1c2), __DECODE_0__(0x1cf)));
