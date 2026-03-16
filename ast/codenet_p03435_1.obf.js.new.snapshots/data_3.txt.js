'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("155491OEzBfN") / 1 * (parseInt("6GexTLP") / 2) + parseInt("33CRHzXa") / 3 * (-parseInt("413520uobEOO") / 4) + -parseInt("756370gKGBJe") / 5 + -parseInt("6DDSMaH") / 6 * (parseInt("8610077IAzngj") / 7) + parseInt("6262792eJHcWA") / 8 * (parseInt("9XGTnOA") / 9) + parseInt("20VfZtMx") / 10 * (-parseInt("2292961VQnhKB") / 11) + -parseInt("636FAORST") / 12 * (-parseInt("586417JdpqWe") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 704732);
function __STRING_ARRAY__() {
  const _0x259ab7 = ["756370gKGBJe", "6262792eJHcWA", "/dev/stdin", "6GexTLP", "33CRHzXa", "split", "9XGTnOA", "155491OEzBfN", "readFileSync", "utf8", "2292961VQnhKB", "trim", "636FAORST", "586417JdpqWe", "413520uobEOO", "6DDSMaH", "8610077IAzngj", "log", "20VfZtMx", "map"];
  __STRING_ARRAY__ = function () {
    return _0x259ab7;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const c = arg["map"](n => n["split"](" ")["map"](l => parseInt(l)));
  for (let a1 = 0; a1 <= 100; a1++) {
    const b1 = c[0][0] - a1;
    const b2 = c[1][0] - a1;
    const b3 = c[2][0] - a1;
    for (let a2 = 0; a2 <= 100; a2++) {
      if (a2 + b1 !== c[0][1]) {
        continue;
      }
      if (a2 + b2 !== c[1][1]) {
        continue;
      }
      if (a2 + b3 !== c[2][1]) {
        continue;
      }
      for (let a3 = 0; a3 <= 100; a3++) {
        if (a3 + b1 !== c[0][2]) {
          continue;
        }
        if (a3 + b2 !== c[1][2]) {
          continue;
        }
        if (a3 + b3 !== c[2][2]) {
          continue;
        }
        console["log"]("Yes");
        return;
      }
    }
  }
  console["log"]("No");
};
function __DECODE_0__(ictPdJ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 403;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ictPdJ, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
