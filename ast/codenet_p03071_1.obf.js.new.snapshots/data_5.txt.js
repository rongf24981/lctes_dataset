'use strict';

function Main(input) {
  input = input["split"]("\n")[0];
  const numbers = input["split"](" ")["map"](i => {
    return parseInt(i, 10);
  });
  const a = numbers[0];
  const b = numbers[1];
  let result = 0;
  if (a > b) {
    result = a * 2 - 1;
  } else if (b > a) {
    result = b * 2 - 1;
  } else {
    result = a * 2;
  }
  console["log"](result);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
