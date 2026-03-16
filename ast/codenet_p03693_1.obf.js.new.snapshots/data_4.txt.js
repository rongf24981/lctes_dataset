'use strict';

function Main(input) {
  const param = Number(input["split"](" ")["join"](""));
  if (param % 4 === 0) {
    console["log"]("YES");
  } else {
    console["log"]("NO");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
