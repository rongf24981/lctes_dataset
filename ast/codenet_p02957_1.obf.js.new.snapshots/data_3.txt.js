'use strict';

function __DECODE_0__(yFWXki, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 358;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yFWXki, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("2QOdXqN") / 1 * (-parseInt("89944JbxwxY") / 2) + parseInt("825615ObHPZy") / 3 + -parseInt("116296ZUKePh") / 4 + -parseInt("162220hqQysP") / 5 + parseInt("6tZwZru") / 6 * (parseInt("1123710tMpxzb") / 7) + parseInt("190248PlQqQm") / 8 + -parseInt("2448369ACoOlq") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 215901);
function __STRING_ARRAY__() {
  const _0x9d0ebe = ["/dev/stdin", "IMPOSSIBLE", "89944JbxwxY", "utf8", "split", "2448369ACoOlq", "190248PlQqQm", "825615ObHPZy", "1123710tMpxzb", "log", "162220hqQysP", "map", "116296ZUKePh", "6tZwZru", "readFileSync", "2QOdXqN"];
  __STRING_ARRAY__ = function () {
    return _0x9d0ebe;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const args = input["split"]("\n")["map"](arg => arg["split"](" "));
  const a = parseInt(args[0][0], 10);
  const b = parseInt(args[0][1], 10);
  const t1 = a + b;
  const t2 = t1 / 2;
  if (t2 % 1 === 0) {
    console.log(t2);
  } else {
    console["log"]("IMPOSSIBLE");
  }
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
