'use strict';

function main(s) {
  s = s["split"]("\n")[0]["split"](" ")["map"](n => Number(n));
  const A = s[0];
  const B = s[1];
  const C = s[2];
  const X = s[3];
  const Y = s[4];
  const min = Math["min"](X, Y);
  const case1 = A * X + B * Y;
  const case2 = C * 2 * min + (X - min) * A + (Y - min) * B;
  const case3 = C * 2 * Math["max"](X, Y);
  const answer = Math["min"](...[case1, case2, case3]);
  console["log"](answer);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
