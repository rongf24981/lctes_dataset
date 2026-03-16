'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1flexEx") / 1 * (-parseInt("1140814ZjKPjw") / 2) + parseInt("2997135GBhBjS") / 3 + parseInt("4665852HgdbaL") / 4 + -parseInt("1665iDbUeo") / 5 * (parseInt("16182clZxRa") / 6) + -parseInt("212079oSezzi") / 7 * (-parseInt("272WvGYMq") / 8) + parseInt("162522AZePul") / 9 * (parseInt("560vygFrB") / 10) + -parseInt("11972125jTjXxh") / 11 * (parseInt("36fDtgLw") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 614035);
function __STRING_ARRAY__() {
  const _0x6a4112 = ["log", "readFileSync", "4665852HgdbaL", "1665iDbUeo", "11972125jTjXxh", "2997135GBhBjS", "min", "map", "1140814ZjKPjw", "212079oSezzi", "max", "272WvGYMq", "utf8", "162522AZePul", "36fDtgLw", "560vygFrB", "split", "1flexEx", "16182clZxRa"];
  __STRING_ARRAY__ = function () {
    return _0x6a4112;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(SyrpPn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 480;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SyrpPn, key);
}
function main(s) {
  s = s["split"]("\n")[0]["split"](" ")["map"](n => Number(n));
  const A = s[0];
  const B = s[1];
  const C = s[2];
  const X = s[3];
  const Y = s[4];
  const min = Math["min"](X, Y);
  const case1 = A * X + B * Y;
  const case2 = C * 2 * min + (X - min) * A + (Y - min) * B;
  const case3 = C * 2 * Math["max"](X, Y);
  const answer = Math["min"](...[case1, case2, case3]);
  console["log"](answer);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
