'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("353558WRjAZP") / 1 * (parseInt("2jiCTVj") / 2) + -parseInt("6VOUeep") / 3 * (-parseInt("52324nuWOgP") / 4) + parseInt("5QiiNdn") / 5 * (-parseInt("2043222WGZlac") / 6) + parseInt("1190301azeCJH") / 7 * (parseInt("32zgrXDW") / 8) + -parseInt("8955hlqCZb") / 9 * (-parseInt("3490FAaYxF") / 10) + -parseInt("99dxCELj") / 11 * (-parseInt("895092wdEFIU") / 12) + parseInt("8219458kpbtRZ") / 13 * (-parseInt("14laXOCh") / 14);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 398547);
const main = input => {
  const args = input["split"]("\n").map(arg => arg["split"](" "));
  const N = parseInt(args[0][0], 10);
  const p = args["slice"](1, N + 1).map(arg => parseInt(arg[0], 10))["sort"]((a, b) => b - a);
  let sum = p[0] / 2;
  for (let i = 1; i < N; i++) {
    sum += p[i];
  }
  console["log"](sum);
};
function __DECODE_0__(rtukVh, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 174;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rtukVh, key);
}
function __STRING_ARRAY__() {
  const _0x12391c = ["slice", "14laXOCh", "3490FAaYxF", "6VOUeep", "353558WRjAZP", "2jiCTVj", "32zgrXDW", "utf8", "99dxCELj", "2043222WGZlac", "8219458kpbtRZ", "/dev/stdin", "sort", "52324nuWOgP", "log", "1190301azeCJH", "5QiiNdn", "895092wdEFIU", "8955hlqCZb", "readFileSync", "split"];
  __STRING_ARRAY__ = function () {
    return _0x12391c;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
