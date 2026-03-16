'use strict';

function __DECODE_0__(reJJio, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xde;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(reJJio, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xe3)) / 0x1 + -parseInt(__DECODE_0__(0xdf)) / 0x2 + parseInt(__DECODE_0__(0xe0)) / 0x3 * (-parseInt(__DECODE_0__(0xe1)) / 0x4) + -parseInt(__DECODE_0__(0xe2)) / 0x5 + parseInt(__DECODE_0__(0xe6)) / 0x6 + parseInt(__DECODE_0__(0xe4)) / 0x7 + parseInt(__DECODE_0__(0xeb)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdada5);
function __STRING_ARRAY__() {
  const _0x4f7ce6 = ['8069904nwwHjX', 'log', 'split', 'kind', 'shift', '1531090uEhwDO', '3033489VwubNg', '4yezABS', '4257575FHXCkw', '352631eJTcof', '8328740dfONYv', 'len', '10072302pZLjhg', '/dev/stdin', 'map', 'utf8', 'undefined'];
  __STRING_ARRAY__ = function () {
    return _0x4f7ce6;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  let lines = input[__DECODE_0__(0xed)]('\x0a');
  let nk = lines[__DECODE_0__(0xde)]()[__DECODE_0__(0xed)](/\s/)[__DECODE_0__(0xe8)](v => v - 0x0);
  let N = nk[0x0];
  let K = nk[0x1];
  let S = lines[__DECODE_0__(0xde)]()[__DECODE_0__(0xed)](/\s/)[0x0][__DECODE_0__(0xed)]('')['map'](v => v - 0x0);
  let n = 0x0;
  let Z = [];
  let p;
  let b = S[0x0];
  let i = 0x0;
  while (n < N) {
    for (p = n; p < N && S[p] == b; p++) {}
    let l = p - n;
    Z['push']({
      'kind': b,
      'pos': n,
      'len': l,
      'index': i++
    });
    b = (b + 0x1) % 0x2;
    n = p;
  }
  let L = Z['length'];
  let LL = L - (K - 0x1) * 0x2;
  let start = Z[0x0][__DECODE_0__(0xee)];
  let ans = 0x0;
  for (let n = 0x0; n < LL; n += 0x2) {
    let sum = 0x0;
    let m;
    let k;
    m = n;
    k = 0x0;
    for (; m < L && k < K; k++, m += 0x2) {
      if (m < L) {
        sum += Z[m][__DECODE_0__(0xe5)];
      }
      if (m + 0x1 < L) {
        sum += Z[m + 0x1][__DECODE_0__(0xe5)];
      }
    }
    if (start == 0x1 && m < L) {
      sum += Z[m][__DECODE_0__(0xe5)];
    }
    if (ans < sum) {
      ans = sum;
    }
  }
  console[__DECODE_0__(0xec)](ans);
}
if (typeof window == __DECODE_0__(0xea)) {
  Main(require('fs')['readFileSync'](__DECODE_0__(0xe7), __DECODE_0__(0xe9)));
}
