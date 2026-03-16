'use strict';

let input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
input = input["split"]("\n");
let info = input["shift"]();
let N = info["split"](" ")[0] * 1;
let X = info["split"](" ")[1];
let arr = input.map(x => x * 1);
let min = Math.min(...arr);
let sum = arr["reduce"]((x, a) => {
  return a + x;
});
let ans = N + Math["floor"]((X - sum) / min);
console["log"](ans);
