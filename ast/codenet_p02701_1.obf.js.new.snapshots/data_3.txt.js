'use strict';

function __STRING_ARRAY__() {
  const _0x444864 = ["split", "utf8", "log", "72185uaERZV", "743852GkuxrL", "size", "7etzaxM", "372OzUfKD", "3894QgFXOC", "1011UACeRu", "1925288ETgvYO", "trim", "readFileSync", "8895912CMHRlR", "930bOVdcZ", "11JrBbar", "1385sEKEoq", "33021IQMTxk"];
  __STRING_ARRAY__ = function () {
    return _0x444864;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ribtth, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 278;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ribtth, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("72185uaERZV") / 1 + parseInt("3894QgFXOC") / 2 * (parseInt("1011UACeRu") / 3) + -parseInt("743852GkuxrL") / 4 + -parseInt("1385sEKEoq") / 5 * (-parseInt("372OzUfKD") / 6) + -parseInt("7etzaxM") / 7 * (-parseInt("1925288ETgvYO") / 8) + -parseInt("33021IQMTxk") / 9 * (-parseInt("930bOVdcZ") / 10) + parseInt("11JrBbar") / 11 * (-parseInt("8895912CMHRlR") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 400087);
const main = arg => {
  const input = arg["trim"]()["split"]("\n");
  const setItems = new Set(input);
  console["log"](setItems["size"] - 1);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
