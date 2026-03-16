'use strict';

const main = arg => {
  let Nums = arg.split("\n")[0]["split"](" ")["map"](n => Number(n));
  let A = Nums[0];
  let B = Nums[1];
  let C = Nums[2];
  let ans = "NO";
  for (let i = 1; i <= B; i++) {
    if (A * i % B == C) {
      ans = "YES";
    }
  }
  console["log"](ans);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
