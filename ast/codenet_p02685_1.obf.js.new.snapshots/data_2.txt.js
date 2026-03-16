(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x112)) / 0x1 + -parseInt(__DECODE_0__(0x119)) / 0x2 + parseInt(__DECODE_0__(0x10f)) / 0x3 * (parseInt(__DECODE_0__(0x115)) / 0x4) + parseInt(__DECODE_0__(0x118)) / 0x5 * (parseInt(__DECODE_0__(0x10d)) / 0x6) + parseInt(__DECODE_0__(0x114)) / 0x7 * (parseInt(__DECODE_0__(0x110)) / 0x8) + -parseInt(__DECODE_0__(0x116)) / 0x9 + parseInt(__DECODE_0__(0x10e)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb2115);
const input = require('fs')['readFileSync'](__DECODE_0__(0x117), __DECODE_0__(0x10b));
function pow(x, n) {
  let res = 0x1;
  while (n > 0x0) {
    if (n & 0x1) {
      res = mul(res, x);
    }
    x = mul(x, x);
    n >>= 0x1;
  }
  return res;
}
function __STRING_ARRAY__() {
  const _0x346c9a = ['69KgWPHT', '7280QRWvgF', 'log', '1168037YRAqsR', 'split', '7945uIsIjG', '99956ujYIOO', '11926251SpxHRW', '/dev/stdin', '5xtMWRe', '1980416cLNsFn', 'utf8', 'map', '4497132LgJIbf', '18556300qhhbHx'];
  __STRING_ARRAY__ = function () {
    return _0x346c9a;
  };
  return __STRING_ARRAY__();
}
function inv(x) {
  if (x == 0x1) {
    return 0x1;
  }
  return pow(x, mod - 0x2);
}
function mul(a, b) {
  return ((a >> 0x10) * b % mod * 0x10000 + (a & 0xffff) * b) % mod;
}
const mod = 0x3b800001;
function __DECODE_0__(aebceG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aebceG, key);
}
(input => {
  const lines = input[__DECODE_0__(0x113)]('\x0a');
  let [N, M, K] = lines[0x0][__DECODE_0__(0x113)]('\x20')[__DECODE_0__(0x10c)](Number);
  let ans = 0x0;
  let fa = 0x1;
  let fa2 = 0x1;
  for (let k = 0x0; k <= K; k++) {
    fa = fa * (k || 0x1) % mod;
    fa2 = fa2 * (k ? N - k : 0x1) % mod;
    let left = mul(fa2, inv(fa)) % mod;
    ans += mul(left, pow(M - 0x1, N - (k + 0x1))) * M % mod;
  }
  console[__DECODE_0__(0x111)](ans % mod);
})(input);
