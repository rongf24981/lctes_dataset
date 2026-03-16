(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1168037YRAqsR") / 1 + -parseInt("1980416cLNsFn") / 2 + parseInt("69KgWPHT") / 3 * (parseInt("99956ujYIOO") / 4) + parseInt("5xtMWRe") / 5 * (parseInt("4497132LgJIbf") / 6) + parseInt("7945uIsIjG") / 7 * (parseInt("7280QRWvgF") / 8) + -parseInt("11926251SpxHRW") / 9 + parseInt("18556300qhhbHx") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 729365);
const input = require("fs").readFileSync("/dev/stdin", "utf8");
function pow(x, n) {
  let res = 1;
  while (n > 0) {
    if (n & 1) {
      res = mul(res, x);
    }
    x = mul(x, x);
    n >>= 1;
  }
  return res;
}
function __STRING_ARRAY__() {
  const _0x346c9a = ["69KgWPHT", "7280QRWvgF", "log", "1168037YRAqsR", "split", "7945uIsIjG", "99956ujYIOO", "11926251SpxHRW", "/dev/stdin", "5xtMWRe", "1980416cLNsFn", "utf8", "map", "4497132LgJIbf", "18556300qhhbHx"];
  __STRING_ARRAY__ = function () {
    return _0x346c9a;
  };
  return __STRING_ARRAY__();
}
function inv(x) {
  if (x == 1) {
    return 1;
  }
  return pow(x, mod - 2);
}
function mul(a, b) {
  return ((a >> 16) * b % mod * 65536 + (a & 65535) * b) % mod;
}
const mod = 998244353;
function __DECODE_0__(aebceG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 267;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aebceG, key);
}
(input => {
  const lines = input["split"]("\n");
  let [N, M, K] = lines[0]["split"](" ")["map"](Number);
  let ans = 0;
  let fa = 1;
  let fa2 = 1;
  for (let k = 0; k <= K; k++) {
    fa = fa * (k || 1) % mod;
    fa2 = fa2 * (k ? N - k : 1) % mod;
    let left = mul(fa2, inv(fa)) % mod;
    ans += mul(left, pow(M - 1, N - (k + 1))) * M % mod;
  }
  console["log"](ans % mod);
})(input);
