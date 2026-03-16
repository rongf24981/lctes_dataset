'use strict';

function __STRING_ARRAY__() {
  const _0x5df938 = ["reduce", "shift", "472522JrwtJP", "map", "join", "utf8", "2589512oGIdqv", "95473DKvZVb", "945900bSUpwM", "101562mdpXSx", "204eRKtUz", "toString", "log", "1751936xiaUtj", "414852XdKhyj", "split"];
  __STRING_ARRAY__ = function () {
    return _0x5df938;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("472522JrwtJP") / 1 + parseInt("101562mdpXSx") / 2 + -parseInt("414852XdKhyj") / 3 + -parseInt("1751936xiaUtj") / 4 + parseInt("945900bSUpwM") / 5 + -parseInt("204eRKtUz") / 6 * (-parseInt("95473DKvZVb") / 7) + -parseInt("2589512oGIdqv") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 276252);
function main(input) {
  const lines = input["split"]("\n");
  const N = parseInt(lines["shift"]());
  const F = [];
  for (let i = 0; i < N; i++) {
    F.push(lines[i]["split"](" ")["map"](x => parseInt(x)));
  }
  const P = [];
  for (let i = 0; i < N; i++) {
    P.push(lines[i + N].split(" ")["map"](x => parseInt(x)));
  }
  let result = -Infinity;
  for (let i = 1; i < 1024; i++) {
    let score = 0;
    for (let j = 0; j < N; j++) {
      let store = F[j];
      let p_index = (parseInt(store["join"](""), 2) & i)["toString"](2)["split"]("")["map"](x => Number(x))["reduce"]((a, b) => a + b, 0);
      score += P[j][p_index];
    }
    if (score > result) {
      result = score;
    }
  }
  console["log"](result);
}
function __DECODE_0__(pmrOFM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 146;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pmrOFM, key);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
