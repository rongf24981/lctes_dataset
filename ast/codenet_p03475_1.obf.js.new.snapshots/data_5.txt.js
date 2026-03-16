'use strict';

function main(input) {
  input = input.split(/\n/);
  const n = ~~input["shift"]();
  input = input["map"](v => v.split(/\s/)["map"](x => ~~x));
  let ans = "";
  for (let i = 0; i < input.length; i++) {
    let time = 0;
    let wait = 0;
    for (let j = i; j < input.length; j++) {
      time += time > input[j][1] ? 0 : input[j][1] - time;
      time += input[j][0];
    }
    ans += time + "\n";
  }
  ans += "0\n";
  console["log"](ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
