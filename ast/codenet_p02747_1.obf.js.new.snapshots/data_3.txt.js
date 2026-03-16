'use strict';

function __STRING_ARRAY__() {
  const _0x437d91 = ["4411725rATvCT", "Yes", "4rjvBHy", "1476296AmBWOD", "3537550nQRITF", "6467810aPfgpr", "11EtkzKY", "15981678UdcgOh", "length", "2AlswrK", "utf8", "8603mIWaVm", "readFileSync", "4506ZLjzMc", "split", "trim", "13334896TdLiGA"];
  __STRING_ARRAY__ = function () {
    return _0x437d91;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1476296AmBWOD") / 1 + -parseInt("2AlswrK") / 2 * (parseInt("4411725rATvCT") / 3) + parseInt("4rjvBHy") / 4 * (parseInt("3537550nQRITF") / 5) + -parseInt("4506ZLjzMc") / 6 * (parseInt("8603mIWaVm") / 7) + parseInt("13334896TdLiGA") / 8 + parseInt("15981678UdcgOh") / 9 + -parseInt("6467810aPfgpr") / 10 * (-parseInt("11EtkzKY") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 927045);
const Main = input => {
  let xs = input["trim"]()["split"]("");
  let len = xs["length"];
  let ans = 0;
  for (let i = 0; i <= len; i++) {
    if (i % 2 == 0 && xs[i] == "h" && [i + 1] != "h") {
      ans += 1;
    } else if (i % 2 == 1 && xs[i] == "i" && xs[i + 1] != "i") {
      ans += 1;
    } else {
      ans += 0;
    }
  }
  if (ans >= 2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};
function __DECODE_0__(qLlqKT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 173;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qLlqKT, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
