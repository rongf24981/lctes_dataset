'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("19270uqKNLt") / 1 + parseInt("382654UcziVF") / 2 + -parseInt("124569rgMvdo") / 3 + -parseInt("934932HgGjwS") / 4 + -parseInt("163245LMPClI") / 5 * (parseInt("42nmhcRg") / 6) + -parseInt("1174789FWDSoQ") / 7 + parseInt("152552MoyzaN") / 8 * (parseInt("279AuIXwY") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 130110);
function __DECODE_0__(UabhYK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 328;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UabhYK, key);
}
function __STRING_ARRAY__() {
  const _0x215822 = ["split", "279AuIXwY", "fill", "19270uqKNLt", "1174789FWDSoQ", "utf8", "124569rgMvdo", "42nmhcRg", "163245LMPClI", "map", "shift", "152552MoyzaN", "sort", "readFileSync", "/dev/stdin", "934932HgGjwS", "382654UcziVF", "log"];
  __STRING_ARRAY__ = function () {
    return _0x215822;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  let lines = input["split"]("\n");
  let NX = lines["shift"]().trim()["split"](/\s/)["map"](v => v - 0);
  let n = NX[0];
  let x = NX[1];
  let S = lines.shift().trim().split(/\s/)["map"](v => v - 0);
  const MOD = 1000000007;
  const MAX_N = 210;
  const MAX_VAL = 100010;
  const add = (a, b) => (a + b) % MOD;
  const mul = (a, b) => a * b % MOD;
  let dp = new Array(MAX_N)["fill"](0).map(() => new Array(MAX_VAL)["fill"](-1));
  const rec = (pos, rem) => {
    if (pos == n) {
      return rem;
    }
    let ret = dp[pos][rem];
    if (ret != -1) {
      return ret;
    }
    ret = 0;
    dp[pos][rem] = add(ret, rec(pos + 1, rem % S[pos]));
    dp[pos][rem] = add(dp[pos][rem], mul(n - pos - 1, rec(pos + 1, rem)));
    return dp[pos][rem];
  };
  S["sort"]((a, b) => b - a);
  console["log"](rec(0, x));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
