'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1535235dytePw") / 1 + parseInt("2265238dIQaek") / 2 * (-parseInt("3uBmCPs") / 3) + -parseInt("2818180gpCJnT") / 4 * (-parseInt("10RklqzA") / 5) + parseInt("4729896xSUiPk") / 6 + parseInt("11249gXTOEc") / 7 * (-parseInt("3648kJwNnU") / 8) + parseInt("1630692TkLzoY") / 9 + -parseInt("12605900rbIDuM") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 787828);
function __STRING_ARRAY__() {
  const _0x457123 = ["utf8", "map", "2818180gpCJnT", "10RklqzA", "1535235dytePw", "3uBmCPs", "ABCDEFGHIJ", "12605900rbIDuM", "split", "11249gXTOEc", "2265238dIQaek", "1630692TkLzoY", "log", "trim", "readFileSync", "4729896xSUiPk", "3648kJwNnU"];
  __STRING_ARRAY__ = function () {
    return _0x457123;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(LqxXnm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 359;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LqxXnm, key);
}
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const H = parseInt(arg[0].split(" ")[0]);
  const W = parseInt(arg[0].split(" ")[1]);
  const words = arg.slice(1, H + 1)["map"](s => s["split"](" "));
  const alpha = "ABCDEFGHIJ"["split"]("");
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (words[i][j] === "snuke") {
        console["log"](alpha[j] + (i + 1));
        return;
      }
    }
  }
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
