'use strict';

function __DECODE_0__(yckLkA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 465;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yckLkA, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("360978vjnubJ") / 1 * (-parseInt("4pvGUsk") / 2) + parseInt("1386396lWHclE") / 3 + -parseInt("2292620sjMLLw") / 4 + parseInt("3011585WooWTk") / 5 * (parseInt("6gZrABY") / 6) + -parseInt("763154FfZTgz") / 7 + parseInt("93144JNxwvj") / 8 * (-parseInt("243nAFbha") / 9) + -parseInt("4256660CUHwYA") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 364201);
function Main(input) {
  const date = input["split"]("\n")[0]["replace"](/^.{4}/, 2018);
  console["log"](date);
}
function __STRING_ARRAY__() {
  const _0x4c008b = ["360978vjnubJ", "4pvGUsk", "1386396lWHclE", "4256660CUHwYA", "log", "split", "93144JNxwvj", "3011585WooWTk", "readFileSync", "6gZrABY", "243nAFbha", "2292620sjMLLw", "763154FfZTgz", "utf8", "replace"];
  __STRING_ARRAY__ = function () {
    return _0x4c008b;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
