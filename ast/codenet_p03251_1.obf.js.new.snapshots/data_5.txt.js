'use strict';

const main = input => {
  const num = input[0]["split"](" ")["map"](val => parseInt(val));
  const N = num[0];
  const M = num[1];
  const X = num[2];
  const Y = num[3];
  const x = input[1]["split"](" ")["map"](val => parseInt(val));
  const y = input[2]["split"](" ")["map"](val => parseInt(val));
  const xMax = Math.max(...x);
  const yMin = Math["min"](...y);
  let ans = 0;
  for (let z = X + 1; z <= Y; z++) {
    if (xMax < z && yMin >= z) {
      ans = 1;
      break;
    }
  }
  console["log"](ans == 1 ? "No War" : "War");
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"]("\n"));
