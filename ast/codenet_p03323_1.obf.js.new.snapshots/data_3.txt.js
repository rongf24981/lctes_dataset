(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("6141fcCUOa") / 1 * (-parseInt("12ulBzJF") / 2) + -parseInt("284118pPJgcL") / 3 * (-parseInt("24SIrXIS") / 4) + -parseInt("1125410tWNLqv") / 5 + -parseInt("1615452XNpjnO") / 6 + parseInt("7213913fSVytm") / 7 * (parseInt("8ViiXRg") / 8) + -parseInt("9891dyNCFT") / 9 * (-parseInt("7780KGSGKI") / 10) + -parseInt("11HkoflL") / 11 * (parseInt("13661940DCtPYI") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 784152);
function __STRING_ARRAY__() {
  var _0xb3a884 = ["1125410tWNLqv", "9891dyNCFT", "6141fcCUOa", "Yay!", "7780KGSGKI", "readFileSync", "11HkoflL", "24SIrXIS", "8ViiXRg", "1615452XNpjnO", "284118pPJgcL", "log", "13661940DCtPYI", "split", "7213913fSVytm", "12ulBzJF", "utf8", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0xb3a884;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WzeQWU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 410;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WzeQWU, key);
}
function Main(input) {
  var ab = input[0]["split"](" ");
  console["log"](ab[0] <= 8 && ab[1] <= 8 ? "Yay!" : ":(");
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8").split("\n"));
