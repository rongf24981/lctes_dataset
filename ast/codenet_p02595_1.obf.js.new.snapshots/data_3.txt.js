(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("770332SDtWzH") / 1 + -parseInt("194870OJzNcn") / 2 + parseInt("2702832bUBozq") / 3 * (-parseInt("4LiStcp") / 4) + -parseInt("712705HMukWi") / 5 + parseInt("6lpKvPo") / 6 * (parseInt("1417633RrjhrK") / 7) + -parseInt("8262376lDsnvP") / 8 + parseInt("15955632UiIfiq") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 571982);
function __DECODE_0__(XmmIyB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 379;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XmmIyB, key);
}
function __STRING_ARRAY__() {
  const _0x37edca = ["log", "8262376lDsnvP", "770332SDtWzH", "utf8", "readFileSync", "env", "1417633RrjhrK", "4LiStcp", "MYTEST", "2702832bUBozq", "194870OJzNcn", "trim", "/dev/stdin", "sqrt", "6lpKvPo", "map", "712705HMukWi", "15955632UiIfiq", "split"];
  __STRING_ARRAY__ = function () {
    return _0x37edca;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  input = input["trim"]()["split"]("\n");
  const [N, D] = input[0]["split"](" ").map(Number);
  const [, ...points] = input;
  let ans = 0;
  for (let v of points) {
    const [x, y] = v["split"](" ")["map"](Number);
    if (Math["sqrt"](x ** 2 + y ** 2) <= D) {
      ans++;
    }
  }
  return console["log"](ans);
};
if (process["env"]["MYTEST"]) {
  test();
} else {
  main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
}
