'use strict';

function __DECODE_0__(dbgENE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 168;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dbgENE, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("225dCgHhm") / 1 * (parseInt("730aetKoD") / 2) + parseInt("860619EcAiES") / 3 + -parseInt("1257816PtINEr") / 4 + -parseInt("1012265lxQGtc") / 5 + -parseInt("346350sUcIXJ") / 6 * (parseInt("63VljCor") / 7) + -parseInt("740536fwPcrF") / 8 * (parseInt("18evmxtu") / 9) + parseInt("14004780kRwZdu") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 547910);
function __STRING_ARRAY__() {
  const _0x2c08f7 = ["readFileSync", "trim", "Yes", "63VljCor", "740536fwPcrF", "14004780kRwZdu", "log", "730aetKoD", "/dev/stdin", "346350sUcIXJ", "1257816PtINEr", "1012265lxQGtc", "18evmxtu", "utf8", "225dCgHhm", "860619EcAiES"];
  __STRING_ARRAY__ = function () {
    return _0x2c08f7;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const args = input["trim"]().split(" ");
  const a = parseInt(args[0], 10);
  const b = parseInt(args[1], 10);
  const c = parseInt(args[2], 10);
  if (c >= a && c <= b) {
    console["log"]("Yes");
  } else {
    console.log("No");
  }
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
