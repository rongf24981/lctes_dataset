'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1e8)) / 0x1 * (parseInt(__DECODE_0__(0x1db)) / 0x2) + -parseInt(__DECODE_0__(0x1dd)) / 0x3 + -parseInt(__DECODE_0__(0x1e1)) / 0x4 * (parseInt(__DECODE_0__(0x1da)) / 0x5) + parseInt(__DECODE_0__(0x1e9)) / 0x6 * (parseInt(__DECODE_0__(0x1e7)) / 0x7) + -parseInt(__DECODE_0__(0x1dc)) / 0x8 * (parseInt(__DECODE_0__(0x1eb)) / 0x9) + parseInt(__DECODE_0__(0x1ea)) / 0xa + parseInt(__DECODE_0__(0x1e5)) / 0xb * (parseInt(__DECODE_0__(0x1ec)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb6d20);
process[__DECODE_0__(0x1de)]['resume']();
process[__DECODE_0__(0x1de)][__DECODE_0__(0x1d9)](__DECODE_0__(0x1e0));
let inputString = '';
function __STRING_ARRAY__() {
  const _0x40ce2f = ['fill', 'split', 'map', '671yhZovk', 'log', '6932947KTmiXR', '313nWLdmA', '6lrYRZS', '10942740ZjLbNs', '3199869ZOQmTC', '99768JTXQAb', 'data', 'setEncoding', '6465ihrykj', '8884vBlnfw', '8axsisy', '4378203PlOLNO', 'stdin', 'end', 'utf-8', '4388odwEBV'];
  __STRING_ARRAY__ = function () {
    return _0x40ce2f;
  };
  return __STRING_ARRAY__();
}
let currentLine = 0x0;
process[__DECODE_0__(0x1de)]['on'](__DECODE_0__(0x1ed), inputStdin => {
  inputString += inputStdin;
});
process[__DECODE_0__(0x1de)]['on'](__DECODE_0__(0x1df), _ => {
  inputString = inputString[__DECODE_0__(0x1e3)]('\x0a');
  main();
});
function __DECODE_0__(nTjzws, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d9;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nTjzws, key);
}
function readLine() {
  return inputString[currentLine++];
}
function F(N, A, B) {
  let dp = Array(N + 0x1)[__DECODE_0__(0x1e2)](0x0);
  for (let n = 0x0; n <= N; n++) {
    let x = n;
    for (let j = 0x0; j < 0x3; j++) {
      if (n >= A[j]) {
        let y = dp[n - A[j]] + B[j];
        if (x < y) {
          x = y;
        }
      }
    }
    dp[n] = x;
  }
  return dp[N];
}
function main() {
  const n = parseInt(readLine(), 0xa);
  const a = readLine()[__DECODE_0__(0x1e3)]('\x20')[__DECODE_0__(0x1e4)](_ => parseInt(_, 0xa));
  const b = readLine()[__DECODE_0__(0x1e3)]('\x20')['map'](_ => parseInt(_, 0xa));
  let n1 = F(n, a, b);
  let n2 = F(n1, b, a);
  console[__DECODE_0__(0x1e6)](n2);
}
