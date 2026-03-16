'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("846995wiJdSn") / 1 + -parseInt("2109126nbflUy") / 2 + parseInt("21gUtrZe") / 3 * (parseInt("890684QQCYpl") / 4) + parseInt("5427755xiCvYy") / 5 + parseInt("3828942mbWQzX") / 6 + parseInt("3873051YGnslR") / 7 + parseInt("8kUZvnC") / 8 * (-parseInt("23993757ZmsBkD") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 962157);
function __STRING_ARRAY__() {
  const _0x27d62f = ["846995wiJdSn", "21gUtrZe", "3873051YGnslR", "join", "log", "eraser", "890684QQCYpl", "5427755xiCvYy", "8kUZvnC", "dreamer", "YES", "/dev/stdin", "utf-8", "readFileSync", "length", "2109126nbflUy", "dream", "erase", "23993757ZmsBkD", "slice", "3828942mbWQzX", "split"];
  __STRING_ARRAY__ = function () {
    return _0x27d62f;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  const arr = ["dream", "dreamer", "erase", "eraser"];
  for (let i in arr) {
    arr[i] = reverse(arr[i]);
  }
  input = reverse(input);
  while (input.length > 0) {
    let flag = false;
    for (let s of arr) {
      if (input["slice"](0, s["length"]) == s) {
        input = input.substr(s["length"]);
        flag = true;
      }
    }
    if (flag == false) {
      break;
    }
  }
  if (input["length"] <= 0) {
    console["log"]("YES");
  } else {
    console["log"]("NO");
  }
}
function reverse(str) {
  return str["split"]("").reverse()["join"]("");
}
function __DECODE_0__(NLbOLF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 259;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NLbOLF, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf-8"));
