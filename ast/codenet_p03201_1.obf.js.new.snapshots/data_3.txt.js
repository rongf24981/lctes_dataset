'use strict';

function __DECODE_0__(LpEazQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 412;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LpEazQ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("5377AuCBIC") / 1 * (parseInt("90lJxtDa") / 2) + -parseInt("782220LBlpbI") / 3 + parseInt("189844cfpxKA") / 4 * (-parseInt("5VdGjwU") / 5) + -parseInt("1552314rnTgQa") / 6 * (-parseInt("7pNUHbv") / 7) + parseInt("456SuxUhn") / 8 * (-parseInt("22041YYKLQu") / 9) + parseInt("17990sLyaxz") / 10 * (parseInt("682YYqKSv") / 11) + -parseInt("5064nBVBcu") / 12 * (-parseInt("14521zGGwiT") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 151872);
function __STRING_ARRAY__() {
  const _0x8e447b = ["5VdGjwU", "456SuxUhn", "toString", "5064nBVBcu", "782220LBlpbI", "17990sLyaxz", "log", "5377AuCBIC", "sort", "reduce", "189844cfpxKA", "90lJxtDa", "utf8", "1552314rnTgQa", "14521zGGwiT", "length", "/dev/stdin", "22041YYKLQu", "splice", "filter", "map", "7pNUHbv", "682YYqKSv", "split", "findIndex"];
  __STRING_ARRAY__ = function () {
    return _0x8e447b;
  };
  return __STRING_ARRAY__();
}
function getPair(num) {
  return parseInt(num["toString"](2)["split"]("")["map"](x => x === "1" ? "0" : "1")["reduce"]((acc, cur) => acc + cur, ""), 2) + 1;
}
function main(input) {
  const inputs = input.split("\n")["filter"](x => x !== "");
  const A = inputs[1]["split"](" ")["map"](Number);
  let sortedA = A["sort"]((a, b) => b - a);
  let count = 0;
  while (sortedA["length"] > 0) {
    let i = sortedA[0];
    sortedA["splice"](0, 1);
    let j = getPair(i);
    let indexJ = sortedA["findIndex"](x => x === j);
    if (indexJ >= 0) {
      sortedA["splice"](indexJ, 1);
      count++;
    }
  }
  console["log"](count);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
