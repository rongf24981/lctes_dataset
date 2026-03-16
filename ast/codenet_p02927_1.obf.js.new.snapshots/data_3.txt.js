'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("323430XfwCqm") / 1 + parseInt("4VIXMlr") / 2 * (-parseInt("1598187smDJKM") / 3) + parseInt("129064njnOok") / 4 * (parseInt("110gwwrDA") / 5) + parseInt("4236768YOWjWp") / 6 + parseInt("2676177bEkQDM") / 7 * (parseInt("16MHREZJ") / 8) + -parseInt("3302289EHMdPA") / 9 + -parseInt("5242180hGypxI") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 547435);
function __DECODE_0__(HPIDBK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 400;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HPIDBK, key);
}
const main = input => {
  const args = input["split"]("\n")["map"](arg => arg["split"](" "));
  const M = parseInt(args[0][0], 10);
  const D = parseInt(args[0][1], 10);
  let cnt = 0;
  for (let m = 1; m <= M; m++) {
    for (let j = 1; j <= D; j++) {
      const d1 = j % 10;
      const d10 = Math.floor(j / 10);
      if (d1 >= 2 && d10 >= 2 && d1 * d10 === m) {
        cnt++;
      }
    }
  }
  console["log"](cnt);
};
function __STRING_ARRAY__() {
  const _0x2ef3ea = ["3302289EHMdPA", "110gwwrDA", "log", "5242180hGypxI", "utf8", "4VIXMlr", "split", "323430XfwCqm", "16MHREZJ", "1598187smDJKM", "4236768YOWjWp", "map", "129064njnOok", "2676177bEkQDM"];
  __STRING_ARRAY__ = function () {
    return _0x2ef3ea;
  };
  return __STRING_ARRAY__();
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
