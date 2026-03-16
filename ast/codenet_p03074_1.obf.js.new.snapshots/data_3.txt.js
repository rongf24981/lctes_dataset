'use strict';

function __DECODE_0__(reJJio, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 222;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(reJJio, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("352631eJTcof") / 1 + -parseInt("1531090uEhwDO") / 2 + parseInt("3033489VwubNg") / 3 * (-parseInt("4yezABS") / 4) + -parseInt("4257575FHXCkw") / 5 + parseInt("10072302pZLjhg") / 6 + parseInt("8328740dfONYv") / 7 + parseInt("8069904nwwHjX") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 896421);
function __STRING_ARRAY__() {
  const _0x4f7ce6 = ["8069904nwwHjX", "log", "split", "kind", "shift", "1531090uEhwDO", "3033489VwubNg", "4yezABS", "4257575FHXCkw", "352631eJTcof", "8328740dfONYv", "len", "10072302pZLjhg", "/dev/stdin", "map", "utf8", "undefined"];
  __STRING_ARRAY__ = function () {
    return _0x4f7ce6;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  let lines = input["split"]("\n");
  let nk = lines["shift"]()["split"](/\s/)["map"](v => v - 0);
  let N = nk[0];
  let K = nk[1];
  let S = lines["shift"]()["split"](/\s/)[0]["split"]("").map(v => v - 0);
  let n = 0;
  let Z = [];
  let p;
  let b = S[0];
  let i = 0;
  while (n < N) {
    for (p = n; p < N && S[p] == b; p++) {}
    let l = p - n;
    Z.push({
      kind: b,
      pos: n,
      len: l,
      index: i++
    });
    b = (b + 1) % 2;
    n = p;
  }
  let L = Z.length;
  let LL = L - (K - 1) * 2;
  let start = Z[0]["kind"];
  let ans = 0;
  for (let n = 0; n < LL; n += 2) {
    let sum = 0;
    let m;
    let k;
    m = n;
    k = 0;
    for (; m < L && k < K; k++, m += 2) {
      if (m < L) {
        sum += Z[m]["len"];
      }
      if (m + 1 < L) {
        sum += Z[m + 1]["len"];
      }
    }
    if (start == 1 && m < L) {
      sum += Z[m]["len"];
    }
    if (ans < sum) {
      ans = sum;
    }
  }
  console["log"](ans);
}
if (typeof window == "undefined") {
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}
