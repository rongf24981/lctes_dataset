'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("37441tkVvkw") / 1 * (parseInt("16TiBZmz") / 2) + -parseInt("285609ZFzRjd") / 3 * (parseInt("4KBXOvd") / 4) + parseInt("1906045gRzFmz") / 5 + -parseInt("1476264HAHzlo") / 6 + -parseInt("320642XECWQd") / 7 * (parseInt("56Gvszwv") / 8) + -parseInt("9RKgjNN") / 9 * (-parseInt("1899610XfcTAT") / 10) + parseInt("759UhAkQL") / 11 * (parseInt("2472VgtZny") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 223023);
function main(input) {
  input = input["trim"]()["split"]("\n");
  const line_one = input[0]["split"](" ");
  const K = parseInt(input[1]);
  let line_one_arr = [];
  for (let i in line_one) {
    line_one_arr["push"](parseInt(line_one[i]));
  }
  for (let i = 0; i < K; i++) {
    if (line_one_arr[0] >= line_one_arr[1]) {
      line_one_arr[1] = line_one_arr[1] * 2;
      continue;
    }
    if (line_one_arr[1] >= line_one_arr[2]) {
      line_one_arr[2] = line_one_arr[2] * 2;
    }
  }
  if (line_one_arr[0] < line_one_arr[1] && line_one_arr[1] < line_one_arr[2]) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
}
function __DECODE_0__(azpSZr, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 286;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(azpSZr, key);
}
function numberSort(array) {
  array.sort(f);
  return array;
}
function f(a, b) {
  return a - b;
}
function __STRING_ARRAY__() {
  const _0x59741d = ["56Gvszwv", "16TiBZmz", "push", "759UhAkQL", "log", "2472VgtZny", "9RKgjNN", "1476264HAHzlo", "37441tkVvkw", "4KBXOvd", "1906045gRzFmz", "1899610XfcTAT", "320642XECWQd", "trim", "285609ZFzRjd", "split"];
  __STRING_ARRAY__ = function () {
    return _0x59741d;
  };
  return __STRING_ARRAY__();
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
