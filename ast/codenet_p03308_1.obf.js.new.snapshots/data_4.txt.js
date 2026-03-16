'use strict';

function Main(input) {
  const params = input["split"]("\n");
  const n = Number(params[0]);
  let max = 0;
  let min = Math["pow"](10, 10);
  params[1]["split"](" ")["forEach"](val => {
    max = Math.max(max, Number(val));
    min = Math["min"](min, Number(val));
  });
  console.log(max - min);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
