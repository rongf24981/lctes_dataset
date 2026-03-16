'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("9JkBlrS") / 1 * (parseInt("231926UguTLT") / 2) + -parseInt("2937534WAaGkI") / 3 + -parseInt("2178836nodYDq") / 4 + -parseInt("4978685ADEhTB") / 5 + -parseInt("78BGvJsU") / 6 * (parseInt("153783riLcLv") / 7) + -parseInt("8zJDBEL") / 8 * (-parseInt("4020885ojVWYm") / 9) + -parseInt("1906360DPkSCg") / 10 * (-parseInt("110Otdodc") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 591571);
function __DECODE_0__(ujlYtz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 310;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ujlYtz, key);
}
function __STRING_ARRAY__() {
  const _0x45c9f9 = ["/dev/stdin", "substring", "110Otdodc", "78BGvJsU", "4020885ojVWYm", "1906360DPkSCg", "utf8", "9JkBlrS", "231926UguTLT", "map", "log", "repeat", "4978685ADEhTB", "filter", "153783riLcLv", "split", "2178836nodYDq", "8zJDBEL", "length", "2937534WAaGkI"];
  __STRING_ARRAY__ = function () {
    return _0x45c9f9;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const inputs = input["split"]("\n")["filter"](x => x !== "");
  const n = inputs[0];
  const a = inputs[1].split(" ")["map"](x => Number(x));
  let result = 1;
  while (testN(result, a) === false) {
    result = result + 1;
  }
  console["log"](result);
  function testN(n, a) {
    let current = "0".repeat(a[0]);
    for (let i = 1; i < a["length"]; i++) {
      if (a[i - 1] < a[i]) {
        current = current + "0"["repeat"](a[i] - a[i - 1]);
      } else {
        current = parseInt(current["substring"](0, a[i]), n) + 1;
        if (isNaN(current)) {
          return false;
        }
        current = "" + current;
        if (current.length > a[i]) {
          return false;
        } else {
          current = "0"["repeat"](a[i] - current["length"]) + current;
        }
      }
    }
    return true;
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
