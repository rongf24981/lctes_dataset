function __DECODE_0__(dvhWLP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 455;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dvhWLP, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3491xEKLcs") / 1 * (parseInt("434DfLPiw") / 2) + -parseInt("1857207lJDRWS") / 3 * (-parseInt("4UWAeAV") / 4) + parseInt("16615mLumAr") / 5 * (parseInt("534eJKqWL") / 6) + -parseInt("531923ujtZlM") / 7 + -parseInt("2603048sCsLRZ") / 8 + parseInt("940743sqMcPz") / 9 * (parseInt("20OlOrXB") / 10) + parseInt("89617qFlLsq") / 11 * (parseInt("624BXxUXt") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 388597);
function f(use, x, n, acc) {
  if (x > n) {
    return acc;
  }
  if (use === 7) {
    acc += 1;
  }
  acc += f(use | 1, x * 10 + 3, n, 0);
  acc += f(use | 2, x * 10 + 5, n, 0);
  acc += f(use | 4, x * 10 + 7, n, 0);
  return acc;
}
function Main(input) {
  var n = parseInt(input);
  console["log"](f(0, 0, n, 0));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x12dac6 = ["534eJKqWL", "3491xEKLcs", "16615mLumAr", "utf8", "89617qFlLsq", "/dev/stdin", "434DfLPiw", "940743sqMcPz", "log", "531923ujtZlM", "2603048sCsLRZ", "20OlOrXB", "624BXxUXt", "1857207lJDRWS", "4UWAeAV"];
  __STRING_ARRAY__ = function () {
    return _0x12dac6;
  };
  return __STRING_ARRAY__();
}
