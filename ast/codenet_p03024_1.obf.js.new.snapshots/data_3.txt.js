'use strict';

function __STRING_ARRAY__() {
  const _0x5c39d7 = ["9065511qnftOu", "1sVIaHv", "trim", "length", "48ZECzzu", "6rHwQDu", "1081904piZawg", "70827OLVQzb", "3766625VvPtIQ", "split", "utf8", "4655230sbxuNk", "filter", "14030847dOXDZg", "YES", "610294mXelXO"];
  __STRING_ARRAY__ = function () {
    return _0x5c39d7;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1sVIaHv") / 1 * (-parseInt("610294mXelXO") / 2) + -parseInt("70827OLVQzb") / 3 * (-parseInt("48ZECzzu") / 4) + -parseInt("3766625VvPtIQ") / 5 * (-parseInt("6rHwQDu") / 6) + parseInt("9065511qnftOu") / 7 + -parseInt("1081904piZawg") / 8 + -parseInt("14030847dOXDZg") / 9 + parseInt("4655230sbxuNk") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 797861);
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const S = arg[0]["split"]("");
  const win = S["filter"](n => n === "o")["length"];
  const rest = 15 - S["length"];
  console.log(rest + win >= 8 ? "YES" : "NO");
};
function __DECODE_0__(uvYqUx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 221;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uvYqUx, key);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
