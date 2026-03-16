'use strict';

function __STRING_ARRAY__() {
  const _0x294e67 = ["3045969yNSvGV", "516422ZojBtf", "utf8", "/dev/stdin", "9662845KxbXFI", "shift", "pow", "7563654JRMTqF", "4zjfACm", "1046694bhiRZW", "ceil", "trim", "3eVUzfF", "461149kFLSlT", "18165WkMdPk", "readFileSync", "map", "split", "push", "4304ArkzRD", "40sQxEyq"];
  __STRING_ARRAY__ = function () {
    return _0x294e67;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("461149kFLSlT") / 1 + -parseInt("516422ZojBtf") / 2 * (parseInt("3eVUzfF") / 3) + parseInt("4zjfACm") / 4 * (-parseInt("9662845KxbXFI") / 5) + parseInt("7563654JRMTqF") / 6 + parseInt("18165WkMdPk") / 7 * (parseInt("4304ArkzRD") / 8) + -parseInt("3045969yNSvGV") / 9 + parseInt("40sQxEyq") / 10 * (parseInt("1046694bhiRZW") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 969263);
function main(input) {
  input = input["trim"]()["split"]("\n");
  const DG = input["shift"]()["split"](" ")["map"](v => Number(v));
  input = input["map"](v => v.split(" ")["map"](v => Number(v)));
  const calc = (a, r) => {
    let count = [Math["pow"](10, 8)];
    for (let i = 0; i < DG[0]; i++) {
      const cur = Math.pow(2, i);
      if ((a & cur) === cur) {
        const points = (i + 1) * 100;
        let max = points * input[i][0] + input[i][1];
        let num = Math["ceil"](r / points);
        if (max < r) {
          count["push"](input[i][0] + calc(a - cur, r - max));
        } else {
          count["push"](num < input[i][0] ? num : input[i][0]);
        }
      }
    }
    return Math.min(...count);
  };
  console.log(calc(Math["pow"](2, DG[0]) - 1, DG[1]));
}
function __DECODE_0__(ySXOio, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 435;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ySXOio, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
