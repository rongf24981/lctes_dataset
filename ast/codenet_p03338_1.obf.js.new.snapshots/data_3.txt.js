'use strict';

function __STRING_ARRAY__() {
  const _0x5efc47 = ["24iwInVn", "12LAqtyd", "split", "max", "40206VTALgL", "slice", "trim", "length", "8xwelZj", "3896184vNUSLL", "1102000aThrqJ", "indexOf", "log", "49hIRBtw", "9mrLRuI", "543190QMhjtC", "readFileSync", "270488SnngED", "23934EDhsub", "8511514TUvrwg"];
  __STRING_ARRAY__ = function () {
    return _0x5efc47;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("40206VTALgL") / 1 * (-parseInt("24iwInVn") / 2) + parseInt("23934EDhsub") / 3 * (-parseInt("8xwelZj") / 4) + -parseInt("1102000aThrqJ") / 5 + parseInt("3896184vNUSLL") / 6 + -parseInt("49hIRBtw") / 7 * (parseInt("270488SnngED") / 8) + parseInt("9mrLRuI") / 9 * (-parseInt("543190QMhjtC") / 10) + -parseInt("8511514TUvrwg") / 11 * (-parseInt("12LAqtyd") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 413314);
function __DECODE_0__(hjXJQR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 369;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hjXJQR, key);
}
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const N = parseInt(arg[0]["split"](" ")[0]);
  const S = arg[1].split("");
  const charset = new Set(S);
  const chars = [...charset];
  let answer = 0;
  for (let i in S) {
    const first = S["slice"](0, i);
    const last = S["slice"](i, S["length"]);
    let temp = 0;
    for (let j in chars) {
      if (first["indexOf"](chars[j]) !== -1 && last["indexOf"](chars[j]) !== -1) {
        temp++;
      }
    }
    answer = Math["max"](answer, temp);
  }
  console["log"](answer);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
