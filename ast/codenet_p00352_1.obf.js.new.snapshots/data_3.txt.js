'use strict';

function __STRING_ARRAY__() {
  const _0x1dc694 = ["165XJqvlo", "62812usOWWp", "394940JgpIwS", "2357295POmisM", "128910JNqABO", "159sJFIqB", "1SKrQYs", "7677ANrKaN", "760810jBXBdU", "log", "1949258whnDBW", "utf8", "904RuEpyv", "readFileSync", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x1dc694;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QYgKAk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 204;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QYgKAk, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1SKrQYs") / 1 * (-parseInt("1949258whnDBW") / 2) + parseInt("159sJFIqB") / 3 * (-parseInt("62812usOWWp") / 4) + -parseInt("2357295POmisM") / 5 + -parseInt("128910JNqABO") / 6 + -parseInt("394940JgpIwS") / 7 + -parseInt("904RuEpyv") / 8 * (parseInt("7677ANrKaN") / 9) + -parseInt("760810jBXBdU") / 10 * (-parseInt("165XJqvlo") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 637832);
function Main(input) {
  const ab = input.split(" ");
  console["log"]((parseFloat(ab[0]) + parseFloat(ab[1])) / 2);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
