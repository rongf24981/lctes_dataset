'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("4911uYFTqv") / 1 * (-parseInt("54hfRsdO") / 2) + parseInt("357tRVaXo") / 3 * (parseInt("21464BQiegi") / 4) + parseInt("584965bbfMOt") / 5 + -parseInt("1084878LxpKNq") / 6 + -parseInt("21gUSFIE") / 7 * (parseInt("1086104rDjDVx") / 8) + parseInt("5143194hqsSLw") / 9 + -parseInt("2802440rKdsiJ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 326070);
function __DECODE_0__(tKdoeB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 413;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tKdoeB, key);
}
function __STRING_ARRAY__() {
  const _0x2896a2 = ["4911uYFTqv", "357tRVaXo", "2802440rKdsiJ", "readFileSync", "sort", "utf-8", "21gUSFIE", "log", "/dev/stdin", "1086104rDjDVx", "1084878LxpKNq", "5143194hqsSLw", "584965bbfMOt", "54hfRsdO", "21464BQiegi"];
  __STRING_ARRAY__ = function () {
    return _0x2896a2;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  input = input.trim().split(" ");
  const N = Number(input[0]);
  const X = Number(input[1]);
  const T = Number(input[2]);
  let ans = 0;
  let i;
  for (i = 0; ans < N; i++) {
    ans += X;
  }
  console["log"](T * i);
}
function numberSort(array) {
  array["sort"](f);
  return array;
}
function f(a, b) {
  return a - b;
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf-8"));
