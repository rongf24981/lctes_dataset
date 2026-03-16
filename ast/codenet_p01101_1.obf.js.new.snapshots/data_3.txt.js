function __DECODE_0__(UcUUUY, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 110;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UcUUUY, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("454067KvjoPt") / 1 + -parseInt("140586EFhBCl") / 2 * (-parseInt("9ptAcPL") / 3) + -parseInt("1899796wmrsfv") / 4 + parseInt("3540830nImdrA") / 5 + -parseInt("4351806YELcYL") / 6 + -parseInt("5368125rcntWQ") / 7 + parseInt("8510280mNjUGj") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 469772);
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.trim()["split"]("\n");
while (line = lines["shift"]()) {
  const [n, max] = line.split(" ")["map"](Number);
  if (n === 0 && max === 0) {
    break;
  }
  const prices = lines["shift"]()["split"](" ").map(Number);
  const allSum = [];
  prices["map"]((priceA, indexA) => {
    prices["map"]((priceB, indexB) => {
      if (indexA !== indexB) {
        const sum = priceA + priceB;
        if (sum <= max) {
          allSum["push"](sum);
        }
      }
    });
  });
  const answer = allSum["sort"]((a, b) => b - a)[0];
  if (answer) {
    console["log"](answer);
    continue;
  }
  console["log"]("NONE");
}
function __STRING_ARRAY__() {
  const _0x173979 = ["split", "1899796wmrsfv", "shift", "sort", "4351806YELcYL", "NONE", "push", "/dev/stdin", "5368125rcntWQ", "9ptAcPL", "8510280mNjUGj", "utf8", "log", "3540830nImdrA", "map", "454067KvjoPt", "140586EFhBCl"];
  __STRING_ARRAY__ = function () {
    return _0x173979;
  };
  return __STRING_ARRAY__();
}
