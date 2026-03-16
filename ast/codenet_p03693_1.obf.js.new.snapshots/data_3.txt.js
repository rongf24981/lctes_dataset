'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("175829XYQqmD") / 1 + -parseInt("276216bNuvsT") / 2 + -parseInt("2988141FvcOEr") / 3 + -parseInt("4kBooSh") / 4 * (-parseInt("3884185FCBpbL") / 5) + parseInt("12mhuYHA") / 6 * (-parseInt("331163qpIrmH") / 7) + -parseInt("86512JTJvEz") / 8 * (parseInt("531grnBZq") / 9) + -parseInt("10dVmrZc") / 10 * (-parseInt("19588613ZZrnjL") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 514992);
function Main(input) {
  const param = Number(input["split"](" ")["join"](""));
  if (param % 4 === 0) {
    console["log"]("YES");
  } else {
    console["log"]("NO");
  }
}
function __DECODE_0__(NDYAVe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 345;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NDYAVe, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x1e5ec3 = ["join", "175829XYQqmD", "331163qpIrmH", "3884185FCBpbL", "2988141FvcOEr", "utf8", "19588613ZZrnjL", "4kBooSh", "/dev/stdin", "276216bNuvsT", "log", "readFileSync", "10dVmrZc", "split", "531grnBZq", "86512JTJvEz", "12mhuYHA", "YES"];
  __STRING_ARRAY__ = function () {
    return _0x1e5ec3;
  };
  return __STRING_ARRAY__();
}
