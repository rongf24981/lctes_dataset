'use strict';

function main(s) {
  const input = s["replace"](/\n/g, "")["split"]("");
  let words = [];
  input["forEach"]((x, i, self) => {
    if (self["indexOf"](x) === i) {
      words["push"]({
        word: x,
        counter: 1
      });
    } else {
      words["forEach"](y => {
        if (x === y.word) {
          y["counter"] += 1;
        }
      });
    }
  });
  const result = words.every(x => x["counter"] % 2 === 0) ? "Yes" : "No";
  console["log"](result);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
