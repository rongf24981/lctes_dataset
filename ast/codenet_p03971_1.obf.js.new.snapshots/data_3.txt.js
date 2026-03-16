'use strict';

function __STRING_ARRAY__() {
  const _0x3e5d17 = ["log", "7iBBoQA", "1145070oZeUAj", "129486YqcgJb", "33AMSYnW", "push", "/dev/stdin", "split", "1542WToKEU", "Yes", "trim", "2Dxxklh", "3519780LfxIDk", "join", "readFileSync", "2274512rBYXBR", "1268960gZsZkC", "5075ElTtPE", "8488OHMsxK"];
  __STRING_ARRAY__ = function () {
    return _0x3e5d17;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(meRuhk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 311;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(meRuhk, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("129486YqcgJb") / 1 * (parseInt("2Dxxklh") / 2) + -parseInt("33AMSYnW") / 3 * (parseInt("8488OHMsxK") / 4) + parseInt("5075ElTtPE") / 5 * (parseInt("1542WToKEU") / 6) + parseInt("7iBBoQA") / 7 * (-parseInt("2274512rBYXBR") / 8) + -parseInt("1145070oZeUAj") / 9 + -parseInt("1268960gZsZkC") / 10 + parseInt("3519780LfxIDk") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 148539);
const Main = input => {
  const tmp = input["trim"]()["split"]("\n");
  const N = parseInt(tmp[0]["split"](" ")[0]);
  const A = parseInt(tmp[0]["split"](" ")[1]);
  const B = parseInt(tmp[0]["split"](" ")[2]);
  const S = tmp[1];
  let result = [];
  let count = 0;
  let overseas = 0;
  for (let i = 0; i < N; i++) {
    const participant = S["split"]("")[i];
    if (participant === "a") {
      if (count < A + B) {
        result["push"]("Yes");
        count += 1;
      } else {
        result.push("No");
      }
    } else if (participant === "b") {
      if (count < A + B && overseas < B) {
        result.push("Yes");
        count += 1;
        overseas += 1;
      } else {
        result["push"]("No");
      }
    } else {
      result["push"]("No");
    }
  }
  result = result["join"]("\n");
  console["log"](result);
  return result;
};
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
