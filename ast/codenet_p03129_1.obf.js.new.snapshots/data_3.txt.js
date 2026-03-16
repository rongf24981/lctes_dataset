(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("589wxlHJJ") / 1 * (parseInt("102lCdDFW") / 2) + parseInt("3LALTTT") / 3 * (-parseInt("657444uiGonM") / 4) + parseInt("262505bEzGwo") / 5 + parseInt("6XZkZFA") / 6 * (parseInt("551789JPTvUG") / 7) + -parseInt("176yGeCHS") / 8 * (parseInt("30249HZFgRg") / 9) + -parseInt("659020ibbdzT") / 10 + parseInt("3450909koRnJW") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 110803);
function __DECODE_0__(BJCgOu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 395;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BJCgOu, key);
}
function __STRING_ARRAY__() {
  var _0x15cd4b = ["589wxlHJJ", "659020ibbdzT", "102lCdDFW", "/dev/stdin", "3LALTTT", "split", "176yGeCHS", "6XZkZFA", "log", "YES", "readFileSync", "262505bEzGwo", "3450909koRnJW", "30249HZFgRg", "551789JPTvUG", "utf8", "657444uiGonM"];
  __STRING_ARRAY__ = function () {
    return _0x15cd4b;
  };
  return __STRING_ARRAY__();
}
function main(arg) {
  arg = arg["split"]("\n")[0]["split"](" ");
  var N = Number(arg[0]);
  var K = Number(arg[1]);
  var count = 0;
  for (var i = 1; i <= N; i += 2) {
    count++;
  }
  if (K > count) {
    console["log"]("NO");
  } else {
    console["log"]("YES");
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
