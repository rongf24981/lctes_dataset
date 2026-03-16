'use strict';

function __STRING_ARRAY__() {
  const _0x42b76a = ["split", "1017335lGzOIc", "Yes", "utf8", "42BhPJDn", "6363027SQePDa", "2552263fHLIZD", "readFileSync", "/dev/stdin", "10xHCGHf", "shift", "1026760sqNxjw", "4281504AnZbAC", "map", "push", "sort", "35487AzlTxu", "82557zVSqch", "212hqwvsy"];
  __STRING_ARRAY__ = function () {
    return _0x42b76a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(gzjtsq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 312;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gzjtsq, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("82557zVSqch") / 1 + parseInt("212hqwvsy") / 2 * (parseInt("35487AzlTxu") / 3) + -parseInt("1026760sqNxjw") / 4 + -parseInt("1017335lGzOIc") / 5 * (-parseInt("42BhPJDn") / 6) + -parseInt("2552263fHLIZD") / 7 + -parseInt("4281504AnZbAC") / 8 + -parseInt("6363027SQePDa") / 9 * (parseInt("10xHCGHf") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 732096);
function main(input) {
  const lines = input["split"]("\n");
  const N = parseInt(lines["shift"]());
  const tasks = [];
  for (let i = 0; i < N; i++) {
    tasks["push"](lines[i]["split"](" ")["map"](x => parseInt(x)));
  }
  tasks["sort"]((a, b) => a[1] - b[1]);
  let result = "Yes";
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += tasks[i][0];
    if (sum > tasks[i][1]) {
      result = "No";
      break;
    }
  }
  console.log(result);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
