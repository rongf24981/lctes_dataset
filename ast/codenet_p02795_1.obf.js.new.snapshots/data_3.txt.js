'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("2809ZsrFbk") / 1 * (parseInt("886NOSxGD") / 2) + parseInt("3hxYFUl") / 3 * (parseInt("2129744qRTImd") / 4) + parseInt("1106530GEOehx") / 5 * (parseInt("12narySH") / 6) + parseInt("1981987rYoOMW") / 7 + parseInt("4342088rrQdcM") / 8 + parseInt("227583qbQZoV") / 9 * (-parseInt("80KOofiZ") / 10) + -parseInt("23637482UAPHrU") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 694179);
function __DECODE_0__(EhBxmx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 444;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EhBxmx, key);
}
const main = arg => {
  const input = arg["trim"]()["split"]("\n");
  let H = Number(input[0].split(" "));
  let W = Number(input[1]["split"](" "));
  let N = Number(input[2]["split"](" "));
  let paintedRow = 0;
  let paintedColumn = 0;
  let paintedCell = 0;
  while (1) {
    if (W >= H) {
      paintedCell += W - paintedColumn;
      paintedRow++;
    } else {
      paintedCell += H - paintedRow;
      paintedColumn++;
    }
    if (paintedCell >= N) {
      break;
    }
  }
  console["log"](paintedColumn + paintedRow);
};
function __STRING_ARRAY__() {
  const _0x21e097 = ["readFileSync", "80KOofiZ", "12narySH", "4342088rrQdcM", "227583qbQZoV", "1981987rYoOMW", "trim", "1106530GEOehx", "split", "23637482UAPHrU", "2809ZsrFbk", "log", "886NOSxGD", "3hxYFUl", "2129744qRTImd", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x21e097;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
