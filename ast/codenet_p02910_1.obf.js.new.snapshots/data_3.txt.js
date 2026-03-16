'use strict';

function __STRING_ARRAY__() {
  const _0x400354 = ["94fbXzLB", "7155198REYAcy", "map", "5904235ceVxly", "length", "includes", "47021EnPmPS", "/dev/stdin", "10481184EWryLv", "10925776QwGoPH", "46653eLvmuc", "4JqUQZU", "Yes", "55HwfDJj", "log", "utf8", "split", "7dOoMXr", "3348340jomkSV", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x400354;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("47021EnPmPS") / 1 + -parseInt("94fbXzLB") / 2 * (parseInt("46653eLvmuc") / 3) + parseInt("4JqUQZU") / 4 * (-parseInt("5904235ceVxly") / 5) + parseInt("7155198REYAcy") / 6 + parseInt("7dOoMXr") / 7 * (-parseInt("10925776QwGoPH") / 8) + parseInt("10481184EWryLv") / 9 + -parseInt("3348340jomkSV") / 10 * (-parseInt("55HwfDJj") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 706792);
function __DECODE_0__(qFHBAx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 185;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qFHBAx, key);
}
const main = input => {
  const args = input["split"]("\n")["map"](arg => arg["split"](" "));
  const S = args[0][0];
  const N = S["length"];
  let odd = true;
  let even = true;
  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
      if (!["R", "U", "D"]["includes"](S[i])) {
        odd = false;
      }
    } else if (!["L", "U", "D"].includes(S[i])) {
      even = false;
    }
  }
  if (odd && even) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
