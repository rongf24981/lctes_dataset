function __DECODE_0__(txlRbi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 268;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(txlRbi, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1QrlnJV") / 1 * (parseInt("1404452piXSnz") / 2) + parseInt("2282109RBLeYy") / 3 * (parseInt("4zcmpTM") / 4) + -parseInt("122495gGkWtC") / 5 * (-parseInt("36OQHEHr") / 6) + parseInt("7162330NLCuUA") / 7 + parseInt("8zmsqaQ") / 8 * (parseInt("5480883tZmPTs") / 9) + parseInt("7835590lqqSIw") / 10 * (-parseInt("11pPvbMA") / 11) + -parseInt("60JYAnVU") / 12 * (parseInt("1351571tXRemG") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 534254);
function __STRING_ARRAY__() {
  var _0x1ccd1e = ["readFileSync", "11pPvbMA", "7162330NLCuUA", "8zmsqaQ", "60JYAnVU", "split", "4zcmpTM", "2282109RBLeYy", "1QrlnJV", "trim", "1351571tXRemG", "log", "5480883tZmPTs", "length", "7835590lqqSIw", "122495gGkWtC", "1404452piXSnz", "/dev/stdin", "36OQHEHr"];
  __STRING_ARRAY__ = function () {
    return _0x1ccd1e;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  var arr = input[1].split(" ").map(Number);
  var m = 0;
  var n = 0;
  for (var i = 0; i < arr["length"]; i++) {
    if (arr[i] % 2 == 0) {
      m++;
    } else {
      n++;
    }
  }
  console["log"](n % 2 == 0 && (n / 2 + m) % 2 == 0 ? "YES" : "NO");
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
