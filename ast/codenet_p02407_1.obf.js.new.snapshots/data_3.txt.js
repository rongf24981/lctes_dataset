(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("34fElkHT") / 1 * (-parseInt("10766yBgtXT") / 2) + -parseInt("288yUXYBT") / 3 * (-parseInt("2028gbuKKo") / 4) + -parseInt("10XluOPd") / 5 * (-parseInt("1577724wEysFI") / 6) + -parseInt("2410548cqVGcY") / 7 + parseInt("870824juqgXs") / 8 + -parseInt("222552jrnYQC") / 9 + parseInt("10QOkBVw") / 10 * (-parseInt("1852334qbiNms") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 328969);
function __STRING_ARRAY__() {
  const _0x40de45 = ["reverse", "34fElkHT", "join", "1577724wEysFI", "utf8", "10QOkBVw", "split", "log", "map", "2028gbuKKo", "222552jrnYQC", "/dev/stdin", "10766yBgtXT", "readFileSync", "288yUXYBT", "10XluOPd", "2410548cqVGcY", "870824juqgXs", "1852334qbiNms"];
  __STRING_ARRAY__ = function () {
    return _0x40de45;
  };
  return __STRING_ARRAY__();
}
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"](/\n/);
let num = input[1]["split"](" ")["map"](Number);
num["reverse"]();
function __DECODE_0__(YorfpT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 108;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YorfpT, key);
}
console["log"](num["join"](" "));
