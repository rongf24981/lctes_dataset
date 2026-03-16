'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("697760DRezBb") / 1 + parseInt("1931962rDQsIy") / 2 + -parseInt("12KmQXen") / 3 * (-parseInt("663816ksTrUA") / 4) + parseInt("118660garGlV") / 5 + -parseInt("6116508zpncAt") / 6 + parseInt("33838cLDDGM") / 7 * (parseInt("1840oMDulm") / 8) + -parseInt("2323278jZTBKt") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 790029);
let input = require("fs").readFileSync("/dev/stdin", "utf8");
input = input["trim"]();
let ans = "YES";
if (input[0] == "A") {
  input = input.slice(1);
}
if (input[0] == "K") {
  input = input["slice"](1);
}
function __DECODE_0__(NgBvlV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 300;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NgBvlV, key);
}
if (input[0] == "I") {
  input = input["slice"](1);
}
if (input[0] == "H") {
  input = input["slice"](1);
}
function __STRING_ARRAY__() {
  const _0x1c1198 = ["12KmQXen", "118660garGlV", "6116508zpncAt", "/dev/stdin", "slice", "697760DRezBb", "utf8", "2323278jZTBKt", "trim", "1931962rDQsIy", "log", "YES", "33838cLDDGM", "1840oMDulm", "663816ksTrUA"];
  __STRING_ARRAY__ = function () {
    return _0x1c1198;
  };
  return __STRING_ARRAY__();
}
if (input[0] == "A") {
  input = input.slice(1);
}
if (input[0] == "B") {
  input = input["slice"](1);
}
if (input[0] == "A") {
  input = input["slice"](1);
}
if (input[0] == "R") {
  input = input["slice"](1);
}
if (input[0] == "A") {
  input = input["slice"](1);
}
if (input == "") {
  ans = "YES";
} else {
  ans = "NO";
}
console["log"](ans);
