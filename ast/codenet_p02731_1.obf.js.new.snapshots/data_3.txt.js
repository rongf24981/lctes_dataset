'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("8791RGqooV") / 1 * (-parseInt("78JoFGaX") / 2) + parseInt("4197UCQZzz") / 3 * (-parseInt("292rgTANG") / 4) + -parseInt("1203895zmJIar") / 5 + -parseInt("2547546cEoehA") / 6 + -parseInt("7McVzrl") / 7 * (-parseInt("3959576XSSrzS") / 8) + parseInt("2406807psDjwb") / 9 + -parseInt("696400PvnpCF") / 10 * (-parseInt("110IggjqF") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 348424);
function __STRING_ARRAY__() {
  var _0xfdd891 = ["7McVzrl", "1203895zmJIar", "292rgTANG", "readFileSync", "696400PvnpCF", "split", "78JoFGaX", "110IggjqF", "/dev/stdin", "8791RGqooV", "2547546cEoehA", "4197UCQZzz", "2406807psDjwb", "3959576XSSrzS", "utf8", "log", "toFixed"];
  __STRING_ARRAY__ = function () {
    return _0xfdd891;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(MSiFAc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 133;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MSiFAc, key);
}
function Main(input) {
  input = input["split"]("\n");
  var volume = input / 3 * input / 3 * input / 3;
  console["log"](volume["toFixed"](12));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
