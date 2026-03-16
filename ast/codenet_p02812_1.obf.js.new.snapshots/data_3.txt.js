'use strict';

function __DECODE_0__(DeKAkI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 220;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DeKAkI, key);
}
function __STRING_ARRAY__() {
  const _0x2e3bfd = ["10XsdHPF", "1466925pdMjBM", "28996anyqvf", "325UGKJJF", "/dev/stdin", "trim", "9phEydO", "654270vyKXfL", "14ZUTwYW", "2929977CHVGRu", "1DnJYVh", "267060ivmkMb", "250742EiEBSO", "ABC", "split", "2646853kMVJcB", "8AEyzdd", "log"];
  __STRING_ARRAY__ = function () {
    return _0x2e3bfd;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1DnJYVh") / 1 * (-parseInt("250742EiEBSO") / 2) + -parseInt("9phEydO") / 3 * (parseInt("28996anyqvf") / 4) + parseInt("1466925pdMjBM") / 5 + parseInt("654270vyKXfL") / 6 * (-parseInt("14ZUTwYW") / 7) + -parseInt("8AEyzdd") / 8 * (parseInt("2929977CHVGRu") / 9) + -parseInt("10XsdHPF") / 10 * (parseInt("2646853kMVJcB") / 11) + parseInt("267060ivmkMb") / 12 * (parseInt("325UGKJJF") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 169118);
const Main = input => {
  let xs = input["trim"]()["split"]("\n");
  let N = Number(xs[0]);
  let S = xs[1]["split"]("");
  let ans = 0;
  for (let i = 0; i <= N - 3; i++) {
    if (S[i] + S[i + 1] + S[i + 2] == "ABC") {
      ans++;
    }
  }
  console["log"](ans);
};
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
