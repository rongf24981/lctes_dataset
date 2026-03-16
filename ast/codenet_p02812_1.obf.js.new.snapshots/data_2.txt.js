'use strict';

function __DECODE_0__(DeKAkI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdc;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DeKAkI, key);
}
function __STRING_ARRAY__() {
  const _0x2e3bfd = ['10XsdHPF', '1466925pdMjBM', '28996anyqvf', '325UGKJJF', '/dev/stdin', 'trim', '9phEydO', '654270vyKXfL', '14ZUTwYW', '2929977CHVGRu', '1DnJYVh', '267060ivmkMb', '250742EiEBSO', 'ABC', 'split', '2646853kMVJcB', '8AEyzdd', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x2e3bfd;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xe0)) / 0x1 * (-parseInt(__DECODE_0__(0xe2)) / 0x2) + -parseInt(__DECODE_0__(0xdc)) / 0x3 * (parseInt(__DECODE_0__(0xea)) / 0x4) + parseInt(__DECODE_0__(0xe9)) / 0x5 + parseInt(__DECODE_0__(0xdd)) / 0x6 * (-parseInt(__DECODE_0__(0xde)) / 0x7) + -parseInt(__DECODE_0__(0xe6)) / 0x8 * (parseInt(__DECODE_0__(0xdf)) / 0x9) + -parseInt(__DECODE_0__(0xe8)) / 0xa * (parseInt(__DECODE_0__(0xe5)) / 0xb) + parseInt(__DECODE_0__(0xe1)) / 0xc * (parseInt(__DECODE_0__(0xeb)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2949e);
const Main = input => {
  let xs = input[__DECODE_0__(0xed)]()[__DECODE_0__(0xe4)]('\x0a');
  let N = Number(xs[0x0]);
  let S = xs[0x1][__DECODE_0__(0xe4)]('');
  let ans = 0x0;
  for (let i = 0x0; i <= N - 0x3; i++) {
    if (S[i] + S[i + 0x1] + S[i + 0x2] == __DECODE_0__(0xe3)) {
      ans++;
    }
  }
  console[__DECODE_0__(0xe7)](ans);
};
Main(require('fs')['readFileSync'](__DECODE_0__(0xec), 'utf8'));
