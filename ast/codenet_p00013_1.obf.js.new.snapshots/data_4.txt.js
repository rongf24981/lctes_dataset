q = [];
require("fs")["readFileSync"]("/dev/stdin", "utf8").trim()["split"]("\n")["some"](function (i) {
  if (i != 0) {
    q["push"](i);
  } else {
    console["log"](q["pop"]());
  }
});
