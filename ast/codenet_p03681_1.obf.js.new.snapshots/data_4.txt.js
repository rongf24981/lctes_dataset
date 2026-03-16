'use strict';

function main(input) {
  input = input["split"](" ")["map"](v => ~~v);
  const n = input[0];
  const m = input[1];
  const limit = 1000000007;
  if (Math.abs(n - m) >= 2) {
    console["log"](0);
    return;
  }
  let nn = 1;
  for (let i = 2; i <= n; i++) {
    nn *= i;
    if (nn >= limit) {
      nn = nn % limit;
    }
  }
  for (let i = 2; i <= m; i++) {
    nn *= i;
    if (nn >= limit) {
      nn = nn % limit;
    }
  }
  let tmp = nn % limit;
  if (n == m) {
    tmp = tmp * 2;
  }
  const ans = tmp % limit;
  console["log"](ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
