'use strict';

const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const S = arg[0]["split"]("");
  const K = parseInt(arg[1]);
  let streakS = 0;
  for (let i = 1; i < S["length"]; i++) {
    if (S[i] === S[i - 1]) {
      streakS++;
      S[i] = "@";
    }
  }
  console["log"](S["length"] === 1 ? Math["floor"](K / 2) : streakS * K);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
