'use strict';

function __STRING_ARRAY__() {
  const _0x1a5609 = ["141260OWNQQy", "12CvGMwT", "12seWTso", "48tpcuta", "8ClNrwJ", "readFileSync", "89307nzanud", "10714938DhbDPY", "2tcCcLo", "pow", "150868VniFWf", "226277nGoRVC", "log", "utf8", "438229pRbaai", "map", "270HcdrEM", "4395811qTmMst", "split"];
  __STRING_ARRAY__ = function () {
    return _0x1a5609;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(VUDuHj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 105;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VUDuHj, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("226277nGoRVC") / 1 * (-parseInt("2tcCcLo") / 2) + -parseInt("48tpcuta") / 3 * (-parseInt("150868VniFWf") / 4) + parseInt("141260OWNQQy") / 5 * (-parseInt("12CvGMwT") / 6) + -parseInt("4395811qTmMst") / 7 * (-parseInt("8ClNrwJ") / 8) + -parseInt("89307nzanud") / 9 * (-parseInt("270HcdrEM") / 10) + -parseInt("438229pRbaai") / 11 * (parseInt("12seWTso") / 12) + -parseInt("10714938DhbDPY") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 352520);
function main(input) {
  const lines = input["split"]("\n");
  const N = lines[0]["split"](" ")["map"](x => parseInt(x))[0];
  const M = lines[0]["split"](" ")["map"](x => parseInt(x))[1];
  let result = ((N - M) * 100 + M * 1900) * Math["pow"](2, M);
  console["log"](result);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
