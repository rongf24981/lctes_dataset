'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("170425SraVGv") / 1 + parseInt("520598oDBLKm") / 2 + -parseInt("1336029OwRPrC") / 3 + parseInt("4047044aeVBzQ") / 4 + -parseInt("2734015TIrfEv") / 5 + -parseInt("1354386EuXHii") / 6 + -parseInt("4394768JDCrVq") / 7 * (-parseInt("8oxkXlg") / 8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 511582);
function __DECODE_0__(pOxlCe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 335;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pOxlCe, key);
}
const main = arg => {
  arg = arg["trim"]().split("\n");
  const S = arg[0].split("");
  if (S["length"] === 2) {
    console.log(1);
    return;
  }
  for (let i = 0; i < S["length"]; i++) {
    S["pop"]();
    let mid = Math["floor"](S["length"] / 2);
    if (S["slice"](0, mid).join("") === S["slice"](mid, S.length + 1)["join"]("")) {
      console["log"](S["length"]);
      return;
    }
  }
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x4bbf78 = ["floor", "170425SraVGv", "2734015TIrfEv", "join", "trim", "slice", "pop", "utf8", "length", "8oxkXlg", "1354386EuXHii", "readFileSync", "4047044aeVBzQ", "520598oDBLKm", "log", "4394768JDCrVq", "1336029OwRPrC"];
  __STRING_ARRAY__ = function () {
    return _0x4bbf78;
  };
  return __STRING_ARRAY__();
}
