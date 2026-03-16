(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("40934HHnZWH") / 1 * (parseInt("2pBOdGF") / 2) + parseInt("18RopHrR") / 3 * (-parseInt("499924kiMreP") / 4) + -parseInt("523795mpIxHw") / 5 * (parseInt("30uLUNvY") / 6) + -parseInt("2567222dSTjXg") / 7 + -parseInt("16YiwewD") / 8 * (parseInt("3084570SwnmeA") / 9) + -parseInt("10NyYbGy") / 10 * (-parseInt("4870646DjjTmQ") / 11) + -parseInt("12wIkZuA") / 12 * (-parseInt("30793763yyyHIA") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 444716);
function Main(input) {
  var list = [1, 1, 1, 2, 1, 2, 1, 5, 2, 2, 1, 5, 1, 2, 1, 14, 1, 5, 1, 5, 2, 2, 1, 15, 2, 2, 5, 4, 1, 4, 1, 51];
  input = parseInt(input);
  if (input >= 1 && input <= 32) {
    console["log"](list[input - 1]);
  } else {
    console.log(0);
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(aCCToZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 406;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aCCToZ, key);
}
function __STRING_ARRAY__() {
  var _0x2da0a9 = ["30uLUNvY", "40934HHnZWH", "log", "499924kiMreP", "10NyYbGy", "18RopHrR", "30793763yyyHIA", "utf8", "2567222dSTjXg", "3084570SwnmeA", "523795mpIxHw", "16YiwewD", "4870646DjjTmQ", "2pBOdGF", "12wIkZuA", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x2da0a9;
  };
  return __STRING_ARRAY__();
}
