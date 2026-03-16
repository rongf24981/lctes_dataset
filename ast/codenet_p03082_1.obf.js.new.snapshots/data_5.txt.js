'use strict';

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
