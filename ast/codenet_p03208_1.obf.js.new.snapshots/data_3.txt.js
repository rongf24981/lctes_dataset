'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("47yDoJbO") / 1 * (parseInt("7834ohTnTq") / 2) + parseInt("5871ZhccDz") / 3 * (-parseInt("4ChEQeT") / 4) + parseInt("566675PLKest") / 5 + parseInt("1200492EiEQbj") / 6 + -parseInt("14fjePot") / 7 * (-parseInt("844136AjpfgO") / 8) + parseInt("108LNLIXF") / 9 * (-parseInt("70260nUKUcO") / 10) + -parseInt("2981MRaRTq") / 11 * (parseInt("5604UtlmQO") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 127526);
function __STRING_ARRAY__() {
  const _0x2ad1f8 = ["map", "844136AjpfgO", "70260nUKUcO", "/dev/stdin", "1200492EiEQbj", "slice", "5871ZhccDz", "push", "5604UtlmQO", "7834ohTnTq", "log", "2981MRaRTq", "4ChEQeT", "108LNLIXF", "47yDoJbO", "sort", "split", "14fjePot", "566675PLKest"];
  __STRING_ARRAY__ = function () {
    return _0x2ad1f8;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OBZbwb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 322;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OBZbwb, key);
}
function main(arg) {
  const inputs = arg["split"]("\n");
  const N = parseInt(inputs[0].split(" ")[0]);
  const K = parseInt(inputs[0]["split"](" ")[1]);
  const list = inputs["slice"](1, N + 1)["map"](x => parseInt(x))["sort"]((a, b) => {
    return a - b;
  });
  let i;
  let sa = [];
  for (i = 0; i < N - K + 1; ++i) {
    sa["push"](list[i + K - 1] - list[i]);
  }
  console["log"](Math.min(...sa));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
