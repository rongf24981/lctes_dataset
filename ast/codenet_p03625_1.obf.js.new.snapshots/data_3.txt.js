'use strict';

function __STRING_ARRAY__() {
  const _0x1e17cd = ["push", "1950495KOAOSJ", "map", "4uJGlSX", "6KgWtKn", "9XHKjCj", "442503vPSgFl", "split", "/dev/stdin", "4554970GJMKvY", "764776REaeZX", "readFileSync", "249261IQpIkp", "2034858voASfJ", "1082052nAEuwx", "length"];
  __STRING_ARRAY__ = function () {
    return _0x1e17cd;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("249261IQpIkp") / 1 + -parseInt("6KgWtKn") / 2 * (-parseInt("442503vPSgFl") / 3) + -parseInt("4uJGlSX") / 4 * (parseInt("1950495KOAOSJ") / 5) + parseInt("1082052nAEuwx") / 6 + -parseInt("2034858voASfJ") / 7 + parseInt("764776REaeZX") / 8 * (parseInt("9XHKjCj") / 9) + parseInt("4554970GJMKvY") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 243885);
function __DECODE_0__(fPUmjV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 262;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fPUmjV, key);
}
function main(input) {
  input = input.split(/\r?\n/);
  input = input[1]["split"](" ")["map"](v => ~~v).sort((a, b) => b - a);
  let ans = 0;
  let sticks = [];
  let prev = input[0];
  for (let i = 1; i < input.length; i++) {
    if (prev == input[i]) {
      sticks["push"](prev);
      sticks["push"](input[i]);
      prev = 0;
    } else {
      prev = input[i];
    }
  }
  if (sticks["length"] >= 4) {
    ans = sticks[0] * sticks[3];
    console.log(ans);
  } else {
    console.log(0);
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
