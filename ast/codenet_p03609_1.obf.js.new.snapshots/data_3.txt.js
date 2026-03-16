function __STRING_ARRAY__() {
  const _0x1081e4 = ["1862193EHNHrl", "readFileSync", "utf8", "/dev/stdin", "2145610hXTNVm", "880muRQpH", "log", "19305mxIEbG", "1428452BJISkT", "415784uegWLs", "split", "14ttJSyx", "22DWarza", "map", "16494wJXNAm", "2BBCvTO", "trim", "226371qDmcld"];
  __STRING_ARRAY__ = function () {
    return _0x1081e4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("226371qDmcld") / 1 + parseInt("2BBCvTO") / 2 * (-parseInt("1862193EHNHrl") / 3) + parseInt("1428452BJISkT") / 4 + -parseInt("880muRQpH") / 5 * (-parseInt("16494wJXNAm") / 6) + parseInt("14ttJSyx") / 7 * (-parseInt("415784uegWLs") / 8) + -parseInt("19305mxIEbG") / 9 + parseInt("2145610hXTNVm") / 10 * (parseInt("22DWarza") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 316866);
function __DECODE_0__(wDqMzv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 405;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wDqMzv, key);
}
function main(input) {
  input = input["trim"]();
  const a = input["split"](" ")["map"](Number);
  if (a[0] <= a[1]) {
    console["log"]("0");
  } else {
    console["log"](a[0] - a[1]);
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
