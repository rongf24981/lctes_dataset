function __DECODE_0__(muQMHz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 222;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(muQMHz, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("26WzwMuj") / 1 * (parseInt("94538GepQem") / 2) + -parseInt("1129164ENujWv") / 3 + parseInt("5330312tNUpss") / 4 + parseInt("405bgnEQE") / 5 * (parseInt("438HnVGGD") / 6) + -parseInt("4745174YZJkKQ") / 7 + parseInt("221480MOFOaF") / 8 + -parseInt("427275KFWpex") / 9 * (parseInt("160NOztmg") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 781300);
const main = input => {
  input = input["trim"]()["split"]("\n");
  const [n, k] = input[0].split(" ")["map"](Number);
  const directions = input[1]["split"](" ")["map"](v => Number(v) - 1);
  const scoreList = input[2]["split"](" ").map(Number);
  const ans = [new Array(n)["fill"](0)];
  for (let i = 0; i < k; i++) {
    ans["push"]([]);
  }
  for (let i = 0; i < k; i++) {
    for (let x = 0; x < n; x++) {
      const score = ans[i][x];
      ans[i + 1][directions[x]] = score + scoreList[directions[x]];
    }
  }
  let max = -Infinity;
  for (let i = 1; i < ans.length; i++) {
    max = Math["max"](max, Math["max"](...ans[i]));
  }
  return console["log"](max);
};
if (process.env["MYTEST"]) {
  test();
} else {
  main(require("fs").readFileSync("/dev/stdin", "utf8"));
}
function __STRING_ARRAY__() {
  const _0x2822ab = ["5330312tNUpss", "/dev/stdin", "405bgnEQE", "log", "4745174YZJkKQ", "94538GepQem", "map", "26WzwMuj", "split", "trim", "utf8", "MYTEST", "1129164ENujWv", "160NOztmg", "221480MOFOaF", "max", "fill", "push", "427275KFWpex", "438HnVGGD"];
  __STRING_ARRAY__ = function () {
    return _0x2822ab;
  };
  return __STRING_ARRAY__();
}
