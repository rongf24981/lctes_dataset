function __DECODE_0__(zfAIBp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 276;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zfAIBp, key);
}
function __STRING_ARRAY__() {
  var _0x4ca21d = ["split", "1142260oQyBxQ", "length", "substr", "min", "utf8", "4188860dSyiqW", "3824760vDdGrP", "412fVgXjO", "9cbPkat", "5173msdHqy", "trim", "33467210sXIyoJ", "readFileSync", "/dev/stdin", "12QYMAbx", "721203pHwRGo", "log", "987705aldwVV"];
  __STRING_ARRAY__ = function () {
    return _0x4ca21d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("5173msdHqy") / 1 * (parseInt("412fVgXjO") / 2) + -parseInt("987705aldwVV") / 3 + -parseInt("1142260oQyBxQ") / 4 + -parseInt("4188860dSyiqW") / 5 + parseInt("12QYMAbx") / 6 * (parseInt("721203pHwRGo") / 7) + parseInt("3824760vDdGrP") / 8 * (-parseInt("9cbPkat") / 9) + parseInt("33467210sXIyoJ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 556474);
function Main(input) {
  input = input["split"]("\n");
  var n = Number(input[0]);
  var ans = 0;
  for (var i = Math["min"](input[1]["length"], input[2]["length"]); i != 0; i--) {
    if (input[1].substr(i * -1) == input[2].substr(0, i) && input[1]["length"] + input[2]["length"] - i >= n) {
      ans = i;
      break;
    }
  }
  console["log"]((input[1]["substr"](0, input[1]["length"] - ans) + input[2])["length"]);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
