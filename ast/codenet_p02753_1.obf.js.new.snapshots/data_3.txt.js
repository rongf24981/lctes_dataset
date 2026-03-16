'use strict;';

function __STRING_ARRAY__() {
  const _0x549b32 = ["/dev/stdin", "120zOXMUq", "Yes", "136420aEhFnk", "6332385flINWp", "split", "4CsErlF", "trim", "7VWpRbV", "838650TnCWAn", "5548384PmrNBa", "1861684fBgUVo", "2427228BajUzq", "log", "2ZIBpuT", "855FjUNhG", "2064966uKNzrI"];
  __STRING_ARRAY__ = function () {
    return _0x549b32;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("2ZIBpuT") / 1 * (parseInt("838650TnCWAn") / 2) + -parseInt("2064966uKNzrI") / 3 + -parseInt("4CsErlF") / 4 * (parseInt("6332385flINWp") / 5) + -parseInt("2427228BajUzq") / 6 + parseInt("7VWpRbV") / 7 * (-parseInt("5548384PmrNBa") / 8) + -parseInt("855FjUNhG") / 9 * (-parseInt("136420aEhFnk") / 10) + -parseInt("1861684fBgUVo") / 11 * (-parseInt("120zOXMUq") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 774195);
main(require("fs").readFileSync("/dev/stdin", "UTF-8")["trim"]().split("\n"));
function __DECODE_0__(PLMTUS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 328;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PLMTUS, key);
}
function main(input) {
  input = input[0]["split"]("");
  let num = 2;
  let isSame = true;
  while (num > 0) {
    if (input[num] !== input[0]) {
      isSame = false;
      break;
    }
    num--;
  }
  console["log"](isSame ? "No" : "Yes");
}
