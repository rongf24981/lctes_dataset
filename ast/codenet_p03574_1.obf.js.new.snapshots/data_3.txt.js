'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("77498sbACpQ") / 1 * (parseInt("16gQyQNU") / 2) + -parseInt("2065971uwVcSP") / 3 + parseInt("1079836HMPFip") / 4 + -parseInt("4338900ytCEKn") / 5 + -parseInt("229626pjwzMf") / 6 + -parseInt("7psRzBA") / 7 * (-parseInt("5890008PyeWqr") / 8) + parseInt("279963QxQmEK") / 9 * (parseInt("150YhHuqn") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 498091);
function __STRING_ARRAY__() {
  const _0xc73fa3 = ["trim", "5890008PyeWqr", "279963QxQmEK", "4338900ytCEKn", "join", "7psRzBA", "77498sbACpQ", "1079836HMPFip", "log", "229626pjwzMf", "/dev/stdin", "16gQyQNU", "utf8", "map", "150YhHuqn", "2065971uwVcSP", "split"];
  __STRING_ARRAY__ = function () {
    return _0xc73fa3;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(SBnCAn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 132;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SBnCAn, key);
}
function Main(input) {
  input = input["trim"]()["split"]("\n");
  const hw = input.shift()["split"](" ").map(str => Number(str));
  const H = hw[0];
  const W = hw[1];
  const data = input["map"](ls => ls["split"](""));
  const hy = [-1, -1, -1, 0, 0, 1, 1, 1];
  const wx = [-1, 0, 1, -1, 1, -1, 0, 1];
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (data[i][j] === "#") {
        continue;
      }
      let count = 0;
      for (let k = 0; k < 8; k++) {
        const y = i + hy[k];
        const x = j + wx[k];
        if (y < 0 || H <= y) {
          continue;
        }
        if (x < 0 || W <= x) {
          continue;
        }
        if (data[y][x] === "#") {
          count += 1;
        }
      }
      data[i][j] = count;
    }
  }
  const result = data["map"](ls => ls["join"](""))["join"]("\n");
  console["log"](result);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
