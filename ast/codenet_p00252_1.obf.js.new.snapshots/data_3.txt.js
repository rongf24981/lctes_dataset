function __DECODE_0__(RJhzhf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 354;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RJhzhf, key);
}
function __STRING_ARRAY__() {
  var _0x2139b7 = ["666UbgUFN", "join", "readFileSync", "1072121luGdFq", "Open", "110", "001", "/dev/stdin", "log", "split", "4239376BluoIi", "5023380xCDAHJ", "1328946jggrIg", "1953188IUiLSL", "7wXMPiN", "Close", "1826NWodlz", "8222598qDBLtl"];
  __STRING_ARRAY__ = function () {
    return _0x2139b7;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1072121luGdFq") / 1 + -parseInt("1826NWodlz") / 2 * (-parseInt("666UbgUFN") / 3) + parseInt("1953188IUiLSL") / 4 + -parseInt("5023380xCDAHJ") / 5 + -parseInt("1328946jggrIg") / 6 * (-parseInt("7wXMPiN") / 7) + parseInt("4239376BluoIi") / 8 + -parseInt("8222598qDBLtl") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 596219);
function Main(input) {
  a = input["split"]("\n")[0]["split"](" ")["join"]("");
  console["log"](a == "110" || a == "001" ? "Open" : "Close");
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
