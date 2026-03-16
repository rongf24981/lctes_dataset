'use strict';

function main(input) {
  input = input.split(/\n/);
  let S = input[0]["split"]("");
  const T = input[1]["split"]("");
  const us = "UNRESTORABLE";
  for (let i = S["length"] - T.length; i >= 0; i--) {
    let x = 0;
    for (let j = 0; j < T["length"]; j++) {
      if (S[i + j] == T[j] || S[i + j] == "?") {} else {
        x++;
        continue;
      }
    }
    if (x > 0) {
      continue;
    }
    for (let k = 0; k < T["length"]; k++) {
      S[i + k] = T[k];
    }
    for (let i = 0; i < S["length"]; i++) {
      S[i] = S[i] == "?" ? "a" : S[i];
    }
    console["log"](S = S["join"](""));
    return;
  }
  console["log"](us);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
