'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("358781XzaSlS") / 1 + -parseInt("1802530QzHRFV") / 2 + parseInt("3407601oGvSmf") / 3 + -parseInt("431132oJwBGg") / 4 * (-parseInt("15IygPeC") / 5) + -parseInt("6523404vxsikd") / 6 + parseInt("4949WXNiyW") / 7 * (-parseInt("3872oyJHBj") / 8) + parseInt("10048833LXIcEv") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 603847);
function __STRING_ARRAY__() {
  const _0x32030c = ["log", "431132oJwBGg", "3407601oGvSmf", "split", "utf-8", "10048833LXIcEv", "15IygPeC", "sort", "6523404vxsikd", "358781XzaSlS", "4949WXNiyW", "1802530QzHRFV", "3872oyJHBj"];
  __STRING_ARRAY__ = function () {
    return _0x32030c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(FPqIQV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 413;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FPqIQV, key);
}
function main(input) {
  input = input.trim().split("\n");
  const N = Number(input[0]);
  const line2_arr = input[1]["split"](" ");
  let ans = 0;
  for (let i = 0; i < N; i++) {
    if (Number(line2_arr[i]) == 0) {
      continue;
    }
    for (let j = i + 1; j < N; j++) {
      ans = ans + Number(line2_arr[i]) * Number(line2_arr[j]);
    }
  }
  console["log"](ans % 1000000007);
}
function numberSort(array) {
  array["sort"](f);
  return array;
}
function f(a, b) {
  return a - b;
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
