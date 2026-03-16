function __DECODE_0__(slWwDf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 292;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(slWwDf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("48226yDfoaS") / 1 * (parseInt("38NOUwsp") / 2) + -parseInt("6BEBKcP") / 3 * (parseInt("580036ybPQpN") / 4) + parseInt("32530jxwzMP") / 5 * (parseInt("138qSJniw") / 6) + parseInt("3731000qjVREB") / 7 + -parseInt("8kOkVvX") / 8 * (-parseInt("895689gSTJbi") / 9) + -parseInt("4463390CXZtHQ") / 10 + parseInt("14980086QCTQkr") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 491334);
function Main(arg) {
  var N = arg.split("\n")[0].split(" ")[0] - 0;
  var K = arg["split"]("\n")[0]["split"](" ")[1] - 0;
  var P = arg["split"]("\n")[1].split(" ")["map"](v => v - 0);
  var ans = [];
  for (var i = 0; i < N - K + 1; i++) {
    var tmp = P["slice"](i, i + K);
    tmp["sort"](compareNumbers);
    ans[i] = P.slice(0, i)["concat"](tmp)["concat"](P.slice(i + K))["toString"]();
  }
  var aa = new Set(ans);
  console["log"](aa["size"]);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function compareNumbers(a, b) {
  return a - b;
}
function __STRING_ARRAY__() {
  var _0x59f959 = ["8kOkVvX", "readFileSync", "split", "6BEBKcP", "map", "580036ybPQpN", "sort", "32530jxwzMP", "3731000qjVREB", "48226yDfoaS", "concat", "895689gSTJbi", "size", "138qSJniw", "log", "14980086QCTQkr", "4463390CXZtHQ", "toString", "slice", "38NOUwsp"];
  __STRING_ARRAY__ = function () {
    return _0x59f959;
  };
  return __STRING_ARRAY__();
}
