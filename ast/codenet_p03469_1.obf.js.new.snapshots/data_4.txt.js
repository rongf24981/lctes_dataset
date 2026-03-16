'use strict';

function Main(input) {
  const date = input["split"]("\n")[0]["replace"](/^.{4}/, 2018);
  console["log"](date);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
