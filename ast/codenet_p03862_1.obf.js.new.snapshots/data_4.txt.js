'use strict';

const main = arg => {
  const input = arg.trim()["split"]("\n");
  let N = Number(input[0]["split"](" ")[0]);
  let x = Number(input[0]["split"](" ")[1]);
  let As = input[1]["split"](" ").map(n => Number(n));
  let manip = 0;
  for (let i = 0; i < N; i++) {
    let exceed = As[i] - x;
    if (exceed > 0) {
      As[i] = x;
      manip += exceed;
    }
  }
  for (let i = 1; i < N - 1; i++) {
    let left = As[i - 1];
    let current = As[i];
    let right = As[i + 1];
    if (left + current > x && current + right > x) {
      As[i] = x - left;
      manip += current - (x - left);
    }
  }
  for (let i = 0; i < N - 1; i++) {
    let current = As[i];
    let right = As[i + 1];
    if (current + right > x) {
      As[i] = x - right;
      manip += current - (x - right);
    }
  }
  console.log(manip);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
